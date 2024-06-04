import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicHematologyOncology = dynamic(
	() => import("@/components/expertise/areas/HematologyOncology"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicHematologyOncology />
		</div>
	);
};

export default page;
