import React from "react";
import { dollarCoin } from "../images";
import "../App.css";
import Back from "./Back";
interface FallingImageProps {
  src: string;
}

const FallingImages: React.FC<FallingImageProps> = ({ src }) => {
  const images = [
    { delay: "0.2s", opacity: "opacity-10", left: "left-10" },
    { delay: "1.5s", opacity: "opacity-40", left: "left-1/4" },
    { delay: "3.5s", opacity: "opacity-80", left: "left-1/4" },
    { delay: "5.5s", opacity: "opacity-80", left: "left-1/4" },
    { delay: "0.5s", opacity: "opacity-50", left: "left-1/4" },
    { delay: "1s", opacity: "opacity-30", left: "left-1/2" },
    { delay: "1.5s", opacity: "opacity-90", left: "left-3/4" },
    { delay: "0s", opacity: "opacity-50", left: "left-[90%]" },
  ];

  return (
    <div className='flex justify-center h-[10px] borderred w-[100%]'>
        {images.map((image, index) => (
            <img
              key={index}
              src={dollarCoin}
              alt={`falling image ${index}`}
              className={`absolute top-0 ${image.left} opacity-0 w-16 h-16 animate-fall`}
              style={{ animationDelay: image.delay }}
            />
        ))}
      
    </div>
  );
};

export default FallingImages;
