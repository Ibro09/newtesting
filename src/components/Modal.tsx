import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalPage: React.FC = ({
  title,
  description,
  link,
  category,
  points,
  setIsModalOpen,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Close modal on pressing Escape
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed bottom-0 flex justify-center items-end zindex w-full h-[70%]">
      <div className="bg-white w-full md:w-1/2 lg:w-1/3 rounded-t-[30px] p-6 animate-slide-up relative h-[100%] text-center">
        <button
          onClick={closeModal}
          className="text-red-500 hover:text-red-700 absolute top-4 right-4"
        > X </button>
        
        <h2 className="text-[30px] font-bold tx-shadow text-white">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-gray-700">+{points}points +5 rings</p>

        <div className="flex items-center flex-col gap-3 w-full z-10 mt-10">
          <button className="border bubblegum-sans tx-shadow text-[white] w-full p-2 text-[16px] font-normal rounded-full">
           <a href={link} className="w-full"> <div className="">Do Task</div></a>
          </button>
          <button className="main-button bubblegum-sans w-full text-[16px] font-normal mb-[100px]">
            <div className="upper btn-upper">Verify</div>
            <div className="lower  btn-lower"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
