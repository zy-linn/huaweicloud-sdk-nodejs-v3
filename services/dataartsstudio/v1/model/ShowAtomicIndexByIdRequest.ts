

export class ShowAtomicIndexByIdRequest {
    public workspace?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowAtomicIndexByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowAtomicIndexByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowAtomicIndexByIdRequest {
        this['latest'] = latest;
        return this;
    }
}