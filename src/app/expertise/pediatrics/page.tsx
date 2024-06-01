import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicPediatrics = dynamic(
	() => import("@/components/expertise/areas/Pediatrics"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicPediatrics />
		</div>
	);
};

export default page;
