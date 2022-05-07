import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Match from './Match';

describe('<Match />', () => {
  test('it should mount', () => {
    render(<Match />);
    
    const match = screen.getByTestId('Match');

    expect(match).toBeInTheDocument();
  });
});