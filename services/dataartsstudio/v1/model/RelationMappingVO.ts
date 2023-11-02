

export class RelationMappingVO {
    public id?: number;
    private 'relation_id'?: number;
    private 'source_field_id'?: number;
    private 'target_field_id'?: number;
    private 'source_field_name'?: string;
    private 'target_field_name'?: string;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: number): RelationMappingVO {
        this['id'] = id;
        return this;
    }
    public withRelationId(relationId: number): RelationMappingVO {
        this['relation_id'] = relationId;
        return this;
    }
    public set relationId(relationId: number  | undefined) {
        this['relation_id'] = relationId;
    }
    public get relationId(): number | undefined {
        return this['relation_id'];
    }
    public withSourceFieldId(sourceFieldId: number): RelationMappingVO {
        this['source_field_id'] = sourceFieldId;
        return this;
    }
    public set sourceFieldId(sourceFieldId: number  | undefined) {
        this['source_field_id'] = sourceFieldId;
    }
    public get sourceFieldId(): number | undefined {
        return this['source_field_id'];
    }
    public withTargetFieldId(targetFieldId: number): RelationMappingVO {
        this['target_field_id'] = targetFieldId;
        return this;
    }
    public set targetFieldId(targetFieldId: number  | undefined) {
        this['target_field_id'] = targetFieldId;
    }
    public get targetFieldId(): number | undefined {
        return this['target_field_id'];
    }
    public withSourceFieldName(sourceFieldName: string): RelationMappingVO {
        this['source_field_name'] = sourceFieldName;
        return this;
    }
    public set sourceFieldName(sourceFieldName: string  | undefined) {
        this['source_field_name'] = sourceFieldName;
    }
    public get sourceFieldName(): string | undefined {
        return this['source_field_name'];
    }
    public withTargetFieldName(targetFieldName: string): RelationMappingVO {
        this['target_field_name'] = targetFieldName;
        return this;
    }
    public set targetFieldName(targetFieldName: string  | undefined) {
        this['target_field_name'] = targetFieldName;
    }
    public get targetFieldName(): string | undefined {
        return this['target_field_name'];
    }
    public withCreateBy(createBy: string): RelationMappingVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): RelationMappingVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): RelationMappingVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): RelationMappingVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}