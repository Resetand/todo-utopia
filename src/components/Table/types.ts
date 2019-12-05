export interface RecordRequiredFields {
    key: string;
}

type RowHandler = (key: string, event: React.MouseEvent) => void;

export interface TableProps<Record> {
    theme?: 'primary' | 'danger' | 'default' | 'clear';
    columns: Column<Record>[];
    records: Record[];
    width?: number;
    onRowClick?: RowHandler;
    onRowHover?: RowHandler;
    bordered?: boolean;
    headerStyle?: React.CSSProperties;
    fixedLayout?: boolean;
}

export interface Column<Record> {
    head?: React.ReactNode;
    render: ((record: Record) => React.ReactNode) | React.ReactNode;
    width?: number;
    align?: 'right' | 'left' | 'center';
}

export type ColumnsProps<T> = Column<T>[];
