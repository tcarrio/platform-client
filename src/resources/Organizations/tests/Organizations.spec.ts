import API from '../../../APICore';
import Organization from '../Organization';

jest.mock('../../../APICore');

const APIMock: jest.Mock<API> = API as any;

describe('Organization', () => {
    let organization: Organization;
    const api = new APIMock() as jest.Mocked<API>;

    beforeEach(() => {
        jest.clearAllMocks();
        organization = new Organization(api);
    });

    describe('list', () => {
        it('should make a GET call to the Organization base url', () => {
            organization.list();
            expect(api.get).toHaveBeenCalledTimes(1);
            expect(api.get).toHaveBeenCalledWith(Organization.baseUrl);
        });
    });

    describe('create', () => {
        it('should make a POST call to the Organization base url with the parameters', () => {
            const name = 'OrgName';

            organization.create({name});
            expect(api.post).toHaveBeenCalledTimes(1);
            expect(api.post).toHaveBeenCalledWith(`${Organization.baseUrl}?name=${name}`, {});
        });
    });

    describe('delete', () => {
        it('should make a DELETE call to the specific Organization url', () => {
            const organizationToDeleteId = 'Organization-to-be-deleted';
            organization.delete(organizationToDeleteId);
            expect(api.delete).toHaveBeenCalledTimes(1);
            expect(api.delete).toHaveBeenCalledWith(`${Organization.baseUrl}/${organizationToDeleteId}`);
        });
    });

    describe('get', () => {
        it('should make a GET call to the specific Organization url', () => {
            const organizationToGetId = 'Organization-to-be-fetched';
            organization.get(organizationToGetId);
            expect(api.get).toHaveBeenCalledTimes(1);
            expect(api.get).toHaveBeenCalledWith(`${Organization.baseUrl}/${organizationToGetId}`);
        });
    });

    describe('update', () => {
        it('should make a PUT call to the specific Organization url', () => {
            const organizationModel = {
                id: 'organization-to-update-id',
                displayName: 'new name',
            };

            organization.update(organizationModel);
            expect(api.put).toHaveBeenCalledTimes(1);
            expect(api.put).toHaveBeenCalledWith(`${Organization.baseUrl}/${organizationModel.id}`, organizationModel);
        });
    });
});