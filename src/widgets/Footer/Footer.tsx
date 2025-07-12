import { WebpImage } from '@/shared/ui/WebpImage'
import { images } from '@/shared/lib/images'

import styles from './Footer.module.scss'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer className={`${styles.root} container`}>
			<div className={styles.socialsLinksContainer}>
				<a className={styles.social} href={'https://x.com/cflatsproject'} target={'_blank'} rel={'noreferrer noopener'}>
					<WebpImage src={images.main.header.x} alt={'x'} />
				</a>
				<p className={styles.copyracy}>
					<span>© {new Date().getFullYear()} Cryptoflats · </span>
					{t('footer.copyright')}
				</p>
			</div>
			<WebpImage
				className={styles.shape}
				src={images.main.footer.shape}
				alt={'shape'}
			/>
		</footer>
	)
}