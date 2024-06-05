type ISectionCard = {
  activeSection: Number;
  direction: string;
  text: string;
  img: string;
  children: any;
};

const SectionFinal = (props: ISectionCard) => {
  return (
    <div className="section">
      <div className="image-container relative">
        <div
          className={`image ${props.activeSection === 0 ? "active" : ""}`}
          style={{ backgroundImage: props.img }}
        >
          {/* <div className="greyish-layer"></div> */}
          {/* <div className=" bg-gradient-to-r from-cyan-500 to-blue-500"></div> */}
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
                className={`text-5xl font-bold text-white w-[60vw] px-4  ${
                  props.activeSection === 0 &&
                  "mt-10 max-md:mt-1 max-lg:mt-10 text-left"
                } ${props.activeSection === 1 && "text-start w-[50vw]"} ${
                  props.activeSection === 2 && "text-left"
                } ${props.activeSection === 3 && "text-left"}`}
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
