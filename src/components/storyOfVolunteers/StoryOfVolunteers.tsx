import Image from "next/image";
import Link from "next/link";
import OurVolunteers from "./OurVolunteers";
import WhatOurVolunteersDo from "./WhatOurVolunteersDo";
import HowToGetInvolved from "./HowToGetInvolved";

const StoryOfVolunteers = () => {
	return (
		<div>
			<div className="pt-16 px-4 text-bgPrimary border-b border-textTertiary">
				<div className="container mx-auto">
					<div className="mb-9">
						<div className="pt-10 pb-4 ">
							<div className="flex items-center gap-2">
								<Link href="/" className="text-bgPrimary">
									Home
								</Link>
								/<p className="text-brandPrimaryLs3">Story of Volunteer</p>
							</div>
						</div>
					</div>

					<div className="h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
						<Image
							src={"/assets/images/storyOfVolunteers/hero.png"}
							height={300}
							width={1024}
							alt="Hero"
							className="rounded-lg w-full"
						/>
					</div>

					<div className="text-4xl pb-4">Story of Volunteers</div>
				</div>
			</div>

			<OurVolunteers />
			<WhatOurVolunteersDo />
			<HowToGetInvolved />
		</div>
	);
};

export default StoryOfVolunteers;
