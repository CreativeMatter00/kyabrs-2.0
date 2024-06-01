import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicClinicalLab = dynamic(
	() => import("@/components/solution/services/ClinicalLab"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicClinicalLab />
		</div>
	);
};

export default page;
