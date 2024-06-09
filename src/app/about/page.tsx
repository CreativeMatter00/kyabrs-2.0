import Banner from "@/components/ui/banner/Banner";
import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicAboutUs = dynamic(() => import("@/components/aboutUs/AboutUs"), {
	loading: () => <Loader />,
});

function page() {
	return (
		<div className="pt-24 lg:pt-32 bg-brandSecondary">
			<Banner image="/assets/images/about/hero-about.jpg" name="About Us" />
			<div className="container mx-auto">
				<DynamicAboutUs />
			</div>
		</div>
	);
}

export default page;
