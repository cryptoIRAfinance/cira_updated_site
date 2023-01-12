import React, { useState } from 'react';
import styles, { layout } from "../../style";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import Modal from "../Modal/Modal";
import "./Audits.css";


  
const Audits = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBAaNNidJEgW-hv4g1TzIeXU25gzH4BqVw",    
        authDomain: "cira-audit.firebaseapp.com",    
        projectId: "cira-audit",    
        storageBucket: "cira-audit.appspot.com",    
        messagingSenderId: "213411178894",    
        appId: "1:213411178894:web:13dd23f6c3ad15a5cf5cdf",    
        measurementId: "G-GR5404W05Q"    
        };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });console.log(formData)
    };


    const handleSubmit = (e) => {
      if (!e.currentTarget.checkValidity()) {
        console.log('Form is not valid');
        return;
      }
      e.preventDefault();
      console.log("Form submitted")
      const docRef = addDoc(collection(db, "audit_request"), formData)
      setModalIsOpen(true);
    };


  return (
    <section id="services" className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Contract Auditing
        </h2>
        <p className={`${styles.paragraphdark} max-w-[470px] mt-2`}>
          CIRA provides independant smart contract auditing!  <br></br><br></br></p>
          <div className={`${styles.subHead2}`}>
            Auditing Includes:
          </div>
          <ul className={`${styles.paragraphdark}list-disc ml-5`}>
            <li>Code Review</li>
            <li>Full Functionality Testing</li>
            <li>State of the art automated testing</li>
            <li>Code Corrections</li>
            <li>PDF Audit Report</li>
          </ul><br />
      </div>

      <div className={layout.sectionForm}>
      <form  style={styles.form} onSubmit={(e) => {e.preventDefault(); handleSubmit(e)}}>
      <label style={styles.label}>
          Email or Telegram:</label><br/>
          <input style={styles.input}
          type="text"
          name="userName"
          value={formData.userName || ''}
          onChange={handleChange}
          required
          pattern="^(?=\S)([A-Za-z0-9._%+-]+)$"
          title="Please enter a valid email or telegram username" 
          onInvalid={(e) => {
            e.target.setCustomValidity("Please enter a valid email or telegram username");
          }}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
      />

      <br />
      <label style={styles.label}>
          Contract Address:</label><br/>
          <input style={styles.input}
          type="text"
          name="contractAddress"
          value={formData.contractAddress || ''}
          onChange={handleChange}
          onPaste={handleChange}
          required 
          pattern=".{1,}"
          title="Please enter a valid contract address"
          onInvalid={(e) => {
            e.target.setCustomValidity("Please enter a valid contract address");
          }}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
      /><br/>

      <label style={styles.label}>
          Brief Message:</label><br/>
          <textarea className="messageInput"
          type="textArea"
          name="userMessage"
          value={formData.userMessage || ''}
          onChange={handleChange}
          required
          maxLength={300}
          title="Please enter a message for our team, up to 300 characters" 
          onInvalid={(e) => {
            e.target.setCustomValidity("Please enter a message for our team, up to 300 character");
          }}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
      /><br/>

    <button type="submit" className={`py-4 px-6 font-poppins font-medium text-[18px] text-dimBlue bg-accent rounded-[10px] outline-none ${styles} mt-5`}>
    Request Audit
    </button>

      </form>

      <Modal isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)}>
        <h2>Thank You</h2>
        <p>A team member will reach out to you as soon as possible!</p>
        <button  className="modal-button-close" onClick={() => setModalIsOpen(false)}>
        Close</button>
    </Modal>
    </div>
      </section>
    );  
};

export default Audits;


