import React from "react"
import Navbar from "./Navbar"
import Page from "./Page"
import Footer from "./Footer"

const Layout = ({ children }) => {

  return (
    <>
      <Navbar/>
      <Page>
        {children}
      </Page>
      <Footer/>
    </>
  )
}

export default Layout