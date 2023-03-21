import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Hero.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <>
      <div className={styles.glass1}>
        <div className={styles.glass1content}>Why to limit yourself ?</div>
        <div className={styles.glass1content1}>
          We are here with an online education platform to educate
          differently-abled people (deaf and dumb) through sign language while
          also serving as a bridge between physically impaired and able-bodied
          people.
        </div>
        <div className={styles.glass1content2}>
          Folks! Say it by your hands and we will hear it from heart. &#x2764;
        </div>
      </div>
      <div className={styles.icon}><div className={styles.icon}><Image width={441.75} height={490.5} src="./image/design.svg" alt="" /></div>
        
      </div>
    </>
  );
}
