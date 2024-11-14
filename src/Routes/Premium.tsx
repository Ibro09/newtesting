import React, { useState, useEffect } from "react";
import "../App.css";
import Footer from "../components/Footer";
import Back from "../components/Back";
import treasure from "../icons/treasure.png";
import cash from "../icons/cash.png";
import percent from "../icons/percent.png";
import bg from "../images/sunbg.png";

const Friends: React.FC = () => {
  const [referrals, setReferrals] = useState(1);
  return (
    <div className=' flex justify-center h-screen max-h-screen'>
      <div className='w-full bg-black text-white min-h-screen h-full font-bold flex flex-col max-w-xl bubblegum-sans px-5 items-center'>
        <Back />
        <div className=' fixed top-0 bottom-0 left-0 right-0 z-0 items-center'>
          <img
            src={bg}
            alt=''
            className='w-full h-full'
          />
        </div>
        {/* <img src="" alt="" /> sonic logo   */}
        <h5 className='text-[30px] tb tx-shadow mt-6 text-center z-10'>
          Get access to sonic premium
        </h5>
        <h5 className='mb-5 text-center text-[17px] text-[#2465CF] bg-white p-4 py-2 rounded-full border z-10'>
          430,343 users has premium
        </h5>
        <div className='bg-item w-full px-4 py-4 mb-5 rounded-[10px] z-10'>
          {/* use glass morphism for these */}
          <div className='item'>
            <div className='txt font-normal px-2 mb-4 flex  gap-2'>
              <img
                src={cash}
                alt=''
                className='w-9 h-8'
              />
              <div>
                <p className='text-white text-[16px] -mt-2 '>
                  Receive a one-time bonus of 100,000 Coins and 50 Spins.
                </p>
              </div>
            </div>
            <div className='txt font-normal px-2 mb-4 flex gap-2'>
              <img
                src={percent}
                alt=''
                className='w-9 h-8'
              />
              <div>
                <p className='text-white text-[16px] -mt-2 '>
                  Secure permanent eligibility for the Grand Giveaway—an
                  exclusive event series for MemeFi Premium holders.
                </p>
              </div>
            </div>
            <div className='txt font-normal px-2 mb-4 flex gap-2 items-start'>
              <img
                src={treasure}
                alt=''
                className='w-9 h-8'
              />
              <div>
                <p className='text-white text-[16px] -mt-2 '>
                  Ensure your transaction receives priority in the airdrop claim
                  queue.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center flex-col gap-3 w-full z-10'>
          <button className='border bubblegum-sans tx-shadow text-[white] w-full p-2 text-[16px] font-normal rounded-full'>
            <div className=''>Buy for ton</div>
          </button>
          <button className='main-button bubblegum-sans w-full text-[16px] font-normal mb-[100px]'>
            <div className='upper btn-upper'>Buy for 500 star</div>
            <div className='lower  btn-lower'></div>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Friends;
