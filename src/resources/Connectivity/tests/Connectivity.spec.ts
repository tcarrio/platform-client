import API from '../../../APICore';
import Connectivity from '../Connectivity';

jest.mock('../../../APICore');

const APIMock: jest.Mock<API> = API as any;

describe('Connectivity Service', () => {
    let connectivity: Connectivity;
    const api = new APIMock() as jest.Mocked<API>;
    const serverlessApi = new APIMock() as jest.Mocked<API>;

    beforeEach(() => {
        jest.clearAllMocks();
        connectivity = new Connectivity(api, serverlessApi);
    });

    describe('diagnostic', () => {
        const sourceId = 'SOURCE_ID';
        const activityId = 'ACTIVITY_ID';
        const logRequestId = 'LOG_REQUEST_ID';

        it('should post a new new log request', () => {
            connectivity.requestLog(sourceId, activityId);
            expect(api.post).toHaveBeenCalledTimes(1);
            expect(api.post).toHaveBeenCalledWith(
                `${Connectivity.baseUrl}/${sourceId}/activities/${activityId}/logrequests`
            );
        });

        it('should get the state of a log request', () => {
            connectivity.getLogRequest(sourceId, activityId, logRequestId);
            expect(api.get).toHaveBeenCalledTimes(1);
            expect(api.get).toHaveBeenCalledWith(
                `${Connectivity.baseUrl}/${sourceId}/activities/${activityId}/logrequests/${logRequestId}`
            );
        });
    });
});
