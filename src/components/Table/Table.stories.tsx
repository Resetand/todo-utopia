import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './Table';
import { ColumnsProps } from './types';

const records = Array(10)
    .fill(null)
    .map((_, i) => ({ key: String(i), index: i }));

type Record = typeof records[0];

const columns: ColumnsProps<Record> = [
    {
        title: 'column-1',
        render: r => `${r.key} This a 300px col `,
        width: 300,
    },
    {
        title: 'column-2',
        render: '2️⃣',
    },
    {
        title: 'column-3',
        render: '3️⃣',
    },
];

storiesOf('Table', module)
    .add('Default table', () => <Table<Record> records={records} columns={columns} />)
    .add('Fixed width', () => <Table<Record> width={500} records={records} columns={columns} />)
    .add('Bordered', () => <Table<Record> bordered records={records} columns={columns} />)
    .add('Row click handling', () => (
        <Table<Record> onRowClick={alert} hoverEffect records={records} columns={columns} />
    ))
    .add('Custom head', () => {
        const styles = { color: '#000', backgroundColor: '#fff' };
        return <Table<Record> headerStyle={styles} records={records} columns={columns} />;
    });

// export default fakeData;
