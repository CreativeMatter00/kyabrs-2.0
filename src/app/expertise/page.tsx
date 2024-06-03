import Banner from "@/components/ui/banner/Banner";
import dynamic from "next/dynamic";

const DynamicExpertise = dynamic(
	() => import("@/components/expertise/Expertise")
);

const page = () => {
	return (
		// <div className="mt-24 lg:mt-32 container mx-auto">
		// 	<Banner name="Expertise" />
		// 	<DynamicExpertise />
		// </div>

		<div className="pt-24 lg:pt-32 bg-brandSecondary">
			<Banner image="/assets/images/expertise/hero.jpg" name="Expertise" />
			<div className="container mx-auto">
				<DynamicExpertise />
			</div>
		</div>
	);
};

export default page;
