import React, { } from "react";
import "../App.css";
import {
  binanceLogo,
  hamsterCoin,
} from "../images";
import Mine from "../icons/Mine";
import premium from "../icons/premium.png";
import wallet from "../icons/image.png";
import tasks from "../icons/earn.png";
import friends from "../icons/friends.png";
import Coins from "../icons/Coins";
import { Link } from "react-router-dom";

const Footer: React.FC = ({}) => {
  return (
    <div className='fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl flex justify-around items-center z-50 rounded-3xl text-xs flex-col bubblegum-sans'>
      <div className='flex justify-around items-center z-50 rounded-3xl text-xs w-[100%] footer border'>
        <div className='text-center w-1/4 m-1 p-1 text-[#2465CF]'>
          <Link to='/premium'>
            <img
              src={premium}
              alt='Exchange'
              className='w-8 h-8 mx-auto'
            />
            <p className='mt-1 text-[16px] font-normal text-[#2465CF]'>
              Premium
            </p>
          </Link>
        </div>
        <div className='text-center w-1/4 text-[#2465CF]  p-1'>
          <Link to='/tasks'>
            <img
              className='w-8 h-8 mx-auto text-[#aaa]'
              src={tasks}
            />
            <p className='mt-1 text-[16px] font-normal text-[#2465CF]'>Tasks</p>
          </Link>
        </div>

        <div className='text-center w-1/4 text-[#2465CF]  p-1'>
          <Link to='/friend'>
            <img className='w-8 h-8 mx-auto text-[#aaa]' src={friends}/>
            <p className='mt-1 text-[16px] font-normal text-[#2465CF]'>
              Invite
            </p>
          </Link>
        </div>
        <div className='text-center w-1/4  p-1'>
          <Link to='/wallet'>
            <img
              src={wallet}
              alt='Airdrop'
              className='w-8 h-8 mx-auto'
            />
            <p className='mt-1 text-[16px] font-normal text-[#2465CF]'>
              Wallet
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
