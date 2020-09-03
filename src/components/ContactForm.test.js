import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils';

test('contact form displays object', () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name\*/i)
    const lastNameInput = screen.getByLabelText(/last name\*/i)
    const emailInput = screen.getByLabelText(/email\*/i)
    const messageInput = screen.getByLabelText(/message/i)

    fireEvent.change(firstNameInput, { target: {value: 'Tim'}})
    fireEvent.change(lastNameInput, { target: {value: 'Cook'}})
    fireEvent.change(emailInput, { target: {value: 'tim@apple.com'}})
    fireEvent.change(messageInput, { target: {value: 'Hello Tim!!'}})



    const submitBtn = screen.getByTestId(/submit/i)
    fireEvent.click(submitBtn)

    const newContact = screen.findByText(/tim/i)
    console.log(newContact)
    return expect(newContact).resolves.toBeInTheDocument();
    console.log(newContact)

});

// test('the submitted data appears on page', () => {
//     const newContact = screen.findByText(/tim/i)
//     console.log(newContact)
//     return expect(newContact).resolves.toBeInTheDocument();
// })