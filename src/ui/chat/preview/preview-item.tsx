import React from 'react';
import moment from 'moment';
import Avatar from 'common/titan-ui/avatar';
import clsx from 'clsx';

export type PreviewItemProps = {
    avatarUrl?: string;
    name: string;
    message: string | JSX.Element | number;
    dttm: Date | number | string;
    height?: number;
    onClick?: () => void;
    focused?: boolean;
};

const PreviewItem = (props: PreviewItemProps, ref: React.Ref<HTMLDivElement>) => {
    const { avatarUrl, name, message, height = 60, dttm, onClick, focused } = props;
    return (
        <div
            ref={ref}
            style={{ height: height }}
            onClick={onClick}
            className={clsx('preview-item-container', focused && 'focused')}>
            <Avatar url={avatarUrl} nameholder={name} className="preview-avatar" alt="avatar" />
            <div className="h-13 flex-col mx-3 justify-between">
                <span className="preview-name">{name}</span>
                <span className="preview-message">{message}</span>
                <span className="preview-dttm">{moment(dttm).fromNow(true)}</span>
            </div>
        </div>
    );
};

export default React.forwardRef(PreviewItem);
