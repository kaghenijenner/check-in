import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}
