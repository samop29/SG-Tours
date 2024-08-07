import { useEffect, useRef, useState, lazy, Suspense } from "react";
import "./Home.css";
import bglayer from "./assets/bglayer.webp";
import fog_5 from "./assets/fog_5.webp";
import advanture1 from "./assets/advanture1.webp";
import relax from "./assets/relax.webp";
import culture from "./assets/culture.webp";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tilt } from "react-tilt";
import corporate from "./assets/corporate.webp";
import corporate2 from "./assets/corporate (1).webp";
import corporate3 from "./assets/corporate (2).webp";
import corporate4 from "./assets/corporate (3).webp";
import Slide from "./Slide";
export default function Home() {
  const Cards = lazy(() => import("./Cards"));
  // const WorldMap = lazy(() => import("./WorldMap"));
  /////////////////////////////////////////////// peralax effect
  const txt = useRef();
  const { scrollYProgress } = useScroll({
    target: txt,
    offset: ["start start", "end start"],
  });
  const variable = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);
  /////////////////////////////////////////////

  ///////////////////////////////////////////////hero text effect
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    //////////page 1
    const tl = gsap.timeline({});
    tl.from("span", {
      delay: 2.5,
      y: "100px",
      opacity: 0,
      stagger: 0.1,
      duration: 1,
    });

    ///////////////page 2 heading n pera
    const ty = gsap.timeline({
      scrollTrigger: {
        trigger: "#second_page",
        markers: false,
        start: "top -10 %",
        end: "bottom 100%",
        // scrub: true,
      },
    });
    ty.from("#dream", {
      opacity: 0,
      x: 1500,
      duration: 1,
    });

    ty.from(
      "#dream_pera",
      {
        x: -1500,
        opacity: 0,
        duration: 1,
      },
      "-=0.9"
    );

    ///////////////////page 2 img
    const tz = gsap.timeline({
      scrollTrigger: {
        trigger: "#second_page",
        markers: false,
        start: "top 0%",
        end: "bottom 100%",
      },
    });

    tz.from("#img1", {
      delay: 0.5,
      opacity: 0,
      scale: 0,
      duration: 0.7,
      ease: "circ.inOut",
    });
    tz.from(
      "#img2",
      {
        opacity: 0,
        scale: 0,
        duration: 0.7,
        ease: "circ.inOut",
      },
      "-=0.3"
    );
    tz.from(
      "#img3",
      {
        opacity: 0,
        scale: 0,
        duration: 0.7,
        ease: "circ.inOut",
      },
      "-=0.3"
    );
  });

  /////////////////////////////////////////////

  ///////////////////////////////img tilt
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 40, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    speed: 1000,
    scale: 1.1, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  ////////////////////////////////////////////////////
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  //////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////circle cursor
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <>
      <div>
        {/* /* //////////////////////////////////////page 1 */}
        <motion.div
          className="w-full h-full overflow-hidden  "
          initial={{ position: "absolute" }}
          animate={{ position: "relative" }}
          transition={{ delay: 3 }}>
          {/* ///////////////fog animation */}
          <motion.img
            src={fog_5}
            alt=""
            className="w-full h-full z-[90] absolute -left-[30rem] -top-[20rem] overflow-hidden brightness-200"
            initial={{ opacity: 1 }}
            animate={{
              x: -500,
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              delay: 1,
            }}
          />
          <motion.img
            src={fog_5}
            alt=""
            className="w-full h-full z-[90] absolute -right-[20rem] -top-[20rem] overflow-hidden brightness-200"
            initial={{ opacity: 1 }}
            animate={{
              x: 1000,
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 1.5,
              delay: 1,
            }}
          />
          <motion.img
            src={fog_5}
            alt=""
            className="w-full h-full z-[90] absolute -left-[30rem] top-[5rem] overflow-hidden brightness-200"
            initial={{ opacity: 1 }}
            animate={{
              x: -500,

              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 1.5,
              delay: 1,
            }}
          />
          <motion.img
            src={fog_5}
            alt=""
            className="w-full h-full z-[90] absolute -right-[20rem] top-[5rem] overflow-hidden brightness-200"
            initial={{ opacity: 1 }}
            animate={{
              x: 1000,
              scale: 0,

              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              delay: 1,
            }}
          />

          {/* /////////////////////////////////// */}
        </motion.div>
        <div className="w-[100vw] h-[100vh] overflow-hidden" id="Hero">
          <div>
            <motion.div
              ref={txt}
              style={{
                y: variable,
              }}
              className="text-roboto text-newCream text-hero-size text-center font-semibold md:mt-[13rem] lg:mt-[0]  mt-[12rem] ">
              <span className="drop-shadow-xl">D</span>
              <span className="drop-shadow-xl">r</span>
              <span className="drop-shadow-xl">e</span>
              <span className="drop-shadow-xl">a</span>
              <span className="drop-shadow-xl">m</span>
              <span className="drop-shadow-xl">.</span>
              <span>.</span>
            </motion.div>
            <img
              src={bglayer}
              alt=""
              className="absolute -bottom-12 left-0 w-full opacity-0 lg:opacity-[1] overflow-hidden "
            />
          </div>
        </div>

        {/* /////////////////////////////////////////////page 2 */}
        <div
          className="w-screen h-max  bg-newCream lg:px-20 px-5 py-10 lg:py-40"
          id="second_page">
          <div
            className="w-full h-fit text-center text-newOrange text-sp-size md:text-[2.5rem] text-dream font-nunito md:leading-[3rem] lg:leading-[3.5rem] leading-[1.7rem] font-medium "
            id="dream">
            Discover Your Dream Travel
            <br /> Experience today
          </div>

          <div
            className="mx-auto text-center md:text-[1rem] lg:text-xs text-[.5rem] mt-8 text-nunito lg:w-[50%] md:w-[90%] w-[17rem] text-black"
            id="dream_pera">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
            excepturi? Officiis ullam quia aliquam asperiores. Voluptas alias
            delectus dignissimos, non aut debitis reprehenderit omnis pariatur
            aliquam? Itaque tenetur veniam culpa? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aliquid maxime reiciendis, fugit harum
            obcaecati recusandae.
          </div>

          <div
            className="w-full h-max  flex justify-between items-center flex-col md:flex-row md:flex-wrap md:justify-center lg:flex-row px-[4rem] lg:mt-[6rem] mt-[3rem] cursor-pointer md:mt-[8rem]"
            id="img-pera">
            {/* //////////// */}
            <div className="lg:w-[30%] w-[18rem] h-full px-5 " id="img1">
              <Tilt options={defaultOptions} className="w-full h-[15rem] ">
                <img
                  src={advanture1}
                  className="w-full h-full drop-shadow-2xl shadow-2xl hover:shadow-[#292929d6]   transition-all duration-[0.3] ease-in-out"
                  alt=""
                />
              </Tilt>
              <div className="w-full text-center lg:text-[2rem] md:text-[1.5rem] text-[1rem] text-dream font-medium mt-[2rem]">
                Adventure Package
              </div>
              <div className="w-full text-center text-[0.6rem] md:text-[.8rem] md:leading-[1rem]  mt-[4%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                aliquid repudiandae praesentium! Sint consectetur provident
                voluptatem error quisquam, nisi tempore!
              </div>
            </div>

            <div
              className="lg:w-[30%] w-[18rem] h-full px-5 lg:mt-0 md:mt-0 mt-[2rem]"
              id="img2">
              <Tilt options={defaultOptions} className="w-full h-[15rem] ">
                <img
                  src={relax}
                  className="w-full h-full drop-shadow-2xl shadow-2xl hover:shadow-[#292929d6] transition-all duration-[0.3] ease-in-out"
                  alt=""
                />
              </Tilt>
              <div className="w-full text-center lg:text-[2rem] text-[1rem] md:text-[1.5rem] text-dream font-medium mt-[2rem]">
                Relaxation Package
              </div>
              <div className="w-full text-center text-[0.6rem] md:text-[.8rem] md:leading-[1rem]  mt-[4%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                aliquid repudiandae praesentium! Sint consectetur provident
                voluptatem error quisquam, nisi tempore!
              </div>
            </div>

            <div
              className="lg:w-[30%] w-[18rem] h-full md:mt-[4rem] lg:mt-[1rem] px-5  mt-[2rem]"
              id="img3">
              <Tilt options={defaultOptions} className="w-full h-[15rem]">
                <img
                  src={culture}
                  className="w-full h-full drop-shadow-2xl shadow-2xl  hover:shadow-[#292929d6] transition-all duration-[0.3] ease-in-out"
                  alt=""
                />
              </Tilt>
              <div className="w-full text-center lg:text-[2rem] text-[1rem] md:text-[1.5rem] text-dream font-medium mt-[2rem] leading-8">
                Cultural Immersion Package
              </div>
              <div className="w-full text-center text-[0.6rem] md:text-[.8rem] md:leading-[1rem]  mt-[4%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                aliquid repudiandae praesentium! Sint consectetur provident
                voluptatem error
              </div>
            </div>
          </div>

          <div className="w-full h-max text-center lg:mt-[4rem] mt-[2rem]  text-newOrange text-nunito">
            <button className="border-2 px-3 py-2 border-newOrange hover:bg-newOrange hover:text-white">
              Know More
            </button>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////page 3 */}
        <div className="lg:-mt-[8rem] mt-[0] mb-0 md:mb-[6rem]" id="third_page">
          <Suspense fallback={<p>Loading...</p>}>
            <Cards />
          </Suspense>
        </div>

        {/* ////////////////////////////////////////////////////page 4 */}

        <div
          className="w-screen lg:h-[100vh] h-[50vh] py-10 px-6  lg:px-40 lg:py-32 overflow-scroll overflow-x-hidden bg-newCream lg:mb-0 mb-[5rem]"
          id="fourth_page">
          <div className="lg:text-sp-size text-[1rem] text-newOrange font-semibold border-b-2 border-newOrange sticky lg:-top-36 -top-10 bg-newCream z-10">
            Corporate Collabration
          </div>

          <div className="w-full h-full flex flex-col lg:flex-row items-center lg:justify-between justify-normal ">
            {/* //item center */}
            <div className="lg:w-[45%] w-[17rem] h-fit lg:mt-32 mt-10">
              <img src={corporate} alt="" className="" />
            </div>

            <div className="lg:w-[45%] w-[17rem] h-fit flex flex-col relative mt-[1rem] lg:mt-[8rem] ">
              <div className="font-opensans  font-normal  text-cus-size ">
                NimbusTech Solutions
              </div>
              <div className="font-railway">Paris,France</div>
              <div className="lg:mt-12 mt-[1rem] text-[.8rem] font-cursive">
                "Fantastic experience! Our corporate tour was well-organized and
                seamless. The team enjoyed every moment, and the professionalism
                was top-notch. Highly recommended for any business looking to
                travel efficiently!"
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col lg:flex-row items-center lg:justify-between justify-normal mt-[7rem] ">
            <div className="lg:w-[45%] w-[17rem] h-fit lg:mt-32 mt-10 lg:order-2">
              <img src={corporate2} alt="" className="" />
            </div>

            <div className="lg:w-[45%] w-[17rem] h-auto flex flex-col justify-center mt-[3rem] lg:mt-[8rem] -top-[2rem] relative lg:top-0">
              <div className="font-opensans  font-normal  text-cus-size  ">
                EchoWave Innovations Ltd.
              </div>
              <div className="font-railway">Kyoto,Japan</div>
              <div className="lg:mt-12 mt-[1rem] text-[.8rem] font-cursive">
                "The corporate tour exceeded our expectations! Everything was
                perfectly planned, and the accommodations were excellent. Our
                team had a productive and enjoyable trip. Will definitely book
                again!"
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col lg:flex-row items-center lg:justify-between justify-normal  mt-[7rem] ">
            <div className="lg:w-[45%] w-[17rem] h-full lg:mt-32 mt-10">
              <img src={corporate3} alt="" className="" />
            </div>

            <div className="lg:w-[45%] w-[17rem] h-auto flex flex-col justify-center mt-[1rem] lg:mt-[8rem] top-[0rem] relative lg:top-0">
              <div className="font-opensans  font-normal  text-cus-size  ">
                NLunaVista Enterprises
              </div>
              <div className="font-railway">Cape Town,South Africa</div>
              <div className="lg:mt-12 mt-[1rem] text-[.8rem] font-cursive">
                "Exceptional service from start to finish. The itinerary was
                tailored to our needs, and the logistics were handled
                flawlessly. Our corporate retreat was a great success thanks to
                your company."
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col lg:flex-row items-center lg:justify-between justify-normal  mt-[7rem] data-scroll-section">
            <div className="lg:w-[45%] w-[17rem] h-full lg:mt-32 mt-5 lg:order-2">
              <img src={corporate4} alt="" className="" />
            </div>

            <div className="lg:w-[45%] w-[17rem] h-auto flex flex-col justify-center mt-[1rem] lg:mt-[8rem] top-[0rem] relative lg:top-0 ">
              <div className="font-opensans  font-normal  text-cus-size ">
                QuantumCore Industries
              </div>
              <div className="font-railway">Reykjavik, Iceland</div>
              <div className="lg:mt-12 mt-[1rem] text-[.8rem] font-cursive">
                "Impressed with the level of detail and care. The
                transportation, hotels, and activities were all first-class. Our
                team had a memorable and stress-free experience. Highly
                recommend for corporate travel."
              </div>
            </div>
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////page 5 */}
        <div
          // ref={page5}
          className="w-full h-[100vh] lg:py-[6rem] py-[0rem] px-7 lg:px-40 mb-[13rem]"
          id="fifth_page">
          <div>
            <div className="font-nunito font-medium w-full text-center text-cus-size text-newOrange lg:mb-0 mb-1">
              Destinations
            </div>
            <div className="font-dream text-sp-size text-center font-medium -mt-4">
              Go To Exotic Places
            </div>
          </div>

          <div className="w-full h-full mt-[3rem]">
            <div className="w-full h-[20%] lg:h-[50%] flex gap-1">
              <motion.div
                className="h-full w-[24%]  rounded-lg bg-[url('./assets/page53.webp')] bg-cover  overflow-hidden "
                id="moroco"
                // style={{ backgroundPositionY: -30 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                // initial={{ scale: 0 }}
                // animate={inview && { scale: 1 }}
                // transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                <div className=" w-fit lg:py-[0.06rem] py-[0.02rem] lg:text-[.5rem] text-[.3rem] lg:px-[0.7rem] px-[0.3rem] mt-[.5rem] rounded-md text-center lg:ml-[.5rem]  font-dream bg-newOrange text-white ">
                  Hot Pick
                </div>
                <motion.div
                  animate={{ y: isHovered ? -300 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-playop text-center font-thin relative top-[20rem] text-black text-[1.5rem]"
                  id="text-onimg">
                  Morocco
                </motion.div>
              </motion.div>
              <motion.div
                className="h-full w-[49%]  rounded-lg bg-[url('./assets/page5.webp')] bg-cover overflow-hidden "
                onHoverStart={() => setIsHovered1(true)}
                onHoverEnd={() => setIsHovered1(false)}
                // initial={{ scale: 0 }}
                // animate={inview && { scale: 1 }}
                // transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
              >
                <motion.div
                  animate={{ y: isHovered1 ? -300 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-playop text-center font-thin relative top-[20rem] text-blacknewOrange text-[1.5rem]  "
                  id="text-onimg">
                  United Kingdom
                </motion.div>
              </motion.div>
              <motion.div
                className="h-full w-[24%]  rounded-lg  bg-[url('./assets/page52.webp')] bg-cover overflow-hidden "
                onHoverStart={() => setIsHovered2(true)}
                onHoverEnd={() => setIsHovered2(false)}
                // initial={{ scale: 0 }}
                // animate={inview && { scale: 1 }}
                // transition={{ duration: 0.5, delay: 0.8, ease: "linear" }}
              >
                <div className=" w-fit lg:py-[0.06rem] py-[0.02rem] lg:text-[.5rem] text-[.3rem] lg:px-[0.7rem] px-[0.3rem] mt-[.5rem] rounded-md text-center ml-[.0rem] lg:ml-[0.5rem]  font-dream bg-newOrange text-white ">
                  Hot Pick
                </div>
                <motion.div
                  animate={{ y: isHovered2 ? -300 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-playop text-center font-thin relative top-[20rem] text-black text-[1.5rem]"
                  id="text-onimg">
                  Singapoor
                </motion.div>
              </motion.div>
            </div>

            <div className="w-full h-[20%] lg:h-[50%] flex mt-1 gap-1">
              <motion.div
                className="h-full w-[49%]  rounded-lg bg-[url('./assets/page51.webp')] bg-cover overflow-hidden"
                onHoverStart={() => setIsHovered3(true)}
                onHoverEnd={() => setIsHovered3(false)}
                // initial={{ scale: 0 }}
                // animate={inview && { scale: 1 }}
                // transition={{ duration: 0.5, delay: 1.1, ease: "linear" }}
              >
                <motion.div
                  animate={{ y: isHovered3 ? -300 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-playop text-center font-thin relative top-[20rem] text-black text-[1.5rem]"
                  id="text-onimg">
                  Italy
                </motion.div>
              </motion.div>
              <motion.div
                className="h-full w-[49%]  rounded-lg bg-[url('./assets/page54.webp')] bg-cover overflow-hidden"
                onHoverStart={() => setIsHovered4(true)}
                onHoverEnd={() => setIsHovered4(false)}
                // initial={{ scale: 0 }}
                // animate={inview && { scale: 1 }}
                // transition={{ duration: 0.5, delay: 1.4, ease: "linear" }}
              >
                <div className=" w-fit lg:py-[0.06rem] py-[0.02rem] lg:text-[.5rem] text-[.3rem] lg:px-[0.7rem] px-[0.3rem]  mt-[.5rem] rounded-md text-center lg:ml-[.5rem] ml-[0]  font-dream bg-newOrange text-white ">
                  Hot Pick
                </div>
                <motion.div
                  animate={{ y: isHovered4 ? -300 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-playop text-center font-thin relative top-[20rem] text-black text-[1.5rem]"
                  id="text-onimg">
                  Switzerland
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////page6*/}
        <Slide id="state" />

        {/* ///////////////////////////////////////////////////////page7 */}
      </div>
    </>
  );
}
