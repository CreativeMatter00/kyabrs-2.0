import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicQualityAssurance = dynamic(
  () => import("@/components/solution/services/QualityAssurance"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicQualityAssurance />
    </div>
  );
};

export default page;
