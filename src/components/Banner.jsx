import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-center flex items-end"
      style={{
        backgroundImage: `url(https://www.oursundayvisitor.com/wp-content/uploads/2023/05/AdobeStock_572223008.jpeg)`,
      }}>
        <div className='text-white text-xl text-center w-full bg-gray-900/70 p-2.5'>Game Changers</div>
      </div>
  );
}

export default Banner;
