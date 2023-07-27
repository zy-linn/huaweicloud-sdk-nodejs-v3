import { MembersBatchEnableOrDisable } from './MembersBatchEnableOrDisable';


export class BatchDisableMembersRequest {
    private 'instance_id'?: string;
    private 'vpc_channel_id'?: string;
    public body?: MembersBatchEnableOrDisable;
    public constructor(instanceId?: string, vpcChannelId?: string) { 
        this['instance_id'] = instanceId;
        this['vpc_channel_id'] = vpcChannelId;
    }
    public withInstanceId(instanceId: string): BatchDisableMembersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVpcChannelId(vpcChannelId: string): BatchDisableMembersRequest {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
    public withBody(body: MembersBatchEnableOrDisable): BatchDisableMembersRequest {
        this['body'] = body;
        return this;
    }
}