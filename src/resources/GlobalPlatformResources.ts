import API from '../APICore';
import Organization from './Organizations/Organization';
import Resource from './Resource';

const resourcesMap: Array<{key: string; resource: typeof Resource}> = [{key: 'organization', resource: Organization}];

class GlobalPlatformResources {
    protected API: API;
    protected ServerlessAPI: API;

    organization: Organization;

    registerAll() {
        resourcesMap.forEach(({key, resource}) => {
            this[key] = new resource(this.API, this.ServerlessAPI);
        });
    }
}

export default GlobalPlatformResources;
