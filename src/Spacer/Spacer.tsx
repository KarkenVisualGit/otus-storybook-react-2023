import React, { FC, CSSProperties } from "react";

export interface SpacerProps {
  height?: string;
  color?: string;
  style?: CSSProperties;
}

export const Spacer: FC<SpacerProps> = ({ height, color, style }) => {
  const spacerStyle: CSSProperties = {
    height,
    backgroundColor: color,
    ...style,
  };

  return (
    <div style={spacerStyle}>
      <hr />
    </div>
  );
};
