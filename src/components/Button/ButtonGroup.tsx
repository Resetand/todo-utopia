import block from 'bem-cn';
import * as React from 'react';
import { ButtonGroupProps } from './types';

const b = block('ButtonGroup');

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
    return <div className={b()}>{children}</div>;
};

export default ButtonGroup;
