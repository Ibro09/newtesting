import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import sonic from "../images/babysonic.png";
import user from "../icons/user.png";
import ring from "../icons/rings.png";
import plus from "../icons/plus.png";
import coin from "../icons/coin.png";
import lvl from "../icons/level.png";
import spin from "../icons/spin.png";
import bg from "../images/sunbg.png";
import bolt from "../icons/bolt.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import Coins from "../icons/Coins";
import tg from "../icons/tg.png";
import youtube from "../icons/youtube.png";
import x from "../icons/x.png";
import discord from "../icons/discord.png";
import { useLocation } from "react-router-dom";

const App: React.FC = () => {
  const location = useLocation();
  const [username, setUsername] = useState<string | null>(null);
  const [points, setPoints] = useState<number | 0>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({
    clicks: null,
    points: 10000,
    referrals: [],
    savedPts: 1000,
    username: "username",
    level: 1,
    spin: 30,
    id:22
  });
  const [userId, setUserId] = useState("");
  const [startParam, setStartParam] = useState("");
  const links = [
    {
      img: discord,
      link: "https://www.telegram.org",
    },
    {
      img: tg,
      link: "https://www.telegram.org",
    },
    {
      img: x,
      link: "https://www.telegram.org",
    },
    {
      img: youtube,
      link: "https://www.telegram.org",
    },
  ];

  useEffect(() => {
    const app = WebApp.initDataUnsafe;
    const user = app.user;
    const userData = localStorage.getItem("userInfo");
 console.log(user.id)
    const fetchData = async () => {
      await fetch("http://localhost:5000/api/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user?.username,
          id: user?.id,
          referrer: WebApp.initDataUnsafe.start_param || "",
          //Put your id here
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("userInfo", JSON.stringify(data.user));
          console.log(localStorage.getItem("userInfo"));
          console.log(data);
          setIsLoading(false);
          return setUserInfo(data.user);
        });
    };

    if (user) {
      fetchData();
      console.log(userInfo);
      setUsername(userInfo.username);
    } else {
      setIsLoading(true);
    }
  }, []);

//   useEffect(() => {
//  const initWebApp = async () => {
//       if (typeof window !== "undefined") {
//         const WebApp = (await import("@twa-dev/sdk")).default;
//         WebApp.ready();

//         const startParam = WebApp.initDataUnsafe.start_param || "";
//         const user = WebApp.initDataUnsafe.user;

//         if (startParam) {
//           console.log("Referrer Start Param:", startParam);

//           // Check if the user already has a referrer
//           const response = await fetch("http://localhost:5000/api/check-referrer", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ userId: user?.id }),
//           });
//           const { hasReferrer } = await response.json();

//           if (!hasReferrer) {
//             // Set the referrer for the user
//             await fetch(`http://localhost:5000/api/set-referrer/${user?.id}`, {
//               method: "PATCH",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 referrer: startParam,
//                 userId: user?.id,
//               }),
//             });

//             // Notify the referrer
//             await fetch("http://localhost:5000/api/notify-referrer", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 referrerId: startParam,
//                 referredUserId: user?.id,
//               }),
//             });

//             console.log("Referrer set and notified successfully!");
//           } else {
//             console.log("User already has a referrer.");
//           }

//           // Save the referrer to localStorage
//           localStorage.setItem("referrer", startParam);
//         }
//       }
//     };

//     initWebApp();
//   }, []);
//   useEffect(() => {
//      const app = WebApp.initDataUnsafe;
//      const user = app.user;
//     const initWebApp = async () => {
//       if (typeof window !== "undefined") {
//         const WebApp = (await import("@twa-dev/sdk")).default;
//         WebApp.ready();
//         setStartParam(WebApp.initDataUnsafe.start_param || "");
//         console.log(startParam)
//         localStorage.setItem("referrer", startParam);
//            const postReferrer =async()=>{
//               await fetch("http://localhost:5000/api/check", {
//                 method: "PATCH",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                   startParam,
//                   userId:user?.id
//                 }),
//               });
//            }
             
