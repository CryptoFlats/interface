import { useEffect, useMemo, useRef, useState } from 'react';

function isAnyElementInViewport(el: HTMLElement): boolean {
	if (el) {
		const rect = el.getBoundingClientRect()
		const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
		const windowWidth = (window.innerWidth || document.documentElement.clientWidth)

		const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
		const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)

		return (vertInView && horInView)
	}

	return false
}

export const useScrollAnimation = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const [isShowed, setIsShowed] = useState(false)

	const classes = useMemo(() => [
		'is-section-not-animated',
		isShowed ? 'is-section-animated' : ''
	].join(' '), [isShowed])

	useEffect(() => {
		// Если анимация уже была показана, выходим.
		// Это также уберет слушатель события после того, как isShowed станет true.
		if (isShowed) {
			return;
		}

		const handleScroll = () => {
			if (ref.current && isAnyElementInViewport(ref.current)) {
				setIsShowed(true);
			}
		};

		// Проверяем один раз при монтировании, вдруг элемент уже видим
		handleScroll();

		// Вешаем слушатель на `window` - это правильный объект для скролла всей страницы
		window.addEventListener('scroll', handleScroll, { passive: true });

		// Убираем слушатель при размонтировании или когда isShowed станет true
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isShowed]); // Зависимость от isShowed позволяет нам убрать слушатель после анимации

	return {
		ref,
		isShowed,
		classes,
	}
}