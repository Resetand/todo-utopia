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
    onRowClick,
    theme,
    fixedLayout,
}: TableProps<Record>): ReturnType<React.FC<TableProps<Record>>> => {
    const createColumnsCSS = ({
        width,
        align: textAlign,
    }: Column<Record>): React.CSSProperties => ({ width, textAlign });

    const renderHead = () => (
        <tr>
            {columns.map(column => (
                <th style={createColumnsCSS(column)} className={b('item', { title: true, theme })}>
                    {column.head}
                </th>
            ))}
        </tr>
    );

    const renderBody = () =>
        records.map(record => {
            const onClick = (event: React.MouseEvent) => {
                if (onRowClick) {
                    onRowClick(record.key, event);
                }
            };

            return (
                <tr onClick={onClick} key={record.key}>
                    {columns.map(column => {
                        const { render } = column;
                        return (
                            <td style={createColumnsCSS(column)} className={b('item')}>
                                {typeof render === 'function' ? render(record) : render}
                            </td>
                        );
                    })}
                </tr>
            );
        });

    const hoverMod = Boolean(onRowClick);

    const tableAttrs = {
        className: b({ bordered, hover: hoverMod, theme, fixedLayout }),
        style: { width: tableWidth },
    };

    return (
        <table {...tableAttrs}>
            <thead className={b('head', { title: true, theme })}>{renderHead()}</thead>
            <tbody>{renderBody()}</tbody>
        </table>
    );
};

export default Table;
