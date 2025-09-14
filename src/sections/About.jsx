import Card from "../components/Card";
import { useRef } from "react";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className=" mx-5 pt-30 pb-10 mt-5 c-space">
      <h2 className="text-heading ">About me</h2>
      <div className="grid auto-rows-[15rem]  gap-4 md:grid-cols-4  mt-7 sm:col-span-1 w-auto">
        <div className="md:auto-rows-[15rem] relative grid-default-color col-span-2  md:row-span-2 overflow-hidden ">
          <img
            src="assets/coding-pov.png"
            alt=""
            className="relative -top-20 md:-top-5 inset-0 scale-[2.5] left-20 md:scale-[2.5] md:left-40 md:inset-y-10 opacity-65"
          />
          <div className="z-10 absolute top-27 md:top-90 mr-3">
            <p className="headtext text-white-50">Hi, I'm Austin</p>
            <p className="subtext text-white-100">
              Over the last 4 years, I developed my frontend design skills to
              deliver dynamic and responsive designs{" "}
            </p>
          </div>
          {/* <div className="absolute inset-x-o pointer-events-none-bottom-4 h-1/2 bg-gradient-to-t from-indigo"></div> */}
        </div>

        <div className=" grid-default-color col-span-2 relative">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">CODE IS ART</p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "30%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "38deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        <div className=" grid-black-color col-span-2  ">
          <div className="z-10 w-50">
            <p className="headText">Time Zone</p>
            <p className="subtext">
              I'm based in Mars and open to remote world galaxy-wide
            </p>
          </div>
        </div>
        <div className="grid-special-color col-span-2  md:col-span-1">
          <div className="flex flex-col align-items-center justify-center">
            <p className="text-center headtext">Do you want to start a project together?</p>

          </div>
        </div>
        <div className="grid-default-color col-span-2  md:col-span-3"></div>

        {/* <div className=" grid-special-color col-span-1"></div>

        <div className=" grid-default-color col-span-3 "></div> */}
      </div>
    </section>
  );
};

export default About;
