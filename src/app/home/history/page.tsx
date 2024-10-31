import Header from "../../components/nav";
import Footer from "../../components/footer";
import styles from "./history.module.css";

const TABLE_HEAD = [
  "No",
  "Type",
  "Address Wallet",
  "Date",
  "NANO",
  "USDT",
  "Status",
];

const TABLE_ROWS = [
  {
    no: "1",
    name: "Mining",
    wallet: "0xbad9fed0ae0DD37c30e68D3186B9b70C9acA3501",
    date: "23/04/18",
    nano: "123",
    usdt: "456",
    status: "Succeed",
  },
  {
    no: "2",
    name: "Swap",
    wallet: "0xbad9fed0ae0DD37c30e68D3186B9b70C9acA3501",
    date: "23/04/18",
    nano: "123",
    usdt: "456",
    status: "Succeed",
  },
  {
    no: "3",
    name: "Swap",
    wallet: "0xbad9fed0ae0DD37c30e68D3186B9b70C9acA3501",
    date: "19/09/17",
    nano: "123",
    usdt: "456",
    status: "Succeed",
  },
  {
    no: "4",
    name: "Mining",
    wallet: "0xbad9fed0ae0DD37c30e68D3186B9b70C9acA3501",
    date: "24/12/08",
    nano: "123",
    usdt: "456",
    status: "Succeed",
  },
  {
    no: "5",
    name: "Swap",
    wallet: "0xbad9fed0ae0DD37c30e68D3186B9b70C9acA3501",
    date: "04/10/21",
    nano: "123",
    usdt: "456",
    status: "Succeed",
  },
];

export default function History() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.title}>History</p>

          <div className={styles.containerTable}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className={`border-b ${styles.tableHead}`}>
                      <p color="blue-gray">{head}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  ({ no, name, wallet, date, nano, usdt, status }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={no}>
                        <td className={classes}>
                          <p color="blue-gray">{no}</p>
                        </td>
                        <td className={classes}>
                          <p color="blue-gray">{name}</p>
                        </td>
                        <td className={classes}>
                          <p color="blue-gray">{wallet}</p>
                        </td>
                        <td className={classes}>
                          <p color="blue-gray">{date}</p>
                        </td>
                        <td className={classes}>
                          <p color="blue-gray">{nano}</p>
                        </td>
                        <td className={classes}>
                          <p color="blue-gray">{usdt}</p>
                        </td>
                        <td className={classes}>
                          <p color="blue-gray">{status}</p>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
