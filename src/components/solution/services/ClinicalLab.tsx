import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";
import React from "react";

const ClinicalLab = () => {
	return (
		<div className="py-16 px-4">
			<div className="mb-9">
				<Back />
			</div>

			<div className="font-medium text-5xl text-textPrimary mb-20 uppercase">
				CLINICAL LABORATORY
				<Underline />
			</div>

			<div className="">
				<Image
					src="/assets/images/solutions/qa.jpg"
					height={480}
					width={720}
					alt="feasibility study"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-textSecondary text-base font-medium mb-10">
						Our Clinical laboratory is equipped with latest state of the art
						technology{" "}
						<span className="text-textPrimary font-bold">
							Total Laboratory Automation System
						</span>{" "}
						which enables{" "}
						<span className="text-textPrimary font-bold">
							{" "}
							Reduced Human Handling Error{" "}
						</span>{" "}
						& provides reliable
						<span className="text-textPrimary font-bold">
							{" "}
							accurate test{" "}
						</span>{" "}
						results within{" "}
						<span className="text-textPrimary font-bold">
							{" "}
							the fastest time period.{" "}
						</span>
					</p>

					<p className="font-medium text-xl text-textPrimary mb-10">
						THE QUALITY RESULT IS THE UTMOST TARGET/PRIORITY:
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-10">
						<li>
							{" "}
							Regularly perform and analyze Internal QC as per requirement of
							ISO 15189 standard.{" "}
						</li>
						<li>
							{" "}
							Participate external Quality Assurance (QA) program (a monthly
							program with Randox International Quality Assurance Scheme), USA.{" "}
						</li>
						<li>
							{" "}
							Regularly calibrate all auto analyzers, reagents and accessories
							like centrifuges, Micropipettes.{" "}
						</li>
						<li>
							{" "}
							High Quality Reagents are used & stored maintaining standard
							temperature strictly.{" "}
						</li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						CLINICAL CHEMISTRY & IMMUNOLOGY:
					</p>
					<p className="font-medium text-xl text-textPrimary mb-4">
						AVAILABLE SPECIAL SERVICES
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
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
							{" "}
							PCR (protein creatinine Ratio), ACR (Albumin creatinine Ratio.{" "}
						</li>
						<li> CCR (Creatinine Clearance Rate). </li>
						<li> S.Creatinine with eGFR (MDRD equation). </li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						EQUIPMENT & AUTOANALYZER:
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
						<li>Beckman Coulter Automated Chemistry Analyzer(AU480&AU400).</li>
						<li>Beckman Coulter Automated Immunoassay Analyzer (Access2).</li>
						<li>Maglumi 2000 Plus Automated Immunoassay Analyzer.</li>
						<li> Cobas 411 Automated Immunoassay Analyzer. </li>
						<li> HbA1c analyzer, ADAMS, Arkray. </li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						HEMATOLOGY & COAGULATION:
					</p>
					<p className="font-medium text-xl text-textPrimary mb-4">
						AVAILABLE SPECIAL SERVICES
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
						<li> Bone marrow aspiration and analysis. </li>
						<li>
							{" "}
							Hb-Electrophoresis: To detect thalassemia & other hemoglobin
							disorders.
						</li>
						<li>Circulating Eosinophilils, Reticulocite.</li>
						<li>
							{" "}
							PT (Prothrombin time With INR), APTT, Fibrinogen, D-dimer.{" "}
						</li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						EQUIPMENTS & AUTOANALYSERS
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
						<li> Automated Cell counter Sysmex- XN- 1000 & XN-550. </li>
						<li>Automated Coagulation Analyzer Sysmex-CA-660.</li>
						<li>Vision-PRO ESR Analyzer.</li>
						<li>CUBE 30 Touch ESR Analyzer.</li>
						<li>Capilary2 Hb-Electrophoresis Analyzer,Sebia.</li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						CLINICAL PATHOLOGY:
					</p>
					<p className="font-medium text-xl text-textPrimary mb-4">
						DYSMOPHIC RBCS ARE DETECTED BY SPECIAL PHASE-CONTRAST MICROSCOPY
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
						<li>
							{" "}
							Joint fluid uric acid crystals are detected by using polarization
							microscopy.{" "}
						</li>
						<li>CSF & Body fluid analysis done by pathologists.</li>
						<li>
							Special arrangement for information of critical reports value
							(such CSF / body fluid cytology) to the clinicians.
						</li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						EQUIPMENTS & AUTOANALYSERS:
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
						<li>Automated urine-analyzer –LabUMat & UriSed 3 PRO.</li>
						<li>Cancer Diagnosis as a one-stop centre in Bangladesh.</li>
						<li>Tumor Board for critical cancer cases.</li>
						<li>
							Immunohistochemical test for Accurate Cancer Typing PAP test for
							uterine (cervical) cancer screening of women.
						</li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						HISTOPATHOLOGY:
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
						<li>
							reports of all kind of surgical specimen (range from small
							biopsies to bigger organ resections).
						</li>
						<li>Routine Histopathological diagnoses.</li>
						<li>Immunohistochemistry.</li>
						<li>
							Biopsy from any lesion (breast, lymph node, liver, pulmonary,
							kidney, solid ovarian tumor, intra-abdominal lump, etroperitoneum
							and extremities), Bronchoscopic biopsy, Endoscopic biopsy and
							wedge biopsy.
						</li>
						<li>Biopsy from bone.</li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						CYTOPATHOLOGY:
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
						<li>Gynaecological (Cervical cytology screening).</li>
						<li>Non-gynaecological (Diagnostic cytopathology).</li>
						<li>
							diagnostic cytology on effusions, fluids, and washings/brushings
							from respiratory and digestive tracts, and urine.
						</li>
						<li>
							Biopsy from any lesion (breast, lymph node, liver, pulmonary,
							kidney, solid ovarian tumor, intra-abdominal lump, etroperitoneum
							and extremities), Bronchoscopic biopsy, Endoscopic biopsy and
							wedge biopsy.
						</li>
						<li>
							guided-FNc ( USG guided and CT guided) (From the lung, liver,
							pancreas, ovary, pelvic mass, retroperitoneal mass, ovary and
							testis).
						</li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						IMMUNOHISTOCHEMISTRY:
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
						<li> Breast cancer biomarkers package (ER, PR, HER-2/Neu)` </li>
						<li>
							Lymphoma profile (including Hodgkin’s lymphoma and Non-Hodgkin’s
							lymphoma).
						</li>
						<li>Multiple myeloma.</li>
						<li>Soft tissue sarooma.</li>
						<li>Mqlignant melanoma.</li>
						<li>Gastrointestinal stromal tumor.</li>
						<li>Neural tumor.</li>
						<li>
							Equipments & Autoanalyzers : The slides of excellent quality are
							comparable with the best institution abroad
						</li>
						<li> Leica HistoCore BIOCUT Microtome (tissue sectioning) </li>
						<li>
							{" "}
							Staff professionals : The laboratory staffs are highly skilled
							team of medical professionals, scientists, technologists and
							supportive staff.{" "}
						</li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						MICROBIOLOGY:
					</p>

					<p className="font-medium text-xl text-textPrimary mb-4">
						LIST OF LABORATORY TESTS – MICROBIOLOGY:
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
						<li> Several staining procedures </li>
						<li>Aspirate culture & antimicrobial sensitivity</li>
						<li>Aspirate for AFB staining</li>
						<li>Blood culture & sensitivity</li>
						<li>CSF- culture & sensitivity</li>
						<li>Ear swab culture & sensitivity</li>
						<li>Endocervical swab</li>
						<li>Eye swab culture & sensitivity</li>
						<li> Nasal swab </li>
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

					<p className="font-medium text-xl text-textPrimary mb-4">
						ANALYSES: ( AUTOMATED CULTURING SYSTEM):
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
						<li> Aerobic Plate Count (Standard Plate Count) </li>
						<li>Coliforms</li>
						<li>E. coli</li>
						<li>Enterobacteriaceae</li>
						<li>Enterococcus</li>
						<li>Mold Count</li>
						<li>Pseudomonas</li>
						<li>Salmonella</li>
						<li>Shigella</li>
						<li>Staphylococcus</li>
						<li>Most of Gram positive and negative organisms</li>
						<li>Sputum culture & sensitivity</li>
						<li>Environmental Swabs</li>
						<li>Yeasts and molds</li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						TUBERCULOSIS:
					</p>

					<p className="font-medium text-xl text-textPrimary mb-4">
						EQUIPMENTS & AUTOANALYSERS:
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-8">
						<li> BD BACTEC FX40 Culture </li>
						<li> Coliforms </li>
						<li>
							Automated identification & Sensitivity analyzer BD Phonix M50.
						</li>
						<li> Biosafety Cabinet Class II typeA2 </li>
						<li>
							Staff professionals: The laboratory staffs are highly skilled team
							of medical professionals, scientists, technologists and supportive
							staff.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ClinicalLab;
