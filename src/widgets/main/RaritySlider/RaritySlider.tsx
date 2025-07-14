import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';

import 'swiper/css';

import styles from './RaritySlider.module.scss'
import React, { useCallback, useMemo, useState } from 'react';
import { WebpImage } from '@/shared/ui/WebpImage';
import { images } from '@/shared/lib/images';
import { useTranslation } from 'react-i18next';

type SlideTypes =
	| 'goldPass'
	| 'diamondPass'
	| 'standardFlats'
	| 'silverFlats'
	| 'goldFlats'
	| 'diamondFlats'

export const RaritySlider = () => {
	const [swiper, setSwiper] = useState<SwiperClass | null>(null)
	const [activeIndex, setActiveIndex] = useState(0);
	const { t } = useTranslation();



	const classes = useMemo(() => [
		styles.pagination,
		window.innerWidth > 1200 ? '' : 'container'
	], []);

	const getTabClasses = useCallback((index: number) => {
		const list = [
			styles.tab
		]

		if (index === activeIndex) {
			list.push(styles['is-active'])
		}

		return list.join(' ')
	}, [activeIndex])

	return (
		<div className={styles.parent}>
			<div className={classes.join(' ')}>
				<div className={styles.row}>
					<button
						className={`${getTabClasses(0)} ${styles.standard}`}
						onClick={() => swiper?.slideTo(0)}
					>
						STANDARD FLATS
					</button>
				</div>
				<div className={styles.row}>
					<button
						className={`${getTabClasses(1)} ${styles.silver}`}
						onClick={() => swiper?.slideTo(1)}
					>
						{t('welcome_page.nft_types.silver')}
					</button>
					<button
						className={`${getTabClasses(2)} ${styles.gold}`}
						onClick={() => swiper?.slideTo(2)}
					>
						{t('welcome_page.nft_types.gold')}
					</button>
					<button
						className={`${getTabClasses(3)} ${styles.diamond}`}
						onClick={() => swiper?.slideTo(3)}
					>
						{t('welcome_page.nft_types.diamond')}
					</button>
				</div>
			</div>
			<div className={styles['content-wrapper']}>
				<Background activeIndex={activeIndex} />
				<Swiper
					className={styles.root}
					speed={1000}
					slidesPerView={1}
					onSwiper={setSwiper}
					onSlideChange={(e: SwiperClass) => setActiveIndex(e.activeIndex)}
				>
					<SwiperSlide className={styles.slide}>
						<Slide type={'standardFlats'} isActive={activeIndex === 0} className='is-standart'/>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Slide type={'silverFlats'} isActive={activeIndex === 1} className='is-silver'/>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Slide type={'goldFlats'} isActive={activeIndex === 2} className='is-gold'/>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Slide type={'diamondFlats'} isActive={activeIndex === 3} className='is-diamond'/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

type BackgroundProps = {
	activeIndex: number
}

const Background = React.memo<BackgroundProps>(({
	activeIndex
}) => {

	return (
		<div className={styles['bg-wrapper']}>
			<WebpImage
				className={activeIndex === 0 ? styles['is-active'] : ''}
				src={images.main.slider.backgrounds.standart}
				alt={'background'}
			/>
			<WebpImage
				className={activeIndex === 1 ? styles['is-active'] : ''}
				src={images.main.slider.backgrounds.silver}
				alt={'background'}
			/>
			<WebpImage
				className={activeIndex === 2 ? styles['is-active'] : ''}
				src={images.main.slider.backgrounds.gold}
				alt={'background'}
			/>
			<WebpImage
				className={activeIndex === 3 ? styles['is-active'] : ''}
				src={images.main.slider.backgrounds.diamond}
				alt={'background'}
			/>
			<div className={styles.overlay}/>
		</div>
	)
})

type SliderProps = {
	type: SlideTypes
	isActive: boolean,
	className?: string
}

const Slide = React.memo<SliderProps>(({
	type,
	isActive,
	className
}) => {
	const { t } = useTranslation();

	const content = useMemo(() => {
		const data: Record<SlideTypes, string[]> = {
			goldPass: [
				t('welcome_page.nft_properties.golden_pass.0'),
				t('welcome_page.nft_properties.golden_pass.1'),
				t('welcome_page.nft_properties.golden_pass.2'),
				t('welcome_page.nft_properties.golden_pass.3'),
				t('welcome_page.nft_properties.golden_pass.4'),
			],
			diamondPass: [
				t('welcome_page.nft_properties.diamond_pass.0'),
				t('welcome_page.nft_properties.diamond_pass.1'),
				t('welcome_page.nft_properties.diamond_pass.2'),
				t('welcome_page.nft_properties.diamond_pass.3'),
				t('welcome_page.nft_properties.diamond_pass.4'),
			],
			standardFlats: [
				'Approximate Supply: 3,490 NFTs',
				'Daily Net Yield (Staking): 4,000 $CFLAT',
				'Staking Duration: 180 days',
				'Unstake Available: After 5 days',
				'Reward Claim: 100% direct to wallet',
			],
			silverFlats: [
				'Approximate Supply: 835 NFTs',
				'Daily Net Yield (Staking): 6,000 $CFLAT',
				'Staking Duration: 180 days',
				'Unstake Available: After 5 days',
				'Reward Claim: 100% direct to wallet',
			],
			goldFlats: [
				'Approximate Supply: 555 NFTs',
				'Daily Net Yield (Staking): 8,000 $CFLAT',
				'Staking Duration: 180 days',
				'Unstake Available: After 5 days',
				'Reward Claim: 100% direct to wallet',
			],
			diamondFlats: [
				'Approximate Supply: 225 NFTs',
				'Daily Net Yield (Staking): 10,000 $CFLAT',
				'Staking Duration: 180 days',
				'Unstake Available: After 5 days',
				'Reward Claim: 100% direct to wallet',
			],
		}

		return data[type]
	}, [type, t]);

	const roomClasses = useMemo(() => [
		isActive ? styles['is-active'] : '',
		styles.room
	].join(' '), [isActive])

	const cardClasses = useMemo(() => [
		isActive ? styles['is-active'] : '',
		styles.card,
	].join(' '), [isActive])

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<WebpImage
					className={roomClasses}
					src={images.main.slider.elements[type]}
					alt={'room'}
				/>
				<div className={cardClasses}>
					<div className={[styles['card-text'], styles[className || '']].join(' ')}>
						{content.map((item, index) => (
							<p key={`slider-${index}`}>{item}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	)
})