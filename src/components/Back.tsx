import { dollarCoin } from "../images";
import back from "../icons/back.png";

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Back: React.FC = ({}) => {
  return (
    <div className='w-full z-10 fixed top-2 left-4 z-20'>
      <Link
        to='/'
        className='w-auto flex gap-2 float-left '>
        <div
          className=' w-full flex gap-2 items-center'
          onClick={() => Link}>
          <img
            src={back}
            alt=''
            className='w-5 h-5'
          />
          <p className='text-[#2465CF] text-[20px]'>back</p>
        </div>
      </Link>
    </div>
  );
};

export default Back;
