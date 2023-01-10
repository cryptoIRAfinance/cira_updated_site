import React, { useState } from 'react';
import styles, { layout } from "../style";
import ButtonAudit from "./ButtonAudit";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


  
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
    

    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });console.log(formData)
    };

    const handleSubmit = (event) => {
        console.log("Form submitted")
        let data = {
        testData: formData
        }
        
        try {
        const dofRef = addDoc(collection(db, "cira-audit"), {
        data
        });
        } catch(err) {
        console.log(err)
        }
        }
 

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
          </ul>
      </div>

      <div className={layout.sectionImg}>
      <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
          Email or Telegram:</label><br/>
          <input style={styles.input}
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          onPaste={handleChange}
      />

      <br />
      <label style={styles.label}>
          Contract Address:</label><br/>
          <input style={styles.input}
          type="text"
          name="contract"
          value={formData.contract || ''}
          onChange={handleChange}
          onPaste={handleChange}
      /><br/>

    <button type="submit" onClick={handleSubmit}>
    Request Audit
    </button>

      </form>
      </div>
      </section>
    );
  };

export default Audits;