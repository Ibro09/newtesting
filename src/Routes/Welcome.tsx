import React, { useEffect } from "react";
import "../App.css";
import FallingImages from "../components/Fallingimg";
import Footer from "../components/Footer";
import Back from "../components/Back";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { dollarCoin } from "../images";
import parachute from '../icons/giftparachute.png'
import bg from "../images/sunbg.png";

const Welcome: React.FC = () => {
  const imageUrl = "https://via.placeholder.com/50";
  const navigate = useNavigate();

useEffect(()=>{
setTimeout(() => {
    navigate('/')
}, 3000);
},[])


  return (
    <div className='flex justify-center h-screen overflow-x-hidden  items-center max-h-screen'>
      <div className='w-full text-white min-h-screen h-screen font-bold flex flex-col max-w-xl bubblegum-sans px-5 items-center relative overflow-x-hidden  max-w-[600px]'>
        <div className=' fixed top-0 bottom-0 left-0 right-0 z-0 items-center'>
          <img
            src={bg}
            alt=''
            className='w-full h-full'
          />
        </div>
        <div className='fixed bottom-0 left-0 right-0 flex justify-center items-end z-50 h-[100%] bg-white rounded-t-[50px] animate-slide-up'>
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

export default Welcome;