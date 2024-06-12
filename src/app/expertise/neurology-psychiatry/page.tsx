import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicNeurologyPsychiatry = dynamic(
  () => import("@/components/expertise/areas/NeurologyPsychiatry"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicNeurologyPsychiatry />
    </div>
  );
};

export default page;
