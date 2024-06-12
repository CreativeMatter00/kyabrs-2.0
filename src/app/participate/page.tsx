import Banner from "@/components/ui/banner/Banner";
import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicParticipate = dynamic(
  () => import("@/components/participate/Participate"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary ">
      <Banner
        image="/assets/images/participate/hero-participate.jpg"
        name="Participate"
      />
      <div className="">
        <DynamicParticipate />
      </div>
    </div>
  );
};

export default page;
