import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicInfectiousDisease = dynamic(
  () => import("@/components/expertise/areas/InfectiousDisease"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicInfectiousDisease />
    </div>
  );
};

export default page;
