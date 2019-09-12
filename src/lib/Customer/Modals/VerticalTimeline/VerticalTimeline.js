import React from "react";
import {Modal} from '../../../UI/Modal/Modal'
import VerticalTimeline from '../../Timelines/VerticalTimeline';

function VerticalTimelineModal(props) {
    return (
        <>
            <Modal showCloseButton>
                <div className="">
                    <VerticalTimeline {...props} />
                </div>
            </Modal>
        </>
    )
}

export default VerticalTimelineModal;
