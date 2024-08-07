import { useState } from "react";
import logo from "../src/assets/logo.png";
import { delay, motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(true);
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  //slider box animation
  const variants = {
    open: {
      clipPath: "inset(0% 0% 0% 0%)", // Rectangle shape
      // height: "62%", // Full height of the container
      // width: "3.5%", // Full width of the container
      height: isSmallScreen ? "50%" : "62%",
      width: isSmallScreen ? "5%" : "3.5%",
      backgroundColor: "transparent",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      clipPath: "inset(0% 0% 0% 0%)",
      // width: "15%",
      // height: "200vh",
      width: isSmallScreen ? "30%" : "15%",
      height: "200vh",
      borderRadius: "0px",
      backgroundColor: "white",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  ///////////////////////////////////////////
  const parentVariants = {
    open: {
      opacity: 0,

      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
    close: {
      opacity: 1,

      transition: {
        staggerChildren: 0.3,
        delay: 1,
      },
    },
  };

  const childVariants = {
    open: {
      opacity: 0,
      x: -200,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
    close: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <div className="h-screen w-screen overflow-hidden absolute z-30">
        <div className="w-full h-[80px] bg-transparent relative flex items-center mt-10">
          <img src={logo} alt="" className="scale-[0.7] z-20 brightness-0" />
          <motion.div
            className="w-[3%] h-[62%]  bg-transparent  rounded-full absolute right-0 flex items-center justify-center"
            variants={variants}
            animate={open ? "open" : "closed"}>
            <motion.div
              variants={parentVariants}
              animate={open ? "open" : "close"}
              className="w-fit h-full z-30 fixed  mt-10 flex flex-col top-0 justify-center md:gap-7 gap-8 ls:gap-8 text-clamp-md lg:text-[1.5rem] lg:items-center md:text-[2rem] items-center text-black ">
              <motion.a
                href=""
                variants={childVariants}
                onClick={() => setOpen(true)}>
                Home{" "}
              </motion.a>
              <motion.a
                href="#second_page"
                variants={childVariants}
                onClick={() => setOpen(true)}>
                Packages{" "}
              </motion.a>
              <motion.a
                href="#third_page"
                variants={childVariants}
                onClick={() => setOpen(true)}>
                Customers{" "}
              </motion.a>
              <motion.a
                href="#fourth_page"
                variants={childVariants}
                className="md:ml-[2.5rem] lg:ml-0 text-center lg:leading-[1.5rem]"
                onClick={() => setOpen(true)}>
                corporate Customers{" "}
              </motion.a>
              <motion.a
                href="#fifth_page"
                variants={childVariants}
                onClick={() => setOpen(true)}>
                Exotic Places{" "}
              </motion.a>
              <motion.a
                href="#state onClick={()=>setOpen(true)}"
                variants={childVariants}
                onClick={() => setOpen(true)}>
                States{" "}
              </motion.a>
            </motion.div>
          </motion.div>
          <button
            className=" bg-transparent text-black right-10 absolute flex justify-center items-center"
            onClick={() => setOpen((prev) => !prev)}>
            <motion.svg
              width="23"
              height="23"
              viewBox="0 0 23 23 "
              className="scale-[0.8] md:scale-[1] ">
              <motion.path
                strokeWidth="3"
                stroke="black"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                animate={open ? "closed" : "open"}
              />
              <motion.path
                strokeWidth="3"
                stroke="black"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 9.423 L 20 9.423" },
                  open: { opacity: 0 },
                }}
                animate={open ? "closed" : "open"}
              />
              <motion.path
                strokeWidth="3"
                stroke="black"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
                animate={open ? "closed" : "open"}
              />
            </motion.svg>
          </button>
        </div>
      </div>
    </>
  );
}
