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
                    <svg width={19} height={19} viewBox="0 0 19 19" fill="none">
                        <mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={19} height={19}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 0h18.35v18.543H0V.001z" fill="#fff" />
                        </mask>
                        <g mask="url(#prefix__a)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.175 17.584C4.64 17.584.95 13.855.95 9.272.95 4.689 4.64.96 9.175.96c4.536 0 8.226 3.729 8.226 8.312 0 4.583-3.69 8.312-8.226 8.312zM9.175 0C4.115 0 0 4.16 0 9.27c0 5.114 4.116 9.272 9.175 9.272 5.06 0 9.176-4.158 9.176-9.271C18.35 4.16 14.235 0 9.175 0z"
                                fill="#D93227"
                            />
                        </g>
                        <mask id="prefix__b" maskUnits="userSpaceOnUse" x={0} y={0} width={19} height={19}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 18.543h18.35V0H0v18.543z" fill="#fff" />
                        </mask>
                        <g mask="url(#prefix__b)" fillRule="evenodd" clipRule="evenodd" fill="#D93227">
                            <path d="M8.574 13.595h1.214V7.571H8.574v6.024zM9.175 4.948a.836.836 0 00-.83.838c0 .461.374.838.83.838a.835.835 0 00.83-.838.835.835 0 00-.83-.838z" />
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
