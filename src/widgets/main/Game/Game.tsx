import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';
import { images } from '@/shared/lib/images';

import styles from './Game.module.scss'

export const Game = () => {
	const { ref, classes, isShowed } = useScrollAnimation();

	return (
		<section className={`${styles.root} container`} id="game">
			<div ref={ref} className={`${styles.wrapper} ${classes}`}>
				<h3 className={styles.title}>
				CFLATS GAME
				</h3>
				<p className={styles.description}>
				CFLATS GAME is a competitive play-to-earn experience where your rooms become tools for strategy, staking, and battle.
					<br />
					<br />
					Use rooms to generate game points, stake them for passive income, or join time-based battles against other players to win rewards.
					<br/>
					<br/>
					Engage, earn, and grow inside the Cryptoflats universe — the more you play, the more your property works for you.	
				</p>
			</div>
			<div className={styles.image}>
				<img
					className={`${styles['image-left']} ${isShowed ? styles['is-active'] : ''}`}
					src={`${images.main.game.phoneLeft}.png`}
					alt={'phone-left'}
					loading='lazy'
				/>
				<img
					className={`${styles['image-right']} ${isShowed ? styles['is-active'] : ''}`}
					src={`${images.main.game.phoneRight}.png`}
					alt={'phone-left'}
					loading='lazy'
				/>
			</div>
		</section>
	)
}