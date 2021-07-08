import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }

  return (
    <header>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About Me</a></Link>
        <Link href="/writing"><a>Writing</a></Link>
        <Link href="/contact"><a>Contact Me</a></Link>
      </nav>
      <span className="hamberder">
        <img src="/hamberder.png" onClick={toggleDropdown} />
      </span>
      {dropdown && <div id="dropdown">
 <Link href="/" ><a onClick={toggleDropdown}>Home</a></Link>
 <Link href="/about" ><a onClick={toggleDropdown}>About Me</a></Link>
 <Link href="/writing" ><a onClick={toggleDropdown}>Writing</a></Link>
 <Link href="/contact" ><a onClick={toggleDropdown}>Contact Me</a></Link>
</div>} 
    </header>
  )
}

export default Header;