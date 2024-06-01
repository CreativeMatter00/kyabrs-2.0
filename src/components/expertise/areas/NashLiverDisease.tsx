import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const NashLiverDisease = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 break-words max-md:text-4xl">
        NASH & LIVER DISEASE
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/liver.jpg"
          height={480}
          width={720}
          alt="Nash & Liver Disease"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
          KYABRS has capability to deal NAFLD/NASH trials with endpoints
          including labs, imaging and biopsy.
          <br />
          Accelerate your study with KYABRS’s noted medical and regulatory
          experts, highly experienced clinical trial management teams, central
          labs, and imaging core labs.
        </p>
      </div>
    </div>
  );
};

export default NashLiverDisease;
