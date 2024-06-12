import Banner from "@/components/ui/banner/Banner";
import Loader from "@/components/ui/loader/Loader";

import dynamic from "next/dynamic";

const DynamicSolution = dynamic(
  () => import("@/components/solution/Solution"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary pb-10">
      <Banner
        image="/assets/images/solutions/solution-hero.jpg"
        name="Solutions"
      />
      <div className="container mx-auto">
        <DynamicSolution />
      </div>
    </div>
  );
};

export default page;
