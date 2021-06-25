import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Veronica Stork</h1>
      <h2>Software Engineer & Technical Writer</h2>
      <section>
        <Image src="/meincar.jpg" alt="Photo of me" width={500} height={500} />
        <p>
          This page is a work in progress. If you'd like to chat, head over to
          my <Link href="/contact">contact</Link> page!
        </p>
      </section>
    </div>
  );
}
