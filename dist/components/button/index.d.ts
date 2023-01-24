import { ReactNode } from 'react';

type ButtonProps = {
    children: string | ReactNode;
};
declare const Button: ({ children }: ButtonProps) => JSX.Element;

export { Button as default };
