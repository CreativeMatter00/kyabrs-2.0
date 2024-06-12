import Image from "next/image";

const Overview = () => {
  return (
    <div className="container mx-auto text-bgPrimary">
      <Image
        src="/assets/images/solutions/clinical-monitoring/overview.jpg"
        height={480}
        width={720}
        alt="overview"
        className="h-auto w-auto mx-auto rounded-lg mb-10"
      />

      <div className="pt-4 px-4">
        <p className="text-base font-medium ">
          A Dynamic Landscape Demands a Disciplined, Flexible CRO Partner
          Clinical trial management and monitoring must adapt with the new
          complexities which we are facing in modern clinical trials. By
          implementing quality risk management systems such as Risk Mitigation
          Plans and protocol evaluations, KYAMCH-BRS collaborates to maintain
          focus and flexibility with specific attention to the study objective,
          design, complexity, size and endpoints1. Striking the delicate balance
          between centralized and on-site monitoring needs, as well as careful
          consideration of targeted source data verification, our monitoring
          teams are equipped to readily facilitate the new dynamics of clinical
          research sites with a focus on precise and meaningful data.
        </p>
      </div>
    </div>
  );
};

export default Overview;
