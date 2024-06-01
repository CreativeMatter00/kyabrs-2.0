import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";

const ClinicalService = () => {
	return (
		<div className="py-16 px-4">
			<div className="mb-9">
				<Back />
			</div>

			<div className="font-medium text-5xl text-textPrimary mb-20 uppercase">
				Clinical Development & Research Services
				<Underline />
			</div>

			<div className="mb-20">
				<p className="font-semibold text-2xl text-textSecondary"> Overview </p>
				<div className="w-4/5 md:w-[560px] mb-10">
					<Underline />
				</div>

				<p className="text-textSecondary text-lg font-medium">
					We feel differently about your project. Our team is ready for you who
					keep solving, optimizing, developing and caring your project. We are
					with you to overcome all obstacles as long it takes. KYABRS committed
					to be with you in resolving all complex problems involved in
					transforming a scientific discovery in the hands of patients as
					desired treatment. We are your trusted clinical research organization
					(CRO).
				</p>
			</div>

			<div className="mb-20">
				<p className="font-semibold text-2xl text-textSecondary">
					Early Phase Clinical Trials
				</p>
				<div className="w-4/5 md:w-[560px] mb-10">
					<Underline />
				</div>

				<p className="text-textSecondary text-lg font-medium mb-10">
					Proceeding quickly through the Phase I-II trial to gain proof of
					concept is an important milestone in your strategy. At KYABRS, we
					design our early-stage clinical trials so that patients can be
					expected early. This is an important milestone of hope for patients
					with unmet needs.
					<br />
					KYABRS has the expertise to help reduce the risk of study design
					challenges due to inappropriate scientific justification of dosage,
					confusing safety thresholds and early-stage delays.We can bring
					together a team of regulatory, pharmacological and translational
					medicine specialists for drug dosage, safety selection, and PK / PD
					evaluation. We help you design a protocol that helps creating the data
					you need to make decisions. And when you are ready to begin your Early
					Phase studies our clinics provide a full scope of services.
				</p>

				<p className="font-medium text-xl text-textPrimary mb-4">
					THESE SERVICES INCLUDE:
				</p>

				<ul className="text-textSecondary text-lg font-medium list-disc list-inside">
					<li> Phase I, first-in-human. </li>
					<li> Phase II, proof-of-concept. </li>
					<li> Clinical PK/PD and pharmacometrics. </li>
					<li> Ethnobridging studies. </li>
					<li> Bioanalytical and biomarkers. </li>
					<li> Bioequivalence and biosimilar studies. </li>
				</ul>
			</div>

			<div>
				<p className="font-semibold text-2xl text-textSecondary">
					Bioequivalence Study:
				</p>
				<div className="w-4/5 md:w-[560px] mb-10">
					<Underline />
				</div>

				<p className="text-textSecondary text-lg font-medium mb-10">
					Bioequivalence studies are very important for the development of a
					pharmaceutical preparation in the pharmaceutical industry. Their
					rationale is the monitoring of pharmacokinetic and pharmacodynamic
					parameters after the administration of tested drugs. The importance of
					bioequivalence studies is increasing also due to the large growth of
					the production and consumption of generic products.
					<br />
					The registration of generic products does not demand complicated and
					expensive clinical study contrary to original product. The comparison
					of the original and the generic product via bioequivalence study is
					suggested as sufficient. KYABRS capable to do the bioequivalence study
					of any dosage form. KYABRS Bioanalytical Laboratories provide method
					development, transfer, validation, and analysis of biological samples
					of study volunteer.
					<br />
					Data analysis for the confirmation of bioequivalence is performed
					using industry-standard WINNONLIN® software
				</p>
			</div>
		</div>
	);
};

export default ClinicalService;
