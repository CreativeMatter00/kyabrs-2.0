import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicGastroenterology = dynamic(
	() => import("@/components/expertise/areas/Gastroenterology"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicGastroenterology />
		</div>
	);
};

export default page;
