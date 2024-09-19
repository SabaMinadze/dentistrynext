import React from 'react'
import s from "./Achivements.module.css"
import Image from 'next/image'

function Achivements() {
  return (
    <>
      <div className={s.bigBox}>
        <h2 className={s.h2}>ჩვენი მიღწევები</h2>
        <div>
          <Image src="/assets/kbili1.jpg" alt="error" height={300} width={300} className={s.img}/>
          <Image src="/assets/kbili2.jpg" alt="error" height={300} width={300} />
          <Image src="/assets/kbili3.jpg" alt="error" height={300} width={300} />
          <Image src="/assets/kbili4.jpg" alt="error" height={300} width={300} />
        </div>
      </div>
    </>
  )
}

export default Achivements