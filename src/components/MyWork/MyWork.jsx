import React, { useState, useEffect } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import { motion } from "framer-motion";

const MyWork = () => {

  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % mywork_data.length);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % mywork_data.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? mywork_data.length - 1 : prev - 1
    );
  };

  return (
    <div id="work" className="mywork">

      <div className="mywork-title">
        <h1>My Latest Achievements</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* CURRENT PROJECT TITLE */}
      <div className="current-project-title">
        {mywork_data[index].w_name}
      </div>

      <div className="carousel">

        <button className="nav left" onClick={prev}>❮</button>

        <div className="mywork-container">

          {mywork_data.map((work, i) => {

            const position = i - index;

            let style = {
              transform: `translateX(${position * 320}px) scale(${i === index ? 1.2 : 0.8})`,
              opacity: i === index ? 1 : 0.4,
              zIndex: i === index ? 5 : 1
            };

            return (
              <motion.div
                className="mywork-item"
                key={i}
                style={style}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -100) next();
                  if (info.offset.x > 100) prev();
                }}
              >
                <img src={work.w_img} alt={work.w_name} />
              </motion.div>
            );
          })}

        </div>

        <button className="nav right" onClick={next}>❯</button>

      </div>

    </div>
  );
};

export default MyWork;