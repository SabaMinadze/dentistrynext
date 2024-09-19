import React from 'react'
import Head1 from './components/Head1/Head1'
import Head2 from './components/Head2/Head2'
import Head3 from './components/Head3/Head3'
import Cards from './components/Cards/Cards'
import Residency from './components/Residency/Residency'
import Achivements from './components/Achivements/Achivements'
import Dentists from './components/Dentists/Dentists'
import Footer from './components/Footer/Footer'

function page() {
  return (
    <>
    <Head1/>
    <Head2/>
    <Head3/>
    <Cards/>
    <Residency/>
    <Achivements/>
    <Dentists/>
    <Footer/>
    </>
  )
}

export default page