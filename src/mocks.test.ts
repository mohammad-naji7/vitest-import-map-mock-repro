import { expect, it, vi } from 'vitest';
import IconComponent from './icon.svg?component';
import plainUrl from './plain.svg';
import data from './data.json';
import { helper } from './helper';

vi.mock('./icon.svg?component', () => ({ default: 'mocked-component' }));
vi.mock('./plain.svg', () => ({ default: 'mocked-plain' }));
vi.mock('./data.json', () => ({ default: { value: 'mocked' } }));
vi.mock('./helper', () => ({ helper: () => 'mocked' }));

it('mocks a JS module', () => {
  expect(helper()).toBe('mocked');
});

it('mocks a query-suffixed svg', () => {
  expect(IconComponent).toBe('mocked-component');
});

it('mocks a plain svg', () => {
  expect(plainUrl).toBe('mocked-plain');
});

it('mocks json', () => {
  expect(data).toEqual({ value: 'mocked' });
});
