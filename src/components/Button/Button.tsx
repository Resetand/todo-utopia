import * as React from 'react';
import block from 'bem-cn';
import './Button.scss';

const b = block('Button');

interface Props extends React.HTMLProps<HTMLButtonElement> {
    type?: 'primary' | 'link' | 'danger' | 'default';
    htmlType?: 'button' | 'submit' | 'reset';

    fullWidth?: boolean;
    className?: string;
}

const Button: React.FC<Props> = ({ type, fullWidth, children, className, htmlType, ...rest }) => {
    const htmlButtonProps = {
        ...rest,
        type: htmlType,
        className: b({ fullWidth, type }).mix(className),
    };
    return <button {...htmlButtonProps}>{children}</button>;
};

export default Button;
