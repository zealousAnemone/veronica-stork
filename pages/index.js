import Header from '../components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Veronica Stork</h1>
      <h2>Software Engineer & Technical Writer</h2>
      <section>
        <Image src="/meincar.jpg" alt="Photo of me" width={500} height={500} />
        <p>This page is a work in progress. Check back soon.</p>
      </section>
    </div>
  );
}
