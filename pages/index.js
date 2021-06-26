import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Veronica Stork</h1>
      <h2>Software Engineer & Technical Writer</h2>
      <div className="card">
        <Image
          src="/meincar.jpg"
          alt="Photo of me"
          width={300}
          height={300}
          className="photo"
        />
        <p id="intro">
          This page is a work in progress. If you'd like to chat, head over to
          my <Link href="/contact">contact</Link> page!
        </p>
      </div>
    </div>
  );
}
