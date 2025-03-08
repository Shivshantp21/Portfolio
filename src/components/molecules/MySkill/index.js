// import React from "react";
// import Lottie from "lottie-react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaNodeJs,
//   FaReact,
//   FaBootstrap,
//   FaGithub,
// } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiJava,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiExpress,
//   SiMongodb,
//   SiPostman,
//   SiVercel,
//   SiNetlify,
// } from "react-icons/si";
// import man from "../../../assets/man.json";

// const MySkill = () => {
//   const languages = [
//     { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
//     { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
//     {title: "JavaScript",icon: <SiJavascript className="text-yellow-500 rounded" />},
//     {title: "Java",icon: <SiJava className="text-red-500 rounded bg-white" />},
//     { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
//   ];
//   const frameworks = [
//     { title: "React", icon: <FaReact className="text-cyan-400" /> },
//     { title: "NextJs", icon: <SiNextdotjs className="text-black bg-white rounded-lg" /> },
//     { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
//     { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
//     { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
//   ];
//   const tools = [
//     { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//     { title: "Postman", icon: <SiPostman className="text-orange-500" /> },
//     { title: "GitHub", icon: <FaGithub className="text-black" /> },
//     { title: "Vercel", icon: <SiVercel className="text-white bg-black rounded-full"  /> },
//     { title: "Netlify", icon: <SiNetlify className="text-white bg-black rounded-full"  /> },
//   ];

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: man,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return (
//     <div className="pt-24">
//       <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
//         My <span className="text-primary">Skills</span>
//       </h1>
//       <div className="flex flex-col md:flex-row items-center justify-evenly my-8">

//         <div className="-ml-5">
//           <h2 className="text-cyan-500 text-xl font-semibold -ml-2 mb-2 ">Languages:</h2>
//           <div className="flex flex-wrap mb-4 -ml-3">
//             {languages?.map((skill) => (
//               <div key={skill.title} className="text-center m-3">
//                 <div
//                   className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
//                   title={skill.title}
//                 >
//                   {skill?.icon}
//                 </div>
//                 <p className="text-sm text-white">{skill?.title}</p>
//               </div>
//             ))}
//           </div>
//           <h2 className="text-cyan-500 text-xl font-semibold -ml-2 mb-2">
//             Library & Frameworks:
//           </h2>
//           <div className="flex flex-wrap mb-4 -ml-3">
//             {frameworks?.map((skill) => (
//               <div key={skill.title} className="text-center m-3">
//                 <div
//                   className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
//                   title={skill.title}
//                 >
//                   {skill?.icon}
//                 </div>
//                 <p className="text-sm text-white">{skill?.title}</p>
//               </div>
//             ))}
//           </div>
//           <h2 className="text-cyan-500 text-xl font-semibold -ml-2 mb-2">
//             Tools & Technologies:
//           </h2>
//           <div className="flex flex-wrap mb-4 -ml-3">
//             {tools?.map((skill) => (
//               <div key={skill.title} className="text-center m-3">
//                 <div
//                   className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
//                   title={skill.title}
//                 >
//                   {skill?.icon}
//                 </div>
//                 <p className="text-sm text-white">{skill?.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div>
//           <Lottie options={defaultOptions} height={400} width={360} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MySkill;


import React from "react";
import Lottie from "lottie-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJava,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import man from "../../../assets/man.json";

const MySkill = () => {
  const languages = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { title: "JavaScript", icon: <SiJavascript className="text-yellow-500 rounded" /> },
    { title: "Java", icon: <SiJava className="text-red-500 rounded bg-white" /> },
    { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
  ];

  const frameworks = [
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "NextJs", icon: <SiNextdotjs className="text-black bg-white rounded-lg" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
  ];

  const tools = [
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { title: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Vercel", icon: <SiVercel className="text-white bg-black rounded-full" /> },
    { title: "Netlify", icon: <SiNetlify className="text-white bg-black rounded-full" /> },
  ];

  return (
    <div className="pt-24">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">
        <div className="-ml-5">
          <h2 className="text-cyan-500 text-xl font-semibold -ml-2 mb-2">Languages:</h2>
          <div className="flex flex-wrap mb-4 -ml-3">
            {languages.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
                <p className="text-sm text-white">{skill.title}</p>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold -ml-2 mb-2">
            Library & Frameworks:
          </h2>
          <div className="flex flex-wrap mb-4 -ml-3">
            {frameworks.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
                <p className="text-sm text-white">{skill.title}</p>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold -ml-2 mb-2">
            Tools & Technologies:
          </h2>
          <div className="flex flex-wrap mb-4 -ml-3">
            {tools.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
                <p className="text-sm text-white">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Lottie animationData={man} loop={true} className="w-[360px] h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
