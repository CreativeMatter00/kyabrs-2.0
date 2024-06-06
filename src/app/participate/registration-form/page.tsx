import Hero from "@/components/participate/registrationForm/Hero";
import RegistrationForm from "@/components/participate/registrationForm/RegistrationForm";

const page = () => {
	return (
		<div className="pt-24 lg:pt-32 bg-brandSecondary">
			<Hero />
			<RegistrationForm />
		</div>
	);
};

export default page;
