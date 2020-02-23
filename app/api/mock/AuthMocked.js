
import mockApi from './MockAdapter';
import { ApiEndpoint, ApiResponse } from '../ApiConstants';

export function authMocked(Api, delay) {
    let mock = mockApi(Api, delay);

    mock.onPost(ApiEndpoint.OTP_REQUEST)
        .reply(200, {
            STATUS: 'SUCCESS',
            MESSAGE: ApiResponse.authResponseMessage.OTP_SEND_SUCCESS
        });
}