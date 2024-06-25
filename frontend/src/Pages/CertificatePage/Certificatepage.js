import React, { useEffect, useState } from 'react';
import CertificateTemplate from '../../Components/Certificate/CertificateTemplate';
import axios from 'axios';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton, Menu, MenuItem } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavBarTop from '../../Components/Utils/NavBarTop';
import Footer from '../../Components/Utils/Footer';
import '../../App.css';

const Certificate = ({ recipientName, courseName, completionDate, recipientEmail }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [certificateAppeared, setCertificateAppeared] = useState(false);
  const [certificateFilePath, setCertificateFilePath] = useState(null); // State to hold certificate file path

  useEffect(() => {
    setCertificateAppeared(true);
  }, []);

  const handleShareButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const generateCertificate = async () => {
    try {
      const response = await axios.post('/api/certificate/generate', {
        recipientName,
        courseName,
        completionDate,
      });
      const filePath = response.data.certificateFilePath;
      setCertificateFilePath(filePath); // Update certificateFilePath state
      await sendCertificateByEmail(recipientEmail, filePath);
    } catch (error) {
      console.error('Error generating or sending certificate:', error);
      alert('Failed to generate or send certificate. Please try again.');
    }
  };

  const downloadCertificate = async () => {
    try {
      if (!certificateFilePath) {
        alert('Certificate file path is not available.');
        return;
      }
      window.open(certificateFilePath, '_blank');
    } catch (error) {
      console.error('Error downloading certificate:', error);
      alert('Failed to download certificate. Please try again.');
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

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <>
      <NavBarTop />
      <div className={`certificate-container ${certificateAppeared ? 'certificate-appeared' : ''}`}>
        <h1 style={{ color: '#49108B', fontFamily: 'sans-serif', fontSize: '50px', textAlign: 'center' }}>Congratulations!</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', padding: '20px', borderRadius: '10px', marginBottom: '20px', width: 'fit-content' }}>
            <CertificateTemplate recipientName={recipientName} courseName={courseName} completionDate={completionDate} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton onClick={generateCertificate} style={{ marginRight: '20px' }}>
            <FileDownloadIcon style={{ fill: 'url(#gradient1)', fontSize: '30px' }} />
          </IconButton>
          <IconButton onClick={handleShareButtonClick}>
            <ShareIcon style={{ fill: 'url(#gradient1)', fontSize: '30px' }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            <MenuItem onClick={() => sendCertificateByEmail(recipientEmail)}>
              <EmailIcon />
              Email
            </MenuItem>
            <MenuItem onClick={shareOnLinkedIn}>
              <LinkedInIcon />
              LinkedIn
            </MenuItem>
          </Menu>
        </div>
      </div>
      <Footer />
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6070D4" />
            <stop offset="100%" stopColor="#323A6E" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default Certificate;
