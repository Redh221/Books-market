import React from "react";
import module from "./Button.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

interface ButtonSetting {
  type?: "icon" | "button" | "link";
  size?: "small" | "medium" | "large";
  font?: "small" | "medium" | "large" | "extraLarge";
  shape?: "sharp" | "smooth" | "round";
  color?: "glass" | "grey" | "brick";
  shadow?: "black" | "white" | false;
  textShadow?: "black" | "white" | false;
}

interface MyButtonProps {
  children?: React.ReactNode;
  settings?: ButtonSetting;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  nav?: string;
  href?: string;
  preset?: "iconImg" | "iconText";
}

const MyButton: React.FC<MyButtonProps> = React.memo(
  ({ children, settings = {}, onClick, nav, href, preset }) => {
    let defaultPpreset: ButtonSetting = {};
    if (preset == "iconText") {
      defaultPpreset = {
        type: "icon",
        size: "large",
        font: "extraLarge",
        shape: "round",
        color: "brick",
        shadow: "black",
        textShadow: "black",
      };
    } else if (preset == "iconImg") {
      defaultPpreset = {
        type: "icon",
        size: "large",
        font: "medium",
        shape: "sharp",
        color: "glass",
        shadow: false,
        textShadow: false,
      };
    } else {
      defaultPpreset = {
        type: "button",
        size: "medium",
        font: "medium",
        shape: "smooth",
        color: "glass",
        shadow: "black",
        textShadow: "black",
      };
    }

    const location = useLocation();
    const navigate = useNavigate();

    settings = { ...defaultPpreset, ...settings };

    const combinedClasses = [
      settings.type ? module[settings.type] : "",
      settings.size ? module["size_" + settings.size] : "",
      settings.font ? module["font_" + settings.font] : "",
      settings.shadow ? module["shadow_" + settings.shadow] : "",
      settings.textShadow ? module["font_shadow_" + settings.textShadow] : "",
      settings.shape ? module[settings.shape] : "",
      settings.color ? module[settings.color] : "",
      location.pathname === nav ? module.active : "",
    ]
      .filter(Boolean)
      .join(" ");

    const combinedStyle: React.CSSProperties = {
      fontSize: settings.font ? `${settings.font}px` : undefined,
    };
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (href) {
        window.location.href = href;
      } else if (nav) {
        navigate(nav);
      }
      if (onClick) {
        onClick(e);
      }
    };
    const tooltipText = nav || href ? nav || href : "";
    return settings.type === "link" ? (
      <a
        href={href || "#"}
        className={combinedClasses}
        style={combinedStyle}
        title={tooltipText}
      >
        {children}
      </a>
    ) : (
      <div
        className={combinedClasses}
        style={combinedStyle}
        onClick={handleClick}
        title={tooltipText}
      >
        {children}
      </div>
    );
  }
);

export default MyButton;
