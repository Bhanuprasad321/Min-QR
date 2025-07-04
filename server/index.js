const express = require("express");
const cors = require("cors");
const axios = require("axios");
const QRcode = require("qrcode");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl || typeof longUrl !== "string") {
    return res.status(400).json({ error: "Invalid or missing longUrl" });
  }
  try {
    const response = await axios.get(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`
    );

    res.json({ shortUrl: response.data });
  } catch (err) {
    console.error("TinyURL API error:", err.message);
    res.status(500).json({ error: "Failed to shorten URL" });
  }
});
app.post("/generate", async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  try {
    const qrCodeDataUrl = await QRcode.toDataURL(url);
    res.json({ qrcode: qrCodeDataUrl });
  } catch (err) {
    console.log(err);
  }
});

app.get("/test", (req, res) => {
  res.send("✅ MinQR backend is live and working!");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

