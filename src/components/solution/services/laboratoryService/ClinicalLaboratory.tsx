import Image from "next/image";

const ClinicalLaboratory = () => {
	return (
		<div className="container mx-auto">
			<div className="flex flex-col-reverse md:flex-row gap-8">
				<div className="w-full md:w-1/2">
					<p className="text-2xl mb-6"> Clinical Laboratory </p>

					<p>
						Our Clinical laboratory is equipped with the latest state-of-the-art
						technology Total Laboratory Automation System which enables Reduced
						Human Handling Error & provides reliable accurate test results
						within the fastest period.
					</p>

					<div className="py-6">
						<p className="text-brandPrimaryLs2 font-bold mb-4">
							The Quality Result Is the Utmost Priority:
						</p>
						<div className="mb-4">
							<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
								<li>
									{" "}
									Regularly perform and analyze Internal QC as per requirement
									of ISO 15189 standard.{" "}
								</li>
								<li>
									Participate in external Quality Assurance (QA) program (a
									monthly program with Randox International Quality Assurance
									Scheme), USA.
								</li>
								<li>
									Regularly calibrate all auto analyzers, reagents, and
									accessories like centrifuges and micropipettes.
								</li>
								<li>
									High Quality Reagents are used & stored maintaining standard
									temperature strictly.
								</li>
							</ul>
						</div>
					</div>

					<div className="py-6">
						<p className="text-brandPrimaryLs2 font-bold mb-4">
							Our service departments:
						</p>
						<div className="mb-4">
							<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
								<li>Clinical chemistry & immunology</li>
								<li>Hematology & coagulation</li>
								<li>Clinical pathology</li>
								<li>Histopathology</li>
								<li>Cytopathology</li>
								<li>Immunohistochemistry</li>
								<li>Microbiology</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="w-full md:w-1/2">
					<Image
						src="/assets/images/solutions/laboratory-service/lab.jpg"
						height={320}
						width={480}
						className="w-full h-auto rounded-lg"
						alt="Bioanalytical Service"
					/>
				</div>
			</div>

			{/* <div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-2">
					CLINICAL CHEMISTRY & IMMUNOLOGY:
				</p>
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					AVAILABLE SPECIAL SERVICES
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li>
							{" "}
							Screening test packages of Electrolyte, Metabolites, lipid
							profile, blood sugar, enzymes and hormones.{" "}
						</li>
						<li>
							{" "}
							Cancer Marker (CEA, CA15.3, CA-125, CA19.9, PSA, AFP, Free Beta
							HCG).{" "}
						</li>
						<li>
							{" "}
							Autoimmune (ANA, Anti-CCP, Anti-ds-DNA, Anti-Cadiolipin IgG,
							Anti-Cadiolipin IgM).{" "}
						</li>
						<li> Infectious Disease (HbsAg, Anti-Hbs, Anti-Hbe,)H.Pylori. </li>
						<li> Cardiac Marker (Troponin I, NT-pro-BNP). </li>
						<li> DOPE test. </li>
						<li> Dengue NS1 antigen. </li>
						<li> PTH. </li>
						<li> Insulin, C-Peptide. </li>
						<li> Vitamin-D, vitaminB12, Folic Acid. </li>
						<li> Iron Profile (Iron, UIBC, TIBC, Ferritin). </li>
						<li> Cortisol. </li>
						<li> PCT. </li>
						<li> Anti- Mullarian Hormone (AMH). </li>
						<li>
							PCR (protein creatinine Ratio), ACR (Albumin creatinine Ratio).
						</li>
						<li> CCR (Creatinine Clearance Rate). </li>
						<li> S.Creatinine with eGFR (MDRD equation). </li>
					</ul>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					EQUIPMENT & AUTOANALYZER:
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li>Beckman Coulter Automated Chemistry Analyzer(AU480&AU400).</li>
						<li> Beckman Coulter Automated Immunoassay Analyzer (Access2). </li>
						<li> Maglumi 2000 Plus Automated Immunoassay Analyzer. </li>
						<li> Cobas 411 Automated Immunoassay Analyzer. </li>
						<li> HbA1c analyzer, ADAMS, Arkray. </li>
					</ul>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-2">
					CLINICAL CHEMISTRY & IMMUNOLOGY:
				</p>
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					AVAILABLE SPECIAL SERVICES
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li> Bone marrow aspiration and analysis. </li>
						<li>
							Hb-Electrophoresis: To detect thalassemia & other hemoglobin
							disorders.
						</li>
						<li> Circulating Eosinophilils, Reticulocite. </li>
						<li>PT (Prothrombin time With INR), APTT, Fibrinogen, D-dimer.</li>
					</ul>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					EQUIPMENTS & AUTOANALYSERS
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li> Automated Cell counter Sysmex- XN- 1000 & XN-550. </li>
						<li> Automated Coagulation Analyzer Sysmex-CA-660. </li>
						<li> Vision-PRO ESR Analyzer. </li>
						<li> CUBE 30 Touch ESR Analyzer. </li>
						<li> Capilary2 Hb-Electrophoresis Analyzer,Sebia. </li>
					</ul>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-2">
					CLINICAL PATHOLOGY:
				</p>
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					DYSMOPHIC RBCS ARE DETECTED BY SPECIAL PHASE-CONTRAST MICROSCOPY
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li>
							{" "}
							Joint fluid uric acid crystals are detected by using polarization
							microscopy.{" "}
						</li>
						<li>CSF & Body fluid analysis done by pathologists.</li>
						<li>
							{" "}
							Special arrangement for information of critical reports value
							(such CSF / body fluid cytology) to the clinicians.{" "}
						</li>
					</ul>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					EQUIPMENTS & AUTOANALYSERS
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li> Automated urine-analyzer –LabUMat & UriSed 3 PRO. </li>
					</ul>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					Histopathology / Cytopathology / Immunohistochemistry:
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li>
							{" "}
							<span className="font-bold"> Cancer Diagnosis </span> as a
							one-stop centre in Bangladesh.{" "}
						</li>
						<li>
							{" "}
							<span className="font-bold"> Tumor Board </span> for critical
							cancer cases.{" "}
						</li>
						<li>
							{" "}
							<span className="font-bold">
								{" "}
								Immunohistochemical test for Accurate Cancer{" "}
							</span>{" "}
							Typing <span className="font-bold"> PAP test </span> for{" "}
							<span className="font-bold"> uterine (cervical) cancer </span>{" "}
							screening of women.
						</li>
					</ul>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-4">CYTOPATHOLOGY:</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li>
							<span className="font-bold"> Gynaecological </span> (Cervical
							cytology screening).
						</li>
						<li>
							<span className="font-bold"> Non-gynaecological </span>{" "}
							(Diagnostic cytopathology).
						</li>
						<li>
							<span className="font-bold"> diagnostic cytology </span> on
							effusions, fluids, and washings/brushings from respiratory and
							digestive tracts, and urine.
						</li>
						<li>
							<span className="font-bold"> Biopsy from any lesion </span>{" "}
							(breast, lymph node, liver, pulmonary, kidney, solid ovarian
							tumour, intra-abdominal lump, etroperitoneum and extremities),{" "}
							<span className="font-bold">
								{" "}
								Bronchoscopic biopsy, Endoscopic biopsy{" "}
							</span>{" "}
							and <span className="font-bold"> wedge biopsy. </span>
						</li>
						<li>
							<span className="font-bold"> guided-FNc </span> ( USG guided and
							CT guided) (From the iung,liver, pancrease, oyary, pelvic mass,
							retroperitoneal mass, ovary and testis).
						</li>
					</ul>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					IMMUNOHISTOCHEMISTRY::
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li> Breast cancer biomarkers package (ER, PR, HER-2/Neu)` </li>
						<li>
							{" "}
							Lymphoma profile (including Hodgkin’s lymphoma and Non-Hodgkin’s
							lymphoma).{" "}
						</li>
						<li> Multiple myeloma. </li>
						<li> Soft tissue sarooma. </li>
						<li> Mqlignant melanoma. </li>
						<li> Gastrointestinal stromal tumor. </li>
						<li> Neural tumor. </li>
						<li>
							{" "}
							<span className="font-bold">
								{" "}
								Equipments & Autoanalyzers :{" "}
							</span>{" "}
							The slides of excellent quality are comparable with the best
							institution abroad{" "}
						</li>
						<li> Leica HistoCore BIOCUT Microtome (tissue sectioning) </li>
						<li>
							{" "}
							<span className="font-bold"> Staff professionals : </span> The
							laboratory staffs are highly skilled team of medical
							professionals, scientists, technologists and supportive staff.{" "}
						</li>
					</ul>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-2">MICROBIOLOGY:</p>
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					LIST OF LABORATORY TESTS – MICROBIOLOGY:
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li>Several staining procedures</li>
						<li>Aspirate culture & antimicrobial sensitivity</li>
						<li>Aspirate for AFB staining</li>
						<li>Blood culture & sensitivity</li>
						<li>CSF- culture & sensitivity.</li>
						<li>Ear swab culture & sensitivity</li>
						<li>Endocervical swab</li>
						<li>Eye swab culture & sensitivity</li>
						<li>Nasal swab</li>
						<li>Skin, hair, nail scrapping</li>
						<li>Sputum for acid fast bacilli.</li>
						<li>Sputum culture & sensitivity</li>
						<li>Stool culture & sensitivity</li>
						<li>Stool routine examination</li>
						<li>Throat swab culture & sensitivity</li>
						<li>Urethral swab culture & sensitivity</li>
						<li>Urethral swab R/E</li>
						<li>Urine AFB</li>
						<li>Urine culture & Sensitivity</li>
						<li>Acid fast bacilli detection</li>
						<li>Mantoux test</li>
					</ul>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					ANALYSES: ( AUTOMATED CULTURING SYSTEM)
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li>Aerobic Plate Count (Standard Plate Count)</li>
						<li>Coliforms</li>
						<li>E. coli</li>
						<li>Enterococcus</li>
						<li>Mold Count</li>
						<li>Pseudomonas</li>
						<li>Salmonella</li>
						<li>Shigella</li>
						<li>Staphylococcus</li>
						<li>Most of Gram positive and negative organisms.</li>
						<li>Sputum culture & sensitivity</li>
						<li>Environmental Swabs</li>
						<li>Yeasts and molds</li>
					</ul>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-2">TUBERCULOSIS:</p>
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					EQUIPMENTS & AUTOANALYSERS
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li>BD BACTEC FX40 Culture</li>
						<li>Coliforms</li>
						<li>
							Automated identification & Sensitivity analyzer BD Phonix M50.
						</li>
						<li>Biosafety Cabinet Class II typeA2</li>
						<li>Biosafety Cabinet Class II typeA2</li>
						<li>
							<span className="font-bold"> Staff professionals: </span> The
							laboratory staffs are highly skilled team of medical
							professionals, scientists, technologists and supportive staff.
						</li>
					</ul>
				</div>
			</div>

			</div> */}
		</div>
	);
};

export default ClinicalLaboratory;
