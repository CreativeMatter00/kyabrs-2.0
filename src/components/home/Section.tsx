type ISectionCard = {
  activeSection: Number;
  direction: string;
  text: string;
  img: string;
};

function Section(props: ISectionCard) {
  return (
    <div className="section">
      <div className="image-container relative">
        <div
          className={`image ${props.activeSection === 0 ? "active" : ""}`}
          style={{ backgroundImage: props.img }}
        >
          <div className="greyish-layer"></div>
        </div>

        <div
          className={`text-container container ${props.direction}  h-full flex items-end absolute top-80`}
        >
          <div className="scroll-container">
            <div
              className={`scrolling-text ${
                props.activeSection === 0 ? "active" : ""
              }`}
            >
              <div
                className={`text-5xl font-bold text-white w-[60vw] uppercase  px-2 max-md:text-lg  max-lg:text-2xl  ${
                  props.activeSection === 0 &&
                  "mt-10 max-md:mt-1 max-lg:mt-10 text-left"
                } ${props.activeSection === 1 && "text-right"} ${
                  props.activeSection === 2 && "text-left"
                } ${props.activeSection === 3 && "text-right"}`}
              >
                {props.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
// type ISectionCard = {
//   activeSection: Number;
//   direction: string;
//   text: string;
//   img: string;
// };

// function Section(props: ISectionCard) {
//   // const img = "url(image1.jpg)";
//   console.log("activeSection", props.activeSection);

//   return (
//     <div className="section">
//       <div className="image-container relative">
//         <div
//           className={`image ${props.activeSection === 0 ? "active" : ""}`}
//           style={{ backgroundImage: props.img }}
//         >
//           <div className="greyish-layer"></div>
//         </div>

//         <div
//           className={`text-container container ${props.direction}   h-full flex items-end absolute top-56`}
//         >
//           <div className="scroll-container">
//             <div
//               className={`scrolling-text ${
//                 props.activeSection === 0 ? "active" : ""
//               }`}
//             >
//               <div
//                 className={`text-5xl font-bold text-white w-[60vw] uppercase  px-2 max-md:text-lg  max-lg:text-2xl border-4 border-red-500 ${
//                   props.activeSection === 0 &&
//                   "mt-40 max-md:mt-1 max-lg:mt-10 text-left"
//                 } ${props.activeSection === 1 && "text-right"} ${
//                   props.activeSection === 2 && "text-left"
//                 } ${props.activeSection === 3 && "text-right"}`}
//               >
//                 {props.text}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section;
