import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-accent rounded-[10px] mb-2">
          
          <p className={`${styles.paragraphlight} ml-2`}>
            <span className="text-dimWhite">7%</span> BUSD Dividends{" "}
            <span className="text-dimWhite">Paid</span> Regularly
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-dimWhite ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-header">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-dimWhite ss:leading-[100.8px] leading-[75px] w-full">
          DeFi Standard.
        </h1>
        <p className={`${styles.paragraphdark} max-w-[470px] mt-5`}>
        Our suite of tools empower users to make informed decisions and maximize their returns, while its rewards and contests further incentivize user engagement.
        The CIRA platform is built on Binance Smart Chain, making it secure and reliable, while its decentralized nature ensures that users have full control over their funds.

          
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[75%] h-[80%] relative z-[5]" />



      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
