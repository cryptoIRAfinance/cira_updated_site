import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        {/*<div className="flex flex-row items-center py-[6px] px-4 bg-accent rounded-[10px] mb-2">
         <p className={`${styles.paragraphlight} ml-2`}>
            <span className="text-button">7%</span> BUSD Dividends{" "}
            <span className="text-button">Paid</span> Regularly
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-dimWhite ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-headerDark">Generation</span>{" "}
          </h1>
          {/*<div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-dimWhite ss:leading-[100.8px] leading-[75px] w-full">
          DeFi Standard.
        </h1>
        <p className={`${styles.paragraphdark} max-w-[470px] mt-5`}>
        CIRA represents the future of decentralized finance (DeFi) with 
        its cutting-edge suite of tools designed to empower users to make 
        informed decisions and optimize their returns. Our platform not only 
        offers a wide range of services, but also incentivizes user engagement
         through rewards and contests. Built on the secure and reliable 
         Binance Smart Chain, our decentralized platform provides users with 
         complete control over their funds, ensuring the safety and security 
         of their investments. With CIRA, you can trust that you are utilizing 
         the latest and most advanced DeFi standard.         
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[65%] h-[100%] relative z-[5]" />



      </div>


    </section>
  );
};

export default Hero;
