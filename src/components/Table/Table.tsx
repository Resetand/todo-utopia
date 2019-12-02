import block from 'bem-cn';
import * as React from 'react';
import './Table.scss';
import { RecordRequired, TableProps, Column } from './types';

const b = block('Table');

const Table = <Record extends RecordRequired>({
    records,
    columns,
    width: tableWidth,
    bordered = false,
    onRowClick = () => {},
    hoverEffect,
    headerStyle,
}: TableProps<Record>) => {
    const createColumnsCustomStyles = ({ width, align }: Column<Record>) => {
        const style: React.CSSProperties = {
            width,
            textAlign: align || 'left',
        };
        return style;
    };

    const renderHead = () => {
        return columns.map(column => (
            <th style={createColumnsCustomStyles(column)} className={b('item', { title: true })}>
                {column.title}
            </th>
        ));
    };

    const renderBody = () =>
        records.map(record => (
            <tr onClick={() => onRowClick(record.key)} key={record.key}>
                {columns.map(column => {
                    const { render } = column;
                    return (
                        <td style={createColumnsCustomStyles(column)} className={b('item')}>
                            {typeof render === 'function' ? render(record) : render}
                        </td>
                    );
                })}
            </tr>
        ));

    return (
        <table style={{ width: tableWidth }} className={b({ bordered, hoverEffect })}>
            <thead style={headerStyle} className={b('head', { title: true })}>
                {renderHead()}
            </thead>
            <tbody>{renderBody()}</tbody>
        </table>
    );
};

export const createTable = <T extends RecordRequired = any>(records: Array<RecordRequired & T>) => {
    type Record = typeof records[0];
    type ClosureTableProps = Omit<TableProps<Record>, 'records' | 'columns'>;

    return (columns: Column<Record>[]) => {
        const ClosureTable: React.FC<ClosureTableProps> = ({ ...rest }) => (
            <Table<Record> columns={columns} records={records} {...rest} />
        );

        return ClosureTable;
    };
};

export default Table;
