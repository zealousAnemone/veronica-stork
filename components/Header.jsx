import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="../projects"><a>Projects</a></Link>
        <Link href="/writing"><a>Writing</a></Link>
        <Link href="/contact"><a>Contact Me</a></Link>
      </nav>
    </header>
  )
}

export default Header;