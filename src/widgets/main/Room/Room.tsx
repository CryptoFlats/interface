

import { images } from '@/shared/lib/images'
import styles from './Room.module.scss'
import { WebpImage } from '@/shared/ui/WebpImage'
import { useTranslation } from 'react-i18next'



export const Room = () => {
	const { t } = useTranslation();

	const data = [
		{
			class: `${styles.gen1} ${styles.gen}`,
			image: images.main.room.gen1,
			title: 'GEN#1',
			// @ts-ignore
			description: t('gen_rooms.0'),
		},
		{
			class: `${styles.gen2} ${styles.gen}`,
			image: images.main.room.gen2,
			title: 'GEN#2',
			// @ts-ignore
			description: t('gen_rooms.1'),
		},
		{
			class: `${styles.gen3} ${styles.gen}`,
			image: images.main.room.gen3,
			title: 'GEN#3',
			// @ts-ignore
			description: t('gen_rooms.2'),
		},
		{
			class: `${styles.gen4} ${styles.gen}`,
			image: images.main.room.gen4,
			title: 'GEN#4',
			// @ts-ignore
			description: t('gen_rooms.3'),
		},
		{
			class: `${styles.gen5} ${styles.gen}`,
			image: images.main.room.gen5,
			title: 'GEN#5',
			// @ts-ignore
			description: t('gen_rooms.4'),
		},
	]
	return (
		<div className={'container'}>
			<div className={styles.root}>
				<WebpImage className={styles.room} src={images.main.room.room} alt={'room'} />
				{data.map((item, key) => (
					<div className={item.class} key={key}>
						<WebpImage src={item.image} alt={`gen${key + 1}`} />
						<div className={styles.content}>
							<p className={styles.title}>{item.title}</p>
							<p className={styles.description}>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}