import {
    FacetRuleKind,
    FacetRuleState,
    ListStatementSortBy,
    PredicateKind,
    PredicateLocaleKind,
    PredicateMatchOperator,
} from '../../Enums';

export interface IdentifiedFacetStateRule {
    id: string;
    position: number;
    rule: FacetStateRule;
}

export interface FacetStateRule {
    condition?: FacetStateRuleCondition;
    defaultMatchOperator?: FacetStateRuleMatchOperator;
    description?: string;
    field?: string;
    kind: FacetRuleKind;
    predicates?: FacetStateRulePredicate[];
    state?: FacetRuleState;
    values?: string[];
}

export interface FacetStateRuleCondition {
    reference: string;
}

export interface FacetStateRulePredicate {
    basicQueryExpression?: string;
    code?: string;
    kind: PredicateKind;
    locale?: PredicateLocale;
    matchOperator: FacetStateRuleMatchOperator;
}

export interface FacetStateRuleMatchOperator {
    kind: PredicateMatchOperator;
}

export interface PredicateLocale {
    code: string;
    kind: PredicateLocaleKind;
}

export interface ListFacetStateRuleParams {
    isOrderAscending?: boolean;
    filter?: string;
    sortBy?: ListStatementSortBy;
    page?: number;
    perPage?: number;
    organizationId: string;
}

export interface ListFacetStateRuleResponse {
    facetStateRules: IdentifiedFacetStateRule[];
    totalCount: number;
    totalPages: number;
}
