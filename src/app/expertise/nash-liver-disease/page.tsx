import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicNashLiverDisease = dynamic(
  () => import("@/components/expertise/areas/NashLiverDisease"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicNashLiverDisease />
    </div>
  );
};

export default page;
