import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const Pediatrics = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 uppercase break-words max-md:text-4xl">
        Pediatrics
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/pediatrics.jpg"
          height={480}
          width={720}
          alt="Pediatrics"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
          We have thorough medical understanding of the diseases and capability
          to work with this vulnerable and special patient population.
          <br />
          Specialized Expertise in Pediatric Clinical Research
          <br />
          Pediatric trials involve unique challenges including recruiting,
          inclusion/exclusion criteria, subject compliance and retention. The
          enrollment of pediatric subjects in clinical trials has the additional
          complexity of family dynamics, legal status, and requirements of
          informed consent and assent. KYABRS understands that successfully
          implementing regulations and ethical standards into study conduct
          requires a comprehensive understanding of the unique concerns raised
          by ethics committees, investigators and parents. KYABRS has built an
          experience base in the management of pediatric patients over a long
          time
        </p>
      </div>
    </div>
  );
};

export default Pediatrics;
