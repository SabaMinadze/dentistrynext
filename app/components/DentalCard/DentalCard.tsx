import React from 'react'
import PropTypes from 'prop-types'
import styles from './DentalCard.module.css'
import Image from 'next/image'

const DentalCard = ({ nivti }) => {
  return (
    <div className={styles.box}>
      <div className={styles.dentalCard}>
        <Image
          src="/assets/noimage.png"
          alt="errors"
          height={200}
          width={280}
          className={styles.img}
        />
        <h1 className={styles.h1}>{nivti.name}</h1>
        <h2 className={styles.h2}>{nivti.profession}</h2>
      </div>
    </div>
  )
}

DentalCard.propTypes = {
  nivti: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
  }).isRequired
}

export default DentalCard
