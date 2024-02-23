import Image from "next/image";
import styles from "./page.module.css";
import TrainerCard from "./components/TrainerCard";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  return (
    <main className={styles.mmDiv}>
      <div className={`${styles.mainDiv} ${styles.waveDiv} ${styles.wave}`}>
        <div className={styles.main}>
          <div className={styles.leftDiv}>
            <div>
              <h3 className={styles.mainText}>Your One Stop Solution to <span className={styles.span}>Fitness<Image src={'/underline.jpg'} height={500} width={500} alt="ul" className={styles.ulImg} /></span></h3>
            </div>
            <div>
              <p className={styles.tagline}>Embark on a Journey to Fitness Excellence: Discover Your Strength, Sculpt Your Body, and Elevate Your Wellness at Body Temple – Where Every Workout Transforms Lives!</p>
            </div>
            <div className={styles.btnDiv}>
              <button className={styles.btn1}>Get Free Trial</button>
              <button className={styles.btn2}>Invite Friends</button>
            </div>
          </div>
          <div className={styles.imgDiv}>
            <Image src={'/gymImg.png'} height={500} width={500} alt="girl" className={styles.image} />
          </div>
        </div>

      </div>

      <div className={styles.featuresDiv} style={{ paddingTop: '5vh'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style={{color: 'white'}}>Our Features</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '5vh'}}>
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>

      <div className={styles.trainerDiv}>
        <div className={styles.tTitleDiv}>
          <h1 className={styles.tTitle}>Our Trainers</h1>
        </div>
        <div className={styles.tCardDiv}>
          <TrainerCard img='/trainer1.jpg' name="Ben Dover" side='left' />
          <TrainerCard img='/trainer2.jpg' name="Ice Valo Come" side='right' />
        </div>
      </div>


    </main>
  );
}
