import React, { forwardRef } from "react";
import { StyledButton } from "./styled";

const Button = forwardRef(
  ({ children, maxWidth, link, className, onClick, ...props }, ref) => {
    return (
      <StyledButton
        {...props}
        $maxWidth={maxWidth}
        {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
        className={className}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
