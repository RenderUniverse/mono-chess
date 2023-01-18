import React from 'react';
import clsx from 'clsx';

export type AvatarProps = {
    url?: string;
    alt?: string;
    nameholder?: string;
    className?: string;
};

const Avatar = (props: AvatarProps) => {
    const { url, alt, className, nameholder } = props;

    if (!url) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return (
            <div
                style={{
                    backgroundColor: `#${randomColor}`,
                    fontSize: '16px',
                }}
                className={clsx('ui-avatar flex items-center justify-center', className)}>
                {nameholder?.substring(0, 2)}
            </div>
        );
    }

    return <img className={clsx('ui-avatar', className)} src={url} alt={alt} />;
};

export default Avatar;
