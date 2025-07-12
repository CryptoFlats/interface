import React, { useMemo } from 'react';

import styles from './Burger.module.scss'

export type BurgerProps = {
	isOpen: boolean
	className?: string
	onClick: (v: boolean) => void
}

export const Burger = React.memo<BurgerProps>(({
	isOpen,
	className,
	onClick
}) => {
	const classes = useMemo(() => [
		styles.root,
		isOpen ? styles['is-active'] : '',
		className ? className : ''
	].join(' '), [className, isOpen])

	return (
		<button className={classes} onClick={() => onClick(!isOpen)}>
			<span />
			<span />
			<span />
		</button>
	)
})