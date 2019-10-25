import * as relayCompiler from "relay-compiler";

declare module "relay-compiler" {
  export interface Schema {
    expectStringType: () => ScalarTypeID;
    getEnumValues: (type: EnumTypeID) => string[];
    getFieldName: (field: FieldID) => string;
    getFields: (type: TypeID) => FieldID[];
    getFieldType: (field: FieldID) => TypeID;
    getListItemType: (type: TypeID) => TypeID;
    getNullableType: (type: TypeID) => TypeID;
    getTypeString: (type: TypeID) => string;
    isAbstractType: (type: TypeID) => boolean;
    isEnum: (type: TypeID) => boolean;
    isInput: (type: TypeID) => boolean;
    isInterface: (type: TypeID) => boolean;
    isList: (type: TypeID) => boolean;
    isNonNull: (type: TypeID) => boolean;
    isObject: (type: TypeID) => boolean;
    isScalar: (type: TypeID) => boolean;
    isUnion: (type: TypeID) => boolean;
  }

  export type EnumTypeID = any;
  export type FieldID = any;
  export type ScalarTypeID = any;
  export type TypeID = any;
}
