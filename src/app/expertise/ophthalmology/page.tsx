import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicOphthalmology = dynamic(
  () => import("@/components/expertise/areas/Ophthalmology"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicOphthalmology />
    </div>
  );
};

export default page;
