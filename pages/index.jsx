import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import styles from "../components/home.module.css";

export default function Home() {
  return (
    <div >
      <Head>
        <link
          rel="shortcut icon"
          href="/images/profil_pic.png"
          type="image/x-icon"
        />
        <title>Blog App by Joe Makuta</title>
      </Head>

      <h1>This is the Home page</h1>
      <div className={styles.image_container}>
        <Image
          src={"/images/profil_pic.png"}
          width={241}
          height={218}
          alt="Josh pic"
          className={styles.image}
        />
      </div>
      <Link href="/blog">Blog</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/news">News</Link>
    </div>
  );
}
