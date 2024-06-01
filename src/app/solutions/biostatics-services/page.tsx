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
		<div className="mt-28 container mx-auto">
			<DynamicBiostaticsServices />
		</div>
	);
};

export default page;
