/* eslint-disable react/no-unescaped-entities */
import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const Gastroenterology = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 break-words max-md:text-4xl">
        GASTROENTEROLOGY
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/gastroenterology.jpg"
          height={480}
          width={720}
          alt="ENDOCRINE & METABOLIC"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 px-4">
          Our team of experts is proficient in conducting studies across a wide
          range of gastrointestinal indications. Partnering with KYABRS as your
          full-service CRO for clinical development ensures seamless trial
          execution, facilitated by our team's expertise. With a comprehensive
          understanding of the complex conditions underlying GI disorders, the
          KYABRS team is equipped to drive successful outcomes.
        </p>
      </div>
    </div>
  );
};

export default Gastroenterology;
