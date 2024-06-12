import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicEmployment = dynamic(
  () => import("@/components/employment/Employment"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicEmployment />
    </div>
  );
};

export default page;
