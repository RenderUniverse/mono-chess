import React from 'react';
import clsx from 'clsx';

export type TabItem = {
    id: string | number;
    label: string;
};

export type TabProps = {
    items: TabItem[];
    className?: string;
    defaultFocusedTab?: TabItem;
    renderTab?: (item: TabItem) => JSX.Element;
};

const Tab = (props: TabProps) => {
    const { items, className, renderTab, defaultFocusedTab = items[0] } = props;
    const [focusedTab, setFocusedTab] = React.useState<TabItem>(defaultFocusedTab);

    return (
        <div className={clsx('flex-col w-full', className)}>
            <div
                style={{ gridTemplateColumns: `repeat(${items.length}, max-content)` }}
                className="ui-tab">
                {items.map((item, key) => (
                    <button
                        key={key}
                        onClick={() => setFocusedTab(item)}
                        className={clsx('ui-tab-btn', focusedTab.id === item.id && 'focused')}>
                        {item.label}
                    </button>
                ))}
                <div style={{ gridColumnStart: +focusedTab.id + 1 }} className="ui-tab-indicator" />
            </div>
            {renderTab?.(focusedTab)}
        </div>
    );
};

export default Tab;
