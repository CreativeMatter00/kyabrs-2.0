import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicAutoimmuneDiseases = dynamic(
	() => import("@/components/expertise/areas/AutoimmuneDiseases"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicAutoimmuneDiseases />
		</div>
	);
};

export default page;
