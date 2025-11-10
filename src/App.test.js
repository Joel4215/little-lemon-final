import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './Booking/BookingForm';
import BookingPage from './Booking/BookingPage';


beforeEach(() => {
  let firstCall = true;
  window.API = {
    fetchAPI: jest.fn(() => {
      if (firstCall) {
        firstCall = false;
        return ['13:00', '14:00'];
      }
      return ['17:00', '18:00'];
    }),
    submitAPI: jest.fn(() => true),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});


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

test('shows initial times, then changes after picking a date', async () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  const timeSelect = screen.getByLabelText(/choose time/i);
  const optionsBefore = within(timeSelect).getAllByRole('option').map(o => o.value);
  expect(optionsBefore.length).toBeGreaterThan(1); // has options besides placeholder

  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: '2025-01-01' } });

  // After date change, times should change
  await waitFor(() => {
    const optionsAfter = within(timeSelect).getAllByRole('option').map(o => o.value);
    expect(optionsAfter.length).toBeGreaterThan(1);
    expect(optionsAfter).not.toEqual(optionsBefore);
  });

  const optionsAfterNow = within(timeSelect).getAllByRole('option').map(o => o.value);
  const someTime = optionsAfterNow.find(v => v !== '');
  await userEvent.selectOptions(timeSelect, someTime);
  expect(timeSelect).toHaveValue(someTime);
});
