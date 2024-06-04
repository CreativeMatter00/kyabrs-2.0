import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicOphthalmology = dynamic(
	() => import("@/components/expertise/areas/Ophthalmology"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicOphthalmology />
		</div>
	);
};

export default page;
