import { useEffect, useMemo } from 'react';

import { reflect } from '@effector/reflect';

import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';
import { Button } from '@/shared/ui/Button';

import styles from './Form.module.scss'
import { formModel } from '@/features/form/model';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const Form = () => {
	const formClasses = useMemo(() => [
		styles['form-wrapper'],
		window.innerWidth >= 1300 ? '' : 'container'
	].join(' '), []);

	const { t } = useTranslation();

	useEffect(() => {
		formModel.onSuccess.set(() => {
			toast(
				"Thanks for contacting! We've received your message and will respond as soon as we can.",
				{
					type: 'success',
					theme: 'dark',
					position: 'top-center'
				}
			)
		})
		formModel.onError.set(() => {
			toast(
				"Something went wrong. Try again later.",
				{
					type: 'error',
					theme: 'dark',
					position: 'top-center'
				}
			)
		})
	}, [])

	return (
		<section className={styles.root}>
			<div className={'container'}>
				<h3 className={styles.title}>
					{/* @ts-ignore */}
					{t('welcome_page.contact_us.title')}
				</h3>
				<p className={styles.description}>
					{/* @ts-ignore */}
					{t('welcome_page.contact_us.description')}
				</p>
			</div>
			<div className={formClasses}>
				<div className={styles.form}>
					<div className={styles.inputs}>
						<InputEmailReflect 
							className={styles.input}
							// @ts-ignore
							placeholder={t('welcome_page.contact_us.form.email')} 
						/>
						<InputTopicReflect 
							className={styles.input} 
							// @ts-ignore
							placeholder={t('welcome_page.contact_us.form.topic')} 
						/>
					</div>
					<TextareaMessageReflect 
						className={styles.textarea} 
						// @ts-ignore
						placeholder={t('welcome_page.contact_us.form.message')}
					/>
				</div>
				<ButtonSubmitReflect
					className={styles.button}
					view={'purple'}
					size={'s'}
				>
					{/* @ts-ignore */}
					{t('buttons.send_message')}
				</ButtonSubmitReflect>
			</div>
		</section>
	)
}

const InputTopicReflect = reflect({
	view: Input,
	bind: {
		value: formModel.$topic,
		disabled: formModel.$isLoading,
		onInput: formModel.topicUpdated,
	}
})

const InputEmailReflect = reflect({
	view: Input,
	bind: {
		value: formModel.$email,
		disabled: formModel.$isLoading,
		onInput: formModel.emailUpdated,
	}
})

const TextareaMessageReflect = reflect({
	view: Textarea,
	bind: {
		value: formModel.$message,
		disabled: formModel.$isLoading,
		onInput: formModel.messageUpdated,
	}
})

const ButtonSubmitReflect = reflect({
	view: Button,
	bind: {
		disabled: formModel.$isLoading,
		onClick: formModel.formSended
	}
})