import { useState } from "react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "austinserver042@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={copyToClipboard}
        className="relative px-0 py-3 text-xs text-center rounded-full font-extralight bg-black w-[12rem] cursor-pointer overflow-hidden"
      >
        {copied ? (
          <span className="flex items-center justify-center text-center">
            <img className="w-5 mr-1" src="assets/copy.svg" alt="copy icon" />
            Email copied!
          </span>
        ) : (
          <span className="flex items-center justify-center text-center">
            <img className="w-5 mr-1" src="assets/copy.svg" alt="copy icon" />
            Copy email address
          </span>
        )}
      </button>
    </div>
  );
};

export default CopyEmailButton;