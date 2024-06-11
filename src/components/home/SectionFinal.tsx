type ISectionCard = {
  activeSection: Number;
  direction: string;
  text: string;
  img: string;
  children: any;
};

const SectionFinal = (props: ISectionCard) => {
  return (
    <div className="section max-md:min-h-[50vh]">
      <div className="image-container relative max-md:h-full">
        <div
          className={`image ${
            props.activeSection === 0 ? "active" : ""
          }   max-md:h-full`}
          style={{ backgroundImage: props.img }}
        ></div>

        <div
          className={`text-container container ${props.direction}  h-full flex items-end absolute top-[30vh]`}
        >
          <div className="scroll-container">
            <div
              className={`scrolling-text ${
                props.activeSection === 0 ? "active" : ""
              }`}
            >
              <div
                className={`text-5xl font-bold text-white w-[60vw] px-4  ${
                  props.activeSection === 0 &&
                  "mt-10 max-md:mt-1 max-lg:mt-10 text-left max-lg:w-[80vw] max-md:w-[100vw]"
                } ${
                  props.activeSection === 1 &&
                  "text-start w-[50vw] max-lg:w-[80vw] max-md:w-[100vw]"
                } ${
                  props.activeSection === 2 &&
                  "text-left max-lg:w-[90vw] max-md:w-[100vw]"
                } ${
                  props.activeSection === 3 &&
                  "text-left max-lg:w-[90vw] max-md:w-[100vw]"
                }`}
              >
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFinal;

// type ISectionCard = {
//   activeSection: Number;
//   direction: string;
//   text: string;
//   img: string;
//   children: any;
// };

// const SectionFinal = (props: ISectionCard) => {
//   return (
//     <div className="section max-md:min-h-[50vh]">
//       <div className="image-container relative max-md:h-full">
//         <div
//           className={`image ${
//             props.activeSection === 0 ? "active" : ""
//           }   max-md:h-full`}
//           style={{ backgroundImage: props.img }}
//         ></div>

//         <div
//           className={`text-container container ${props.direction}  h-full flex items-end absolute top-80`}
//         >
//           <div className="scroll-container">
//             <div
//               className={`scrolling-text ${
//                 props.activeSection === 0 ? "active" : ""
//               }`}
//             >
//               <div
//                 className={`text-5xl font-bold text-white w-[60vw] px-4  ${
//                   props.activeSection === 0 &&
//                   "mt-10 max-md:mt-1 max-lg:mt-10 text-left max-lg:w-[80vw] max-md:w-[100vw]"
//                 } ${
//                   props.activeSection === 1 &&
//                   "text-start w-[50vw] max-lg:w-[80vw] max-md:w-[100vw]"
//                 } ${
//                   props.activeSection === 2 &&
//                   "text-left max-lg:w-[90vw] max-md:w-[100vw]"
//                 } ${
//                   props.activeSection === 3 &&
//                   "text-left max-lg:w-[90vw] max-md:w-[100vw]"
//                 }`}
//               >
//                 {props.children}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionFinal;
