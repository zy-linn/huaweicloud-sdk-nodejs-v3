

export class ClusterDetailTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ClusterDetailTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ClusterDetailTags {
        this['value'] = value;
        return this;
    }
}