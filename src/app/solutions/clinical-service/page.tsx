import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicClinicalService = dynamic(
	() => import("@/components/solution/services/ClinicalService"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicClinicalService />
		</div>
	);
};

export default page;
