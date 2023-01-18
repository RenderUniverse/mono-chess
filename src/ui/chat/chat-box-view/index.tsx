import React from 'react';
import ChatBoxHeader from 'ui/chat/chat-box-view/chat-box-header';
import ChatBoxList from 'ui/chat/chat-box-view/chat-box-list';
import ChatBoxInput from 'ui/chat/chat-box-view/chat-box-input';

const ChatBoxView = () => {
    return (
        <div className="chat-box-view">
            <ChatBoxHeader />
            <ChatBoxList />
            <ChatBoxInput />
        </div>
    );
};

export default ChatBoxView;
