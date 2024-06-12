import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicFeasibilityStudy = dynamic(
  () => import("@/components/solution/services/FeasibilityStudy"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicFeasibilityStudy />
    </div>
  );
};

export default page;
