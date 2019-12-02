import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.stories\.tsx$/);

import '../src/styles/main.scss';
function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
