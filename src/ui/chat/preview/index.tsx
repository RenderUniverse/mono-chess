import React from 'react';
import SearchBar from 'ui/chat/preview/search-bar';
import PreviewList from 'ui/chat/preview/preview-list';

const Preview = () => {
    return (
        <div className="preview-container">
            <SearchBar placeholder="Search" className="m-4" />
            <PreviewList />
        </div>
    );
};

export default Preview;
