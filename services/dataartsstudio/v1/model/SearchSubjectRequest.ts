

export class SearchSubjectRequest {
    public workspace?: string;
    public name?: string;
    private 'create_by'?: string;
    public owner?: string;
    public status?: SearchSubjectRequestStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    private 'parent_id'?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): SearchSubjectRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withName(name: string): SearchSubjectRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): SearchSubjectRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withOwner(owner: string): SearchSubjectRequest {
        this['owner'] = owner;
        return this;
    }
    public withStatus(status: SearchSubjectRequestStatusEnum | string): SearchSubjectRequest {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): SearchSubjectRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): SearchSubjectRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): SearchSubjectRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchSubjectRequest {
        this['offset'] = offset;
        return this;
    }
    public withParentId(parentId: number): SearchSubjectRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): number | undefined {
        return this['parent_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchSubjectRequestStatusEnum {
    DRAFT = 'DRAFT',
    PUBLISH_DEVELOPING = 'PUBLISH_DEVELOPING',
    PUBLISHED = 'PUBLISHED',
    OFFLINE_DEVELOPING = 'OFFLINE_DEVELOPING',
    OFFLINE = 'OFFLINE',
    REJECT = 'REJECT'
}
