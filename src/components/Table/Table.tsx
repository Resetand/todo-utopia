import block from 'bem-cn';
import * as React from 'react';
import './Table.scss';
import { RecordRequired, TableProps, Column } from './types';

const b = block('Table');

const Table = <Record extends RecordRequired>({ records, columns }: TableProps<Record>) => {
    const getColumnsCustomStyle = ({ width, align }: Column<Record>) => {
        const style: React.CSSProperties = {
            width,
            textAlign: align || 'left',
        };
        return style;
    };

    const renderHead = () => {
        return columns.map(column => (
            <th style={getColumnsCustomStyle(column)} className={b('item', { title: true })}>
                {column.title}
            </th>
        ));
    };

    const renderBody = () =>
        records.map(record => (
            <tr key={record.key} className={b('row')}>
                {columns.map(column => {
                    const { render } = column;
                    return (
                        <td style={getColumnsCustomStyle(column)} className={b('item')}>
                            {typeof render === 'function' ? render(record) : render}
                        </td>
                    );
                })}
            </tr>
        ));

    return (
        <table className={b()}>
            <thead className={b('head', { title: true })}>{renderHead()}</thead>
            <tbody>{renderBody()}</tbody>
        </table>
    );
};

export const createTable = <T extends RecordRequired = any>(records: Array<RecordRequired & T>) => {
    type Record = typeof records[0];

    return (columns: Column<Record>[]) => {
        const ClosureTable: React.FC<Omit<TableProps<Record>, 'records' | 'columns'>> = ({
            ...rest
        }) => {
            return <Table<Record> columns={columns} records={records} {...rest} />;
        };
        return ClosureTable;
    };
};

export default Table;
