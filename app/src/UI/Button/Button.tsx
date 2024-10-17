import React from "react";
import module from "./Button.module.scss";

interface ButtonSettingProps {
  type?: "icon" | "button" | "link";
  font?: number;
  glass?: number | boolean;
  size?: "small" | "medium" | "large" | "extra_large";
  color?: string;
}

interface MyButtonProps {
  children: React.ReactNode;
  settings?: ButtonSettingProps;
}

const MyButton: React.FC<MyButtonProps> = React.memo(
  ({ children, settings = {} }) => {
    const typeClass = settings.type ? module[settings.type] : module.button;
    const typeSize = settings.size ? module[settings.size] : module.medium;
    const typeColor = settings.color
      ? module[settings.color]
      : module.defaultColor;
    const combinedClasses = [
      typeClass,
      typeSize,
      typeColor,
      settings.glass !== false ? module.glass : "",
    ]
      .filter(Boolean)
      .join(" ");
    const combinedStyle: React.CSSProperties = {
      fontSize: settings.font ? `${settings.font}px` : undefined,
    };
    return (
      <div className={combinedClasses} style={combinedStyle}>
        {children}
      </div>
    );
  }
);

export default MyButton;
