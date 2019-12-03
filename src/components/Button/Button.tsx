import * as React from 'react';
import block from 'bem-cn';
import './Button.scss';
import { sleep } from '../../utils/lodash';
import { ButtonProps } from './types';

const b = block('Button');

const Button: React.FC<ButtonProps> = ({ theme, fullWidth, children, className, ...rest }) => {
    const [clicked, setClicked] = React.useState(false);

    const animate = async () => {
        if (!clicked) {
            setClicked(true);
            await sleep(80);
            setClicked(false);
        }
    };

    const onClick: React.MouseEventHandler<HTMLButtonElement> = e => {
        animate();
        if (rest.onClick) {
            rest.onClick(e);
        }
    };

    const mixedClassName = b({ fullWidth, theme, clicked }).mix(className);

    return (
        <button onClick={onClick} className={mixedClassName} {...rest}>
            {children}
        </button>
    );
};

export default Button;
