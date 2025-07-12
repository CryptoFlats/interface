import styles from './About.module.scss'
import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';
import {InfoSection} from "@/shared/ui/InfoSection";

export const About = () => {
	const { ref, classes } = useScrollAnimation();

	return (
		<InfoSection
			id="about"
			sectionRef={ref}
			className={`${styles.root} container ${classes}`}
			title="ABOUT"
			description="Cryptoflats is a generative NFT collection on Base blockchain: detailed, isometric rooms with vibrant design. Collect and combine them to build your own full Cryptoflat — made of 5 room types. The genesis drop features 5,555 living rooms. Each next phase will mint 1,000 fewer. Early collectors gain access to future perks and room upgrades."
			view={'yellow'}
		/>
	)
}