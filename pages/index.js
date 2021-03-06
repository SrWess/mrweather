import Head from "next/head";
import ButtonSearch from '../components/ButtonSearch'

import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>MR Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.home}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" />
          <p className={styles.title}>
            MR Weather
          </p>
        </div>

        <ButtonSearch/>
        <button className={styles.btnLocation}>
          <span>Obter Localização</span>
        </button>
      </main>
    </>
  );
}
