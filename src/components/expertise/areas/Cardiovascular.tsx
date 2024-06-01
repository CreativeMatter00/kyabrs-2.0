import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";
import React from "react";

const Cardiovascular = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 break-words max-md:text-4xl">
        CARDIOVASCULAR
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/cardiovascular.jpg"
          height={480}
          width={720}
          alt="CARDIOVASCULAR"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
          Effectively plan, manage, and integrate your cardiovascular and
          cardiac safety trials, regardless of test size or safety requirements.
          <br />
          The Cardiovascular teams at KYABRS are highly skilled in the
          scientific methodology, standard of care, evolving regulatory
          requirements and operational considerations that are necessary to
          bring drugs and devices that treat or prevent heart disease to market.
        </p>

        <p className="font-medium text-xl text-textPrimary mb-4 px-4">
          IN ORDER TO ENSURE SUCCESS, WE HELP OUR CLIENTS:
        </p>

        <ul className="text-textSecondary text-base font-medium list-disc list-inside px-4">
          <li>
            Effectively plan and conduct cardiovascular studies for drug/device
            and cardiac safety.
          </li>
          <li>
            Efficiently conduct large cardiovascular endpoint trials that demand
            rigorous safety requirements.
          </li>
          <li>
            Seamlessly integrate cardiovascular trials with
            metabolic/endocrinology projects.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cardiovascular;
