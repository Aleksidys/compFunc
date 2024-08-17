import { render, screen } from '@testing-library/react';
import ShopItemFunc from './ShopItemFunc';

test('renders learn react link', () => {
  render(<ShopItemFunc />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
