import { storiesOf } from '@storybook/react';
import React from 'react';
import Checkbox from './Checkbox';
import { CheckboxProps } from './types';

const Checkable = (props: Omit<CheckboxProps, 'onChange' | 'checked'>) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <Checkbox onChange={() => setChecked(!checked)} checked={checked} {...props}>
            Click me
        </Checkbox>
    );
};

const w = (...arg: any[]) => () => (
    <>
        {arg.map(el => (
            <>
                {el}
                <br />
            </>
        ))}
    </>
);

storiesOf('Checkbox', module)
    .add('Unchecked / Checked', w(<Checkbox checked={false} />, <Checkbox checked />))
    .add('Disabled', w(<Checkbox checked={false} disabled />, <Checkbox checked disabled />))
    .add('Clickable', w(<Checkable />))
    .add('Danger theme', w(<Checkable theme="danger" />));
