import {GranularResource, PrivilegeModel} from '../BaseInterfaces';
import {InviteModel} from './Invites';
import {MemberModel} from './Members';
import {RealmModel} from './Realms';

export interface GroupModel extends GranularResource {
    id: string;
    displayName: string;
    invites?: InviteModel[];
    members?: MemberModel[];
    privileges?: PrivilegeModel[];
    realms?: RealmModel[];
    deletable?: boolean;
    resourceId?: string;
}

export interface CreateGroupOptions {
    canEditItself?: boolean;
    sendEmailToInviteUsers?: boolean;
}

export interface UpdateGroupOptions {
    sendEmailToInviteUsers?: boolean;
}
