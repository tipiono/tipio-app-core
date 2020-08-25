import React from 'react';
import cx from 'classnames';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default React.forwardRef(({ placeholder, name, errors, displayErrors, onBlur, label, ...props }, ref) => (
    <>
        <label
            className={cx('pure-material-textfield-outlined placeholderInput', {
                validationError: errors && errors[name]
            })}
        >
            <input
                placeholder={props.value ? ' ' : placeholder}
                id={props.id || name}
                name={name}
                {...props}
                ref={ref}
            />
            <span className="label-sm">{label}</span>
            {displayErrors && errors && errors[name] && (
                <span className="error-icon">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0" maskType="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="20">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0.800415H18.3507V19.3428H0V0.800415Z"
                                fill="white"
                            />
                        </mask>
                        <g mask="url(#mask0)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.17529 18.3836C4.63984 18.3836 0.949878 14.6548 0.949878 10.0716C0.949878 5.48842 4.63984 1.75962 9.17529 1.75962C13.7108 1.75962 17.4007 5.48842 17.4007 10.0716C17.4007 14.6548 13.7108 18.3836 9.17529 18.3836ZM9.17529 0.800415C4.11575 0.800415 -0.00012207 4.95962 -0.00012207 10.0716C-0.00012207 15.1844 4.11575 19.3428 9.17529 19.3428C14.2348 19.3428 18.3507 15.1844 18.3507 10.0716C18.3507 4.95962 14.2348 0.800415 9.17529 0.800415Z"
                                fill="#D93227"
                            />
                        </g>
                        <mask id="mask1" maskType="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="20">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 19.343H18.3508V0.799774H0V19.343Z"
                                fill="white"
                            />
                        </mask>
                        <g mask="url(#mask1)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.57458 14.395H9.78821V8.37097H8.57458V14.395Z"
                                fill="#D93227"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.17525 5.74768C8.71846 5.74768 8.34558 6.12448 8.34558 6.58528C8.34558 7.04688 8.71846 7.42368 9.17525 7.42368C9.63204 7.42368 10.0041 7.04688 10.0041 6.58528C10.0041 6.12448 9.63204 5.74768 9.17525 5.74768Z"
                                fill="#D93227"
                            />
                        </g>
                    </svg>
                </span>
            )}
        </label>
        {displayErrors && errors && errors[name] && (
            <ErrorMessage content={errors[name].message || errors[name]} color={'bg-red'} />
        )}
    </>
));
