import React from "react";
import styles from "./SingleApplication.module.css";
import { v4 as uuidv4 } from 'uuid';

const SingleApplication = ({ application }) => {

  const formatCurrency = (amount) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' , maximumFractionDigits: 0}).format(amount);
  const formatDate = (date) =>  new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'UTC'}).format(new Date(date));

  return (
    <>
      {application?.map(({ company, first_name, last_name, email, loan_amount, date_created, expiry_date }) => (
        <div className={styles.SingleApplication} key={uuidv4()}>
          <div className={styles.cell}>
            <sub>Company</sub>
            {company}
          </div>
          <div className={styles.cell}>
            <sub>Name</sub>
            {first_name} {last_name}
          </div>
          <div className={styles.cell}>
            <sub>Email</sub>
            {email}
          </div>
          <div className={styles.cell}>
            <sub>Loan Amount</sub>
            {formatCurrency(loan_amount)}
          </div>
          <div className={styles.cell}>
            <sub>Application Date</sub>
            {formatDate(date_created)}
          </div>
          <div className={styles.cell}>
            <sub>Expiry date</sub>
            {formatDate(expiry_date)}
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleApplication;
