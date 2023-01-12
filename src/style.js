const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  heading1: "font-poppins font-semibold xs:text-[48px] text-[40px] text-dimWhite text-button xs:leading-[76.8px] leading-[66.8px] w-full ml-2",
  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-accent text-button xs:leading-[76.8px] leading-[66.8px] w-full ml-2",
  modalHeader: "font-poppins font-semibold xs:text-[24px] text-[24px] text-accent text-button xs:leading-[76.8px] leading-[66.8px] w-full ml-2",
  subHead1: "font-poppins font-semibold xs:text-[30px] text-[30px] text-dimWhite text-button sx:leading-[30px] leading-[30px] w-full ml-2 mt-5 mb-5",
  subHead2: "font-poppins font-semibold xs:text-[30px] text-[30px] text-accent text-button xs:leading-[30px] leading-[30px] w-full ml-2 mt-5 mb-5",
  heading2shadow: "font-poppins font-semibold xs:text-[48px] text-[40px] text-yellow-gradient xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraphlight: "font-poppins font-normal text-dimBlue text-[18px] leading-[30.8px] ml-2",
  paragraphdark: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2",

  form: {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    width: "100%", 

  },
  input: {
    width: "75%", 
    height: "40px", 
    border: "none", 
    borderRadius: "10px", 
    backgroundColor: "#1e3a64", 
    color: "white", 
    fontSize: "16px", 
    marginBottom: "5px", 
    alignItems: "center"  
  },
  label: {
    fontSize: '16px', 
    color: '#fac25f', 
    marginTop: "10px", 
  },

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-0 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
