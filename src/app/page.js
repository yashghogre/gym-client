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

      <div className={styles.featuresDiv} style={{ paddingTop: '5vh' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: 'white', marginBottom: '10vh' }}>Our Features</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '0vh', marginBottom: '5vh' }}>
          <div style={{ width: '55vw', display: 'flex', justifyContent: 'flex-start' }}>
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nO3YUQ7CIBBFUZYncdc2bqR1H9eYmGixWAaspfDOL2WmLwz9qHMiIiJiB5yBGy8T4Gupl+zZKDTWUi8ZEbXUazMIn3PLXkGYs92fpbmtJIjt/rCgoiAoyINOZAUR7st6UfHUxlYK0uyJAFfLZv7E2d5lmD144CAoyNZczycy5G7ekrO9yyX2JTMVfl+3KgmySkEy6ERSaLQyaLR6+/ngwzCVBBmBU24vU+O963UZZGrlJ7YPmhfN7a/riYiIdO0OFDuI7OiFtHkAAAAASUVORK5CYII=" height={50} width={50} alt="icon" className={styles.g1icon} />
            <FeatureCard />
          </div>
          <div style={{ width: '55vw', display: 'flex', justifyContent: 'flex-end', marginTop: '-20vh' }}>
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2ZTYhOURjHH68QTTLSxIaymPE5KGp8hinKwgYbHyUbljbUSNOUlCyUhYXEQqYoGSlMyWdqSkNIyhKh5PszxE/H+yxOZ+553/u+3o/nTvOru7nPOfc8/3POPeee/xWpEsBioBf4rNdlYJFkCWAD8IuBuHvrJQsAjcAH4rwHxol1gC0UZ5NYB+hIIaRDrMMgGpHGIu/Iu0y8Iw63MkVWrZ/AOqlzYgeA5hLqLAQuAZ/0ugi0lVB/BnAM2AXkyk7ee+Bqr0df1WJaAA3AM6/d7WkqxTik8Z3Un/3FVsRCQq5q5amR+V4r/gCzNJfzsUJph/pkUK8riG8GvpaRpOugLv8dYGCvnyt5bhYQMg347T38IzAeGAUc5v+5AkwExgJvg9iCiglRMWeDBo4Dd6gcL4DTwb3eiopQIXN1vtaSpRUXomLcXlAMfwoW4luR+K2qiFAhbQUavg0s070mDU26yX6PxFdVTYiKuRE02Ae0e/FUQrzyk4GjwRJ/DxhWbSHuCPsF6AfWJMRLEuLVawa6gefAcqk35QoxB0NCjMHQiBiDwTAiwAjgRxoh7gQoVgFaSU+nWIX8uSQtD8UqwMGEhJ/qd1gS08Ui5N33kFPA2oiQvWIR4GVCsjvcByDwKCF2X6wBTIj0+kyNb4vEW8QSQHvEHs15S7PvVdk0tEn2vy4EZfYklOkXSwAnEpLcHZjbjyNH4+FiBfIHrZB/Xi8wErhGMg8kA99YWzW2MiLCeVitYgngTMSratD49SD2Bpgn1gBa9P9HyD6Nz/GsIreazRerAEci/tUUb0F4bW46hahX5XzhkG6NTwJmSxYgea9wVusSyRLA6MgO3ld1062Gv6g3SpYAcsDdBCFPJGsAKyKjMkayBtBj/vyRBv0916Om901zZw8xyF80HLj96pw9QwAAAABJRU5ErkJggg==" height={50} width={50} alt="gym-icon" className={styles.g2icon} />
            <FeatureCard />
          </div>
          <div style={{ width: '55vw', display: 'flex', justifyContent: 'flex-start', marginTop: '-5vh' }}>
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nNWaaYhOYRTHrz1rSMhSthLJ2D9YJslIocgoFB8UjVCIGUIKWZI9W2QrlGQKRREpS2MpyocZH+zb2Cl7/DjjTF23uz33fd7e9/1/m7nPc57zu/dZzjnP6ziWBdQFlgAVwHfgAbAOaOLkivgHcR5/3ckZGGA+4drs5IKAWxEgr51cEFBJtOo72S7gZgTEKycXBMyLANnk5IKAOsC5AIjbObNrubbgRUC5niP3gTVAYycbBdQABgEbgEvAG+AX8AQ4BYwHajvZKmCAOv84xg51DejiZIuAtjo9ZJqY6hnQLhsgOgEfSE1XgZqZBjmBHRVlej38DnEu7JlX74HWmQI5H+DUQ2A5MN3wqxxOg4+9gf5hDQoCnJlTPd+BPZirwCLEBOAn8DbsjLgRcDpXQ9SW2Al7kvNnRgII0bKgRoUBg41ytRkWw7m3hjC/gSGGECvCGl73GeSyp832GI7JGiozhCkxgFgfRfzZZ4B81/OawPMIhyRcaQ30AX4YgOSH+FXoghB1jAIp9Rg/7nk+OIZDZZ63+CiivYQ8swwgKkMhtFMzYIcmShuBRp7n62OA+C/ABOJ/CCliiE7ZMHwmBkgvSxDtXFNzpb5Y0VIbxo/EmCY1LIE0AE4Dxfr3FR1jhA3jo2NEvHk2QHwy0C+6TTdzbAjYFwEjO99UK4OpgL5qu9yxJd2Cl3p2Ej/tBOpZGnOm2jxow1grDe2rcnBNdyWIDNMlG/Us4IDaC9ymTYxtVmNSpO6m/2sCHI2AWWxh7HK11TeqYT916KyE3MBWDddnA5OAscBXl3PvgJGu/kW6GP30NJWdDGiq0YKMXzesYXvgE+Y67bHTA7gb0LZnCiAFauNqVMMpJNNwH1v1A4LF4hRAlsSqVuq0MkldRXcMrxgupAByUm1MitO4GPgYE0Lm65gQW919+nxPWnEEXqqNTianZxud6/m6wKcBC4DVwC5gryRWMWz5RbxjE0B0yGg1H9jtA7IrgZ2J1iLeJALG+YA8TmBno+3UwNSBxgHZYXdDO1esRbxJBVz0AZmbMOJtnl5vwx0p8QFZa9C/j/apSK+n8XYcd9gib3Zogoj3UHo99R+8lub9UsnPAxa6YC7oebUK2ALsl+KGZoEtXeHScU/ItMDEgXpAC3VAPulQOfSAyRoQluhZsk1yAg3nz2mR4h7wIqCUFEdVPyZQCL/CXmXopZHe+a2LUadKtwaoP/IlgnQ0DGQt2aGG6k9YBB5cy9JCgWhgzMJbulRVO7MBIhBDyPzUKk06teSSMxu0Vf3pqpmnV7LYO0ctdoGp/jKZ0je5fVKfZOc6pinFay0IBkP87fQHJWeAq2m2oTAAAAAASUVORK5CYII=" height={50} width={50} alt="gym-icon" className={styles.g3icon} />
            <FeatureCard />
          </div>
          <div style={{ width: '55vw', display: 'flex', justifyContent: 'flex-end', marginTop: '-20vh' }}>
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEklEQVR4nO3YT4hNURzA8TsMQlmwUhZmZcdCFhTZWDAz2VDYWCk7ZePfyp/RLMgok6wsKNlZqZcYCxsRKUIpC42/+ZMRpfjocmqe25t599375r150/nW27zfub9zvvf8zrnn3iSJRCKRSCQyA8FW3Ma38BtBf9JJYNDEDCQdNBP16EumO/6VUz1uJdMdjOUQ+VrVvgdHMIRt6E46TQSb8T0Te4E9mNtukZEcIjfTgWJ0kjavsA8L2iXSn0OkF5vk4x0OYlE7ZAYmGdjx0CZdE43wGcewpNUyfenuFNbMWCin3qr4PcVIc53C0mQ6gGfK8QPDWN5ukUsTrIczoYzy8hMXsaJdIltqDOpEiB0tMEO/cBWrWi3SjTeZwVwLsQ3KcQNrWymT3bm+YHZ4xqQn5rLcacmJG6trdL4mxCqaxwNsR9dUyjzJdHog/L8el/G2iUIPg9CsqRA5memskol3YSX243qTSu4pdmNOsyQW1zhvPa5zTbp+NqY7HO6G3aooL7EX88qKpNtllh0N5liGw3heQmg0zPjCIhK7aiQ833Ci/3Ouw4Ww+xXhAw7lfoUId/FTJsn90lM8nn9+uFGVgqU3lKeTrvDAqiaV6mmGRJNK72ORo8nvVn0mkr/03udJtjNz0WArJBosvbNJPdJ1gCupNc61+2OD8dJ7hNc4/XetmiEkZghJJBKJRCKRSCSZKv4Aq2dXP6LQlNMAAAAASUVORK5CYII=" height={50} width={50} alt="gym-icon" className={styles.g4icon} />
            <FeatureCard />
          </div>
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
