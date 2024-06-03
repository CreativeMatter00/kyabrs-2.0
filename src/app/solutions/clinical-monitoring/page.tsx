import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicClinicalMonitoring = dynamic(
	() =>
		import(
			"@/components/solution/services/clinicalMonitoring/ClinicalMonitoring"
		),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicClinicalMonitoring />
		</div>
	);
};

export default page;
