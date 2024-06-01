import Banner from "@/components/ui/banner/Banner";
import dynamic from "next/dynamic";

const DynamicExpertise = dynamic(
	() => import("@/components/expertise/Overview")
);

const page = () => {
	return (
		<div className="mt-24 lg:mt-32 container mx-auto">
			<Banner name="Expertise" />
			<DynamicExpertise />
		</div>
	);
};

export default page;
