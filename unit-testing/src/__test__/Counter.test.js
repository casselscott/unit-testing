import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Counter from '../Counter';

describe('counter', () => {
  it('should increment counter', () => {
    render(<Counter />);

    //select elements to interact
    const counter = screen.getByTestId('number');
    const IncrementBtn = screen.getByTestId('increase');
    const DecrementBtn = screen.getByTestId('decrease');

    //interact with the elements
    fireEvent.click(IncrementBtn);
    expect(counter).toHaveTextContent('2');
  });

  it('should increment counter', () => {
    render(<Counter />);

    //select elements to interact
    const counter = screen.getByTestId('number');
    const DecrementBtn = screen.getByTestId('decrease');

    //interact with the elements
    fireEvent.click(DecrementBtn);
    expect(counter).toHaveTextContent('0');
  });
});

describe('counter snapshots', () => {
  it('should it match DOM Snapshot', () => {
    const data = renderer.create(<Counter />).toJSON();
    expect(data).toMatchSnapshot();
  });
});
