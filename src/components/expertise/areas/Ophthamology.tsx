import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const Ophthamology = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 uppercase break-words max-md:text-4xl">
        OPHTHALMOLOGY
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/ophthamology.png"
          height={480}
          width={720}
          alt="ophthamology"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
          Our full-service CRO offers specialized expertise in ophthalmology,
          ensuring adaptable solutions tailored to your research needs.
        </p>
      </div>
    </div>
  );
};

export default Ophthamology;
