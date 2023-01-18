import React from 'react';
import clsx from 'clsx';
import VirtualizedList from 'common/titan-ui/virtualized-list';
import Tab from 'common/titan-ui/tab';
import ScrollBox from 'common/titan-ui/scroll-box';
import PreviewItem from 'ui/chat/preview/preview-item';

export type PreviewListProps = {
    className?: string;
};

const tabItems = [
    {
        id: 0,
        label: 'All',
    },
    {
        id: 1,
        label: 'Unread',
    },
];

const convList = [
    {
        _id: 0,
        name: 'Admission Bot',
        message: 'Xin chao',
        dttm: Date.now(),
    },
    {
        _id: 1,
        name: 'Food Bot',
        message: 'Xin chao',
        dttm: Date.now(),
    },
];

const PreviewList = (props: PreviewListProps) => {
    const { className } = props;

    return (
        <div className={clsx('preview-list', className)}>
            <Tab items={tabItems} />
            <div className="preview-list-content">
                <ScrollBox>
                    <VirtualizedList
                        data={convList}
                        itemKey="_id"
                        itemHeight={70}
                        renderItem={(item) => (
                            <PreviewItem
                                height={70}
                                name={item.name}
                                message={item.message}
                                dttm={item.dttm}
                            />
                        )}
                    />
                </ScrollBox>
            </div>
        </div>
    );
};

export default PreviewList;
