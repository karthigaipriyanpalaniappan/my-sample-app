import React from 'react'
import WebClass from './webClass'

function Header(){
    return(
      <h1>Welcome to ReactJS</h1>
    )
  }
  
  function Content(){
    return(
      <h2>This is the main content</h2>
    )
  }
  
  function Footer(){
    return(
      <h4>Footer Contents</h4>
    )
  }
  
  function Layout(){
    return(
      <div>
        <Header/>
        <Content/>
        <WebClass AvailableDate={"25-08-2020"}/>
        <Footer/>
      </div>
    )
  }

  export default Layout;