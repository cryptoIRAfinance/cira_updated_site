import { features } from "../constants";
import styles, { layout } from "../style";
import ButtonLight from "./ButtonLight";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-secondary`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 bg-primary p-2 rounded-[10px]">
      <h4 className="font-poppins font-semibold text-accent text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Features = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading1}>
        Giving you the tools <br className="sm:block hidden" /> to invest
        confidently.
      </h2>
      <p className={`${styles.paragraphlight} max-w-[470px] mt-5`}>
      The goal of our suite of tools is to empower users to feel confident investing in DeFi. 
      All while rewarding our community with dividends and contests to further incentivize user 
      engagement. The CIRA platform is built on Binance Smart Chain, making it secure and 
      reliable, while its decentralized nature ensures that users have full control over their funds.

      </p>

      <ButtonLight styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Features;
