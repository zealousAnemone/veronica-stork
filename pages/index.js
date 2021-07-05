import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Veronica Stork</title>
      </Head>
      <h1>Veronica Stork</h1>
      <h2>Software Engineer & Technical Writer</h2>
      <div className="card" id="index">
        <Image
          src="/meincar.jpg"
          alt="Photo of me"
          width={300}
          height={300}
          className="photo"
        />
        <p id="intro">
          I am a technical writer with hands-on experience in software
          engineering. I'm passionate about creating clear documentation and
          tutorials that make complicated concepts easy to understand. If you'd
          like to chat, head over to my <Link href="/contact">contact</Link>{' '}
          page!
        </p>
      </div>
    </div>
  );
}
