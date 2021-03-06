import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeaderNav from "../components/Navigation/HeaderNav"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeaderNav></HeaderNav>
        <div></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
      <style jsx>{`
        .resume {
          margin-left: auto;
          margin-right: auto;
          max-width: 1280px;
        }
      `}</style>
    </div>
  );
}
