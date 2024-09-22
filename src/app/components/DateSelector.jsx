import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import React from 'react';

/**
 * A component that displays a date picker input and returns a date
 * in 'YYYY-MM-DD' format.
 * 
 * @param {string} selectedDate - the date that is currently selected
 * @param {function} setSelectedDate - a function to set the selected date
 * @returns a React component that shows a DatePicker
 */
const DateSelector = ({ selectedDate, setSelectedDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
        sx={{ width: '25%', background: 'white' }}
        label="Select Date"
        inputFormat="YYYY-MM-DD"
        value={dayjs(selectedDate)}
        onChange={(newDate) => setSelectedDate(dayjs(newDate).format('YYYY-MM-DD'))}
      />
    </LocalizationProvider>
  );
};

export default DateSelector;
