import requestConcurrencyControl from './requestConcurrencyControl';
import { responses } from './request';

describe('request concurrency control', () => {
  test('should get responses in sequence', async () => {
    jest.setTimeout(10000);

    const expected = requestConcurrencyControl([...responses.keys()]);
    await expect(expected).resolves.toEqual([...responses.values()]);
  });
});
