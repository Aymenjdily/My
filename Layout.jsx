import React from 'react'
import { Footer, Header } from './components'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
        <Head>
          <title>
            AymenJdily
          </title>
        </Head>
        <Header />
        {
          children
        }
        <Footer />
    </div>
  )
}

export default Layout