import Head from 'next/head'
import Image from 'next/image'
import { Contact, Feedback, GetToKnow, Intro, Projects } from '../components'
import { sanityClient } from '../sanity'
import { fetchClients } from '../utils/fetchClients'
import { fetchGetToKnow } from '../utils/fetchGetToKnow'
import { fetchSocials } from '../utils/fetchSocials'

export default function Home({projects, getKnow, clients, socials}) {
  console.log(projects)
  return (
    <div className=''>
      <Intro />
      <Projects data={projects} />
      <GetToKnow data={getKnow} />
      <Feedback data={clients} />
      <Contact data={socials} />
    </div>
  )
}

export const getStaticProps = async () => {
  const projectQuery = `*[_type == "projects"]`
  const projects = await sanityClient.fetch(projectQuery) 

  const getKnowQuery = `*[_type == "getKnow"]`
  const getKnow = await sanityClient.fetch(getKnowQuery)

  const clientsQuery = `*[_type == "clients"]` 
  const clients = await sanityClient.fetch(clientsQuery)

  const socialsQuery = `*[_type == "socials"]`
  const socials = await sanityClient.fetch(socialsQuery)

  return {
    props: {
      projects,
      getKnow,
      clients,
      socials
    },
    revalidate: 10
  }
}