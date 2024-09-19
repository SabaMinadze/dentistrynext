import Image from 'next/image'; // Import Image from Next.js for optimized images
import styles from './Achivements.module.css'; // Import CSS module
import kbili1 from "../public/assets/kbili1.jpg"
import kbili2 from "../public/assets/kbili2.jpg"
import kbili3 from "../public/assets/kbili3.jpg"
import kbili4 from "../public/assets/kbili4.jpg"

const Achievements = () => {
  return (
    <div>
      <center>
        <div className={styles.bigBox}>
          <h2 className={styles.h2}>ჩვენი მიღწევები</h2>
          <Image src={kbili1} alt="Achievement 1" height={300} width={300} className={styles.image} />
          <Image src={kbili2} alt="Achievement 2" height={300} width={300} className={styles.image} />
          <Image src={kbili3} alt="Achievement 3" height={300} width={300} className={styles.image} />
          <Image src={kbili4} alt="Achievement 4" height={300} width={300} className={styles.image} />
        </div>
      </center>
    </div>
  );
};

export default Achievements;
