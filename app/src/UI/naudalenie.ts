import React from "react";

interface StylesProps {
  type?: "icon" | "button" | "link"; // тип кнопки
  font?: number; // размер шрифта
  glass?: number | boolean; // прозрачность или значение false
}

interface MyComponentProps {
  styles?: StylesProps; // Используем объект для передачи стилей
}

// Функциональный компонент
const MyComponent: React.FC<MyComponentProps> = React.memo(({ styles }) => {
  // Устанавливаем значения по умолчанию
  const defaultStyles: StylesProps = {
    type: "button", // Значение по умолчанию для типа кнопки
    font: 12, // Значение по умолчанию для font
    glass: false, // Значение по умолчанию для glass
  };

  // Объединяем переданные стили с дефолтными
  const combinedStyles = { ...defaultStyles, ...styles };

  // Метод для формирования классов
  const getCombinedClasses = (styles: StylesProps) => {
    const classes: string[] = [];

    if (styles.type) {
      classes.push(styles.type); // добавляем класс по типу
    }
    if (styles.glass !== false) {
      classes.push("glass"); // добавляем класс glass
    }

    return classes.join(" ").trim();
  };

  // Метод для формирования стилей
  const getCombinedStyles = (styles: StylesProps) => {
    const combinedStyles: React.CSSProperties = {};

    if (typeof styles.font === "number") {
      combinedStyles.fontSize = `${styles.font}px`; // устанавливаем размер шрифта
    }

    if (typeof styles.glass === "number") {
      combinedStyles.opacity = styles.glass; // перезаписываем прозрачность, если передано числовое значение
    } else if (styles.glass === false) {
      combinedStyles.opacity = 1; // если glass равен false, устанавливаем непрозрачность
    }

    return combinedStyles;
  };

  const combinedClasses = getCombinedClasses(combinedStyles);
  const combinedStyle = getCombinedStyles(combinedStyles);

  return (
    <div className={combinedClasses} style={combinedStyle}>
      Это элемент с опциональными классами и стилями
    </div>
  );
});

export default MyComponent;
