import Banner from "@/components/ui/banner/Banner";
import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicConsulting = dynamic(
	() => import("@/components/consulting/Consulting"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-24 lg:mt-32 container mx-auto">
			<Banner name="Consulting" />
			<DynamicConsulting />
		</div>
	);
};

export default page;
