import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import WeatherCard from './WeatherCard';

test('renders the weather card heading', () => {
    render(<WeatherCard />);
    const headingElement = screen.getByText(/Edmonton Weather/i);
    expect(headingElement).toBeInTheDocument();
});