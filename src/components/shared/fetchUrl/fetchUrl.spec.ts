import { expect } from 'chai';
import fetchUrl from './fetchUrl';
import sinon from 'sinon';
import assert from 'assert';

declare global {
    namespace NodeJS {
        interface Global {
            fetch: any;
        }
    }
}
describe('Testing FetchUrl - Wrapper over fetch', () => {
    const res = [{
        id: '1',
        name: 'Abc'
    }];
    it('should perform basic fetch functions', () => {
        const mockFetch = sinon.fake.resolves({
            ok: true,
            json: () => res
        });
        // Inject mock fetch into global
        global.fetch = mockFetch;
        fetchUrl('/api/v1/someUrl');
        assert(mockFetch.calledWith('/api/v1/someUrl'));
        assert(mockFetch.calledOnce, 'Fn was called once');
        delete global.fetch;
    });
});
