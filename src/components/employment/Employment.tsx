import WorkWithUs from "./WorkWithUs";

const Employment = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="container p-8 flex flex-col gap-6">
        <div>
          <p className="font-bold text-[#FF6A5E] mb-3">Join Our Team</p>
          <p className="text-bgPrimary">
            At Khwaja Yunus Ali-Bio Research Services (KYA-BRS), we are always
            looking for passionate and talented individuals to join our team. If
            you are dedicated to excellence in clinical research and want to be
            part of a pioneering organization, we invite you to explore our
            career opportunities.
          </p>
        </div>
        <WorkWithUs />
      </div>
    </div>
  );
};

export default Employment;
