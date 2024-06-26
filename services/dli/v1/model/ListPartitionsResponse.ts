import { PartitionList } from './PartitionList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPartitionsResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public partitions?: PartitionList;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListPartitionsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListPartitionsResponse {
        this['message'] = message;
        return this;
    }
    public withPartitions(partitions: PartitionList): ListPartitionsResponse {
        this['partitions'] = partitions;
        return this;
    }
}