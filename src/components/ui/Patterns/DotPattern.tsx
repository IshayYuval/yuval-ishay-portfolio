import React, { forwardRef } from "react";
import styles from "./DotPattern.module.css";

export interface DotPatternProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
}

const DotPattern = forwardRef<HTMLElement, DotPatternProps>(function DotPattern(
  { as: Component = "div", children, className = "", style, ...props },
  ref
) {
  return (
    <Component
      ref={ref}
      className={`${styles.dotPattern} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
});

export default DotPattern;
