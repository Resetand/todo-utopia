export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    theme?: 'primary' | 'danger' | 'default' | 'link';
    fullWidth?: boolean;
    className?: string;
}

export interface ButtonGroupProps {
    children: React.ReactElement<ButtonProps>[];
}
