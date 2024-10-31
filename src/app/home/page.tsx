import styles from "./home.module.css";
import Header from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.contents}>
              <h1>Nano Billionaires</h1>
              <p style={{ marginTop: "32px" }}>
                Nano-B is a token with a Defi (Decentralized Finance) project.
              </p>
              <p>
                We come with the latest breakthrough that presents a clean,
                strong, fast and profitable market for everyone.
              </p>
              <p>
                For the initial stage we offer an ROI of 5%/day to provide more
                profits for everyone With a system that is very simple and can
                be used by everyone, this is our advantage in carrying out
                greater innovation in the future.
              </p>
              <div>
                <a href="home/staking" className={styles.abutton1}>
                  Staking
                </a>
                <a href="#" className={styles.abutton2}>
                  Mining <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
