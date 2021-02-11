import Resource from '../Resource';
import API from '../../APICore';
import {LogRequestId, LogRequestState} from './ConnectivityInterface';

export default class Connectivity extends Resource {
    static baseUrl = `/rest/organizations/${API.orgPlaceholder}/sources`;

    requestLog(sourceId: string, activityId: string) {
        return this.api.post<LogRequestId>(`${Connectivity.baseUrl}/${sourceId}/activities/${activityId}/logrequests`);
    }

    getLogRequest(sourceId: string, activityId: string, logRequestId: string) {
        return this.api.get<LogRequestState>(
            `${Connectivity.baseUrl}/${sourceId}/activities/${activityId}/logrequests/${logRequestId}`
        );
    }
}
