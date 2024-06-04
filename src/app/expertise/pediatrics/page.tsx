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
		<div className="pt-20 bg-brandSecondary">
			<DynamicPediatrics />
		</div>
	);
};

export default page;
