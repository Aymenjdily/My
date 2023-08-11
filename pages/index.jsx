import { Blog, Contact, Feedback, GetToKnow, Intro, Projects } from '../components'
import { sanityClient } from '../sanity'


export default function Home({projects, getKnow, clients, socials}) {
  return (
    <div className=''>
      <Intro />
      <GetToKnow data={getKnow} />
      <Projects data={projects} />
      {/* <Blog /> */}
      <Feedback  />
      <Contact />
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