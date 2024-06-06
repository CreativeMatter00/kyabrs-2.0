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
		<div className="pt-24 lg:pt-32 bg-brandSecondary">
			<Banner image="/assets/images/consulting/hero.jpg" name="Consulting" />
			<div className="container mx-auto">
				<DynamicConsulting />
			</div>
		</div>
	);
};

export default page;
