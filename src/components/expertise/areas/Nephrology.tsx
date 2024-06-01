import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const Nephrology = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 uppercase break-words max-md:text-4xl">
        Nephrology
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/nephrology.jpg"
          height={480}
          width={720}
          alt="Nash & Liver Disease"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
          KYABRS leverages its expertise to design and implement nephrology
          trials, supported by dedicated renal specialists with extensive
          experience. Our team ensures meticulous planning and execution to meet
          your research objectives effectively.
        </p>
      </div>
    </div>
  );
};

export default Nephrology;
