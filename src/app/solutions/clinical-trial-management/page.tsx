import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicClinicalTrial = dynamic(
  () => import("@/components/solution/services/ClinicalTrial"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicClinicalTrial />
    </div>
  );
};

export default page;
