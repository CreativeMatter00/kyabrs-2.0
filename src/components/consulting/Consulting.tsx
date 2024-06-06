"use client";

import React, { useState } from "react";
import Back from "../ui/back/Back";
import Underline from "../ui/underline/Underline";
import Image from "next/image";
import RegulatoryStrategy from "./RegulatoryStrategy";
import ClinicalTrial from "./ClinicalTrial";

const Consulting = () => {
	const [activeSection, setActiveSection] = useState<number>(0);

	return (
		<div>
			<div className="container mx-auto py-6">
				<div className="flex items-center flex-wrap text-bgPrimary font-bold">
					<div
						className={`p-4 cursor-pointer ${
							activeSection === 0
								? "bg-brandPrimaryLs2 text-white rounded-full"
								: ""
						}`}
						onClick={() => setActiveSection(0)}
					>
						Regulatory Strategy & Development
					</div>
					<div
						className={`p-4 cursor-pointer ${
							activeSection === 1
								? "bg-brandPrimaryLs2 text-white rounded-full"
								: ""
						}`}
						onClick={() => setActiveSection(1)}
					>
						Clinical Trial Regulatory Services
					</div>
				</div>

				{activeSection === 0 && <RegulatoryStrategy />}
				{activeSection === 1 && <ClinicalTrial />}
			</div>
		</div>
	);
};

export default Consulting;
