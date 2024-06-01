import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicRareDiseases = dynamic(
	() => import("@/components/expertise/areas/RareDiseases"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicRareDiseases />
		</div>
	);
};

export default page;
