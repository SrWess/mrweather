import Head from 'next/head'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MR Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.home}>

      </main>
    </div>
  )
}
