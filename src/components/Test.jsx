// import React from "react";

// const Test = () => {
//   return (
//     <div>
//       {/* <!-- Include Model Viewer Library --> */}
//       <div
//         type="module"
//         src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
//       ></div>

//       {/*  Embed the 3D Model */}
//       <model-viewer
//         src="person_model.glb"
//         alt="3D portrait"
//         camera-controls
//         auto-rotate
//         style="width: 600px; height: 600px;"
//       ></model-viewer>
//     </div>
//   );
// };

// export default Test;



// import React, { useEffect } from "react";

// const Test = () => {
//   useEffect(() => {
//     // Dynamically load the model-viewer script once on mount
//     const script = document.createElement("script");
//     script.type = "module";
//     script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
//     document.head.appendChild(script);
//   }, []);

//   return (
//     <div>
//       {/* Embed the 3D Model */}
//       <model-viewer
//         src="person_model.glb"
//         alt="3D portrait"
//         camera-controls
//         auto-rotate
//         style={{ width: "600px", height: "600px" }}
//       />
//     </div>
//   );
// };

// export default Test;


import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 bg-[#262948] text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1.05}

    >
      {text}
    </motion.div>
  );
};

export default Card;

