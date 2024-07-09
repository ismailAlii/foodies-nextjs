import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import style from './main-header.module.css';
import Image from 'next/image';

function MainHeader() {
  return (
    <header className={style.header}>
      <Link
        href='/'
        className={style.logo}
      >
        <Image
          src={logoImg}
          alt='Logo'
          priority
        />
        NextLevel Food
      </Link>
      <nav className={style.nav}>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
