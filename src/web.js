import React from 'react'
import Names from './NameList/Names'

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
        <Names/>
        <Footer/>
      </div>
    )
  }

  export default Layout;