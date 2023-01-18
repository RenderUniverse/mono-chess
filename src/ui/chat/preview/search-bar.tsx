import React from 'react';
import clsx from 'clsx';
import { IoSearch } from 'react-icons/io5';

export type SearchBarProps = {
    placeholder?: string;
    className?: string;
};

const SearchBar = (props: SearchBarProps) => {
    const { placeholder, className } = props;
    return (
        <div className={clsx('search-bar-container', className)}>
            <button className="search-bar-btn">
                <IoSearch size={18} />
            </button>
            <input className="search-bar-input" placeholder={placeholder} />
        </div>
    );
};

export default SearchBar;