//       }
//     };
// if (WebApp.initDataUnsafe.start_param) {
// // fetch user referrer and check if its already saved 
//   if (WebApp.initDataUnsafe.start_param) {
//   }
//     initWebApp();
// }
//   }, []);

  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch(`http://localhost:5000/api/users/${userInfo.username}`, {
  //       method: "PATCH", // or you can omit this line, as GET is default
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userInfo),
  //     });
  //   };
  //   const handleBeforeUnload = (event) => {
  //     fetchData();
  //     event.preventDefault();
  //     event.returnValue = ""; // Trigger confirmation dialog
  //   };

  //   // Trigger on page unload (refresh, close tab, etc.)
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   // Only run on route change, not on initial load
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   } else {
  //     fetchData(); // Run save function on route change
  //   }

  //   // Cleanup
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [location]);
  const [remPoints, setRemPoints] = useState(userInfo.savedPts);

  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const pointsToAdd = 1;

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
    setRemPoints(remPoints - pointsToAdd);
    const newPoints = points + userInfo.clicks; // Increment points by clicks
    setPoints(newPoints); // Update state with new points

    // Optionally update user info immediately if necessary
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      points: newPoints,
    }));

    const userData = localStorage.getItem("userInfo");
    const parsed = JSON.parse(userData);
    if (!userData) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      setUserInfo(parsed);
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        points: userInfo.points + userInfo.clicks,
      }));
      // localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  useEffect(() => {
    if (remPoints >= userInfo.savedPts) {
      setRemPoints(userInfo.savedPts);
    }
    const refillPoints = Math.floor(5);
    const interval = setInterval(() => {
      setRemPoints((prevPoints) => prevPoints + refillPoints);
    }, 1000);

    if (remPoints >= userInfo.savedPts) {
      setRemPoints(userInfo.savedPts);
      return () => clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [remPoints]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center overflow-y-hidden overflow-x-hidden h-screen max-h-screen">
          <div className=" w-full text-white h-screen font-bold flex flex-col max-w-xl bubblegum-sans bg-white px-4 overflow-hidden items-center">
            <LoadingBars />
            <div className="icons flex">
              {links.map((link, index) => {
                return (
                  <div className="icon" key={index}>
                    <a href={link.link}>
                      <img src={link.img} alt="" className="w-12 h-12" />
                    </a>
                  </div>
                );
              })}
            </div>
            <p className="tx-shadow text-[16px] mt-10">
              Powered By Sonic The Hedgehog
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center overflow-y-hidden overflow-x-hidden h-screen max-h-screen">
          <div className=" w-full text-white h-screen font-bold flex flex-col max-w-xl bubblegum-sans bg-cover bg-center px-4 overflow-hidden">
            <div className=" fixed top-0 bottom-0 left-0 right-0 z-0 items-center">
              <img src={bg} alt="" className="w-full h-full" />
            </div>
            <div className="mt-3 z-10">
              <div className="flex justify-between ">
                <div className="flex items-center bg-white border-2  max-w-[300px] w-[60%] rounded-full border h-8">
                  <img src={user} alt="" className="w-10 h-10 z-[2]" />
                  <div className="py-1  align-start w-full px-7 -ml-5">
                    <p className="font-normal text-[16px] text-[#2465CF] ">
                      {userInfo.username}
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-white rounded-full border-2 max-w-[300px] w-[100px] justify-between border h-8">
                  <img src={ring} alt="" className="w-12 h-12 z-[2] -ml-3" />
                  <p className="font-normal text-[16px] text-[#2465CF] ">
                    {userInfo.spin}
                  </p>
                  <img src={plus} alt="" className="w-7 h-7 z-[2] -mr-1" />
                </div>
              </div>
              <div className="mt-3 w-full ">
                <div className=" w-full flex items-center justify-center gap-2">
                  <img src={coin} alt="Dollar Coin" className="w-12 h-12" />
                  <p className="text-[30px] font-bold tx-shadow">
                    {userInfo.points.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center fixed bottom-20 pb-[50px] fixed w-auto left-0 right-0 ">
              <div
                className="w-[250px] flex items-center justify-center"
                onClick={handleCardClick}
              >
                <img
                  src={sonic}
                  alt=""
                  style={{ width: "300px", height: "auto" }}
                />
              </div>
            </div>
            <div className="flex items-center fixed bottom-20 pb-5">
              <img src={bolt} alt="" className="w-7 h-7" />
              <div className="flex">
                <p className="text-[#2465CF] font-normal">{remPoints}</p>
                <p className="text-[#2465CF] font-normal">
                  /{userInfo.savedPts}
                </p>
              </div>
            </div>
            <Footer />

            <div className="cards  fixed top-[calc(45%-3rem)]">
              <div className="card p-1 rounded-[10px] px-4 flex items-center justify-center flex-col mb-2 border">
                <Link to="/level">
                  <img src={lvl} alt="" className="w-8 h-8" />
                  <p className="text-[#2465CF] font-normal text-[16px] ">
                    lvl {userInfo.level}
                  </p>
                </Link>
              </div>
              <div className="card p-1 rounded-[10px] px-4 flex items-center justify-center flex-col mb-2 border">
                <Link to="/spin">
                  <img src={spin} alt="" className="w-8 h-8" />
                  <p className="text-[#2465CF] font-normal text-[16px] ">
                    Spin
                  </p>
                </Link>
              </div>
            </div>
            {clicks.map((click) => (
              <div
                key={click.id}
                className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
                style={{
                  top: `${click.y - 42}px`,
                  left: `${click.x - 28}px`,
                  animation: `float 1s ease-out`,
                }}
                onAnimationEnd={() => handleAnimationEnd(click.id)}
              >
                {pointsToAdd}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default App;

const LoadingBars = () => {
  const heights = [4, 6, 8, 10, 12, 10, 8, 6, 4]; // Different heights for each bar

  return (
    <div className="flex items-center flex-col mt-20 mb-[100px] gap-10">
      <div className="flex space-x-2 items-center">
        {heights.map((height, index) => (
          <div
            key={index}
            className="w-2 thick-border animate-grow"
            style={{
              height: `${height}rem`,
            }}
          ></div>
        ))}
      </div>
      <LoadingDots />
    </div>
  );
};

const LoadingDots = () => {
  return (
    <div className="flex items-center space-x-1 font-semibold">
      <span className="tx-shadow text-[40px]">Loading</span>
      <span className="animate-dot  tx-shadow text-[40px]">.</span>
      <span
        className="animate-dot tx-shadow text-[40px]"
        style={{ animationDelay: "0.3s" }}
      >
        .
      </span>
      <span
        className="animate-dot  tx-shadow text-[40px]"
        style={{ animationDelay: "0.6s" }}
      >
        .
      </span>
    </div>
  );
};
