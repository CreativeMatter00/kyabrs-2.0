import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicRareDiseases = dynamic(
  () => import("@/components/expertise/areas/RareDiseases"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicRareDiseases />
    </div>
  );
};

export default page;
