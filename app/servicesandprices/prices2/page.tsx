import React from 'react'
import PriceCard from '@/app/components/PriceCard/PriceCard'

function page() {
  return (
    <>
        <br/>
        <PriceCard txt="კარიესი: 60₾ - 80₾"/>
        <br/>
        <PriceCard txt="პულტიტი, პერიოდიტიტი: 90₾ - 150₾"/>
        <br/>
        <PriceCard txt="სარძევე კბილის მარტივი ექსტრაცია: 30₾ - 60₾"/>
        <br/>
        <PriceCard txt="წმენდა: 80₾ - 120₾"/>
        <br/>
    </>
  )
}

export default page