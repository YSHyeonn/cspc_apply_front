import React from 'react';
import { useState } from 'react';

import './InterviewTime.css';

import TimeTable from './TimeTable';

import star from '../basicinfo/requiredInput.png';

const InterviewTime = () => {
    return(
        <div
            className="InterviewTime"
        >
            <div
                className="InterviewBox"
            >
                <div
                    className="InterviewTitle mainTitle"
                >
                    면접시간
                </div>
                <div
                    className="InterviewLine"
                />
                <div
                    className="InterviewContent mainContent"
                >
                    면접은 비대면으로 진행됩니다. 장소 및 시간은 서류 결과 발표 시 확인하실 수 있습니다.
                </div>
            </div>
            <div
                className="InterviewBox"
            >
                <div
                    className="InterviewTitle InterviewSecondTitle"
                >
                    가능하신 면접시간이 어떻게 되시나요?
                    <img src={star} className="star" />
                </div>
                <div
                    className="InterviewContent InterviewSecondContent"
                >
                    약 20분 정도 소요되며, 가능한 시간 모두 선택해주세요. 시간 배정이 어려울 경우 추후 연락드리겠습니다.
                </div>
            </div>
            <div
                className="InterviewBox"
            >
                <div
                    className="InterviewContent"
                >
                    <TimeTable />
                </div>
                <div>
                    <div
                        className="InterviewTitle"
                    >
                        면접 시간에 대한 요구사항이 있으시다면 적어주세요.
                    </div>
                    <input
                        className="requirement"
                    />
                </div>
            </div>
        </div>
    );
};

export default InterviewTime;