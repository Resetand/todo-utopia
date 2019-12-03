export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    theme?: 'primary' | 'link' | 'danger' | 'default';
    fullWidth?: boolean;
    className?: string;
}

export interface ButtonGroupProps {
    children: React.ReactElement<ButtonProps>[];
}
