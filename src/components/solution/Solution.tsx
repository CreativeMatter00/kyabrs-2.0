import Underline from "../ui/underline/Underline";
import SolutionGallery from "./SolutionGallery";

const Solution = () => {
	return (
		<div>
			<div className="px-4 my-10">
				<p className="text-4xl font-semibold">Empowering Solutions</p>
				<Underline />
			</div>
			<SolutionGallery />
		</div>
	);
};

export default Solution;
