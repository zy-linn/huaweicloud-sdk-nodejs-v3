

export class Update2dModelTrainingJobReq {
    public name?: string;
    public contact?: string;
    private 'command_message'?: Update2dModelTrainingJobReqCommandMessageEnum | string;
    private 'video_multipart_count'?: number;
    private 'is_background_replacement'?: boolean;
    private 'batch_name'?: string;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): Update2dModelTrainingJobReq {
        this['name'] = name;
        return this;
    }
    public withContact(contact: string): Update2dModelTrainingJobReq {
        this['contact'] = contact;
        return this;
    }
    public withCommandMessage(commandMessage: Update2dModelTrainingJobReqCommandMessageEnum | string): Update2dModelTrainingJobReq {
        this['command_message'] = commandMessage;
        return this;
    }
    public set commandMessage(commandMessage: Update2dModelTrainingJobReqCommandMessageEnum | string  | undefined) {
        this['command_message'] = commandMessage;
    }
    public get commandMessage(): Update2dModelTrainingJobReqCommandMessageEnum | string | undefined {
        return this['command_message'];
    }
    public withVideoMultipartCount(videoMultipartCount: number): Update2dModelTrainingJobReq {
        this['video_multipart_count'] = videoMultipartCount;
        return this;
    }
    public set videoMultipartCount(videoMultipartCount: number  | undefined) {
        this['video_multipart_count'] = videoMultipartCount;
    }
    public get videoMultipartCount(): number | undefined {
        return this['video_multipart_count'];
    }
    public withIsBackgroundReplacement(isBackgroundReplacement: boolean): Update2dModelTrainingJobReq {
        this['is_background_replacement'] = isBackgroundReplacement;
        return this;
    }
    public set isBackgroundReplacement(isBackgroundReplacement: boolean  | undefined) {
        this['is_background_replacement'] = isBackgroundReplacement;
    }
    public get isBackgroundReplacement(): boolean | undefined {
        return this['is_background_replacement'];
    }
    public withBatchName(batchName: string): Update2dModelTrainingJobReq {
        this['batch_name'] = batchName;
        return this;
    }
    public set batchName(batchName: string  | undefined) {
        this['batch_name'] = batchName;
    }
    public get batchName(): string | undefined {
        return this['batch_name'];
    }
    public withTags(tags: Array<string>): Update2dModelTrainingJobReq {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum Update2dModelTrainingJobReqCommandMessageEnum {
    UPDATE_VIDEO = 'UPDATE_VIDEO',
    UPLOAD_VIDEO = 'UPLOAD_VIDEO'
}
