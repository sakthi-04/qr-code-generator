import { useState } from "react";
import "./generateQRCode.css";

function QrCodegenerate() {
  // React Hook for storing user input
  const [input, setInput] = useState("");

  // React Hook for storing generated QR code
  const [qrCode, setQrCode] = useState("");

  // Generate QR Code using API
  const generateQRCode = () => {
    if (input.trim() === "") {
      alert("Please enter text or a URL");
      return;
    }

    // Encode user input so it can safely be sent to the API
    const encodedInput = encodeURIComponent(input);

    // QR Code API
    const apiUrl =
      `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodedInput}`;

    setQrCode(apiUrl);
  };

  // Clear input and QR code
  const clearQRCode = () => {
    setInput("");
    setQrCode("");
  };

  return (
    <div className="container">
      <div className="card">

        <h1>QR Code Generator</h1>

        <p>
          Enter text or a URL to generate your QR Code
        </p>

        {/* Dynamic User Input */}
        <input
          type="text"
          placeholder="Enter text or URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="buttons">

          <button onClick={generateQRCode}>
            Generate QR Code
          </button>

          <button
            className="clear"
            onClick={clearQRCode}
          >
            Clear
          </button>

        </div>

        {/* Display QR Code */}
        {qrCode && (
          <div className="result">

            <h2>Your QR Code</h2>

            <img
              src={qrCode}
              alt="Generated QR Code"
            />

            <br />

            <a
              href={qrCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open QR Code
            </a>

          </div>
        )}

      </div>
    </div>
  );
}

export default QrCodegenerate;