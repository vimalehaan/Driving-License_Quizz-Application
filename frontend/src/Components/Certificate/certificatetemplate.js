import React from 'react';

const CertificateTemplate = ({ recipientName, LevelName, completionDate }) => {
  const backgroundImageUrl = process.env.PUBLIC_URL + '/images/certificate3.png';

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '80vh', // Adjust this value as needed
       // Add a background color or gradient for the whole page
    }}>
      <div style={{
        width: '700px',
        
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Arial, sans-serif',
        color: 'black',
        textAlign: 'center',
        padding: '20px',
      }}>
        <div style={{ padding: '200px 0' }}>
          <p style={{ fontSize: '18px', margin: '10px 0' }}>This certificate is awarded to: {recipientName}</p>
          <p style={{ fontSize: '18px', margin: '10px 0' }}>for completing the Level: {LevelName}</p>
          <p style={{ fontSize: '16px', margin: '10px 0' }}>Date of Completion: {completionDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateTemplate;
