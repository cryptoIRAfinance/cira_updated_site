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
      CIRA, the platform for all, offers a diverse range of services 
      catering to a wide spectrum of stakeholders including investors 
      and project owners. We understand the importance of providing a 
      comprehensive and inclusive offering, which is why we are constantly 
      striving to expand and enhance our services to better serve our valued 
      users. Whether you are seeking investment opportunities or looking to 
      secure funding for your project, CIRA is the premier destination for all 
      your needs.   </p>
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
