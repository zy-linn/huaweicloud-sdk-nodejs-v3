

export class TemplateParameterDefinition {
    public name?: string;
    public description?: string;
    private 'default_value'?: object;
    public type?: TemplateParameterDefinitionTypeEnum | string;
    public constructor() { 
    }
    public withName(name: string): TemplateParameterDefinition {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TemplateParameterDefinition {
        this['description'] = description;
        return this;
    }
    public withDefaultValue(defaultValue: object): TemplateParameterDefinition {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: object  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): object | undefined {
        return this['default_value'];
    }
    public withType(type: TemplateParameterDefinitionTypeEnum | string): TemplateParameterDefinition {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TemplateParameterDefinitionTypeEnum {
    ARRAY = 'Array',
    BOOLEAN = 'Boolean',
    INTEGER = 'Integer',
    FLOAT = 'Float',
    STRING = 'String',
    OBJECT = 'Object',
    DATE = 'Date'
}
