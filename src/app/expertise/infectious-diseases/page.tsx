import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicInfectiousDisease = dynamic(
	() => import("@/components/expertise/areas/InfectiousDisease"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicInfectiousDisease />
		</div>
	);
};

export default page;
