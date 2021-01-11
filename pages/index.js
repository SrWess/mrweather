import Head from "next/head";
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
          <h1 className={styles.title}>
            MR Weather
          </h1>
        </div>
      </main>
    </>
  );
}
