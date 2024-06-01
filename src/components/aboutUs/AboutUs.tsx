"use client";

import { useState } from "react";
import WhoWeAre from "./WhoWeAre";
import ManagementTeam from "./ManagementTeam";
import OurValues from "./OurValues";
import AccreditationsInspections from "./AccreditationsInspections";

function AboutUs() {
	const [activeSection, setActiveSection] = useState<number>(0);

	return (
		<div className="container mx-auto">
			<div className="flex flex-col md:flex-row gap-10">
				<div className="w-full md:w-1/3 text-center text-2xl font-medium capitalize px-8">
					<div
						className={`py-6 cursor-pointer ${
							activeSection === 0 ? "bg-primary text-white rounded-lg" : ""
						}`}
						onClick={() => setActiveSection(0)}
					>
						Who we are
					</div>
					<div
						className={`py-6 cursor-pointer ${
							activeSection === 1 ? "bg-primary text-white rounded-lg" : ""
						}`}
						onClick={() => setActiveSection(1)}
					>
						Management Team
					</div>
					<div
						className={`py-6 cursor-pointer ${
							activeSection === 2 ? "bg-primary text-white rounded-lg" : ""
						}`}
						onClick={() => setActiveSection(2)}
					>
						Mission & Values
					</div>
					<div
						className={`py-6 cursor-pointer ${
							activeSection === 3 ? "bg-primary text-white rounded-lg" : ""
						}`}
						onClick={() => setActiveSection(3)}
					>
						Accreditations & Inspections
					</div>
				</div>
				<div className="w-full md:w-2/3">
					<div>{activeSection === 0 && <WhoWeAre />}</div>
					<div>{activeSection === 1 && <ManagementTeam />}</div>
					<div>{activeSection === 2 && <OurValues />}</div>
					<div>{activeSection === 3 && <AccreditationsInspections />}</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
