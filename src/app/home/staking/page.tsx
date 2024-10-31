import Header from "../../components/nav";
import Footer from "../../components/footer";
import { HiArrowPath } from "react-icons/hi2";
import styles from "./staking.module.css";

export default function Staking() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.title}>Staking</p>
          <div className={styles.wrapperCard}>
            {/* 1st card */}
            <div className={styles.card14}>
              <div className={styles.cardDivTitle}>
                <p className={styles.cardTitle}>Staking</p>
                <div className={styles.cardDivTitle1}>
                  <div className="sm:col-span-3">
                    <label htmlFor="usdt" className={styles.cardLabel}>
                      USDT
                    </label>
                    <div className="mt-2">
                      <input
                        id="usdt"
                        name="usdt"
                        type="text"
                        placeholder="45.2398"
                        className={styles.input1}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="nano" className={styles.cardLabel}>
                      NANO
                    </label>
                    <div className="mt-2">
                      <input
                        id="nano"
                        name="nano"
                        type="text"
                        placeholder="1685.1"
                        className={styles.input1}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className={styles.button}>
                  Buy to burn
                </button>
              </div>
            </div>

            {/* 2nd card */}
            <div className={styles.card2}>
              <div className={styles.cardDivTitle}>
                <p className={styles.cardTitle}>Nano Mining</p>
                <div className={`mt-10 ${styles.containerCardInput}`}>
                  <input
                    id="nano2"
                    name="nano2"
                    type="text"
                    required
                    placeholder="15385.5"
                    className={styles.input1}
                  />
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">NANO</p>
                </div>
                <div className={`mt-6 ${styles.containerCardInput}`}>
                  <input
                    id="nanoroi"
                    name="nanoroi"
                    type="text"
                    required
                    placeholder="15385.5"
                    className={styles.input1}
                  />
                  <p className={styles.cardLabel2}>NANO ROI 5%/day</p>
                </div>

                <button type="submit" className={styles.button}>
                  Harvest
                </button>
              </div>
            </div>

            {/* 3rd card */}
            <div className={styles.card3}>
              <div className={styles.cardDivTitle}>
                <p className={styles.cardTitle}>Nano Balance</p>
                <div className={`mt-10 ${styles.containerCardInput}`}>
                  <input
                    id="nanoroi"
                    name="nanoroi"
                    type="text"
                    required
                    placeholder="15385.5"
                    className={styles.input1}
                  />
                </div>
                <div className={styles.containerButton}>
                  <a href="#" className={styles.containerButton1}>
                    Mining
                  </a>
                  <a href="#" className={styles.containerButton2}>
                    Swap <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 4th card */}
            <div className={styles.card14}>
              <div className={styles.cardDivTitle}>
                <p className={styles.cardTitle}>Withdraw</p>
                <div className={`mt-10 ${styles.containerCardInput}`}>
                  <input
                    id="nano3"
                    name="nano3"
                    type="text"
                    required
                    placeholder="15385.5"
                    className={styles.input1}
                  />
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">NANO</p>
                </div>
                <HiArrowPath className={styles.icon} />
                <div className={styles.divInput4}>
                  <input
                    id="usdt3"
                    name="usdt3"
                    type="text"
                    required
                    placeholder="15385.5"
                    className={styles.input1}
                  />
                  <p className={styles.cardLabel2}>USDT</p>
                </div>

                <button type="submit" className={styles.button}>
                  Swap
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
