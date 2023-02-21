import React from 'react';

// components
import WriteApplication from '../Components/WriteApplication';
import Steps from '../Components/Steps';
import AgreePrivacy from './AgreePrivacy';

const ApplyFirst = () => {
    return (
        <div>
            <WriteApplication />
            <Steps
                agree={1}
                write={0}
                apply={0}
            />
            <AgreePrivacy />
        </div>
    );
};

export default ApplyFirst;