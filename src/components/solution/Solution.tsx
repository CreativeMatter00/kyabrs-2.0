import SolutionGallery from "./SolutionGallery";

const Solution = () => {
  return (
    <div className="text-bgPrimary px-4">
      <div className="py-6">
        <p className="text-2xl">
          <span className="text-brandPrimaryLs3"> Trusted </span> Bio-Research
          Partner
        </p>
      </div>
      <p>
        Our approach to your project extends beyond mere cognition; it includes
        a profound emotional dedication. Confronted with the complex challenges
        of translating scientific breakthroughs into innovative therapeutic
        solutions and ensuring patient access, engaging a Clinical Research
        Organization (CRO) partner deeply invested in every aspect becomes
        imperative. A united team dedicated to resolving issues, refining
        processes, optimizing outcomes, and demonstrating unwavering commitment
        equal to your own. Despite time and obstacles, our steadfast support
        endures.
      </p>
      <SolutionGallery />
    </div>
  );
};

export default Solution;
