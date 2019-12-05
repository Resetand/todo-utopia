import block from 'bem-cn';
import * as React from 'react';
import { CheckboxProps } from './types';
import './Checkbox.scss';

const b = block('Checkbox');

const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    onChange,
    children,
    disabled,
    size,
    theme,
}) => {
    const onChangeHandler = (e: React.ChangeEvent) => {
        if (onChange) {
            onChange(!checked, e);
        }
    };

    const inputProps = {
        checked,
        className: b('input'),
        type: 'checkbox',
        disabled,
    };

    return (
        <div className={b()}>
            <label className={b('label')}>
                <input {...inputProps} onChange={onChangeHandler} />
                <span style={{ width: size, height: size }} className={b('box', { theme })} />
                <span className={b('label-inner')}>{children}</span>
            </label>
        </div>
    );
};

export default Checkbox;
