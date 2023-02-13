import React from 'react'
import { Career, Contact, Feedback, Profile } from '../components'
import { sanityClient } from '../sanity'

const About = ({getKnow, clients, socials}) => {

  return (
    <div>
      <Profile data={getKnow} />
      <Career data={getKnow} />
      <Feedback data={clients} />
      <Contact data={socials} />
    </div>
  )
}

export default About

export const getStaticProps = async () => {
  const getKnowQuery = `*[_type == "getKnow"]`
  const getKnow = await sanityClient.fetch(getKnowQuery)

  const clientsQuery = `*[_type == "clients"]` 
  const clients = await sanityClient.fetch(clientsQuery)

  const socialsQuery = `*[_type == "socials"]`
  const socials = await sanityClient.fetch(socialsQuery)

  return {
    props: {
      getKnow,
      clients,
      socials
    },
    revalidate: 10
  }
}