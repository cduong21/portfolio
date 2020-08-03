import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainContent from "../components/MainContent";
import BoxL from "../components/Grid/BoxL";
import BoxM from "../components/Grid/BoxM";
import BoxS from "../components/Grid/BoxS";
import Title from "../components/Grid/Title";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cindy Duong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainContent />
        <div className="resume">
          <Title title="Education 📚"> </Title>
          <BoxL></BoxL>
          <Title title="Experiences ✨"></Title>
          <BoxM></BoxM>
          <Title title="Skills 🖋️"></Title>
          <BoxS></BoxS>
        </div>
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
