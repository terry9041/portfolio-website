import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mx-auto footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
  <div className="max-w-[80%] mx-auto py-3 flex flex-row justify-between items-center">
    <div>
      <img 
        src="/favicon.ico" 
        width={20}
        height={20}
      />
    </div>
    <div>
      <p className="text-slate-600 text-xs">All rights reserved.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
