import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contents}>
        <h1>Nano Billionaire</h1>
        <div className={styles.buttons}>
          <Link href="home">
            <button>Get Ready</button>
          </Link>
        </div>
      </div>
      <video src="matrix.mp4" autoPlay muted loop className={styles.video} />
    </main>
  );
}
