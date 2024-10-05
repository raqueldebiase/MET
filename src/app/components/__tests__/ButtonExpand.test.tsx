import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonExpand } from '../atoms/ButtonExpand';

describe('ButtonExpand', () => {
  test('renders the button', () => {
    render(<ButtonExpand />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<ButtonExpand onClick={handleClick} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });

  test('opens the image in a new tab when imageUrl is provided and onClick is not passed', () => {
    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => null); // Mock window.open
    const imageUrl = 'http://example.com/image.jpg';
    render(<ButtonExpand imageUrl={imageUrl} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(windowOpenSpy).toHaveBeenCalledWith(imageUrl, '_blank');
    windowOpenSpy.mockRestore();  // Restaura a função original depois do teste
  });

  test('does not open a new tab when imageUrl is not provided and onClick is not passed', () => {
    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
    render(<ButtonExpand />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(windowOpenSpy).not.toHaveBeenCalled();
    windowOpenSpy.mockRestore();
  });

  test('renders the expand icon', () => {
    render(<ButtonExpand />);
    const iconElement = screen.getByTestId('expand-icon');  // Teste irá procurar o ícone pelo data-testid
    expect(iconElement).toBeInTheDocument();
  });
  
});
