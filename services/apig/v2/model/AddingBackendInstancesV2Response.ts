import { BasePage } from './BasePage';
import { VpcMemberInfo } from './VpcMemberInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddingBackendInstancesV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public members?: Array<VpcMemberInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): AddingBackendInstancesV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): AddingBackendInstancesV2Response {
        this['total'] = total;
        return this;
    }
    public withMembers(members: Array<VpcMemberInfo>): AddingBackendInstancesV2Response {
        this['members'] = members;
        return this;
    }
}