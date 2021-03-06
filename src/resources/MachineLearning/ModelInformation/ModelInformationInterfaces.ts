export interface MLModelInfo {
    id: string;
    info?: ModelInformationART | ModelInformationDNE | ModelInformationER | ModelInformationPR | ModelInformationQS;
}

export interface ModelInformationART {
    metaInfo: {
        modelName: string;
        version: string;
        environment: string;
        org: string;
        modelVersion: string;
        createdDate: string;
    };
    modelBuildingStats: {
        searchEventCount: number;
        clickEventCount: number;
        customEventCount: number;
        segmentedVisitsCount: number;
    };
    totalQueries: number;
    wordSelectionModels: Record<string, Record<string, number>>;
    candidateExamples: Record<string, string[]>;
    languages: {
        [languageKey: string]: {
            contextKeysToDocuments: any;
            queries: number;
            documents: number;
            filters: any;
            words: number;
            stopwords: number;
            docPerFilters: Record<string, number>;
            [otherKeys: string]: any;
        };
    };
    contentIDKeys: string[];
    params: {
        version: string;
        maxBins: number;
        topClicksTakeBins: number[];
        topClicksMultBins: number[];
        intersectMultBins: number[];
        originalMultBins: number[];
        stemmedMultBins: number[];
        userContextMultBins: number[];
        subqueryMultBins: number[];
        subqueryLenThr: number;
        clicksDecayParams: Record<string, number>;
    };
    featureSelectLog: FeatureSelectLog;
    [key: string]: any;
}

export interface FeatureSelectLog {
    [contextKey: string]: {
        eventType: {name: string};
        statusMessage: string;
    };
}

export interface ModelInformationDNE {
    modelBuildingStats: {
        visitsCount: number;
        totalQueries: number;
        searchEventCount: number;
        clickEventCount: number;
        facetSelectEventCount: number;
    };
    params: {
        version: string;
    };
    totalQueries: number;
    contentIDKeys?: string[];
    languages: {
        [languageKey: string]: {
            topFacets: string[];
            docPerFilters: Record<string, number>;
            queries: number;
        };
    };
    metaInfo: {
        modelName: string;
        version: string;
        environment: string;
        org: string;
        modelVersion: string;
        createdDate: string;
    };
}

export interface ModelInformationER {
    indicatorsModifier: Record<string, number>;
    deprecatedUrlToFieldValueSize: number;
    candidateExamples: Record<string, string[]>;
    primaryIdToValue: number;
    eventGroups: string[];
    primaryEventType: string;
    params: {
        languages: string[];
        eventConfigs: any;
        eventsToCombineMapping: any;
        normalizeUrl: any;
        querySplit: {
            maxNgram: number;
            keepOrigQuery: boolean;
            keepStemQuery: boolean;
            keepOrigNGramQuery: boolean;
            keepStemNGramQuery: boolean;
        };
    };
    contentIDKeys: string[];
    primaryEventGroupName: string;
    eventGroupValuesExamplesInHistory: any;
    indicatorsMap: any;
    metaInfo: {
        modelName: string;
        version: string;
        environment: string;
        org: string;
        modelVersion: string;
        createdDate: string;
    };
    modelBuildingStats: {
        viewCount: number;
        PageViewCount: number;
        Query_stem1Count: number;
        searchCount: number;
        Query_stemCount: number;
        clickCount: number;
        [key: string]: number;
    };
    'Possible recommendations: ': number;
    eventGroupsFields: Record<string, string[]>;
    primaryEventName: string;
    'Recommendations per language: ': Record<string, number>;
    featureSelectLog: FeatureSelectLog;
    [key: string]: any;
}

export interface ModelInformationPR {
    metaInfo: {
        createdDate: string;
        environment: string;
        modelName: string;
        modelVersion: string;
        org: string;
        version: string;
    };

    itemBasedNamesAndNumOfRecordedItems: any;
    itemBasedNamesWithCandidateItems: any;
    numOfEventsPerEventType: any;
    userBasedCandidates: any;
    userBasedNumOfItems: any;
    userBasedNumOfUsers: any;

    contentIDKeys: string[];
    parentIDKeys: [];

    modelBuildingStats?: any;
    languages?: any;
}

export interface ModelInformationQS {
    numContextValues: number;
    lastQueriesPerUser: number;
    userContextPrefix: string;
    knownPartialsWithSuggestions: number;
    candidateExamples: Record<string, string[]>;
    languages: string[];
    minClickCountByLang: Record<string, number>;
    userClusterMap: number;
    candidatesPerLanguages: Record<string, number>;
    filterFields: string[];
    params: {
        version: string;
        contextBoost: number;
        cooccurrenceBoost: number;
        userClusterBoost: number;
        partialQueryBoost: number;
    };
    candidates: number;
    numUserClusters: number;
    metaInfo: {
        modelName: string;
        version: string;
        environment: string;
        org: string;
        modelVersion: string;
        createdDate: string;
    };
    modelBuildingStats: {
        searchEventCount: number;
        clickEventCount: number;
        filteredSearches: number;
        customEventCount: number;
    };
    minCandWithContextBoost: number;
    topCooccurrences: number;
    ratioCandWithContextBoost: number;
    userContextFields: string[];
    maxQueryLength: number;
    candidatesPerFilters: Record<string, number>;
    topCooccurrencesExamples: Record<string, string[]>;
    stopwords: Record<string, number>;
    featureSelectLog: FeatureSelectLog;
    [key: string]: any;
}
