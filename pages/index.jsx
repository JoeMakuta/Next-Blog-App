import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>This is the Home page</div>
      <Image
        src="/images/profil_pic.png"
        width={482}
        height={436}
        alt="Hello world!"
      />
      <Link href="/blog">Blog</Link>
    </>
  );
}
