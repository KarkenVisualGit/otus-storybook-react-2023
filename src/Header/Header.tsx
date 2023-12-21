import React, { FC, ReactNode } from "react";

export interface MyComponentProps {
  level: number;
  children: ReactNode;
}

export const Title: FC<MyComponentProps> = ({ level, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag>{children}</Tag>;
};

export default Title;
