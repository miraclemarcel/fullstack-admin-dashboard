"use client";

import Link from 'next/link';
import styles from './menuLink.module.css';
import { usePathname } from 'next/navigation';
import React from 'react';

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactElement;
}

interface MenuLinkProps {
  item: MenuItem;
}

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
      <span className={styles.icon}>{item.icon}</span>
      <span className={styles.title}>{item.title}</span>
    </Link>
  );
};

export default MenuLink;
