import { InputHTMLAttributes, forwardRef } from 'react';

import './styles.css';

interface IDatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const DatePicker = forwardRef<HTMLInputElement, IDatePickerProps>(
  ({ label, ...props }, ref) => {
    return (
      <div >
        {!!label && (
          <label className="date-picker-label" htmlFor="date-picket-input">
            {label}
          </label>
        )}
        <input          
          {...props}
          type="date"
          id="date-picket-input"
          className="date-picker"
          ref={ref}
          placeholder="Selecione uma data"
        />
      </div>
    );
  }
);
