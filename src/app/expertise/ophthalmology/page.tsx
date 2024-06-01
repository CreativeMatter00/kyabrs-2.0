import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicOphthamology = dynamic(
	() => import("@/components/expertise/areas/Ophthamology"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicOphthamology />
		</div>
	);
};

export default page;
