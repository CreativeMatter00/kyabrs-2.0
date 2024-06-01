import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const EndocrineMetabolic = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 break-words max-md:text-4xl">
        ENDOCRINE & METABOLIC
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/endocrine.jpg"
          height={480}
          width={720}
          alt="ENDOCRINE & METABOLIC"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 px-4">
          KYABRS can help navigate the complexities and regulatory scrutiny of
          endocrine and metabolic development programs.
        </p>
      </div>
    </div>
  );
};

export default EndocrineMetabolic;
