import styles from "../style";
import ButtonLight from "./ButtonLight";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-secondary rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading1}>Current List of Available Apps</h2>
      <p className={`${styles.paragraphlight} max-w-[300px] mt-5`}>
      - Liquidity Staking<br></br>
      - Rewards Dashboard<br></br>
      - Telegram Contract Scanner<br></br>
      - Web-based Contract Scanner<br></br>
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-5 sm:mt-0 mt-10 mr-20`}>
      <ButtonLight />
    </div>
  </section>
);

export default CTA;
