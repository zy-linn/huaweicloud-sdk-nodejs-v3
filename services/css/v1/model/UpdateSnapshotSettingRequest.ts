import { UpdateSnapshotSettingReq } from './UpdateSnapshotSettingReq';


export class UpdateSnapshotSettingRequest {
    private 'cluster_id'?: string;
    public body?: UpdateSnapshotSettingReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateSnapshotSettingRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdateSnapshotSettingReq): UpdateSnapshotSettingRequest {
        this['body'] = body;
        return this;
    }
}