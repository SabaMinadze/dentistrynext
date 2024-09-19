import React from 'react'
import Head3 from './components/Head3/Head3'
import Cards from './components/Cards/Cards'
import Residency from './components/Residency/Residency'
import Achivements from './components/Achivements/Achivements'
import Dentists from './components/Dentists/Dentists'

function page() {
  return (
    <>
    <Head3/>
    <Cards/>
    <Residency/>
    <Achivements/>
    <Dentists/>
    </>
  )
}

export default page