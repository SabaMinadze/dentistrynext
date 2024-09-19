import React from 'react'
import PriceCard from '@/app/components/PriceCard/PriceCard'
function page() {
  return (
    <>
        <br/>
        <PriceCard txt="კარიესი: 60₾ - 80₾"/>
        <br/>
        <PriceCard txt="პულპიტი, პერიოდონტიტი: 90₾ - 150₾"/>
        <br/>
        <PriceCard txt="სარძევე კბილის მარტივი ექსტრაქცია: 30₾ - 60₾"/>
        <br/>
        <PriceCard txt="წმენდა: 80₾ - 120₾"/>
        <br/>
        <PriceCard txt="რთული ექსტრაქცია: 50₾ - 80₾"/>
        <br/>
        <PriceCard txt="სიბრძნის კბილის ექსტრაქცია: 150₾ - 350₾"/>
        <br/>
    </>
  )
}

export default page