import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicBiostaticsServices = dynamic(
	() => import("@/components/solution/services/BiostaticsServices"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicBiostaticsServices />
		</div>
	);
};

export default page;
