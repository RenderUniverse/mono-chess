import React from 'react';
import List from 'rc-virtual-list';

export type VirtualizedListProps<T> = {
    data: T[];
    itemKey: React.Key;
    renderItem: (item: T) => JSX.Element;
    itemHeight?: number;
};

function VirtualizedList<T>(props: VirtualizedListProps<T>) {
    const { data, itemKey, renderItem, itemHeight } = props;
    return (
        <List data={data} itemHeight={itemHeight} itemKey={itemKey}>
            {renderItem}
        </List>
    );
}

export default VirtualizedList;
