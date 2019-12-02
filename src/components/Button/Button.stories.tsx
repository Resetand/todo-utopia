import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import Button from './Button';

const events = actions('clicked', 'focused');

storiesOf('Button', module)
    .add('Default', () => <Button {...events}>Click</Button>)
    .add('Primary', () => (
        <Button type="primary" {...events}>
            Click
        </Button>
    ))
    .add('Danger', () => (
        <Button type="danger" {...events}>
            Click
        </Button>
    ))
    .add('Link', () => (
        <Button type="link" {...events}>
            Click
        </Button>
    ));

// export default fakeData;
