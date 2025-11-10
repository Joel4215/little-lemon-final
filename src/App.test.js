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

test('completes booking flow and shows confirmation', async () => {
  // Ensure submit returns success
  window.API.submitAPI.mockReturnValueOnce(true);

  render(
    <MemoryRouter initialEntries={["/reservations"]}>
      <App />
    </MemoryRouter>
  );

  // Fill date (future date to avoid filtering out times)
  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: '2025-01-02' } });

  // Choose a time from updated list
  const timeSelect = screen.getByLabelText(/choose time/i);
  await waitFor(() => {
    const options = within(timeSelect).getAllByRole('option').map(o => o.value);
    expect(options.length).toBeGreaterThan(1);
  });
  const timeOption = within(timeSelect).getAllByRole('option').find(o => o.getAttribute('value') !== '');
  await userEvent.selectOptions(timeSelect, timeOption.getAttribute('value'));

  // Guests
  const guestsInput = screen.getByLabelText(/number of guests/i);
  await userEvent.clear(guestsInput);
  await userEvent.type(guestsInput, '2');

  // Occasion
  const occasionSelect = screen.getByLabelText(/occasion/i);
  await userEvent.selectOptions(occasionSelect, 'birthday');

  // Submit
  const submitBtn = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitBtn).toBeEnabled();
  await userEvent.click(submitBtn);

  // Confirm page rendered with success message
  const confirmation = await screen.findByText(/your reservation is confirmed/i);
  expect(confirmation).toBeInTheDocument();
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
