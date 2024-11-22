import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'md',
    disabled = false,
    className = '',
    ...props
}) => {
    
    const baseStyles = 'inline-flex items-center justify-center font-medium focus:outline-none rounded';
    
    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg',
    };

    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        success: 'bg-green-600 text-white hover:bg-green-700',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        warning: 'bg-yellow-600 text-white hover:bg-yellow-700',
        info: 'bg-teal-600 text-white hover:bg-teal-700',
        light: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
        dark: 'bg-gray-800 text-white hover:bg-gray-900',
    };

    const disabledStyles = 'cursor-not-allowed opacity-50';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${baseStyles} 
                ${sizeStyles[size]} 
                ${variantStyles[variant]} 
                ${disabled ? disabledStyles : ''} 
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

export default Button;
