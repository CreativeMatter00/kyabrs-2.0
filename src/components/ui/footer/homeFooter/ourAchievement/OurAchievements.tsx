import Image from "next/image";

const OurAchievements = () => {
  return (
    <div
      className="h-screen"
      style={{
        background:
          "linear-gradient(135deg, #414A50 70%, rgba(79, 89, 97, 0.4) 30%)",
      }}
    >
      <div className=" mx-auto px-4 py-8 bg-black bg-opacity-0 text-white h-full flex justify-center items-center flex-col">
        <div className="container flex flex-col justify-center items-center max-w-[1024px]">
          <p className="text-5xl mb-4">Our Achievements</p>
          <p className="text-lg text-center">
            At KYA-BRS, we celebrate our commitment to medical research through
            groundbreaking trials and state-of-the-art lab accreditations,
            showcasing our dedication to healthcare excellence.
          </p>
        </div>
        <div className="mt-8 bg-[#4F5961] rounded-lg p-6 flex gap-4 max-w-[882px]">
          <Image
            src="/assets/images/home/RUM1062 2.png"
            height={310}
            width={306}
            alt="achievements"
            className="rounded-lg h-[310px] w-[306px]"
          />
          <div className="flex justify-between flex-col  pt-4 px-4">
            <p className="text-4xl">Groundbreaking Clinical Trial</p>
            <div>
              <p className="mb-4">
                KYA-BRS successfully completed a Phase III clinical trial
                leading to the approval of a new cancer therapy. This
                breakthrough offers hope to thousands of patients.
              </p>
              <button className="border border-[#F5F5F5] px-6 py-2.5 text-sm font-medium rounded-full hover:text-[#FF6A5E] hover:border-[#FF6A5E]">
                Learn more
              </button>
            </div>
            <div className="gap-2 text-[#F5F5F5] text-sm flex">
              <p className="font-bold mr-2">Tags:</p>
              <p className="hover:underline cursor-pointer">Clinical Trials</p>
              <p className="hover:underline cursor-pointer">Cancer Research</p>
              <p className="hover:underline cursor-pointer">New Therapies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchievements;
