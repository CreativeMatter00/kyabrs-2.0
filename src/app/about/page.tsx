import Banner from "@/components/ui/banner/Banner";
import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicAboutUs = dynamic(() => import("@/components/aboutUs/AboutUs"), {
	loading: () => <Loader />,
});

function page() {
	return (
		<div className="mt-24 lg:mt-32 bg-brandSecondary">
			<Banner image="/assets/images/about/hero.jpg" name="About Us" />
			<div className="container mx-auto">
				<DynamicAboutUs />
			</div>
		</div>
	);
}

export default page;
