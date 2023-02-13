import Head from 'next/head'
import Image from 'next/image'
import { Contact, Feedback, GetToKnow, Intro, Projects } from '../components'
import { fetchClients } from '../utils/fetchClients'
import { fetchGetToKnow } from '../utils/fetchGetToKnow'
import { fetchProjects } from '../utils/fetchProjects'
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
  const projects = await fetchProjects()  
  const getKnow = await fetchGetToKnow()
  const clients = await fetchClients()
  const socials = await fetchSocials()

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