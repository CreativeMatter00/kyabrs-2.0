import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicClinicalMonitoring = dynamic(
  () =>
    import(
      "@/components/solution/services/clinicalMonitoring/ClinicalMonitoring"
    ),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <DynamicClinicalMonitoring />
    </div>
  );
};

export default page;
