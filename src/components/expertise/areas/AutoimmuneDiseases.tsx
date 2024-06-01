import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const AutoimmuneDiseases = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 break-words max-md:text-4xl">
        Autoimmune Diseases
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/autoimmune.jpg"
          height={480}
          width={720}
          alt="Autoimmune Diseases"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 px-4">
          Our experienced medical leadership possesses a thorough understanding
          of the complex conditions that cause autoimmune diseases. Our team is
          prepared to support clinical research in autoimmune diseases, ensuring
          quality results, meeting deadlines, and maximizing efficiencies.
          Partner with a full-service CRO that excels in designing and executing
          clinical research across a spectrum of autoimmune diseases.
        </p>
      </div>
    </div>
  );
};

export default AutoimmuneDiseases;
