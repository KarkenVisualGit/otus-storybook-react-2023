import React, { FC, ReactNode } from "react";

export interface MyParagraphProps {
  fontSize?: string;
  fontWeight?: "normal" | "bold" | "lighter" | number;
  color?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export const Paragraph: FC<MyParagraphProps> = ({
  children,
  fontSize,
  fontWeight,
  color,
  textAlign,
  className,
  style,
}) => {
  const paragraphStyle: React.CSSProperties = {
    fontSize,
    fontWeight,
    color,
    textAlign,
    ...style,
  };

  return (
    <p className={className} style={paragraphStyle}>
      {children}
    </p>
  );
};
