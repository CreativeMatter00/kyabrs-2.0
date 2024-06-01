import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const HematologyOncology = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 break-words max-md:text-4xl">
        HEMATOLOGY & ONCOLOGY
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/hematology.jpg"
          height={480}
          width={720}
          alt="oncology-hematology"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
          Our experienced staff at KYABRS develop and execute studies across a
          full spectrum of solid tumor and hematologic indications and
          therapies. As a specialized Hematology and Oncology CRO, we offer a
          competitive advantage in navigating the evolving landscape of drug and
          biologic clinical development. Our unique approach to clinical
          research has earned us a reputation for effectively managing complex
          cancer patients.
          <br />
          We assist our clients in developing successful strategies for novel
          therapies, competing for high-performing global sites, expediting
          study start-up and recruitment, and navigating the global regulatory
          landscape for accelerated approvals. With our medical leadership and
          trained staff in hematology and oncology, KYABRS ensures successful
          conduct of clinical trials. We looking help our clients:
        </p>

        <ul className="text-textSecondary text-base font-medium list-disc list-inside px-4">
          <li>
            Develop successful strategies for even the most novel therapies.
          </li>
          <li>Compete successfully for high-performing global sites.</li>
          <li>Expedite study start-up and recruitment.</li>
          <li>
            Navigate the global regulatory landscape to expedite approvals.
            <br />
            KYABRS has the medical leadership in hematology and oncology trained
            staff to successfully conduct clinical trials.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HematologyOncology;
