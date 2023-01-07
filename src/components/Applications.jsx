import { card } from "../assets";
import styles, { layout } from "../style";
import ButtonLight from "./ButtonLight";

const CardDeal = () => (
  <section id="tools" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading1}>
        Providing a <br/>Full Suite of Tools.
        
      </h2>
      <p className={`${styles.paragraphlight} max-w-[470px] mt-5`}>
      CIRA provides users with a variety of tools to collect and analyze data on the blockchain, giving investors the information they need to make informed decisions.
      With CIRA, users can access real-time market data, track their investments, and stay up to date with the latest industry trends.

      </p>

    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[75%] h-[75%]" />
    </div>
  </section>
);

export default CardDeal;
