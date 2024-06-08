import CurrentOpenings from "./CurrentOpenings";
import Opportunities from "./Opportunities";
import WorkWithUs from "./WorkWithUs";

const Employment = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="container p-8 flex flex-col gap-8">
        <div>
          <p className="font-bold text-[#FF6A5E] mb-4">Join Our Team</p>
          <p className="text-bgPrimary">
            At Khwaja Yunus Ali-Bio Research Services (KYA-BRS), we are always
            looking for passionate and talented individuals to join our team. If
            you are dedicated to excellence in clinical research and want to be
            part of a pioneering organization, we invite you to explore our
            career opportunities.
          </p>
        </div>
        <WorkWithUs />
        <CurrentOpenings />
        <div>
          <p className="font-bold text-[#FF6A5E] mb-4">How to Apply</p>
          <p className="text-bgPrimary">
            To apply for any of our current openings, please send your resume
            and cover letter to{" "}
            <span className="text-[#FFB8B1] cursor-pointer">
              info@kyabrs.org
            </span>
            with the job title in the subject line. We look forward to hearing
            from you!
          </p>
        </div>{" "}
        <div>
          <p className="font-bold text-[#FF6A5E] mb-4">Internship Program</p>
          <p className="text-bgPrimary">
            Our internship program provides students and recent graduates with
            hands-on experience in the clinical research field. If you are
            interested in an internship, please email your resume and a brief
            statement of interest to{" "}
            <span className="text-[#FFB8B1] cursor-pointer">
              info@kyabrs.org
            </span>
            .
          </p>
        </div>
        <Opportunities />
      </div>
    </div>
  );
};

export default Employment;
