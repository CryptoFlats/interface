import React, { useMemo } from 'react';

import styles from './Button.module.scss'

export type ButtonProps = React.PropsWithChildren<{
	href?: string
	target?: string
	view?: 'brand' | 'purple' | 'pink' | 'disabled' | 'blue'
	size?: 'l' | 'm' | 's'
	disabled?: boolean
	isShadow?: boolean
	className?: string
	onClick?: () => void
}>

export const Button = React.memo<ButtonProps>(({
	view = 'brand',
	size = 'm',
	href,
	className,
	children,
	disabled,
	onClick,
	target
}) => {
	const classes = useMemo(() => [
		styles.root,
		styles[`size-${size}`],
		styles[`view-${view}`],
		className ? className : ''
	].join(' '), [size, view, className])

	if (href) {
		return (
			<a
				className={classes}
				href={href}
				target={target}
				rel={'noreferrer noopener'}
			>
				{children}
			</a>
		)
	}

	return (
		<button
			className={classes}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
})