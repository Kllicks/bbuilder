import React from 'react';

import classes from './BuildControl.module.css';

const buildControls = (props) => (
    <div>
        <div>{props.label}</div>
        <button>Less</button>
        <button>More</button>
    </div>
);

export default buildControl;