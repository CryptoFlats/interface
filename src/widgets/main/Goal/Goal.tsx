import styles from './Goal.module.scss'
import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';
import {InfoSection} from "@/shared/ui/InfoSection";

export const Goal = () => {
	const { ref, classes } = useScrollAnimation();

	return (
		<InfoSection
			sectionRef={ref}
			className={`${styles.root} container ${classes}`}
			title="OUR GOAL"
			description="We're building the go-to crypto project for earning real yield while having fun in a gamified way. Our tools are sharp, fast, and built for degens and builders alike. Dive in, explore the alpha — and let the games begin."
			view={'blue'}
		/>
	)
}