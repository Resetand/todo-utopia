import * as React from 'react';
import './Table.scss';
import Table from './Table';
import { RecordRequired, TableProps, Column } from './types';

const createTable = <T extends RecordRequired = any>(records: Array<RecordRequired & T>) => {
    type Record = typeof records[0];
    type ClosureTableProps = Omit<TableProps<Record>, 'records' | 'columns'>;

    return (columns: Column<Record>[]) => {
        const ClosureTable: React.FC<ClosureTableProps> = ({ ...rest }) => (
            <Table<Record> columns={columns} records={records} {...rest} />
        );

        return ClosureTable;
    };
};

export default createTable;
