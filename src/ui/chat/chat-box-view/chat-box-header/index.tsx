import React from 'react';
import Avatar from 'common/titan-ui/avatar';

const ChatBoxHeader = () => {
    return (
        <div className="chat-box-header">
            <Avatar className="w-14 h-14" nameholder="Admission Bot" />
            <div className="flex-col ml-3 h-13 justify-between">
                <span className="chat-box-name">Bot 123</span>
                <span className="chat-box-description">Noi trao doi ve diem thi dai hoc</span>
            </div>
        </div>
    );
};

export default ChatBoxHeader;
