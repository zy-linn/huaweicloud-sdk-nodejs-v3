import { BatchDeleteBaremetalServerTagsRequestBody } from './BatchDeleteBaremetalServerTagsRequestBody';


export class BatchDeleteBaremetalServerTagsRequest {
    private 'server_id'?: string;
    public body?: BatchDeleteBaremetalServerTagsRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): BatchDeleteBaremetalServerTagsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: BatchDeleteBaremetalServerTagsRequestBody): BatchDeleteBaremetalServerTagsRequest {
        this['body'] = body;
        return this;
    }
}