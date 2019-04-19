import React from 'react';

function InputValidationError ({ error }) {
  return (
    <div className="text-danger mb-3 font-14">*{error}</div>
);
}

export default InputValidationError;
