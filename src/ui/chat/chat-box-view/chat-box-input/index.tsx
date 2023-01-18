import React from 'react';
import clsx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';
import { IoPaperPlane } from 'react-icons/io5';

export type ChatBoxInputProps = {
    onFocus?: () => void;
    onBlur?: () => void;
};

const ChatBoxInput = (props: ChatBoxInputProps) => {
    const { onFocus, onBlur } = props;
    const [focused, setFocused] = React.useState(false);

    return (
        <div className={clsx('chat-box-input', focused && 'focused')}>
            <TextareaAutosize
                className="chat-box-input-text"
                placeholder="Type message"
                onFocus={() => {
                    onFocus?.();
                    setFocused(true);
                }}
                onBlur={() => {
                    onBlur?.();
                    setFocused(false);
                }}
                minRows={1}
                maxRows={5}
            />
            <button className="chat-box-input-btn">
                <IoPaperPlane size={20} />
            </button>
        </div>
    );
};

export default ChatBoxInput;
