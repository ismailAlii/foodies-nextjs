'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

function NavLink({ link }) {
  const path = usePathname();
  return (
    <Link
      href={link.href}
      className={`${classes.link} ${
        path === link.href ? classes.active : ''
      }`}
    >
      {link.title}
    </Link>
  );
}

export default NavLink;
