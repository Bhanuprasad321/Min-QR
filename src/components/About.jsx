import React from "react";

function About() {
  const LinkedUrl = "www.linkedin.com/in/kanugula-bhanu-prasad-naidu-910a832bb";
  return (
    <div className="flex flex-col mt-10 sm:mt-20 px-4 sm:p-5 gap-6 w-full max-w-3xl mx-auto justify-center items-center rounded-2xl bg-white shadow-md">
      <h1 className="text-xl sm:text-2xl underline text-purple-500 text-center">
        About This Project
      </h1>

      <p className="text-base sm:text-lg text-center px-2 sm:px-5">
        Welcome to <strong>MinQR</strong>, your all-in-one tool for creating
        compact, shareable links and scannable QR codes — fast, secure, and
        free. This web application simplifies the way you share URLs with:
        <br />
        <br />
        <strong>URL Shortening</strong> – Convert long links into clean,
        easy-to-remember URLs. <br />
        <strong>QR Code Generation</strong> – Instantly generate QR codes for
        any link, ready to scan, download, or print.
      </p>

      <h2 className="text-xl sm:text-2xl underline text-purple-500 text-center">
        Features
      </h2>

      <ul className="text-base sm:text-lg list-disc pl-5 sm:pl-8">
        <li>🚀 Shorten any URL in seconds</li>
        <li>📲 Generate high-quality QR codes</li>
        <li>💾 One-click QR code download</li>
        <li>📱 Mobile-friendly and responsive design</li>
        <li>🔐 Secure server-side logic with Node.js & Express</li>
        <li>⚡ Fast, lightweight frontend with React + Tailwind CSS</li>
      </ul>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/kanugula-bhanu-prasad-naidu-910a832bb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-purple-400 hover:bg-purple-300 text-white font-medium px-4 py-2 rounded-2xl border-2 transition"
        >
          LinkedIn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="20"
            viewBox="0 0 72 72"
            id="linkedin"
            className="pl-1"
          >
            <g
              id="providers-list"
              fill="none"
              fill-rule="evenodd"
              stroke="none"
              stroke-width="1"
            >
              <g id="linkedin">
                <rect
                  id="Rectangle-2"
                  width="72"
                  height="72"
                  x="0"
                  y="0"
                  fill="#117EB8"
                  rx="4"
                ></rect>
                <path
                  id="Shape"
                  fill="#FFF"
                  d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                ></path>
              </g>
            </g>
          </svg>
        </a>

        <a
          href="https://github.com/your-repo-link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-purple-400 hover:bg-purple-300 text-white font-medium px-4 py-2 rounded-2xl border-2 transition"
        >
          GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="20"
            fill="none"
            viewBox="0 0 48 48"
            id="github"
          >
            <rect width="48" height="48" fill="#000" rx="24"></rect>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M31.4225 46.8287C29.0849 47.589 26.5901 48 24 48C21.4081 48 18.9118 47.5884 16.5728 46.8272C17.6533 46.9567 18.0525 46.2532 18.0525 45.6458C18.0525 45.3814 18.048 44.915 18.0419 44.2911C18.035 43.5692 18.0259 42.6364 18.0195 41.5615C11.343 43.0129 9.9345 38.3418 9.9345 38.3418C8.844 35.568 7.2705 34.8294 7.2705 34.8294C5.091 33.3388 7.4355 33.369 7.4355 33.369C9.843 33.5387 11.1105 35.8442 11.1105 35.8442C13.2525 39.5144 16.728 38.4547 18.096 37.8391C18.3135 36.2871 18.9345 35.2286 19.62 34.6283C14.2905 34.022 8.688 31.9625 8.688 22.7597C8.688 20.1373 9.6225 17.994 11.1585 16.3142C10.911 15.7065 10.0875 13.2657 11.3925 9.95888C11.3925 9.95888 13.4085 9.31336 17.9925 12.4206C19.908 11.8876 21.96 11.6222 24.0015 11.6114C26.04 11.6218 28.0935 11.8876 30.0105 12.4206C34.5915 9.31336 36.603 9.95888 36.603 9.95888C37.9125 13.2657 37.089 15.7065 36.8415 16.3142C38.3805 17.994 39.309 20.1373 39.309 22.7597C39.309 31.9849 33.6975 34.0161 28.3515 34.6104C29.2125 35.3519 29.9805 36.8168 29.9805 39.058C29.9805 41.2049 29.9671 43.0739 29.9582 44.3125C29.9538 44.9261 29.9505 45.385 29.9505 45.6462C29.9505 46.2564 30.3401 46.9613 31.4225 46.8287Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
