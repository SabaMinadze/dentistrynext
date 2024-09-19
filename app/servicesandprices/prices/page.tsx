import React from 'react'
import styles from './page.module.css'
import PriceCard from '@/app/components/PriceCard/PriceCard'
import Link from 'next/link'

function page() {
  return (
    <>
    <br/>
    <PriceCard txt="კარიესის მკურნალობა: 130₾ - 180₾"/>
    <br/>
    <PriceCard txt="პულპიტი, პერიოდონტიტი: 150₾ - 350₾"/>
    <br/>
    <PriceCard txt="რემთერაპია: 30₾"/>
 

    </>
  )
}

export default page