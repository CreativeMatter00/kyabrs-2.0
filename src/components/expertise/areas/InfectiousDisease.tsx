import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const InfectiousDisease = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 break-words max-md:text-4xl">
        INFECTIOUS DISEASES AND VACCINES
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/vaccine.jpg"
          height={480}
          width={720}
          alt="Infectious disease and vaccinces"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
          Our experienced team specializes in designing and conducting global
          clinical trials for antivirals, antibacterials, antifungals, and
          vaccines. With a wealth of expertise, we ensure thorough planning and
          precise execution to advance research in infectious disease
          treatments. Trust us to deliver comprehensive solutions tailored to
          your specific needs.
        </p>
      </div>
    </div>
  );
};

export default InfectiousDisease;
