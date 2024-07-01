import { render, screen, waitFor, describe } from '@testing-library/react';
import jest from 'jest'; 
import axios from 'axios';
import AppointmentForm from './AppointmentForm'; // Adjust the import path as necessary

// Import necessary testing library functions
import { beforeEach, it, expect } from '@testing-library/react';

jest.mock('axios');
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('AppointmentForm', () => {
  const mockDoctors = [
    { firstName: 'John', lastName: 'Doe', doctorDepartment: 'Pediatrics' },
    { firstName: 'Jane', lastName: 'Smith', doctorDepartment: 'Orthopedics' },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { doctors: mockDoctors } });
    render(<AppointmentForm />);
  });

  it('should render the form fields correctly', () => {
    expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Last Name/i)).toBeInTheDocument();
    // ... other assertions
  });

  it('should fetch and display doctors on mount', async () => {
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/John Doe/i)).toBeInTheDocument());
  });

  // ... other test cases
});