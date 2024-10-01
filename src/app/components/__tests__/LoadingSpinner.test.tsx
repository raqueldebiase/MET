// __tests__/LoadingSpinner.test.tsx

import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../atoms/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders a spinner', () => {
    render(<LoadingSpinner />);
    
    // Verifica se o spinner está presente no documento
    const spinner = screen.getByTestId('loading-spinner'); // Mudando para getByTestId
    expect(spinner).toBeInTheDocument();
  });
});
