import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicEndocrineMetabolic = dynamic(
  () => import("@/components/expertise/areas/EndocrineMetabolic"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicEndocrineMetabolic />
    </div>
  );
};

export default page;
