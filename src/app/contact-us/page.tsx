import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicContactUs = dynamic(
  () => import("@/components/contactUs/ContactUs"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicContactUs />
    </div>
  );
};

export default page;
