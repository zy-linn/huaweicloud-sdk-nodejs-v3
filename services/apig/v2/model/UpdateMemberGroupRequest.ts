import { MemberGroupCreate } from './MemberGroupCreate';


export class UpdateMemberGroupRequest {
    private 'instance_id'?: string;
    private 'vpc_channel_id'?: string;
    private 'member_group_id'?: string;
    public body?: MemberGroupCreate;
    public constructor(instanceId?: string, vpcChannelId?: string, memberGroupId?: string) { 
        this['instance_id'] = instanceId;
        this['vpc_channel_id'] = vpcChannelId;
        this['member_group_id'] = memberGroupId;
    }
    public withInstanceId(instanceId: string): UpdateMemberGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVpcChannelId(vpcChannelId: string): UpdateMemberGroupRequest {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
    public withMemberGroupId(memberGroupId: string): UpdateMemberGroupRequest {
        this['member_group_id'] = memberGroupId;
        return this;
    }
    public set memberGroupId(memberGroupId: string  | undefined) {
        this['member_group_id'] = memberGroupId;
    }
    public get memberGroupId(): string | undefined {
        return this['member_group_id'];
    }
    public withBody(body: MemberGroupCreate): UpdateMemberGroupRequest {
        this['body'] = body;
        return this;
    }
}