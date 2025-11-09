import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';
import BookingForm from './Booking/BookingForm';
import BookingPage from './Booking/BookingPage';


test('renders BookingForm', () => {
  render(
    <BookingForm
      formData={{ date: '', time: '', guests: '', occasion: '' }}
      availableTimes={["13:00", "14:00"]}
      onChange={() => {}}
      onSubmit={() => {}}
    />
  );
  const label = screen.getByText("Choose time");
  expect(label).toBeInTheDocument();
});

test('updates available times when date changes (reducer)', async () => {
  render(<BookingPage />);

  const timeSelect = screen.getByLabelText(/choose time/i);
  const optionsBefore = within(timeSelect).getAllByRole('option').map(o => o.value);
  expect(optionsBefore).toEqual(['', '13:00', '14:00', '15:00', '16:00']);

  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: '2025-12-25' } });

  // After date change, reducer should provide new times
  const optionsAfter = within(timeSelect).getAllByRole('option').map(o => o.value);
  expect(optionsAfter).toEqual(['', '17:00', '18:00', '19:00', '20:00']);

  await userEvent.selectOptions(timeSelect, '18:00');
  expect(timeSelect).toHaveValue('18:00');
});
