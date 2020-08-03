import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainContent from "../components/MainContent";
import BoxL from "../components/Grid/BoxL";
import BoxM from "../components/Grid/BoxM";
import BoxS from "../components/Grid/BoxS";
import Title from "../components/Grid/Title";
import Button from "../components/Button/Button";

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
        <div className="ending">
          Thanks for stopping by! I look forward to connecting. 🥰<br></br>
          <div className="subtitle">Feel free to check out my resume.</div>
        </div>
        <Button title="Resume"></Button>
      </main>

      <footer className={styles.footer}>
        <div className="footer">Designed and Coded by Cindy Duong</div>
      </footer>
      <style jsx>{`
        .resume {
          margin-left: auto;
          margin-right: auto;
          max-width: 1280px;
        }
        .subtitle {
          font-size: 12px;
        }
        .footer{
          font-size: 12px;
        }
        .ending {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
