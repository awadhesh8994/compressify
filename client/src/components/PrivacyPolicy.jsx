import React from "react";


const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <h2>🔐 Privacy Policy</h2>
      <p>
        At Compressify, we value your privacy. We do not store or share your uploaded images. All processing is done securely in your browser or via encrypted connection. No personal data is collected without your consent.
      </p>
      <p>
        For questions or concerns, feel free to contact us at support@compressify.app
      </p>
        <h3>🔒 Data Collection</h3>
        <ul>
            <li>We do not collect personal data.</li>
            <li>Uploaded images are processed locally or via secure connection.</li>
            <li>No tracking cookies or third-party ads.</li>
            </ul>
        <h3>🛡️ Data Security</h3>
        <ul>
            <li>We use encryption for data transmission.</li>
            <li>Images are not stored on our servers.</li>
            <li>Regular security audits are conducted.</li>
        </ul>

    </div>
  );
};

export default PrivacyPolicy;
