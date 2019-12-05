export interface CheckboxProps {
    checked: boolean;
    onChange?: (value: boolean, event: React.ChangeEvent) => void;
    theme?: 'primary' | 'danger';
    disabled?: boolean;
    size?: string | number;
}
