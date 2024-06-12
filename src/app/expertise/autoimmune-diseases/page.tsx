import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicAutoimmuneDiseases = dynamic(
  () => import("@/components/expertise/areas/AutoimmuneDiseases"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicAutoimmuneDiseases />
    </div>
  );
};

export default page;
