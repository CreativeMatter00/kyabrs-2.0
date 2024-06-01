import Banner from "@/components/ui/banner/Banner";
import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicContactUs = dynamic(
	() => import("@/components/contactUs/ContactUs"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-24 lg:mt-32 container mx-auto">
			<Banner name="Contact Us" />
			<DynamicContactUs />
		</div>
	);
};

export default page;
