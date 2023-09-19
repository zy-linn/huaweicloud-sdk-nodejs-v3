import { ResetPasswordReq } from './ResetPasswordReq';


export class ResetPasswordRequest {
    private 'cluster_id'?: string;
    public body?: ResetPasswordReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ResetPasswordRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ResetPasswordReq): ResetPasswordRequest {
        this['body'] = body;
        return this;
    }
}