import Link from 'next/link'
import React from 'react'
import s from "./notfound.module.css"
import logo from './public/assets/logo2.png'
import Image from 'next/image'

function notFound() {
  return (
    <>
    <center><div className={s.notFoundBox}>
        <h1 className={s.notFoundCode}>404</h1>
        <h2 className={s.notFound}>გვერდი არ არსებობს</h2>
        <p className={s.notFoundText}>თქვენს მიერ მოთხოვნილ მისამართზე არაფერი მოიძებნა.</p>
        <Link href="/"><button title="მთავარი გვერდი"></button ></Link>
        
    </div></center>
    <center><Image src={logo} alt='error' height={200}  className={s.img2}/></center>
    </>
  )
}

export default notFound
