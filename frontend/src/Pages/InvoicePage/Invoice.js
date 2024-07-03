import React, { useState, useEffect } from 'react';
import '../../Invoice.css';
import PdfTemplate from '../../Components/Invoice/InvoiceTemplate';

function Invoice() {
  const [Dates, setDates] = useState('');

  useEffect(() => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    console.log(`Date is ${date}`);
    setDates(date);
  }, []);

  return (
    <div>
      <PdfTemplate date={Dates} />
    </div>
  );
}

export default Invoice;
