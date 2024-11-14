import React, { useState } from "react";
import "../App.css";
import Footer from "../components/Footer";
import Back from "../components/Back";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { dollarCoin, dailyReward, dailyCipher, dailyCombo } from "../images";
import left from "../icons/left.png";
import right from "../icons/right.png";
import bg from "../images/sunbg.png";



const Level: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % image.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % image.length,
    );
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/");
  };
  const images = [dollarCoin, dailyReward, dollarCoin];
  const image = [
    {
      img: dailyReward,
      imgbg: "",
      name: "baby sonic",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Excepturi exercitationem ullam quidem commodi sed perferendis nihil officiis accusamus numquam voluptates.",
    },
    {
      img: dollarCoin,
      imgbg: "",
      name: "teenage sonic",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Excepturi exercitationem ullam quidem commodi sed perferendis nihil officiis accusamus numquam voluptates.",
    },
    {
      img: dailyCipher,
      imgbg: "",
      name: "adult sonic",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Excepturi exercitationem ullam quidem commodi sed perferendis nihil officiis accusamus numquam voluptates.",
    },
    {
      img: dailyCombo,
      imgbg: "",
      name: "adult sonic",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Excepturi exercitationem ullam quidem commodi sed perferendis nihil officiis accusamus numquam voluptates.",
    },
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
        <div className='relative h-2/5 mx-auto  w-full'>
          <div className='overflow-hidden relative w-[100%] flex h-full'>
            {image.map((item, index) => (
              <div
                key={index}
                className={`flex absolute w-full transition-all duration-500 ease-in-out items-center justify-center ${
                  currentIndex === index
                    ? "opacity-100 transform rotate-0 scale-100 z-1"
                    : "opacity-0 transform rotate-90 scale-0 "
                }`}>
                <img
                  src={item.img}
                  alt='Test Image'
                  height={"60vw"}
                  width={"60%"}
                />
              </div>
            ))}
          </div>

          {/* Next and Prev Buttons */}
          <div
            onClick={handlePrev}
            className='absolute top-1/2 left-0 transform -translate-y-1/2 text-white px-4 py-2'>
            <img
              src={left}
              alt=''
            />
          </div>
          <div
            className='absolute top-1/2 right-0 transform -translate-y-1/2  text-white px-4 py-2'
            onClick={handleNext}>
            <img
              src={right}
              alt=''
            />
          </div>
        </div>
        <div className='fixed bottom-0 left-0 right-0 flex justify-center items-end z-50 h-[60%] bg-white rounded-t-[50px] animate-slide-up '>
          <div className=' w-[100%] md:w-1/2 lg:w-1/3 rounded-t-lg p-6  relative h-[100%] text-center items-center justify-center'>
            <h5 className='text-[30px] mb-2 text-center tx-shadow'>
              {image[currentIndex].name.toUpperCase()}
            </h5>

            <p className='mt-1 text-[16px] font-normal text-[#2465CF]'>
              {image[currentIndex].text}
            </p>
            <div className=' w-full flex item-center justify-center mt-9'>
              <div className='flex max-w-[100%] gap-2 overflow-x-scroll px-7 no-scrollbar'>
                {image.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(index)}
                    className={`lvls border text-[#2465CF] p-2 flex items-center justify-center rounded-[10px] ${
                      currentIndex === index ? "bg-blue-600" : ""
                    }`}>
                    <p
                      className={`text-[#2465CF] font-[13px] ${
                        currentIndex === index ? "text-white" : ""
                      }`}>
                      Lvl {index + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level;
