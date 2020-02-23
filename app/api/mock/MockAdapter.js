// General api to access data
import MockAdapter from 'axios-mock-adapter';

export default function mockApi(networkAdapter, delay) {
    return new MockAdapter(networkAdapter, { delayResponse: delay ? delay : 0 });
}
