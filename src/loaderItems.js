import React from "react";
import loading from "./imgs/DornetLoader.png"

const LoaderItem = () => (
   <div className="loader-img">
      <img style={{  position: "relative",
         transform: "translate(-50%, -50%)",
         zIndex: 999999,
         width: "10%",
         height: "auto",
         animation: "spin 2s linear infinite"}} src={loading} alt="Загрузка..." />
   </div>
);

export default LoaderItem;