

export class DeleteEnvironmentV2Request {
    private 'instance_id'?: string;
    private 'env_id'?: string;
    public constructor(instanceId?: string, envId?: string) { 
        this['instance_id'] = instanceId;
        this['env_id'] = envId;
    }
    public withInstanceId(instanceId: string): DeleteEnvironmentV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEnvId(envId: string): DeleteEnvironmentV2Request {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
}