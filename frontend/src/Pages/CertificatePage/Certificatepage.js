import React, { useEffect, useState, useRef } from 'react';
import CertificateTemplate from '../../Components/Certificate/Certificatetemplate';
import axios from 'axios';
import { IconButton, Button } from '@mui/material';
import ReactToPrint from 'react-to-print';
import { Download as DownloadIcon } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import NavBarTop from '../../Components/Utils/NavBarTop';
import Footer from '../../Components/Utils/Footer';
import '../../App.css';

const Certificate = ({ recipientName, courseName, completionDate, recipientEmail }) => {
  const [certificateAppeared, setCertificateAppeared] = useState(false);
  const [certificateFilePath, setCertificateFilePath] = useState(null);
  const componentRef = useRef();

  useEffect(() => {
    setCertificateAppeared(true);
  }, []);

  const generateCertificate = async () => {
    try {
      const response = await axios.post('/api/certificate/generate', {
        recipientName,
        courseName,
        completionDate,
      });
      const filePath = response.data.certificateFilePath;
      setCertificateFilePath(filePath);
      await sendCertificateByEmail(recipientEmail, filePath);
    } catch (error) {
      console.error('Error generating or sending certificate:', error);
      alert('Failed to generate or send certificate. Please try again.');
    }
  };

  const sendCertificateByEmail = async (recipientEmail, certificateFilePath) => {
    try {
      await axios.post('/api/certificate/send-email', {
        recipientEmail,
        certificateFilePath,
      });
      alert('Certificate sent via email successfully.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <>
      <NavBarTop />
      <div className={`certificate-container ${certificateAppeared ? 'certificate-appeared' : ''}`}>
        <h1 style={{ color: '#49108B', fontFamily: 'sans-serif', fontSize: '50px', textAlign: 'center' }}>Congratulations!</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', padding: '20px', borderRadius: '10px', marginBottom: '20px', width: 'fit-content' }} ref={componentRef}>
            <CertificateTemplate recipientName={recipientName} courseName={courseName} completionDate={completionDate} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReactToPrint
            trigger={() => (
              <Button
                variant="outlined"
                startIcon={<DownloadIcon style={{ fill: 'url(#gradient1)', fontSize: '30px' }} />}
                sx={{
                  border: '2px solid #6070D4', // Border color and width
                  color: '#6070D4', // Text color
                  '&:hover': {
                    border: '2px solid #323A6E', // Border color on hover
                    color: '#323A6E', // Text color on hover
                  },
                }}
                
              >
                <b>Download</b>
              </Button>
            )}
            content={() => componentRef.current}
            documentTitle={`Certificate_${recipientName}`}
          />
          <Button
  variant="outlined"
  onClick={() => sendCertificateByEmail(recipientEmail, certificateFilePath)}
  sx={{
    border: '2px solid #6070D4', 
    color: '#6070D4', 
    borderColor: '#6070D4', 
    marginLeft: '20px', 
    '&:hover': {
      border: '2px solid #323A6E', 
      color: '#323A6E', 
    },
  }}
>
  <EmailIcon style={{ fill: 'url(#gradient1)', fontSize: '30px' }} /> 
  <b>Email</b>
</Button>
        </div>
      </div>
      <Footer />
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#6070D4" />
            <stop offset="100%" stopColor="#323A6E" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default Certificate;
