import {
	About,
	Concept,
	FirstGradientBackground,
	Game,
	Goal,
	Info,
	Marquee,
	RarityProperties,
	RaritySlider,
	Room,
	SecondGradientBackground,
	Team, ThirdGradientBackground
} from '@/widgets/main';
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import {useLazyVideo} from "@/shared/lib/hooks/useLazyVideo";
import { useSmoothScroll } from '@/shared/lib/hooks/useSmoothScroll';

export const Main = () => {
	useLazyVideo();
	useSmoothScroll();

	return (
		<>
			<Header />
			<Info />
			<Marquee />
			<FirstGradientBackground>
				<Goal />
				<About />
				<Room />
				<RarityProperties />
				<RaritySlider />
			</FirstGradientBackground>
			<SecondGradientBackground>
				<Concept />
				<Team />
			</SecondGradientBackground>
			<ThirdGradientBackground>
				<Game />
			</ThirdGradientBackground>
			<Footer />
		</>
	)
}