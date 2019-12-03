import React from 'react';
import { storiesOf } from '@storybook/react';
import createTable from './CreateTable';

interface Todo {
    title: string;
    id: string;
    completed: boolean;
    userId: string;
}

(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos: Todo[] = await res.json();
    const records = todos.splice(0, 40).map(todo => ({ ...todo, key: todo.id }));
    const TodoTable = createTable(records)([
        {
            render: record => <input type="checkbox" checked={record.completed} />,
            width: 5,
            head: 'completed',
        },
        {
            head: 'title',
            render: record => <span>{record.title}</span>,
        },
    ]);

    const DataTable = createTable(records)([
        { render: record => record.title, head: 'title', width: 500 },
        { render: record => record.key, head: 'key' },
        { render: record => record.id, head: 'id' },
        { render: record => record.userId, head: 'userId' },
    ]);
    storiesOf('Table', module)
        .add('Todo', () => <TodoTable theme="primary" />)
        .add('Todo fixed width', () => <TodoTable theme="primary" width={500} />)
        .add('Todo Bordered', () => <TodoTable theme="primary" bordered />)
        .add('Todo row click handling', () => <TodoTable theme="primary" onRowHover={alert} />)
        .add('Default table', () => <DataTable />);
})();
