import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicNashLiverDisease = dynamic(
	() => import("@/components/expertise/areas/NashLiverDisease"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicNashLiverDisease />
		</div>
	);
};

export default page;
