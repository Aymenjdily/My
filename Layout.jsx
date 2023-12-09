import React from 'react'
import { Footer, Header } from './components'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className=''>
        <Head>
          <title>
            Adam
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