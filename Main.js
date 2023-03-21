import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Main.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  return (
    <>
      <div className={styles.signin}>Sign in to Hands we Speak</div>
      <div className={styles.container}>
        <div className={styles.continue}>
          <div className={styles.contgoogle}><img src="./image/google.svg" alt="" /> </div>
          <div className={styles.cont}>Continue with google</div>
        </div>
      </div>
    </>
  );
}
