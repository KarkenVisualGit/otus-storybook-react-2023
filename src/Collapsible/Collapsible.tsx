import React, { Component } from "react";

export interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  titleColor?: string;
  titleFontSize?: string;
  contentFontSize?: string;
  contentFontFamily?: string;
}

export interface CollapsibleState {
  isOpen: boolean;
}

export class Collapsible extends Component<CollapsibleProps, CollapsibleState> {
  constructor(props: CollapsibleProps) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const {
      title,
      children,
      titleColor,
      titleFontSize,
      contentFontSize,
      contentFontFamily,
    } = this.props;
    const { isOpen } = this.state;

    const titleStyle = {
      color: titleColor,
      fontSize: titleFontSize,
    };

    const contentStyle = {
      fontSize: contentFontSize,
      fontFamily: contentFontFamily,
    };

    return (
      <div>
        <h2 onClick={this.toggle} style={titleStyle}>
          {title}
        </h2>
        {isOpen && <div style={contentStyle}>{children}</div>}
      </div>
    );
  }
}

export default Collapsible;
