"use client";

import { useEffect, useState } from "react";
import WhoWeAre from "./WhoWeAre";
import ManagementTeam from "./ManagementTeam";
import OurValues from "./OurValues";
import AccreditationsInspections from "./AccreditationsInspections";
import { useSearchParams } from "next/navigation";

function AboutUs() {
	const searchParams = useSearchParams();
	const property = Number(searchParams.get("tab"));

	const [activeSection, setActiveSection] = useState<number>(property || 0);

	useEffect(() => {
		setActiveSection(property);
	}, [property]);

	return (
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
					Who We Are
				</div>
				<div
					className={`p-4 cursor-pointer ${
						activeSection === 1
							? "bg-brandPrimaryLs2 text-white rounded-full"
							: ""
					}`}
					onClick={() => setActiveSection(1)}
				>
					Management Team
				</div>
				<div
					className={`p-4 cursor-pointer ${
						activeSection === 2
							? "bg-brandPrimaryLs2 text-white rounded-full"
							: ""
					}`}
					onClick={() => setActiveSection(2)}
				>
					Mission & Values
				</div>
				<div
					className={`p-4 cursor-pointer ${
						activeSection === 3
							? "bg-brandPrimaryLs2 text-white rounded-full"
							: ""
					}`}
					onClick={() => setActiveSection(3)}
				>
					Accreditations & Inspections
				</div>
			</div>

<<<<<<< HEAD
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center flex-wrap text-bgPrimary font-bold max-lg:px-2">
        <div
          className={`p-4 cursor-pointer ${
            activeSection === 0
              ? "bg-brandPrimaryLs2 text-white rounded-full"
              : ""
          }`}
          onClick={() => setActiveSection(0)}
        >
          Who We Are
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeSection === 1
              ? "bg-brandPrimaryLs2 text-white rounded-full"
              : ""
          }`}
          onClick={() => setActiveSection(1)}
        >
          Management Team
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeSection === 2
              ? "bg-brandPrimaryLs2 text-white rounded-full"
              : ""
          }`}
          onClick={() => setActiveSection(2)}
        >
          Mission & Values
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeSection === 3
              ? "bg-brandPrimaryLs2 text-white rounded-full"
              : ""
          }`}
          onClick={() => setActiveSection(3)}
        >
          Accreditations & Inspections
        </div>
      </div>

      <div className="w-full py-10">
        <div>{activeSection === 0 && <WhoWeAre />}</div>
        <div>{activeSection === 1 && <ManagementTeam />}</div>
        <div>{activeSection === 2 && <OurValues />}</div>
        <div>{activeSection === 3 && <AccreditationsInspections />}</div>
      </div>
    </div>
  );
=======
			<div className="w-full py-10">
				<div>{activeSection === 0 && <WhoWeAre />}</div>
				<div>{activeSection === 1 && <ManagementTeam />}</div>
				<div>{activeSection === 2 && <OurValues />}</div>
				<div>{activeSection === 3 && <AccreditationsInspections />}</div>
			</div>
		</div>
	);
>>>>>>> cec5f7e98b411454023d1266d943a12b9aa6a2d1
}

export default AboutUs;
