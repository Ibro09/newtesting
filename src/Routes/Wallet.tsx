import React from "react";
import "../App.css";
import FallingImages from "../components/Fallingimg";
import Footer from "../components/Footer";
import Back from "../components/Back";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { dollarCoin } from "../images";
import parachute from '../icons/giftparachute.png'
import bg from "../images/sunbg.png";

const Wallet: React.FC = () => {
  const imageUrl = "https://via.placeholder.com/50";
  const navigate = useNavigate();
 const closeModal = () => {
   navigate("/");
 };
 const images = [
   { delay: "3.2s", opacity: "opacity-10", left: "left-1" },
   { delay: "1.5s", opacity: "opacity-40", left: "left-1/4" },
   { delay: "3.5s", opacity: "opacity-80", left: "left-1/4" },
   { delay: "5.5s", opacity: "opacity-80", left: "left-1/4" },
   { delay: "1.5s", opacity: "opacity-50", left: "left-1/4" },
   { delay: "2s", opacity: "opacity-30", left: "left-1/2" },
   { delay: "1.5s", opacity: "opacity-90", left: "left-3/4" },
   { delay: ".5s", opacity: "opacity-50", left: "left-1/3" },
 ];
  return (
    <div className='flex justify-center h-screen overflow-x-hidden  items-center max-h-screen'>
      <div className='w-full text-white min-h-screen h-screen font-bold flex flex-col max-w-xl bubblegum-sans px-5 items-center relative overflow-x-hidden  max-w-[600px]'>
        <Back />
        <div className=' fixed top-0 bottom-0 left-0 right-0 z-0 items-center'>
          <img
            src={bg}
            alt=''
            className='w-full h-full'
          />
        </div>
        <div className='flex justify-center h-[10px]  w-[100%]'>
          {images.map((image, index) => (
            <div
              className={`absolute top-0 ${image.left} opacity-0 w-16 animate-fall`}
              style={{ animationDelay: image.delay }} key={index}>
              <img
                key={index}
                src={parachute}
                alt={`falling image ${index}`}
              />
            </div>
          ))}
        </div>
        <div className='fixed bottom-0 left-0 right-0 flex justify-center items-end z-50 h-[70%] bg-white rounded-t-[50px] animate-slide-up'>
          <div className=' w-full md:w-1/2 lg:w-1/3 rounded-t-lg p-6  relative h-[100%] text-center'>
            <h5 className='text-[27px] mb-2 text-center tx-shadow'>
              Airdrop is coming soon
            </h5>
            <p className='mt-1 text-[16px] font-normal text-[#2465CF]'>
              Keep farming
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wallet;




 // <div className='flex justify-center overflow-hidden h-screen w-screen bg'>
    //   <div className=' w-full text-white h-screen font-bold flex flex-col max-w-xl bubblegum-sans bg-cover bg-center bg w-screen'>
    //     <FallingImages src={imageUrl} />
    //     <div className='fixed bottom-0 flex justify-center items-end h-[75%] w-[20px]  rounded-[200px]'>
    //       <div className='bg-white w-full md:w-1/2 lg:w-1/3 rounded-t-lg p-6 animate-slide-up relative h-full rounded-t-[100px] border'>
    //         <h2 className='text-xl font-bold mb-4'>Airdrop is coming</h2>
    //         <p className='text-gray-700'>This is a hardcoded modal content.</p>
    //       </div>
    //     </div>
    //     <Footer />
    //   </div>
    // </div>