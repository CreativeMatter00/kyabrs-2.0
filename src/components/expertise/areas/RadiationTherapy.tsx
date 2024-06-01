import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const RadiationTherapy = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 uppercase break-words max-md:text-4xl">
        Radiation Therapy
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/neurology.jpg"
          height={480}
          width={720}
          alt="Radiation Therapy"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
          Our seasoned Radiation Group excels in customizing radiation protocols
          to meet the diverse demands of clinical trials, ensuring adaptability
          at every stage. With meticulous attention to detail, our team
          guarantees precision and efficacy in every radiation application,
          delivering optimal outcomes for your trial.
        </p>
      </div>
    </div>
  );
};

export default RadiationTherapy;
