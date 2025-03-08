// import React from "react";
// import Lottie from "lottie-react";
// import readingBook from "../../../assets/reading-book.json";

// const Education = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: readingBook,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return (
//     <div className="pt-24">
//       <div className="mb-12">
//         <h1 className="text-4xl font-semibold drop-shadow-md text-center">
//           My <span className="text-primary">Qualification</span>
//         </h1>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
//         <div className="">
//           <Lottie
//             options={defaultOptions}
//             height="70%"
//             width="90%"
//             className="mx-auto lg:mr-auto"
//           />
//         </div>
//         <div className="mx-auto lg:ml-auto">
//           {/* Diploma */}
//           <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[370px] hover:shadow-primary duration-300 cursor-pointer">
//             <div className="text-left mb-4 ">
//               <h3 className="text-2xl font-semibold text-primary text-left ">
//                 Bachelor of Technology
//               </h3>
//               <p className="text-sm text-neutral font-semibold">Information Technology (2021 - 2025)</p>
//             </div>
//             <p className="text-sm text-neutral text-justify">
//               I am currently pursuing Bachelor Of Technology in Information Technology (8th Semester) at Guru Nanak Dev Engineering College, Ludhiana, Punjab, India
//             </p>
//           </div>

//           {/* React Developer */}
//           <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[350px] hover:shadow-primary duration-300 cursor-pointer">
//             <div className="text-right mb-4">
//               <h3 className="text-2xl font-semibold text-primary">
//                 Full Stack Web Intern
//               </h3>
//               <p className="text-sm text-neutral font-semibold">Aug 2024 - Dec 2024</p>
//             </div>
//             <p className="text-sm text-neutral text-justify d">
//               I have successfully completed the <b>Full Stack Web Internship</b>{" "}
//               at <b>Auribises Technology Private Technology</b>.
//             </p>
//           </div>

//           {/* SSC */}
//           <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[410px] hover:shadow-primary duration-300 cursor-pointer">
//             <div className=" mb-4">
//               <h3 className="text-2xl font-semibold text-primary">Green Land Sr. Sec. Public School</h3>
//               <p className="text-sm mt-2 text-neutral font-semibold">Higher Secondary Education(12th)</p>
//               <p className="text-sm text-neutral font-semibold "> <b>CGPA: 8.3</b> 2019-2020</p>
//               <p className="text-sm mt-2 text-neutral font-semibold text-right">Secondary Education(10th)</p>
//               <p className="text-sm text-neutral font-semibold text-right"><b>CGPA: 8.4 </b>  2017-2018</p>
//             </div>
//             {/* <p className="text-sm text-neutral text-justify">
//               I have passed the Senior Secondary Certificate (SSC) with the
//               highest result <b>GPA - 88</b>
//             </p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;




import React from "react";
import Lottie from "lottie-react";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Animation Section */}
        <div>
          <Lottie animationData={readingBook} loop={true} className="w-[90%] h-[70%] mx-auto lg:mr-auto" />
        </div>

        {/* Education & Experience Section */}
        <div className="mx-auto lg:ml-auto">
          {/* B.Tech Qualification */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[370px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-left mb-4">
              <h3 className="text-2xl font-semibold text-primary">Bachelor of Technology</h3>
              <p className="text-sm text-neutral font-semibold">
                Information Technology (2021 - 2025)
              </p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I am currently pursuing a **B.Tech in Information Technology** (8th Semester) at **Guru Nanak Dev Engineering College**, Ludhiana, Punjab, India.
            </p>
          </div>

          {/* Full Stack Internship */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[350px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">Full Stack Web Intern</h3>
              <p className="text-sm text-neutral font-semibold">Aug 2024 - Dec 2024</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have successfully completed the **Full Stack Web Internship** at **Auribises Technology Private Limited**.
            </p>
          </div>

          {/* School Education */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[410px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-primary">Green Land Sr. Sec. Public School</h3>
              <p className="text-sm mt-2 text-neutral font-semibold">Higher Secondary Education (12th)</p>
              <p className="text-sm text-neutral font-semibold">
                <b>CGPA: 8.3</b> (2019-2020)
              </p>
              <p className="text-sm mt-2 text-neutral font-semibold text-right">Secondary Education (10th)</p>
              <p className="text-sm text-neutral font-semibold text-right">
                <b>CGPA: 8.4</b> (2017-2018)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
