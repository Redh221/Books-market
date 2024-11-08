import React from "react";
import module from "./Button.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

export interface ButtonSetting {
  type?: "icon" | "button" | "link";
  size?: "small" | "medium" | "large";
  font?: "small" | "medium" | "large" | "extraLarge";
  shape?: "sharp" | "smooth" | "round";
  color?: "glass" | "grey" | "brick" | "metallic" | "transparent";
  shadow?: "black" | "white" | false;
  textShadow?: "black" | "white" | false;
}

export interface MyButtonProps {
  children?: React.ReactNode;
  settings?: ButtonSetting;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  nav?: string;
  href?: string;
  preset?: "iconImg" | "iconText";
  type?: string;
  form?: boolean | "form";
}

const MyButton: React.FC<MyButtonProps> = React.memo(
  ({ children, settings = {}, onClick, nav, href, preset, form }) => {
    let defaultPreset: ButtonSetting = {};
    if (preset == "iconText") {
      defaultPreset = {
        type: "icon",
        size: "large",
        font: "extraLarge",
        shape: "round",
        color: "brick",
        shadow: "black",
        textShadow: "black",
      };
    } else if (preset == "iconImg") {
      defaultPreset = {
        type: "icon",
        size: "large",
        font: "medium",
        shape: "sharp",
        color: "transparent",
        shadow: false,
        textShadow: false,
      };
    } else {
      defaultPreset = {
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

    settings = { ...defaultPreset, ...settings };

    const combinedClasses = [
      settings.type ? module[settings.type] : "",
      settings.size ? module[settings.type + "__size__" + settings.size] : "",
      settings.font ? module["font__" + settings.font] : "",
      settings.shadow
        ? module[settings.type + "__shadow__" + settings.shadow]
        : "",
      settings.textShadow ? module["font__shadow__" + settings.textShadow] : "",
      settings.shape
        ? module[settings.type + "__shape__" + settings.shape]
        : "",
      settings.color ? module["color__" + settings.color] : "",
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
      }
      //special case for href
      else if (nav) {
        navigate(nav);
      }
      //special case for nav
      else if (form) {
        const form = document.querySelector("form");
        if (form) {
          form.requestSubmit();
        }
      }
      //special case for form
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
        target="_blank"
      >
        {children}
      </a>
    ) : (
      <div className={module.container}>
        <div
          className={combinedClasses}
          style={combinedStyle}
          onClick={handleClick}
          title={tooltipText}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default MyButton;
