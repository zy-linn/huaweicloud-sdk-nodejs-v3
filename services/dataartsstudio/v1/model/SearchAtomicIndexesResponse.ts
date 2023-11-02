
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchAtomicIndexesResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): SearchAtomicIndexesResponse {
        this['data'] = data;
        return this;
    }
}