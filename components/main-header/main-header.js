import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import NavLink from './nav-link';

function MainHeader() {
  const links = [
    {
      id: 'meals',
      href: '/meals',
      title: 'Browse Meals',
    },
    {
      id: 'community',
      href: '/community',
      title: 'Community',
    },
  ];

  return (
    <header className={classes.header}>
      <Link
        href='/'
        className={classes.logo}
      >
        <Image
          src={logoImg}
          alt='Logo'
          priority
        />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink link={link} />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
