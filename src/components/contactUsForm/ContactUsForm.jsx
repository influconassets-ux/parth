import React from "react";
import styles from "./ContactUsForm.module.css";

const ContactUsForm = () => {
  return (
    <div className={styles.botContainer}>
      <h2 className={styles.ctText}>
        Contact Us : <span className={styles.phoneNumber}>0265-2291922</span>
      </h2>
      <form action="" className={styles.formContainer}>
        <div className={styles.topInput}>
          <input
            type="text"
            placeholder="Name"
            className={styles.inputField}
            name=""
            id=""
            required
          />
          <input
            type="text"
            placeholder="Email"
            name=""
            id=""
            className={styles.inputField}
            required
          />
        </div>
        <textarea
          name=""
          className={styles.msgText}
          placeholder="Message"
          required
          id=""
        ></textarea>

        <button className={styles.btn}>Send</button>
      </form>

      <div className={styles.botContentContainer}>
        <h2 className={styles.content}>
          Registered Office of our Company:
          <br />
          <span>Parth Electricals & Engineering Limited</span>
          <br />
          <span>
            301, Riddhi Siddhi Elanza, Beside Rajacastle Building,
            <br />
            Behind Domino's Pizza Outlet, Ellora Park <br />
            Main Road, Subhanpura,
            <br />
            Vadodara-390 023, Gujarat, India
            <br />
          </span>
          Contact Number: <span>+91-265 2291922</span>
          <br />
        </h2>

        <h2
          className={styles.content}
          style={{ marginTop: "1vw", marginBottom: "1vw" }}
        >
          Plant Address:
          <br />
          <span>Parth Electricals & Engineering Limited</span>
          <br />
          <span>
            E-113, G.I.D.C., Manjusar, Savli Industrial Estate,
            <br />
            Vadodara-391 775, Gujarat, India
            <br />
          </span>
          Contact Number: <span>+91-2667 264144, 264145</span>
        </h2>

        <h2 className={styles.content}>
          Product Enquiry: <span>sales@parthelectricals.in</span>
          <br />
          EPC & Service Enquiry: <span>service@parthelectricals.in</span>
          <br />
          Investor grievance id:{" "}
          <span>investor.relations@parthelectricals.in</span>
          <br />
          Finance: <span>cfo@parthelectricals.in</span>
          <br />
          Cable Termination Kit:
          <span>parthrevan@gmail.com</span>
          <br />
          Website: <span>www.parthelectricals.in</span>
          <br />
          CIN: <span>L32202GJ2007PLC050751</span>
        </h2>
      </div>
    </div>
  );
};

export default ContactUsForm;
