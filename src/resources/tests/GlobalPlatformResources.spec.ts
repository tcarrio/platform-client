import Organization from '../Organizations/Organization';
import GlobalPlatformResources from '../GlobalPlatformResources';

describe('GlobalPlatformResources', () => {
    describe('registerAll', () => {
        it('should register the organization resource on the platform instance', () => {
            const platformResources = new GlobalPlatformResources();
            platformResources.registerAll();

            expect(platformResources.organization).toBeDefined();
            expect(platformResources.organization).toBeInstanceOf(Organization);
        });
    });
});
