import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../atoms/Button';

describe('Button', () => {
  it('renders with the correct text', () => {
    render(<Button text="Click me" />);

    // Verifica se o botão renderiza o texto correto
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn(); // Criar uma função mock
    render(<Button text="Click me" onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    
    // Simula o clique no botão
    fireEvent.click(buttonElement);
    
    // Verifica se o manipulador de clique foi chamado
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not throw error if onClick is not provided', () => {
    // Renderiza o botão sem onClick
    render(<Button text="Click me" />);
    
    // Verifica se o botão renderiza sem erro
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
