import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicGastroenterology = dynamic(
  () => import("@/components/expertise/areas/Gastroenterology"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicGastroenterology />
    </div>
  );
};

export default page;
