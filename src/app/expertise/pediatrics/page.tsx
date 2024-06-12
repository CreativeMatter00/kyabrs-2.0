import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicPediatrics = dynamic(
  () => import("@/components/expertise/areas/Pediatrics"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicPediatrics />
    </div>
  );
};

export default page;
