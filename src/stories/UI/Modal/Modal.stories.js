import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, OnboardingTooltip } from '../../../lib'

storiesOf('UI/Components/Modal', module)
    .add('Modal', () =>
        <>
            <div className="col-3 m-3">
                <Modal>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Modal>
            </div>
        </>
    )
    .add('Modal With Close ', () =>
        <>
            <div className="col-3 m-3">
                <Modal showCloseButton>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Modal>
            </div>
        </>
    )
