import { UpdateBucketAuthorizedReq } from './UpdateBucketAuthorizedReq';


export class UpdateBucketAuthorizedRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: UpdateBucketAuthorizedReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): UpdateBucketAuthorizedRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateBucketAuthorizedRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UpdateBucketAuthorizedReq): UpdateBucketAuthorizedRequest {
        this['body'] = body;
        return this;
    }
}