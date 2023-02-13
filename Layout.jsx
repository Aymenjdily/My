import React from 'react'
import { Footer, Header } from './components'

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        {
          children
        }
        <Footer />
    </div>
  )
}

export default Layout