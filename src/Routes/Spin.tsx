import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import coin from "../icons/coin.png";
import Back from "../components/Back";
import ring from "../icons/rings.png";
import plus from "../icons/plus.png";
import bg from "../images/sunbg.png";

interface DataItem {
  label: string;
  value: number;
  question: string;
  color: string;
  image: string;
}

const SpinningWheel: React.FC = () => {
    const userData = localStorage.getItem("userInfo");
    const parsed = JSON.parse(localStorage.getItem("userInfo"));
  const chartRef = useRef<SVGSVGElement | null>(null);
  const questionRef = useRef<HTMLDivElement | null>(null);
  const spinRef = useRef<() => void>(() => {}); // Spin function ref
  const [isSpinning, setIsSpinning] = useState(false); // Track the spinning state
  const [spins, setSpins] = useState<number | null>(parsed.spin);; // Track the spinning left
  const [userInfo, setUserInfo] = useState({
    clicks: 1,
    points: 0,
    referrals: [],
    savedPts: 500,
    username: "tguser",
    level: 1,
    spin: 20,
  });
  // Define custom colors for each slice
  const data: DataItem[] = [
    {
      label: "Dell LAPTOP",
      value: 1,
      question: "What CSS property",
      image: coin,
      color: "#ff0000",
    },
    {
      label: "IMAC PRO",
      value: 2,
      question: "What CSS property",
      image: coin,
      color: "#00ff00",
    },
    {
      label: "SUZUKI",
      value: 3,
      question: "What CSS property",
      image: coin,
      color: "#0000ff",
    },
    {
      label: "HONDA",
      value: 4,
      question: "What CSS property",
      image: coin,
      color: "#ffff00",
    },
    {
      label: "FERRARI",
      value: 5,
      question: "What CSS property",
      image: coin,
      color: "#ff00ff",
    },
    {
      label: "APARTMENT",
      value: 6,
      question: "What CSS property",
      image: coin,
      color: "#00ffff",
    },
    {
      label: "IPAD PRO",
      value: 7,
      question: "What CSS property",

      image: coin,
      color: "#ff8000",
    },
    {
      label: "LAND",
      value: 8,
      question: "What CSS property",

      image: coin,
      color: "#8000ff",
    },
    {
      label: "MOTOROLLA",
      value: 9,
      question: "What CSS property",

      image: coin,
      color: "#008000",
    },
    {
      label: "BMW",
      value: 10,
      question: "What CSS property",

      image: coin,
      color: "#800000",
    },
  ];

useEffect(()=>{
     const userData = localStorage.getItem("userInfo");
     const parsed = JSON.parse(localStorage.getItem("userInfo"));
     console.log(parsed.spin);
     setSpins(parsed.spin);
     console.log(spins);
     
},[])

  useEffect(() => {
    const w = window.innerWidth * 1; // 80% of container width
    const h = window.innerHeight * 0.6; // 80% of container height
    const r = (Math.min(w, h) / 2) * 0.8; // Adjust 0.7 to control the size

    let rotation = 0;
    let oldrotation = 0;
    let picked = 100000;
    const oldpick: number[] = [];

    d3.select(chartRef.current).select("svg").remove();

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", "100%") // Set to 100% for responsiveness
      .attr("height", "100%"); // Set to 100% for responsiveness

    const container = svg
      .append("g")
      .attr("class", "chartholder")
      .attr("transform", `translate(${w / 2},${h / 2})`);

    const vis = container.append("g");

    container
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", r + 10)
      .style("fill", "none")
      .style("stroke", "#2465CF")
      .style("stroke-width", "5px");

    const pie = d3
      .pie<DataItem>()
      .sort(null)
      .value(() => 1);

    const arc = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .outerRadius(r)
      .innerRadius(0);

    const arcs = vis
      .selectAll<SVGGElement, d3.PieArcDatum<DataItem>>("g.slice")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "slice");

    arcs
      .append("path")
      .attr("fill", (d) => d.data.color)
      .attr("d", arc)
      .style("stroke", "white")
      .style("stroke-width", "2px");

    arcs
      .append("image")
      .attr("xlink:href", (d) => d.data.image)
      .attr("x", (d) => {
        const angle = (d.startAngle + d.endAngle) / 2;
        return (r - 15) * Math.cos(angle - Math.PI / 2); // Position image slightly outside the radius
      })
      .attr("y", (d) => {
        const angle = (d.startAngle + d.endAngle) / 2;
        return (r - 15) * Math.sin(angle - Math.PI / 2); // Position image slightly outside the radius
      })
      .attr("width", "23px") // Set image size
      .attr("height", "23px")
      .attr("transform", "translate(-10, -10)"); // Adjust to center the image

    arcs
      .append("text")
      .attr("transform", (d) => {
        const angle = (d.startAngle + d.endAngle) / 2;
        return `rotate(${(angle * 180) / Math.PI - 90})translate(${r - 87})`; // Align text further out for image space
      })
      .attr("class", "tx-shadow")
      .text((d) => `${d.data.label}`)
      .style("font-size", "12px")
      .style("font-weight", "800");

    container.on("click", spin);

    function spin() {
      setIsSpinning(true); // Set spinning to true
     setSpins((prev)=> prev-1)
      
      container.on("click", null); // Disable click during spin
      if (oldpick.length === data.length) {
        container.on("click", null);
        return;
      }

      const ps = 360 / data.length;
      const rng = Math.floor(Math.random() * 1440 + 360);
      rotation = Math.round(rng / ps) * ps;
      picked = Math.round(data.length - (rotation % 360) / ps);
      picked = picked >= data.length ? picked % data.length : picked;

      if (oldpick.indexOf(picked) !== -1) {
        d3.select(this).call(spin);
        return;
      } else {
        oldpick.push(picked);
      }

      rotation += 90 - Math.round(ps / 2);
      vis
        .transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .on("end", function () {
          d3.select(`.slice:nth-child(${picked + 1}) path`).style(
            "stroke",
            "#2465CF"
          );
          if (questionRef.current) {
            questionRef.current.querySelector("h1")!.textContent = `${
              data[picked].question + picked
            }`;
            setTimeout(() => {
              questionRef.current.querySelector("h1")!.textContent = "";
            }, 4000);
          }
          oldrotation = rotation;
          container.on("click", spin);

          setTimeout(() => {
            d3.select(`.slice:nth-child(${picked + 1}) path`).style(
              "stroke",
              ""
            );
            setIsSpinning(false); // Set spinning to false after the spin ends
          }, 4000);
        });
    }
    spinRef.current = spin;
    function rotTween() {
      const i = d3.interpolate(oldrotation % 360, rotation);
      return (t: number) => `rotate(${i(t)})`;
    }

    svg
      .append("g")
      .attr("transform", `translate(${w / 1.1},${h / 2})`)
      .append("path")
      .attr("d", `M-${r * 0.15},0L0,${r * 0.05}L0,-${r * 0.05}Z`)
      .style("fill", "black");
  }, []);


