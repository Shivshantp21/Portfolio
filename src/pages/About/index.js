import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h1 className="text-4xl font-semibold drop-shadow-md text-center mt-5">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              // src="https://res.cloudinary.com/dndmpobbf/image/upload/v1738940024/sp-removebg_ulkn1o.png"
              src="https://res.cloudinary.com/dndmpobbf/image/upload/v1740667417/Portfolio/Sp-Linkedin_crrzcp.jpg"
              alt="Shivshant Prasad"
              className="p-12 w-70 h-100 transform translate-y-[-11%] mt-10"
              title="Shivshant Prasad"
            />

          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl -mt-1 font-semibold mb-3 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Shivshant Prasad</h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary -mt-6 font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                speed = {60}
                deletionSpeed = {57}
                sequence={[
                  "A Mern-stack Developer",
                  2000,
                  "A Full-stack Developer",
                  2000,
                  "A Front-end Developer",
                  2000,
                  "A Back-end Developer",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              I'm a MERN stack developer passionate about building high-quality, scalable web applications.
              I specialize in JavaScript,React.js, Node.js, Express.js,MongoDB and Postman 
              creating seamless and efficient solutions that meet both business and user needs. 
              With experience in full-stack development.
               {/* I focus on clean architecture, performance optimization,
              and smooth front-end-to-back-end integration to deliver robust and maintainable applications. */}
              {/* Dedicated Front-end developer. Capable to solve working problems.
              Passionate about learning & development to reach the target. Eager
              to tackle more complex problems and continue to find ways to
              maximize user efficiency. */}
            </p>
            <br />
            <p className="text-neutral -mt-6 font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Shivshant Prasad
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+91-7719672679
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                prasadshivshant@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>Ludhiana, Punjab, India
              </h2>
              <a
                href="https://drive.google.com/file/d/1BYD3hbFU_OCIaIqfoEszn5gKhoNhHtLk/view?usp=sharing"
                target="blank"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>

              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
