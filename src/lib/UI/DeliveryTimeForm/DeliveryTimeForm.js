import React from 'react';
import {
    Checkbox,
    Input,
    Select
} from 'tipio-app-core';

import Timer from "../../static/assets/images/timer.svg";


const DeliveryTimeForm = ({showIcon, showCheckbox}) => {
    return (
        <div className="deliveryTimeForm">

            <div className="deliveryTimeForm__header">
                {showIcon ?(<img className="deliveryTimeForm__header__icon" src={Timer} alt=""/>) : ''}
                <h5 className="deliveryTimeForm__header__title">Forventet leveringstid</h5>
            </div>

            <div className="deliveryTimeForm__row">
                <div className="deliveryTimeForm__row__from">
                    <Input
                        placeholder="Fra"
                        name=""
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.expiration_date}
                        // errors={touched.expiration_date && errors}
                        displayErrors
                    />
                </div>

                <div className="deliveryTimeForm__row__to">
                    <Input
                        placeholder="Til"
                        name=""
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.expiration_date}
                        // errors={touched.expiration_date && errors}
                        displayErrors
                    />
                </div>

                <div className="deliveryTimeForm__row__period">
                    {/*<Input*/}
                    {/*    placeholder="Tidsrom"*/}
                    {/*    name=""*/}
                    {/*    // onChange={handleChange}*/}
                    {/*    // onBlur={handleBlur}*/}
                    {/*    // value={values.expiration_date}*/}
                    {/*    // errors={touched.expiration_date && errors}*/}
                    {/*    displayErrors*/}
                    {/*/>*/}

                    <Select
                        defaultValue={"Virkedager"}
                        label="Tidwsrom"
                        options={["Virkedager", "Uker", "Måneder"]}
                    />
                </div>
            </div>

           {showCheckbox ?( <Checkbox
                id="save_payment_info"
                label="Sett som standard leverings tid"
                // checked={values.save_payment_info}
                // onChange={handleChange}
            />) :''}

        </div>
    );
};

export default DeliveryTimeForm;