import Header from "../../components/nav";
import Footer from "../../components/footer";
import styles from "./referral.module.css";

export default function Referral() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.title}>Referral</p>
          <div className={styles.wrapperDesc}>
            <p className={styles.description}>
              Share the referral link below to invite your friends and earn 5%
              of your friends earnings!
            </p>
            <div className={styles.wrapperButton}>
              <button type="submit" className={styles.button}>
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
