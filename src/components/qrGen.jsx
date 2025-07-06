import React, { useState } from "react";
import axios from "axios";
function QrGen() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [loading,setLoading] = useState(false);
  const generateQr = async () => {
    if (!url) return alert("please enter a valid URL!");
    try {
      const res = await axios.post("https://min-qr.onrender.com/generate", {
        url,
      });
      console.log(res);
      setQrCode(res.data.qrcode);
    } catch (err) {
      alert("Error in generating QRcode!");
    }finally {
    setLoading(false); // hide spinner
  }
  };
  return (
    <div className="flex flex-col items-center w-[45%]">
      <h1 className="text-4xl mt-15 mb-10">QR-Gen</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Enter URL"
            className="border-2 rounded-sm bg-purple-200 p-2 hover:bg-purple-100"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generateQr();
              }
            }}
          />
          <button
            className="border-2 rounded-sm bg-purple-400 p-2 hover:bg-purple-300"
            onClick={generateQr}
          >
            Generate
          </button>
        </div>
        {loading && (
          <div className="flex items-center justify-center my-4">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}

        {qrCode && (
          <div className="h-[400px] w-[300px] flex flex-col justify-center items-center gap-3">
            <img
              src={qrCode}
              alt="QR_CODE"
              className="h-[200px] w-[200px] border-2 m-2"
            />
            <button className="p-2 border-2 mb-5 rounded-xl bg-purple-400 hover:bg-purple-300">
              <a href={qrCode} download="qrcode.png">
                Download
              </a>
            </button>
          </div>
        )}
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-2">
          QR Code Generator - Done By Bhanu Prasad.❤️
        </div>
      </div>
    </div>
  );
}

export default QrGen;
