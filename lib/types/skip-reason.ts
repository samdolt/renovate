export enum SkipReason {
  AnyVersion = 'any-version',
  ContainsVariable = 'contains-variable',
  Disabled = 'disabled',
  Empty = 'empty',
  FileDependency = 'file-dependency',
  File = 'file',
  GitDependency = 'git-dependency',
  GitPlugin = 'git-plugin',
  Ignored = 'ignored',
  InternalPackage = 'internal-package',
  InvalidConfig = 'invalid-config',
  InvalidDependencySpecification = 'invalid-dependency-specification',
  InvalidName = 'invalid-name',
  InvalidSha256 = 'invalid-sha256',
  InvalidUrl = 'invalid-url',
  InvalidValue = 'invalid-value',
  InvalidVersion = 'invalid-version',
  LocalChart = 'local-chart',
  LocalDependency = 'local-dependency',
  Local = 'local',
  MultipleConstraintDep = 'multiple-constraint-dep',
  NamePlaceholder = 'name-placeholder',
  NoRepository = 'no-repository',
  NoSourceMatch = 'no-source-match',
  NoSource = 'no-source',
  NoVersion = 'no-version',
  NonHexDeptypes = 'non-hex depTypes',
  NotAVersion = 'not-a-version',
  PathDependency = 'path-dependency',
  PlaceholderUrl = 'placeholder-url',
  UnknownEngines = 'unknown-engines',
  UnknownRegistry = 'unknown-registry',
  UnknownVersion = 'unknown-version',
  UnknownVolta = 'unknown-volta',
  UnsupportedChartType = 'unsupported-chart-type',
  UnsupportedDatasource = 'unsupported-datasource',
  UnsupportedRemote = 'unsupported-remote',
  UnsupportedUrl = 'unsupported-url',
  UnsupportedVersion = 'unsupported-version',
  Unsupported = 'unsupported',
  UnversionedReference = 'unversioned-reference',
  VersionPlaceholder = 'version-placeholder',
  IsPinned = 'is-pinned',
}
