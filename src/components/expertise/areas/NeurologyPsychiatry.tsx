import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";
import React from "react";

const NeurologyPsychiatry = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 break-words max-md:text-4xl">
        NEUROLOGY & PSYCHIATRY
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/neurology.jpg"
          height={480}
          width={720}
          alt="Neurology & Psychiatry"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
          Flow your neurology and psychiatric trials efficiently with our
          accelerated recruitment and integrated imaging services.
          <br />
          Neurology/central nervous system (CNS) and psychiatric clinical
          research is a key therapeutic focus for KYABRS. Well-established
          sponsor relationships, exceptional clinical operations, and committed
          study teams drive your success. KYABRS has built a team of experienced
          medical, clinical, and regulatory experts who have been involved with
          the management and execution of neuroscience trials.
        </p>
      </div>
    </div>
  );
};

export default NeurologyPsychiatry;
