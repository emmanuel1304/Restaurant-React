import React from 'react'
import Navbar from '../../components/home-page-components/navbar/Navbar'
import Header from '../../components/home-page-components/header/Header'
import About from '../../components/home-page-components/about/About'
import Menu from '../../components/home-page-components/menu/Menu'
import Chef from '../../components/home-page-components/chef/Chef'



const Home = () => {
  return (
    <div> 
        <Navbar />
        <Header />
        <About />
        <Menu />
        <Chef />
    </div>
  )
}

export default Home