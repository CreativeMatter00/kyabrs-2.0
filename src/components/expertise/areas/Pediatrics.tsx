import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import TherapeuticAreasCarousel from "./TherapeuticAreasCarousel";

const Pediatrics = () => {
	return (
		<div className="py-16 px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/expertise"
						title1="Expertise"
						title2="Pediatrics"
					/>
				</div>

				<div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
					<Image
						src={"/assets/images/expertise/area-hero.jpg"}
						height={300}
						width={1024}
						alt="Expertise"
						className="rounded-lg w-full"
					/>
				</div>

				<p className="text-2xl mb-6"> Pediatrics </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/expertise/pediatrics.jpg"
					height={480}
					width={720}
					alt="Pediatrics"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-base font-medium mb-10">
						We have thorough medical understanding of the diseases and
						capability to work with this vulnerable and special patient
						population.
						<br />
						Specialized Expertise in Pediatric Clinical Research
						<br />
						Pediatric trials involve unique challenges including recruiting,
						inclusion/exclusion criteria, subject compliance and retention. The
						enrollment of pediatric subjects in clinical trials has the
						additional complexity of family dynamics, legal status, and
						requirements of informed consent and assent. KYABRS understands that
						successfully implementing regulations and ethical standards into
						study conduct requires a comprehensive understanding of the unique
						concerns raised by ethics committees, investigators and parents.
						KYABRS has built an experience base in the management of pediatric
						patients over a long time.
					</p>
				</div>

				<TherapeuticAreasCarousel />
			</div>
		</div>
	);
};

export default Pediatrics;
