import Hero from "@/components/participate/registrationForm/Hero";
import RegistrationForm from "@/components/participate/registrationForm/RegistrationForm";

const page = () => {
  return (
    <div className="pt-20 lg:pt-28 bg-brandSecondary">
      <Hero />
      <RegistrationForm />
    </div>
  );
};

export default page;
