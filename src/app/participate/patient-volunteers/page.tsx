import PatientVolunteers from "@/components/participate/patientVolunteers/PatientVolunteers";
import RegistrationForm from "@/components/participate/patientVolunteers/RegistrationForm";

const page = () => {
	return (
		<div className="pt-24 lg:pt-32 bg-brandSecondary">
			<PatientVolunteers />
			<RegistrationForm />
		</div>
	);
};

export default page;
