import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')//Error the component is changing

    const handleInputChange = (e) => {
        let value = e.target.value;
        setInputValue(value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 1) {
            // console.log('Submit hecho');
            setCategories(e => [inputValue, ...e]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}