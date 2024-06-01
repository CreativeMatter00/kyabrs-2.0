import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const RareDiseases = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 uppercase break-words max-md:text-4xl">
        Rare Diseases
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/rare.jpg"
          height={480}
          width={720}
          alt="Rare Disease"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
          Our CRO is committed to conducting rare disease clinical trials,
          recognizing the unique challenges they present. Rare disease clinical
          trials require a full-service CRO with innovative strategies to
          effectively manage these often-complex programs.
        </p>
      </div>
    </div>
  );
};

export default RareDiseases;
