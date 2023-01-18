import React from 'react';
import Preview from 'ui/chat/preview';
import ChatBoxView from 'ui/chat/chat-box-view';

const ChatView = () => {
    return (
        <div className="h-screen w-screen flex">
            <Preview />
            <ChatBoxView />
        </div>
    );
};

export default ChatView;
