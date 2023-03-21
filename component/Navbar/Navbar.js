import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Navbar.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.navcontent}>   
        <Link href={"/"} style={{textDecoration: 'none'}} >
          <div className={styles.nav}>Home</div>
          </Link>
        
          <Link href={"/Blog"} style={{textDecoration: 'none'}}>
            <div className={styles.nav}>Blog</div> </Link>
          <Link href={"/App"} style={{textDecoration: 'none'}}>
            <div className={styles.nav}>App</div> </Link>
            <Link href={"/Team"} style={{textDecoration: 'none'}}>
              <div className={styles.nav}>Team</div></Link>
          
          <button className={styles.start}>Start Learning</button>
        </div>
        <div className={styles.hand}><img src="./image/logos.png" alt="" /></div>
        
      </div>
    
    </>
  );
}
