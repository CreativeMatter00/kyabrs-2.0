import PatientVolunteers from "@/components/participate/patientVolunteers/PatientVolunteers";
import RegistrationForm from "@/components/participate/patientVolunteers/RegistrationForm";

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary">
      <PatientVolunteers />
      <RegistrationForm />
    </div>
  );
};

export default page;
