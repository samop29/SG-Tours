import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import guj1 from "./assets/state/guj json/guj (1).webp";
import guj2 from "./assets/state/guj json/guj (2).webp";
import guj3 from "./assets/state/guj json/guj (3).webp";
import guj4 from "./assets/state/guj json/guj (4).webp";
import guj5 from "./assets/state/guj json/guj (5).webp";
import guj6 from "./assets/state/guj json/guj (6).webp";
import guj7 from "./assets/state/guj json/guj (7).webp";
import guj8 from "./assets/state/guj json/guj (8).webp";
import guj9 from "./assets/state/guj json/guj (9).webp";
import guj10 from "./assets/state/guj json/guj (10).webp";
import guj11 from "./assets/state/guj json/guj (11).webp";
import guj12 from "./assets/state/guj json/guj (12).webp";
import guj13 from "./assets/state/guj json/guj (13).webp";
import guj14 from "./assets/state/guj json/guj (14).webp";
import guj15 from "./assets/state/guj json/guj (15).webp";
import ksm1 from "./assets/state/ksm json/ksm (1).webp";
import ksm2 from "./assets/state/ksm json/ksm (2).webp";
import ksm3 from "./assets/state/ksm json/ksm (3).webp";
import ksm4 from "./assets/state/ksm json/ksm (4).webp";
import ksm5 from "./assets/state/ksm json/ksm (5).webp";
import ksm6 from "./assets/state/ksm json/ksm (6).webp";
import ksm7 from "./assets/state/ksm json/ksm (7).webp";
import ksm8 from "./assets/state/ksm json/ksm (8).webp";
import ksm9 from "./assets/state/ksm json/ksm (9).webp";
import ksm10 from "./assets/state/ksm json/ksm (10).webp";
import ksm11 from "./assets/state/ksm json/ksm (11).webp";
import ksm12 from "./assets/state/ksm json/ksm (12).webp";
import ksm13 from "./assets/state/ksm json/ksm (13).webp";
import ksm14 from "./assets/state/ksm json/ksm (14).webp";
import ksm15 from "./assets/state/ksm json/ksm (15).webp";
import jp1 from "./assets/state/jp json/jp (1).webp";
import jp2 from "./assets/state/jp json/jp (2).webp";
import jp3 from "./assets/state/jp json/jp (3).webp";
import jp4 from "./assets/state/jp json/jp (4).webp";
import jp5 from "./assets/state/jp json/jp (5).webp";
import jp6 from "./assets/state/jp json/jp (6).webp";
import jp7 from "./assets/state/jp json/jp (7).webp";
import jp8 from "./assets/state/jp json/jp (8).webp";
import jp9 from "./assets/state/jp json/jp (9).webp";
import jp10 from "./assets/state/jp json/jp (10).webp";
import jp11 from "./assets/state/jp json/jp (11).webp";
import jp12 from "./assets/state/jp json/jp (12).webp";
import jp13 from "./assets/state/jp json/jp (13).webp";
import jp14 from "./assets/state/jp json/jp (14).webp";
import jp15 from "./assets/state/jp json/jp (15).webp";
import ldk1 from "./assets/state/ldk json/ldk (1).webp";
import ldk2 from "./assets/state/ldk json/ldk (2).webp";
import ldk3 from "./assets/state/ldk json/ldk (3).webp";
import ldk4 from "./assets/state/ldk json/ldk (4).webp";
import ldk5 from "./assets/state/ldk json/ldk (5).webp";
import ldk6 from "./assets/state/ldk json/ldk (6).webp";
import ldk7 from "./assets/state/ldk json/ldk (7).webp";
import ldk8 from "./assets/state/ldk json/ldk (8).webp";
import ldk9 from "./assets/state/ldk json/ldk (9).webp";
import ldk10 from "./assets/state/ldk json/ldk (10).webp";
import ldk11 from "./assets/state/ldk json/ldk (11).webp";
import ldk12 from "./assets/state/ldk json/ldk (12).webp";
import ldk13 from "./assets/state/ldk json/ldk (13).webp";
import ldk14 from "./assets/state/ldk json/ldk (14).webp";
import ldk15 from "./assets/state/ldk json/ldk (15).webp";
import krl1 from "./assets/state/krl json/krl (1).webp";
import krl2 from "./assets/state/krl json/krl (2).webp";
import krl3 from "./assets/state/krl json/krl (3).webp";
import krl4 from "./assets/state/krl json/krl (4).webp";
import krl5 from "./assets/state/krl json/krl (5).webp";
import krl6 from "./assets/state/krl json/krl (6).webp";
import krl7 from "./assets/state/krl json/krl (7).webp";
import krl8 from "./assets/state/krl json/krl (8).webp";
import krl9 from "./assets/state/krl json/krl (9).webp";
import krl10 from "./assets/state/krl json/krl (10).webp";
import krl11 from "./assets/state/krl json/krl (11).webp";
import krl12 from "./assets/state/krl json/krl (12).webp";
import krl13 from "./assets/state/krl json/krl (13).webp";
import krl14 from "./assets/state/krl json/krl (14).webp";
import krl15 from "./assets/state/krl json/krl (15).webp";

