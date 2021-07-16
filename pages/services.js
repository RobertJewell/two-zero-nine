import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GradientBG from "../components/decoration/GradientBG";
import PageTitle from "../components/PageTitle";
import ProductFeatured from "../components/ProductFeatured";
import ProductSecondaryContainer from "../components/ProductSecondaryContainer";
import ProductSecondary from "../components/ProductSecondary";
import AppleDigitalMasters from "../components/AppleDigitalMasters";
import OptionsContainer from "../components/OptionsContainer";
import OptionsItem from "../components/OptionsItem";

export default function services() {
	return (
		<div className="overflow-hidden">
			<div className="relative">
				<NavBar></NavBar>

				<GradientBG
					color="green"
					height="h-800"
					flipped={true}
					opacity="opacity-60"
					translateY="-translate-y-2/4 top-0"
				></GradientBG>

				<PageTitle
					title="What we do:"
					classes="max-w-4xl px-4 lg:px-0"
				></PageTitle>

				<ProductFeatured
					title="Stereo Mastering"
					description="Have your track mastered and ready for distribution. This includes a master copy in the format of your choice as well as an mp3 copy."
				></ProductFeatured>

				<ProductSecondaryContainer>
					<ProductSecondary title="Vinyl Sequencing / DDP Creation">
						<ul>
							<li className="mt-2">ISRC/Meta data</li>
							<li className="mt-2">PQ Sheets</li>
							<li className="mt-2">MD5 Checksum</li>
						</ul>
					</ProductSecondary>
					<ProductSecondary
						title="Audio Editing / Restoration"
						description="Optimise your podcast, clear your interview audio, help your message to reach your audience."
						classes="translate mt-12 lg:mt-48"
					></ProductSecondary>
				</ProductSecondaryContainer>

				<GradientBG
					color="purple"
					height="h-800"
					flipped={false}
					opacity="opacity-60"
					translateY="-translate-y-3/4 "
				></GradientBG>

				<AppleDigitalMasters></AppleDigitalMasters>

				<OptionsContainer title="Other Services:">
					<OptionsItem
						title="Urgent turn around"
						key="Urgent turn around"
						description="In a hurry? Just let us know and we can arrange for a quick turn around to suit your schedule."
					></OptionsItem>
					<OptionsItem
						title="Radio Edits"
						key="Radio Edits"
						description="Same mastering quality, tweaked to your needs."
					></OptionsItem>
					<OptionsItem
						title="Mixing"
						key="Mixing"
						description="Just recorded? Or have a track you’ve been producing? Have your track mixed to your requirements. We’ll prepare your track for mastering & release."
					></OptionsItem>
					<OptionsItem
						title="Stem Mastering"
						key="Stem Mastering"
						description="Don’t need a full mix session? We can add those final touches and have your track mastered in the same session with a stem master. Same quality, same end results."
					></OptionsItem>
				</OptionsContainer>

				<Footer></Footer>
			</div>
		</div>
	);
}
