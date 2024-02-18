import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <h3 className={styles.mainText}>Your One Stop Solution to <span className={styles.span}>Fitness<Image src={'/underline.jpg'} height={500} width={500} alt="ul" className={styles.ulImg} /></span></h3>
        </div>
        <div>
          <p>Transform Your Body, Ignite Your Strength: Unleash Your Potential at Body Temple!</p>
        </div>
        <div>
          <button>hello</button>
          <button>hello</button>
        </div>
      </div>
      <div>
        <Image src={'/girlInGym.png'} height={500} width={500} alt="girl" className={styles.image} />
      </div>
    </main>
  );
}
