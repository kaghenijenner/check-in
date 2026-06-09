import React from "react";

interface Props {
  ref?: React.Ref<HTMLButtonElement>;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  arialLabel?: string;
}

export default function Button({ ref, children, onClick, arialLabel }: Props) {
  return (
    <button
      className="cursor-pointer"
      ref={ref}
      onClick={onClick}
      aria-label={arialLabel}
    >
      {children}
    </button>
  );
}
