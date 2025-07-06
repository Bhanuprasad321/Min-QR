import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import QrGen from "./qrGen";
import { Link } from "react-router-dom";
function Shortener() {
  const [copied, setCopied] = useState(false);
  const [loading,setLoading] = useState(false);
  const [longUrl,setLongUrl] = useState('');
  const [shortUrl,setShortUrl] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);
  const handleShorten =async () => {
     if (!longUrl.trim()) {
      setError('Please enter a valid URL.');
      return;
    }

    try {
      setLoading("true");
      const res = await fetch('https://min-qr.onrender.com/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ longUrl }),
      });

      const data = await res.json();

      if (data.shortUrl) {
        setShortUrl(data.shortUrl);
        setError('');
      } else {
        setError('Failed to shorten URL');
      }
    } catch (err) {
      setError('Server error');
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center h-[80vh] p-[20px] gap-4">
      <h1 className="text-4xl m-[20px]">
        URL <span className="text-purple-500">Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Enter URL"
          className="border-2 p-1 rounded-sm mr-7 mb-10 "
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleShorten();
    }
  }}
        />
        <button className="bg-purple-400 p-1 border-2 rounded-sm hover:bg-purple-300" onClick={handleShorten}>Short</button>
        {shortUrl && (<div className="flex flex-col gap-2 justify-center items-center my-5">
          <h3 className="text-2xl">🤏 URL</h3>
          <p className="border-2 p-1 bg-purple-200  ">{shortUrl}</p>
          <button className="bg-purple-400 p-1 border-2 rounded-sm hover:bg-purple-300"><a href={shortUrl} target="_blank">open link</a></button>
          <CopyToClipboard
            text={shortUrl}
            onCopy={() => {
              setCopied(true);
            }}
          >
            <button className="bg-purple-400 p-1 px-5 border-2 rounded-sm hover:bg-purple-300">
              {copied ? "copied" : "copy"}
            </button>
            
          </CopyToClipboard>
          
        </div>)}
        {loading && (
          <div className="flex items-center justify-center my-4">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}
        <p className="text-[18px] text-center">want to generate QR code? <a href="/generator" className="text-blue-600 underline">yes</a></p>
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-2">
   QR Shortener - Done By Bhanu Prasad.❤️
</div>
    </div>
  );
}

export default Shortener;
