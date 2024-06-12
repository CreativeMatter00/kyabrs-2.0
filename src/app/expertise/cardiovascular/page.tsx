import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicCardiovascular = dynamic(
  () => import("@/components/expertise/areas/Cardiovascular"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicCardiovascular />
    </div>
  );
};

export default page;
