

export class MappingJoinFieldVO {
    private 'field1_id'?: number;
    private 'field2_id'?: number;
    private 'field1_name'?: string;
    private 'field2_name'?: string;
    public constructor(field1Id?: number, field2Id?: number, field1Name?: string, field2Name?: string) { 
        this['field1_id'] = field1Id;
        this['field2_id'] = field2Id;
        this['field1_name'] = field1Name;
        this['field2_name'] = field2Name;
    }
    public withField1Id(field1Id: number): MappingJoinFieldVO {
        this['field1_id'] = field1Id;
        return this;
    }
    public set field1Id(field1Id: number  | undefined) {
        this['field1_id'] = field1Id;
    }
    public get field1Id(): number | undefined {
        return this['field1_id'];
    }
    public withField2Id(field2Id: number): MappingJoinFieldVO {
        this['field2_id'] = field2Id;
        return this;
    }
    public set field2Id(field2Id: number  | undefined) {
        this['field2_id'] = field2Id;
    }
    public get field2Id(): number | undefined {
        return this['field2_id'];
    }
    public withField1Name(field1Name: string): MappingJoinFieldVO {
        this['field1_name'] = field1Name;
        return this;
    }
    public set field1Name(field1Name: string  | undefined) {
        this['field1_name'] = field1Name;
    }
    public get field1Name(): string | undefined {
        return this['field1_name'];
    }
    public withField2Name(field2Name: string): MappingJoinFieldVO {
        this['field2_name'] = field2Name;
        return this;
    }
    public set field2Name(field2Name: string  | undefined) {
        this['field2_name'] = field2Name;
    }
    public get field2Name(): string | undefined {
        return this['field2_name'];
    }
}