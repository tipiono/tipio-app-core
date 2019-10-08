import React from 'react';
import {storiesOf} from '@storybook/react';
import {Modal, SuccessModal, ModalSpinner} from '../../../lib'

storiesOf('UI/Components/Modal', module)
    .add('Modal', () =>
        <>
            <div className="col-3 m-3">
                <Modal>
                    <div className="p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </div>
                </Modal>
            </div>
        </>
    )
    .add('Modal With Close ', () =>
        <>
            <div className="col-3 m-3">
                <Modal showCloseButton>
                    <div className="p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </div>
                </Modal>
            </div>
        </>
    )

    .add('Successfully signed up', () =>
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    successTitle={"Du har nå opprettet en konto!"}
                />
            </div>
        </>
    )

    .add('Password successfully changed', () =>
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    successTitle={"Passord ditt er oppdatert!"}
                />
            </div>
        </>
    )

    .add('Modal Spinner', () =>
        <>
            <div className="col-3 m-3">
                <ModalSpinner />
            </div>
        </>
    )
