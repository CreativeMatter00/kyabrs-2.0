import Banner from "@/components/ui/banner/Banner";

import dynamic from "next/dynamic";

const DynamicSolution = dynamic(() => import("@/components/solution/Solution"));

const page = () => {
	return (
		<div className="mt-24 lg:mt-32 bg-brandSecondary">
			<Banner image="/assets/images/solutions/hero.jpg" name="Solutions" />
			<div className="container mx-auto">
				<DynamicSolution />
			</div>
		</div>
	);
};

export default page;
