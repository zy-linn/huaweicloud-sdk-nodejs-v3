

export class ListFunctionAsMetricRequest {
    public type?: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public limit?: string;
    public constructor() { 
    }
    public withType(type: string): ListFunctionAsMetricRequest {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): ListFunctionAsMetricRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListFunctionAsMetricRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLimit(limit: string): ListFunctionAsMetricRequest {
        this['limit'] = limit;
        return this;
    }
}