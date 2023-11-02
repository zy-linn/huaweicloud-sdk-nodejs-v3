
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBizMetricResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): UpdateBizMetricResponse {
        this['data'] = data;
        return this;
    }
}