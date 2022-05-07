import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Livescore from './Livescore';

describe('<Livescore />', () => {
  test('it should mount', () => {
    render(<Livescore />);
    
    const livescore = screen.getByTestId('Livescore');

    expect(livescore).toBeInTheDocument();
  });
});