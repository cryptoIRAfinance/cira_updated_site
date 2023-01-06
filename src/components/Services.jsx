import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Services = () => (
  <section id="services" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[60%] h-[60%] relative z-[5]" />


    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Featuring Simplified<br className="sm:block hidden" /> onboarding and
        registration.
      </h2>
      <p className={`${styles.paragraphdark} max-w-[470px] mt-5`}>
        We aim to eliminate the barrier to entry in DeFi to make it accessible
        to everyone. We are building a platform that allows users to easily
        onboard and start trading in a matter of minutes.
      </p>


    </div>
  </section>
);

export default Services;
