import API from '../../../APICore';
import ResourceSnapshots from '../ResourceSnapshots';
import {PushSnapshotOptions} from '../ResourceSnapshotsInterfaces';

jest.mock('../../../APICore');

const APIMock: jest.Mock<API> = API as any;

describe('ResourceSnapshots', () => {
    let resourceSnapshots: ResourceSnapshots;
    const api = new APIMock() as jest.Mocked<API>;

    beforeEach(() => {
        jest.clearAllMocks();
        resourceSnapshots = new ResourceSnapshots(api);
    });

    describe('list', () => {
        it('should make a GET call to the specific Resource Snapshots url', () => {
            resourceSnapshots.list();
            expect(api.get).toHaveBeenCalledTimes(1);
            expect(api.get).toHaveBeenCalledWith(ResourceSnapshots.baseUrl);
        });
    });

    describe('get', () => {
        it('should make a GET call to the specific Resource Snapshots url', () => {
            const snapshotToGetId = 'snapshot-to-be-fetched';
            resourceSnapshots.get(snapshotToGetId);
            expect(api.get).toHaveBeenCalledTimes(1);
            expect(api.get).toHaveBeenCalledWith(`${ResourceSnapshots.baseUrl}/${snapshotToGetId}`);
        });
    });

    describe('generateUrl', () => {
        it('should make a GET call to the specific Resource Snapshots url', () => {
            const snapshotId = '🤖';

            resourceSnapshots.generateUrl(snapshotId);
            expect(api.get).toHaveBeenCalledTimes(1);
            expect(api.get).toHaveBeenCalledWith(`${ResourceSnapshots.baseUrl}/${snapshotId}/url`);
        });
    });

    describe('push', () => {
        it('should make a PUT call to the specific Resource Snapshots url', () => {
            const snapshotId = '🤖';
            const pushSnapshotOptions: PushSnapshotOptions = {targetOrganizationId: '🎯', developerNotes: '🧘'};

            resourceSnapshots.push(snapshotId, pushSnapshotOptions);
            expect(api.put).toHaveBeenCalledTimes(1);
            expect(api.put).toHaveBeenCalledWith(
                `${ResourceSnapshots.baseUrl}/${snapshotId}/push?targetOrganizationId=%F0%9F%8E%AF&developerNotes=%F0%9F%A7%98`
            );
        });
    });

    describe('delete a snapshot', () => {
        it('should make a DELETE call to the specific Resource Snapshots url', () => {
            const snapshotId = 'BossHoss';
            resourceSnapshots.delete(snapshotId);
            expect(api.delete).toHaveBeenCalledTimes(1);
            expect(api.delete).toHaveBeenCalledWith(`${ResourceSnapshots.baseUrl}/${snapshotId}`);
        });
    });
});