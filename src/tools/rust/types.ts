import { TypeDefinition } from '../../'

export type FieldName = string
// Metadata for the struct fields
export type FieldsMeta = Record<FieldName, FieldMeta>
export type FieldMeta = {
  annotations?: string[]
}

export type TypeName = string
export type TypeMapping = Record<TypeName, (size?: number) => string>

export enum NewtypeKind {
  Public = 'Public',
  Private = 'Private',
  InCrate = 'InCrate',
  InPath = 'InPath',
}

// Inner type is going to be public which is just a glorified alias
export type NewtypePublic = {
  kind: NewtypeKind.Public,
  inner?: string,
  constr?: boolean,
}

// Constructor for newtype will be generated
export type NewtypePrivate = {
  kind: NewtypeKind.Private,
  inner?: string,
  constr?: boolean,
}

// Constructor will have to be defined in the specified module
export type NewtypeInCrate = {
  kind: NewtypeKind.InCrate,
  inner?: string,
  constr?: boolean,
}

// Constructor will have to be defined in the specified module
export type NewtypeInPath = {
  kind: NewtypeKind.InPath,
  module: string,
  inner?: string,
  constr?: boolean,
}

// Union of new type kinds
export type NewtypeDef = NewtypePublic
  | NewtypePrivate
  | NewtypeInCrate
  | NewtypeInPath

// Metadata for the type will contain newtype annotations
export type TypeMeta = {
  newtype?: NewtypeDef,
  fields?: FieldsMeta,
}

export type EnumConversionError = {
  type: string,
  constructor: string,
}

// Options to the type generator
export type Options = {
  // These types are just here for lookup so we can resolve shared types
  lookupTypes?: TypeDefinition[][],
  typeMapping?: TypeMapping
  extras?: string[]
  // TODO: extra derives should be moved to the options.meta property
  extraDerives?: Record<TypeName, string[]>
  meta?: Record<TypeName, TypeMeta>
  camelCase?: boolean,
  enumConversionError?: EnumConversionError,
}


