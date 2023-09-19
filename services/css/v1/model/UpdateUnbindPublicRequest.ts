import { UnBindPublicReq } from './UnBindPublicReq';


export class UpdateUnbindPublicRequest {
    private 'cluster_id'?: string;
    public body?: UnBindPublicReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateUnbindPublicRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UnBindPublicReq): UpdateUnbindPublicRequest {
        this['body'] = body;
        return this;
    }
}