
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAggregationLogicTableByIdResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): ShowAggregationLogicTableByIdResponse {
        this['data'] = data;
        return this;
    }
}