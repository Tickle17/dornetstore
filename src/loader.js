import React from "react";
import loading from "./imgs/DornetLoader.png"

const Loader = () => (
   <div className="loader-img">
      <img style={{  position: "absolute",
         top: "50%",
         left: "45%",
         transform: "translate(-50%, -50%)",
         zIndex: 9999,
         width: "10%",
         height: "auto",
         animation: "spin 2s linear infinite"}} src={loading} alt="Загрузка..." />
   </div>
);

export default Loader;