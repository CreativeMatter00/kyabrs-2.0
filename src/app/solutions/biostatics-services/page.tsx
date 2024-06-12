import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicBiostaticsServices = dynamic(
  () => import("@/components/solution/services/BiostaticsServices"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicBiostaticsServices />
    </div>
  );
};

export default page;
