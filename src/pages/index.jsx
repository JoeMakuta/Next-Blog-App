import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/images/profil_pic.png"
          type="image/x-icon"
        />
        <title>Welcome to next!</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      
      <h1>This is the Home page</h1>
      <Image
        src="/images/profil_pic.png"
        width={241}
        height={218}
        alt="Hello world!"
      />
      <Link href="/blog">Blog</Link>
    </>
  );
}
