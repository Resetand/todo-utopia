export interface RecordRequired {
    key: string;
}

export interface TableProps<Record> {
    columns: Column<Record>[];
    records: Record[];
}

export interface Column<Record> {
    title: string;
    render: ((record: Record) => React.ReactNode) | React.ReactNode;
    width?: number;
    align?: 'right' | 'left' | 'center';
}

export type ColumnsProps<T> = Column<T>[];
