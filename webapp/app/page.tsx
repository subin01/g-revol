import Image from 'next/image'
import styles from './page.module.css'
import Auth from '../components/Auth';

export default function Home() {
  return (
    <main className={styles.main}>
        <Auth/>
        <h1>Welcome!</h1>

    </main>
  )
}
