import Banner from "@/components/ui/banner/Banner";

import dynamic from "next/dynamic";

const DynamicSolution = dynamic(() => import("@/components/solution/Solution"));

const page = () => {
  return (
    <div className="pt-24 lg:pt-32 bg-brandSecondary">
      <Banner image="/assets/images/solutions/hero.jpg" name="Solutions" />
      <div className="container mx-auto">
        <DynamicSolution />
      </div>
    </div>
  );
};

export default page;
