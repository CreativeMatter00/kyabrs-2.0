import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicRadiationTherapy = dynamic(
	() => import("@/components/expertise/areas/RadiationTherapy"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicRadiationTherapy />
		</div>
	);
};

export default page;
