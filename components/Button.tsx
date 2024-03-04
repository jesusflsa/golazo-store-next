import React from "react";

interface ButtonProps {
  children?: React.JSX.Element | string;
  type?: "primary" | "secondary";
}

function Button({ children = "Button", type = "primary" }: ButtonProps) {
  return (
    <button className={`px-[16px] py-[8px] transition-all ${type === 'primary' ? 'hover:bg-white bg-blue-600' : ''} ${type === 'secondary' ? 'bg-blue-300 hover:bg-blue-500' : ''} border border-black`} >
      {children}
    </button>
  );
}

export default Button;