useEffect(() => {
  const userData = localStorage.getItem("userInfo");
  const parsed = JSON.parse(userData);
  const s = JSON.stringify({ ...parsed, spin: spins });
  localStorage.setItem("userInfo",s);
  console.log(localStorage.getItem("userInfo"));
}, [spins]);


useEffect(() => {
  const userData = localStorage.getItem("userInfo");
  console.log(localStorage.getItem("userInfo"));
}, []);

  return (
    <div className="w-full h-screen flex flex-col items-center overflow-hidden">
      <div className=" fixed top-0 bottom-0 left-0 right-0 -z-1 items-center">
        <img src={bg} alt="" className="w-full h-full" />
      </div>
      <div
        ref={chartRef}
        className="flex justify-center w-full h-[500px] mt-10 items-center chartref flex-col-reverse z-10"
      >
        <div
          ref={questionRef}
          className="mt-4 text-center zindex fixed tx-shadow text-white text-[20px] right-[50%] top-10"
        >
          <h1></h1>
        </div>
        <button
          className={`main-button bubblegum-sans w-[100px] -mt-[50px] ${
            isSpinning || spins <= 0 ? "opacity-70 cursor-not-allowed" : ""
          }`}
          onClick={() => !isSpinning && spinRef.current()}
        >
          <div className="upper btn-upper">Spin</div>
          <div className="lower btn-lower"></div>
        </button>
      </div>
      <Back />
      <div
        ref={questionRef}
        className=" text-center tx-shadow text-white font-[20px] z-10"
      >
        <h1 className="font-[20px]"></h1>
      </div>
      <div className="flex items-center bg-white rounded-full border-2 max-w-[300px] w-[100px] justify-between border h-8 top-2 fixed right-4">
        <img src={ring} alt="" className="w-12 h-12 z-[2] -ml-3" />
        <p className="font-normal text-[16px] text-[#2465CF] ">{spins}</p>
        <img src={plus} alt="" className="w-7 h-7 z-[2] -mr-1" />
      </div>
    </div>
  );
};

export default SpinningWheel;
