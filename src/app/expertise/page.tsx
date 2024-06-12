import Banner from "@/components/ui/banner/Banner";
import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicExpertise = dynamic(
  () => import("@/components/expertise/Expertise"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-12">
      <Banner
        image="/assets/images/expertise/hero-expertise.jpg"
        name="Expertise"
      />
      <div className="container mx-auto">
        <DynamicExpertise />
      </div>
    </div>
  );
};

export default page;
