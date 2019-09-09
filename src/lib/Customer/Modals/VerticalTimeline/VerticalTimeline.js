import React from "react";
import {Modal} from '../../../UI/Modal/Modal'
import VerticalTimeline from '../../VerticalTimeline/VerticalTimeline';

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
