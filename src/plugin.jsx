// contents of plugin.jsx
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Builder } from '@builder.io/react';
import ComplexLink from './complexlink';


Builder.registerEditor({
    name: 'CmsLink',
    component: ComplexLink,
});