import Header from "../../components/nav";
import Footer from "../../components/footer";
import styles from "./partnership.module.css";

const partners = [
  {
    id: 1,
    title: "Bee Coin",
    href: "#",
    description: "Join Bee Coin telegram chat and play BeeApp on Telegram",
    category: { title: "Partner 1", href: "#" },
    author: {
      name: "BeeCoin App",
      url: "https://www.beecoin.com",
      href: "#",
      imageUrl: "/partner/beecoin.png",
    },
  },
  {
    id: 2,
    title: "Bulls on Ton",
    href: "#",
    description:
      "Join ulls on Ton telegram chat and play BullsontonApp on Telegram",
    category: { title: "Partner 2", href: "#" },
    author: {
      name: "BullsonTon App",
      url: "https://ton.app",
      href: "#",
      imageUrl: "/partner/bullsonton.jpg",
    },
  },
  {
    id: 3,
    title: "Hybrid",
    href: "#",
    description: "Join Hybrid telegram chat and play HybridApp on Telegram",
    category: { title: "Partner 3", href: "#" },
    author: {
      name: "Hybrid App",
      url: "https://www.hybridcoins.app",
      href: "#",
      imageUrl: "/partner/hybrid.jpg",
    },
  },
  {
    id: 4,
    title: "KaBoom",
    href: "#",
    description: "Join KaBoom telegram chat and play KaBoom App on Telegram",
    category: { title: "Partner 4", href: "#" },
    author: {
      name: "KaBoom App",
      url: "https://kaboomapp.com",
      href: "#",
      imageUrl: "/partner/kaboom.png",
    },
  },
  {
    id: 5,
    title: "Ellipse",
    href: "#",
    description: "Join Ellipse telegram chat and play Ellipse App on Telegram",
    category: { title: "Partner 5", href: "#" },
    author: {
      name: "Ellipse App",
      url: "https://ellipsis.finance",
      href: "#",
      imageUrl: "/partner/ellipse.png",
    },
  },
  {
    id: 6,
    title: "Ton Farm",
    href: "#",
    description:
      "Join Ton Farm telegram chat and play Ton Farm App on Telegram",
    category: { title: "Partner 6", href: "#" },
    author: {
      name: "TonFarm App",
      url: "https://ton.org",
      href: "#",
      imageUrl: "/partner/tonfarm.png",
    },
  },
];

export default function Partnership() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.title}>Partnership</p>

          <div className={styles.contents}>
            <div className={styles.wrapperContents}>
              {/* <div> */}
              {partners.map((partner) => (
                <article key={partner.id} className={styles.article}>
                  {/* Category */}
                  <div className={styles.articleCategory}>
                    <a href={partner.category.href}>{partner.category.title}</a>
                  </div>

                  {/* Title - Description */}
                  <div className={`group ${styles.articleDesc} `}>
                    <h3>
                      <a href={partner.href}>
                        <span />
                        {partner.title}
                      </a>
                    </h3>
                    <p>{partner.description}</p>
                  </div>

                  {/* Author */}
                  <div className={styles.articleAuthor}>
                    <img alt="" src={partner.author.imageUrl} />
                    <div className={styles.articleAuthorDesc}>
                      <p>
                        <a href={partner.author.href}>
                          <span />
                          {partner.author.name}
                        </a>
                      </p>
                      <p>{partner.author.url}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
