import React from 'react'
import PriceCard from '@/app/components/PriceCard/PriceCard'
function page() {
  return (
    <>
        <br/>
        <PriceCard txt="მარტივი ექსტრაქცია: 60₾ - 130₾"/>
        <br/>
        <PriceCard txt="რთული ექსტრაქცია: 140₾ - 250₾"/>
        <br/>
        <PriceCard txt="სიბრძნის კბილის ექსტრაქცია: 180₾ - 450₾"/>
        <br/>
    </>
  )
}

export default page