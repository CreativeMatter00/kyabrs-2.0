import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicRadiationTherapy = dynamic(
  () => import("@/components/expertise/areas/RadiationTherapy"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicRadiationTherapy />
    </div>
  );
};

export default page;
