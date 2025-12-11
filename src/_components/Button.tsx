import type React from "react";
import type { ButtonProps } from "../types";

function Button({
  px,
  py,
  rad,
  textColor,
  bgColor,
  borderColor,
  fontSize,
  fontWeight,
  pl,
  children,
}: ButtonProps & { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: `${py}px ${px}px`,
        paddingLeft: `${pl}px`,
        borderRadius: `${rad}px`,
        fontSize: `${fontSize}px`,
        fontWeight: fontWeight,
        color: textColor,
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
