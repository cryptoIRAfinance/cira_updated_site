import styles from "./style";
import { Services, Audits, Features, Applications, Clients, CTA, Footer, Navbar, Stats, Hero } from "./components";

const App = () => (
  <div className="bg-secondary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}  `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Stats />
      </div>
    </div>
    
    <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

        <Features />
        </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Services />
        <Audits />
        </div>
        </div>
        <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Applications />
        </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA />
        <Clients />
        </div>
        </div>
        <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

        </div>      
        </div>
        <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
