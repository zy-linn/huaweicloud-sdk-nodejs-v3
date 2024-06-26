
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDesignAtomicIndexResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): DeleteDesignAtomicIndexResponse {
        this['data'] = data;
        return this;
    }
}