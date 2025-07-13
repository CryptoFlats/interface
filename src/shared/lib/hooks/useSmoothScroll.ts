import { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Инициализируем smooth-scroll с нужными опциями
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800, // Скорость анимации
      speedAsDuration: true, // Интерпретировать скорость как общую длительность анимации
      easing: 'easeInOutCubic', // Функция сглаживания для более приятного эффекта
      header: '[data-header]', // Если есть фиксированная шапка, можно указать ее селектор
      offset: 100, // Дополнительный отступ от целевого элемента
    });

    // Возвращаем функцию для очистки, которая уничтожит инстанс smooth-scroll
    // при размонтировании компонента, чтобы избежать утечек памяти.
    return () => {
      scroll.destroy();
    };
  }, []); // Пустой массив зависимостей гарантирует, что эффект выполнится только один раз
};
