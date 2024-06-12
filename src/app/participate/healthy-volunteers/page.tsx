import HealthyVolunteers from "@/components/participate/healthyVolunteers/HealthyVolunteers";
import RegistrationForm from "@/components/participate/healthyVolunteers/RegistrationForm";

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary">
      <HealthyVolunteers />
      <RegistrationForm />
    </div>
  );
};

export default page;
