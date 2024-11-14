import React, { useState, useEffect } from "react";
import "../App.css";

import Footer from "../components/Footer";
import Back from "../components/Back";

import bg from "../images/sunbg.png";
import WebApp from "@twa-dev/sdk";
import ModalPage from "../components/Modal";

const Friends: React.FC = () => {
  const [dailyTasks, setDailyTasks] = useState([]);
  const [specialTasks, setSpecialTasks] = useState([]);
  const [socialTasks, setSocialTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "infoo",
    description: "",
    link: "",
    category: "",
    points: "",
  });

  useEffect(() => {
    const fetchTasks = async () => {
      const app = WebApp.initDataUnsafe;
      const user = app.user;
      // Check if tasks are already stored in localStorage
      const tasksInLocalStorage = localStorage.getItem(
        `${user?.username}_tasks`
      );
      console.log(JSON.parse(tasksInLocalStorage));

  try {
    const response = await fetch(
      `http://localhost:5000/api/check/tasks/${user?.username}`
    );
    const data = await response.json();
    console.log(data);
    // Initialize arrays for each category
    const daily = [];
    const social = [];
    const special = [];

    // Distribute tasks into different arrays based on category
    data.forEach((task) => {
      if (task.category === "daily") {
        daily.push(task);
      } else if (task.category === "social") {
        social.push(task);
      } else if (task.category === "special") {
        special.push(task);
      }
    });

    // Update state with categorized tasks
    setDailyTasks(daily);
    setSocialTasks(social);
    setSpecialTasks(special);

    // Save tasks in localStorage to prevent refetching
    localStorage.setItem(
      `${user?.username}_tasks`,
      JSON.stringify({ daily, social, special })
    )
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
  }

      if (tasksInLocalStorage) {
        // If tasks are already fetched, do not fetch again
        const storedTasks = JSON.parse(tasksInLocalStorage);
        setSpecialTasks(storedTasks.special);
        setDailyTasks(storedTasks.daily);
        setSocialTasks(storedTasks.social);
        return;
      }

    
    };

    fetchTasks();
  }, []); // Empty dependency array ensures it runs once when component mounts

  return (
    <div
      className="flex justify-center h-screen max-h-screen"
      style={{ scrollbarWidth: "none", scrollbarColor: "red" }}
    >
      <div className="w-full bg-black text-white min-h-screen h-full font-bold flex flex-col max-w-xl bg-no-repeat bg-cover bg-center bubblegum-sans px-5 items-center">
        <Back />
        <div className=" fixed top-0 bottom-0 left-0 right-0 z-0 items-center">
          <img src={bg} alt="" className="w-full h-full" />
        </div>
        <div className="w-full items-center zindex">
          <h5 className="text-[40px] mb-2 text-center tx-shadow mt-6">
            Special
          </h5>
          {specialTasks.length > 0 ? (
            <div className="w-full">
              {specialTasks.map((task, index) => {
                return (
                  <div
                    className="bg-item w-full px-4 py-2 mb-2 rounded-[10px]"
                    key={index}
                  >
                    {/* use glass morphism for these */}
                    <div className="item items-center">
                      {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                      <div className="txt font-normal">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            {/* <AiOutlineUserAdd size={20} /> */}
                            <div className="txt font-normal px-4 ">
                              <p className="text-[17px] max-w-100">
                                {task.title}
                              </p>
                              <p className="text-[#ddd] text-[14px] ">
                                +{task.points}
                              </p>
                            </div>
                          </div>
                          {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                          <button
                            className="main-button bubblegum-sans w-[100px]"
                            onClick={() => {
                              setIsModalOpen(true);
                              setModalInfo({
                                title: task.title,
                                description: task.description,
                                link: task.link,
                                category: task.category,
                                points: task.points,
                              });
                            }}
                          >
                            <div className="upper btn-upper">Go</div>
                            <div className="lower btn-lower"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="font-normal">no tasks Available,come back later</p>
          )}
        </div>

        <div className="w-full items-center zindex">
          <h5 className=" text-[30px] mb-2 text-center tx-shadow">
            Daily Tasks
          </h5>
          {dailyTasks.length > 0 ? (
            <div className="w-full">
              {dailyTasks.map((task, index) => {
                return (
                  <div
                    className="bg-item w-full px-4 py-2 mb-2 rounded-[10px]"
                    key={index}
                  >
                    {/* use glass morphism for these */}
                    <div className="item items-center">
                      {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                      <div className="txt font-normal">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            {/* <AiOutlineUserAdd size={20} /> */}
                            <div className="txt font-normal px-4 ">
                              <p className="text-[17px] max-w-100">
                                {task.title}
                              </p>
                              <p className="text-[#ddd] text-[14px] ">
                                +{task.points}
                              </p>
                            </div>
                          </div>

                          <button
                            className="main-button bubblegum-sans w-[100px]"
                            onClick={() => {
                              setIsModalOpen(true);
                              setModalInfo({
                                title: task.title,
                                description: task.description,
                                link: task.link,
                                category: task.category,
                                points: task.points,
                              });
                            }}
                          >
                            <div className="upper btn-upper">Go</div>
                            <div className="lower btn-lower"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="font-normal text-[#2465CF]">
              no tasks Available,come back later
            </p>
          )}
        </div>
        <div className="w-full items-center zindex">
          <h5 className=" text-[30px] mb-2 text-center tx-shadow">
            Social Tasks
          </h5>
          {socialTasks.length > 0 ? (
            <div className="w-full mb-[200px]">
              {socialTasks.map((task, index) => {
                return (
                  <div
                    className="bg-item w-full px-4 py-2 mb-2 rounded-[10px]"
                    key={index}
                  >
                    {/* use glass morphism for these */}
                    <div className="item items-center">
                      {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                      <div className="txt font-normal">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            {/* <AiOutlineUserAdd size={20} /> */}
                            <div className="txt font-normal px-4 ">
                              <p className="text-[17px] max-w-100">
                                {task.title}
                              </p>
                              <p className="text-[#ddd] text-[14px] ">
                                +{task.points}
                              </p>
                            </div>
                          </div>

                          <button
                            className="main-button bubblegum-sans w-[100px]"
                            onClick={() => {
                              setIsModalOpen(true);
                              setModalInfo({
                                title: task.title,
                                description: task.description,
                                link: task.link,
                                category: task.category,
                                points: task.points,
                              });
                            }}
                          >
                            <div className="upper btn-upper">Go</div>
                            <div className="lower btn-lower"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="font-normal text-[#2465CF]">
              no tasks Available,come back later
            </p>
          )}
        </div>
      </div>
      {isModalOpen && (
        <ModalPage {...modalInfo} setIsModalOpen={setIsModalOpen} />
      )}
      <Footer />
    </div>
  );
};

export default Friends;
