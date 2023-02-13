import React from 'react'
import { Career, Contact, Feedback, Profile } from '../components'
import { fetchGetToKnow } from '../utils/fetchGetToKnow'
import { fetchClients } from '../utils/fetchClients'
import { fetchSocials } from '../utils/fetchSocials'

const About = ({getKnow, clients, socials}) => {
  console.log(getKnow)
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
  const getKnow = await fetchGetToKnow()
  const clients = await fetchClients()
  const socials = await fetchSocials()

  return {
    props: {
      getKnow,
      clients,
      socials
    },
    revalidate: 10
  }
}