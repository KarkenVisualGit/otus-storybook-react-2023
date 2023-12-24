import React, { FC, ReactNode } from "react";

export interface MyParagraphProps {
  fontSize?: string;
  fontWeight?: "normal" | "bold" | "lighter" | number;
  color?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
  fontFamily?: string;
}

export const Paragraph: FC<MyParagraphProps> = ({
  children,
  fontSize,
  fontWeight,
  color,
  textAlign,
  className,
  style,
  fontFamily,
}) => {
  const paragraphStyle: React.CSSProperties = {
    fontSize,
    fontWeight,
    color,
    textAlign,
    fontFamily,
    ...style,
  };

  return (
    <p className={className} style={paragraphStyle}>
      {children}
    </p>
  );
};
