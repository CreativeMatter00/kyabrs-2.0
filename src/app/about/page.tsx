import Banner from "@/components/ui/banner/Banner";
import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicAboutUs = dynamic(() => import("@/components/aboutUs/AboutUs"), {
	loading: () => <Loader />,
});

function page() {
	return (
		<div className="mt-24 lg:mt-32 container mx-auto">
			<Banner name="About Us" />
			<DynamicAboutUs />
		</div>
	);
}

export default page;
