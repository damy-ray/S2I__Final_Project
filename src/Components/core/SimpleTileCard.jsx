import React from 'react';

function SimpleTileCard({ Icon, iconSize, iconColor, title, subtitle }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow flex items-center border-2 border-slate-200">
            <div className='w-2/3'>
                <p className='text-3xl font-semibold text-slate-900'>{title}</p>
                <p className='text-slate-700 text-xl'>{subtitle}</p>
            </div>
            <div className='w-1/3 flex justify-end items-center'>
                <div className='w-24 h-24 rounded-lg bg-theme-main-bright flex justify-center items-center'>
                    <Icon size={iconSize} style={{ color: iconColor }} />
                </div>
            </div>
        </div>
    )
}

export default SimpleTileCard;
