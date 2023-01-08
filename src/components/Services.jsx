import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Services = () => (
  <section id="services" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[30%] h-[30%] relative z-[5]" />


    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        CIRA Isn't <br className="sm:block hidden" /> Just For Investors
      </h2>
      <p className={`${styles.paragraphdark} max-w-[470px] mt-5`}>
        CIRA is a platform for everyone. Whether you are a investor, or 
        a project owner, CIRA is the place to be. We have a wide range of
        services to offer, and we are always looking to expand our services
        to better serve our users. <br></br><br></br>
        <div className="bold text-accent">
          We offer a wide range of services, including:
        </div>
        <ul className="list-disc ml-5">
          <li>Smart Contract Auditing</li>
          <li>Developement Services</li>
          <li>Project management</li>
          <li>Consulting</li>
          <li>Project support</li>
        </ul>
      </p>


    </div>
  </section>
);

export default Services;
