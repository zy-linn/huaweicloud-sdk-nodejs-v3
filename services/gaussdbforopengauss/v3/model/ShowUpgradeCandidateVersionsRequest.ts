

export class ShowUpgradeCandidateVersionsRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ShowUpgradeCandidateVersionsRequestXLanguageEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowUpgradeCandidateVersionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ShowUpgradeCandidateVersionsRequestXLanguageEnum | string): ShowUpgradeCandidateVersionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowUpgradeCandidateVersionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowUpgradeCandidateVersionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowUpgradeCandidateVersionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
