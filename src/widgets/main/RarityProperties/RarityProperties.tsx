import styles from './RarityProperties.module.scss'
import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';
import {InfoSection} from "@/shared/ui/InfoSection";

export const RarityProperties = () => {
	const { ref, classes } = useScrollAnimation();

	return (
		<InfoSection
			sectionRef={ref}
			className={`${styles.root} container ${classes}`}
			title="RARITY PROPERTIES"
			description="Each NFT class in our collection has mint odds. GEN#1 to GEN#4 roll out with supply decreasing from 5,555 to 2,222. These rooms represent rarity tiers — Standard, Silver, Gold, and Diamond — each unlocking unique staking options and added utility."
			view={'lightBlue'}
		/>
	)
}