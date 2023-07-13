

export class DataTransformationResp {
    public id?: string;
    public status?: DataTransformationRespStatusEnum;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): DataTransformationResp {
        this['id'] = id;
        return this;
    }
    public withStatus(status: DataTransformationRespStatusEnum): DataTransformationResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): DataTransformationResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): DataTransformationResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataTransformationRespStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}