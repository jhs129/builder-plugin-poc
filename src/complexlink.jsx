import React from 'react';

// TODO: Add a link component that can be used in the CMS

const ComplexLink = (props) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '8px', alignItems: 'center' }}>
            <label style={{ gridColumn: '1 / 2' }}>
                Input 1:
            </label>
            <input style={{ gridColumn: '2 / 3' }} type="text" value={props.value} onChange={e => props.onChange(e.target.value)} />
            <label style={{ gridColumn: '1 / 2' }}>
                Input 2:
            </label>
            <input style={{ gridColumn: '2 / 3' }} type="text" value={props.value} onChange={e => props.onChange(e.target.value)} />
        </div>
    );
};

export default ComplexLink;