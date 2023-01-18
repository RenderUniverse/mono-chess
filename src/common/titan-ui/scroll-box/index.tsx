import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';

const ScrollBox = (props: { children?: React.ReactNode }) => {
    return (
        <Scrollbars
            renderTrackVertical={({ style, ...props }) => (
                <div
                    {...props}
                    style={{
                        ...style,
                        right: '1px',
                        top: '1px',
                        bottom: '1px',
                        width: '8px',
                    }}
                />
            )}
            renderThumbVertical={({ style, ...props }) => (
                <div
                    {...props}
                    style={{
                        ...style,
                        backgroundColor: 'var(--line-color)',
                        borderRadius: 3,
                    }}
                />
            )}
            autoHide>
            {props.children}
        </Scrollbars>
    );
};

export default ScrollBox;
