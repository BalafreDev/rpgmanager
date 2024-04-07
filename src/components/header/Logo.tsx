import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';

export default function Logo() {
  const mult = .2;
  return <Link href='./' className={styles.logo}>
      <Image src='/logo.svg' alt='RPGManager.' width={590 * mult} height={345 * mult}/>
  </Link>
}