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
		<div className="mt-28 container mx-auto">
			<DynamicInfectiousDisease />
		</div>
	);
};

export default page;
