import React from "react";
import Difference from "./Difference";
import ClinicalTrial from "./ClinicalTrial";
import Volunteers from "./Volunteers";
import PatientStories from "./PatientStories";

const Participate = () => {
	return (
		<div className="text-bgPrimary">
			<Difference />
			<ClinicalTrial />
			<Volunteers />
			{/* <PatientStories /> */}
		</div>
	);
};

export default Participate;
