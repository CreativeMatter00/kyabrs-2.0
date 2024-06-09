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
		<div className="pt-24 lg:pt-32 bg-brandSecondary">
			<DynamicContactUs />
		</div>
	);
};

export default page;
