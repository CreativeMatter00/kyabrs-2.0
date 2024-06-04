import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicCellularGeneTherapy = dynamic(
	() => import("@/components/expertise/areas/CellularGeneTherapy"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicCellularGeneTherapy />
		</div>
	);
};

export default page;
