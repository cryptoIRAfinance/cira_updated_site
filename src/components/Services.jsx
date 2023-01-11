import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Services = () => (
  <section id="services" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[75%] h-[75%] relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        CIRA Isn't <br/> Just For Investors
      </h2>
      <p className={`${styles.paragraphdark} max-w-[470px] mt-2`}>
        CIRA is a platform for everyone. Whether you are a investor, or 
        a project owner, CIRA is the place to be. We have a wide range of
        services to offer, and we are always looking to expand our services
        to better serve our users.     </p>
        <div className={styles.subHead2}>
          We offer a wide range of services, including:
        </div>
        <ul className={`${styles.paragraphdark} list-disc`}>
          <p className={`${styles.paragraphdark}  ml-5`}>
          <li>Smart Contract Auditing</li>
          <li>Developement Services</li>
          <li>Project management</li>
          <li>Consulting</li>
          <li>Project support</li>
          </p>
        </ul>



    </div>
  </section>
);

export default Services;
