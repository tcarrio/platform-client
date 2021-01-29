import API from './APICore';
import {Feature, GlobalPlatformClientOptions} from './ConfigurationInterfaces';
import {Environment} from './Endpoints';
import {ResponseHandlers} from './handlers/ResponseHandlers';
import GlobalPlatformResources from './resources/GlobalPlatformResources';

export class GlobalPlatformClient extends GlobalPlatformResources {
    static Handlers = ResponseHandlers;
    static Environment = Environment;

    constructor(private options: GlobalPlatformClientOptions) {
        super();

        this.API = new API({
            ...options,
            organizationId: '',
        });
        this.ServerlessAPI = new API(
            {
                ...options,
                organizationId: '',
            },
            true
        );

        this.registerAll();
    }

    withFeatures(...features: Feature[]): this {
        const EnhancedClient = this.constructor as typeof GlobalPlatformClient;
        const enhancedOptions = features.reduce((current, feature) => feature(current), {
            ...this.options,
            organizationId: '',
        });
        return new EnhancedClient(enhancedOptions) as this;
    }

    async initialize() {
        return this.API.checkToken();
    }

    abortPendingGetRequests() {
        this.API.abortGetRequests();
        this.ServerlessAPI.abortGetRequests();
    }
}

export default GlobalPlatformClient;
