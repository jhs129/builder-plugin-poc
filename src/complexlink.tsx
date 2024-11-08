import React from 'react';

// TODO: Add a link component that can be used in the CMS


interface ComplexLinkProps {
    value: {
        input1: string;
        input2: string;
    };
    onChange: (value: { input1: string; input2: string }) => void;
}

const ComplexLink = (props: ComplexLinkProps) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '8px', alignItems: 'center' }}>
            <label style={{ gridColumn: '1 / 2' }}>
                Input 1:
            </label>
            <input style={{ gridColumn: '2 / 3' }} type="text" value={props.value.input1} onChange={e => props.onChange({ ...props.value, input1: e.target.value })} />
            <label style={{ gridColumn: '1 / 2' }}>
                Input 2:
            </label>
            <input style={{ gridColumn: '2 / 3' }} type="text" value={props.value.input2} onChange={e => props.onChange({ ...props.value, input2: e.target.value })} />
        </div>
    );
};

export default ComplexLink;