import React from 'react';

function InputValidationError ({ error }) {
  return (
    <div className="text-danger mt-2 font-14">*{error}</div>
);
}

export default InputValidationError;
