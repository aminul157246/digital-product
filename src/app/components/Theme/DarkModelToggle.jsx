// "use client"

// import React, { useContext } from "react";
// import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  // const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className='flex items-center border-green-500 p-2 border rounded-full' 
    // onClick={toggle}
    >
      <div className=''>🌙</div> <span className="text-black">/</span>
      <div className=''>🔆</div>
      {/* <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      /> */}
    </div>
  );
};

export default DarkModeToggle;