import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';

storiesOf('Button', module)
    .add('Default', () => <Button>Click</Button>)
    .add('Primary', () => <Button theme="primary">Click</Button>)
    .add('Danger', () => <Button theme="danger">Click</Button>)
    .add('Link', () => <Button theme="link">Click</Button>)
    .add('Full width', () => <Button fullWidth>Click</Button>)
    .add('Group buttons', () => (
        <ButtonGroup>
            <Button theme="primary">All</Button>
            <Button>Completed</Button>
            <Button>Todo</Button>
        </ButtonGroup>
    ));
