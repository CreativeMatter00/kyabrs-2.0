import Banner from "@/components/ui/banner/Banner";

import dynamic from "next/dynamic";

const DynamicSolution = dynamic(() => import("@/components/solution/Solution"));

const page = () => {
	return (
		<div className="mt-24 lg:mt-32 container mx-auto">
			<Banner name="Solutions" />
			<DynamicSolution />
		</div>
	);
};

export default page;