export default function Slide() {
  const [hov, setHov] = useState(false);
  const [hov1, setHov1] = useState(false);
  const [hov2, setHov2] = useState(false);
  const [hov3, setHov3] = useState(false);
  const [hov4, setHov4] = useState(false);

  return (
    <>
      <div className="w-screen h-max overflow-x-hidden relative md:top-0 sm:-top-[32rem] -top-[22rem]">
        <div className="w-full md:h-[25vh] h-[8rem] flex mb-[2rem]">
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: hov ? 1 : 0 }}
            transition={{ duration: 1 }}>
            <motion.div
              style={{ whiteSpace: "nowrap" }}
              className="flex "
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}>
              <img src={guj1} className="h-full w-auto" alt="" />
              <img src={guj2} className="h-full w-auto" alt="" />
              <img src={guj3} className="h-full w-auto" alt="" />
              <img src={guj4} className="h-full w-auto" alt="" />
              <img src={guj5} className="h-full w-auto" alt="" />
              <img src={guj6} className="h-full w-auto" alt="" />
              <img src={guj7} className="h-full w-auto" alt="" />
              <img src={guj8} className="h-full w-auto" alt="" />
              <img src={guj9} className="h-full w-auto" alt="" />
              <img src={guj10} className="h-full w-auto" alt="" />
              <img src={guj11} className="h-full w-auto" alt="" />
              <img src={guj12} className="h-full w-auto" alt="" />
              <img src={guj13} className="h-full w-auto" alt="" />
              <img src={guj14} className="h-full w-auto" alt="" />
              <img src={guj15} className="h-full w-auto" alt="" />
              <img src={guj1} className="h-full w-auto" alt="" />
              <img src={guj2} className="h-full w-auto" alt="" />
              <img src={guj3} className="h-full w-auto" alt="" />
              <img src={guj4} className="h-full w-auto" alt="" />
              <img src={guj5} className="h-full w-auto" alt="" />
              <img src={guj6} className="h-full w-auto" alt="" />
              <img src={guj7} className="h-full w-auto" alt="" />
              <img src={guj8} className="h-full w-auto" alt="" />
              <img src={guj9} className="h-full w-auto" alt="" />
              <img src={guj10} className="h-full w-auto" alt="" />
              <img src={guj11} className="h-full w-auto" alt="" />
              <img src={guj12} className="h-full w-auto" alt="" />
              <img src={guj13} className="h-full w-auto" alt="" />
              <img src={guj14} className="h-full w-auto" alt="" />
              <img src={guj15} className="h-full w-auto" alt="" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute font-railway text-black md:text-[7rem] text-[2rem] left-[50%] rihgt-[50%] translate-x-[-50%] md:translate-y-0 translate-y-[50%] "
            animate={{ color: hov ? "white" : "" }}
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}>
            GUJARAT
          </motion.div>
        </div>
        <div className="w-full md:h-[25vh] h-[8rem] flex mb-[2rem] ">
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: hov1 ? 1 : 0 }}
            transition={{ duration: 1 }}>
            <motion.div
              style={{ whiteSpace: "nowrap" }}
              className="flex "
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}>
              <img src={ksm1} alt="" />
              <img src={ksm2} alt="" />
              <img src={ksm3} alt="" />
              <img src={ksm4} alt="" />
              <img src={ksm5} alt="" />
              <img src={ksm6} alt="" />
              <img src={ksm7} alt="" />
              <img src={ksm8} alt="" />
              <img src={ksm9} alt="" />
              <img src={ksm10} alt="" />
              <img src={ksm11} alt="" />
              <img src={ksm12} alt="" />
              <img src={ksm13} alt="" />
              <img src={ksm14} alt="" />
              <img src={ksm15} alt="" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute font-railway md:text-[7rem] text-[2rem] left-[50%] rihgt-[50%] translate-x-[-50%] translate-y-[50%] md:translate-y-0"
            animate={{ color: hov1 ? "white" : "" }}
            onHoverStart={() => setHov1(true)}
            onHoverEnd={() => setHov1(false)}>
            KASHMIR
          </motion.div>
        </div>
        <div className="w-full md:h-[25vh] h-[8rem] flex mb-[2rem]">
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: hov2 ? 1 : 0 }}
            transition={{ duration: 1 }}>
            <motion.div
              style={{ whiteSpace: "nowrap" }}
              className="flex "
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}>
              <img src={jp1} alt="" />
              <img src={jp2} alt="" />
              <img src={jp3} alt="" />
              <img src={jp4} alt="" />
              <img src={jp5} alt="" />
              <img src={jp6} alt="" />
              <img src={jp7} alt="" />
              <img src={jp8} alt="" />
              <img src={jp9} alt="" />
              <img src={jp10} alt="" />
              <img src={jp11} alt="" />
              <img src={jp12} alt="" />
              <img src={jp13} alt="" />
              <img src={jp14} alt="" />
              <img src={jp15} alt="" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute font-railway text-black md:text-[7rem] text-[2rem] left-[50%] rihgt-[50%] translate-x-[-50%] translate-y-[50%]  md:translate-y-0"
            animate={{ color: hov2 ? "white" : "" }}
            onHoverStart={() => setHov2(true)}
            onHoverEnd={() => setHov2(false)}>
            RAJASTHAN
          </motion.div>
        </div>
        <div className="w-full md:h-[25vh] h-[8rem] flex mb-[2rem]">
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: hov3 ? 1 : 0 }}
            transition={{ duration: 1 }}>
            <motion.div
              style={{ whiteSpace: "nowrap" }}
              className="flex "
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}>
              <img src={ldk1} alt="" />
              <img src={ldk2} alt="" />
              <img src={ldk3} alt="" />
              <img src={ldk4} alt="" />
              <img src={ldk5} alt="" />
              <img src={ldk6} alt="" />
              <img src={ldk7} alt="" />
              <img src={ldk8} alt="" />
              <img src={ldk9} alt="" />
              <img src={ldk10} alt="" />
              <img src={ldk11} alt="" />
              <img src={ldk12} alt="" />
              <img src={ldk13} alt="" />
              <img src={ldk14} alt="" />
              <img src={ldk15} alt="" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute font-railway text-black md:text-[7rem] text-[2rem] left-[50%] rihgt-[50%] translate-x-[-50%] translate-y-[50%] md:translate-y-0 "
            animate={{ color: hov3 ? "white" : "" }}
            onHoverStart={() => setHov3(true)}
            onHoverEnd={() => setHov3(false)}>
            LADAKH
          </motion.div>
        </div>
        <div className="w-full md:h-[25vh] h-[8rem] flex mb-[2rem]">
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: hov4 ? 1 : 0 }}
            transition={{ duration: 1 }}>
            <motion.div
              style={{ whiteSpace: "nowrap" }}
              className="flex "
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}>
              <img src={krl1} alt="" />
              <img src={krl2} alt="" />
              <img src={krl3} alt="" />
              <img src={krl4} alt="" />
              <img src={krl5} alt="" />
              <img src={krl6} alt="" />
              <img src={krl7} alt="" />
              <img src={krl8} alt="" />
              <img src={krl9} alt="" />
              <img src={krl10} alt="" />
              <img src={krl11} alt="" />
              <img src={krl12} alt="" />
              <img src={krl13} alt="" />
              <img src={krl14} alt="" />
              <img src={krl15} alt="" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute font-railway text-black md:text-[7rem] text-[2rem] left-[50%] rihgt-[50%] translate-x-[-50%] translate-y-[50%]  md:translate-y-0 "
            animate={{ color: hov4 ? "white" : "" }}
            onHoverStart={() => setHov4(true)}
            onHoverEnd={() => setHov4(false)}>
            KERELA
          </motion.div>
        </div>
      </div>
    </>
  );
}
