/* tslint:disable */

// ====================================================
// START: Typescript template
// ====================================================

// ====================================================
// Scalars
// ====================================================

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any

// ====================================================
// Interfaces
// ====================================================

/** An object with an id, parent, and children */
export interface Node {
  /** The id of the node. */
  id: string
  /** The parent of this node. */
  parent?: Node | null
  /** The children of this node. */
  children?: (Node | null)[] | null
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Connection to all SitePage nodes */
  allSitePage?: SitePageConnection | null
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: SitePluginConnection | null
  /** Connection to all Directory nodes */
  allDirectory?: DirectoryConnection | null
  /** Connection to all File nodes */
  allFile?: FileConnection | null
  /** Connection to all MarkdownRemark nodes */
  allMarkdownRemark?: MarkdownRemarkConnection | null

  sitePage?: SitePage | null

  sitePlugin?: SitePlugin | null

  site?: Site | null

  directory?: Directory | null

  file?: File | null

  markdownRemark?: MarkdownRemark | null
}
/** A connection to a list of items. */
export interface SitePageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: (SitePageEdge | null)[] | null

  totalCount?: number | null

  distinct?: (string | null)[] | null

  group?: (SitePageGroupConnectionConnection | null)[] | null
}
/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating, are there more items? */
  hasNextPage: boolean
}
/** An edge in a connection. */
export interface SitePageEdge {
  /** The item at the end of the edge */
  node?: SitePage | null
  /** The next edge in the connection */
  next?: SitePage | null
  /** The previous edge in the connection */
  previous?: SitePage | null
}
/** Node of type SitePage */
export interface SitePage extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Node | null
  /** The children of this node. */
  children?: (Node | null)[] | null

  jsonName?: string | null

  internalComponentName?: string | null

  path?: string | null

  component?: string | null

  componentChunkName?: string | null

  context?: Context | null

  pluginCreator?: SitePlugin | null

  pluginCreatorId?: string | null

  componentPath?: string | null

  internal?: Internal_7 | null
}

export interface Context {
  slug?: string | null
}
/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Node | null
  /** The children of this node. */
  children?: (Node | null)[] | null

  resolve?: string | null

  name?: string | null

  version?: string | null

  pluginOptions?: PluginOptions_2 | null

  nodeAPIs?: (string | null)[] | null

  ssrAPIs?: (string | null)[] | null

  pluginFilepath?: string | null

  packageJson?: PackageJson_2 | null

  internal?: Internal_8 | null
}

export interface PluginOptions_2 {
  name?: string | null

  path?: string | null

  pathCheck?: boolean | null
}

export interface PackageJson_2 {
  name?: string | null

  description?: string | null

  version?: string | null

  main?: string | null

  author?: string | null

  license?: string | null

  dependencies?: (Dependencies_2 | null)[] | null

  devDependencies?: (DevDependencies_2 | null)[] | null

  peerDependencies?: (PeerDependencies_2 | null)[] | null

  keywords?: (string | null)[] | null
}

export interface Dependencies_2 {
  name?: string | null

  version?: string | null
}

export interface DevDependencies_2 {
  name?: string | null

  version?: string | null
}

export interface PeerDependencies_2 {
  name?: string | null

  version?: string | null
}

export interface Internal_8 {
  contentDigest?: string | null

  type?: string | null

  owner?: string | null
}

export interface Internal_7 {
  type?: string | null

  contentDigest?: string | null

  description?: string | null

  owner?: string | null
}
/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: (SitePageGroupConnectionEdge | null)[] | null

  field?: string | null

  fieldValue?: string | null

  totalCount?: number | null
}
/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: SitePage | null
  /** The next edge in the connection */
  next?: SitePage | null
  /** The previous edge in the connection */
  previous?: SitePage | null
}
/** A connection to a list of items. */
export interface SitePluginConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: (SitePluginEdge | null)[] | null

  totalCount?: number | null

  distinct?: (string | null)[] | null

  group?: (SitePluginGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface SitePluginEdge {
  /** The item at the end of the edge */
  node?: SitePlugin | null
  /** The next edge in the connection */
  next?: SitePlugin | null
  /** The previous edge in the connection */
  previous?: SitePlugin | null
}
/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: (SitePluginGroupConnectionEdge | null)[] | null

  field?: string | null

  fieldValue?: string | null

  totalCount?: number | null
}
/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: SitePlugin | null
  /** The next edge in the connection */
  next?: SitePlugin | null
  /** The previous edge in the connection */
  previous?: SitePlugin | null
}
/** A connection to a list of items. */
export interface DirectoryConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: (DirectoryEdge | null)[] | null

  totalCount?: number | null

  distinct?: (string | null)[] | null

  group?: (DirectoryGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface DirectoryEdge {
  /** The item at the end of the edge */
  node?: Directory | null
  /** The next edge in the connection */
  next?: Directory | null
  /** The previous edge in the connection */
  previous?: Directory | null
}
/** Node of type Directory */
export interface Directory extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Node | null
  /** The children of this node. */
  children?: (Node | null)[] | null

  internal?: Internal_9 | null

  sourceInstanceName?: string | null

  absolutePath?: string | null

  relativePath?: string | null

  extension?: string | null

  size?: number | null

  prettySize?: string | null

  modifiedTime?: Date | null

  accessTime?: Date | null

  changeTime?: Date | null

  birthTime?: Date | null

  root?: string | null

  dir?: string | null

  base?: string | null

  ext?: string | null

  name?: string | null

  relativeDirectory?: string | null

  dev?: number | null

  mode?: number | null

  nlink?: number | null

  uid?: number | null

  gid?: number | null

  rdev?: number | null

  blksize?: number | null

  ino?: number | null

  blocks?: number | null

  atimeMs?: number | null

  mtimeMs?: number | null

  ctimeMs?: number | null

  birthtimeMs?: number | null

  atime?: Date | null

  mtime?: Date | null

  ctime?: Date | null

  birthtime?: Date | null
}

export interface Internal_9 {
  contentDigest?: string | null

  type?: string | null

  description?: string | null

  owner?: string | null
}
/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: (DirectoryGroupConnectionEdge | null)[] | null

  field?: string | null

  fieldValue?: string | null

  totalCount?: number | null
}
/** An edge in a connection. */
export interface DirectoryGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Directory | null
  /** The next edge in the connection */
  next?: Directory | null
  /** The previous edge in the connection */
  previous?: Directory | null
}
/** A connection to a list of items. */
export interface FileConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: (FileEdge | null)[] | null

  totalCount?: number | null

  distinct?: (string | null)[] | null

  group?: (FileGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface FileEdge {
  /** The item at the end of the edge */
  node?: File | null
  /** The next edge in the connection */
  next?: File | null
  /** The previous edge in the connection */
  previous?: File | null
}
/** Node of type File */
export interface File extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Node | null
  /** The children of this node. */
  children?: (Node | null)[] | null
  /** The child of this node of type markdownRemark */
  childMarkdownRemark?: MarkdownRemark | null

  internal?: Internal_10 | null

  sourceInstanceName?: string | null

  absolutePath?: string | null

  relativePath?: string | null

  extension?: string | null

  size?: number | null

  prettySize?: string | null

  modifiedTime?: Date | null

  accessTime?: Date | null

  changeTime?: Date | null

  birthTime?: Date | null

  root?: string | null

  dir?: string | null

  base?: string | null

  ext?: string | null

  name?: string | null

  relativeDirectory?: string | null

  dev?: number | null

  mode?: number | null

  nlink?: number | null

  uid?: number | null

  gid?: number | null

  rdev?: number | null

  blksize?: number | null

  ino?: number | null

  blocks?: number | null

  atimeMs?: number | null

  mtimeMs?: number | null

  ctimeMs?: number | null

  birthtimeMs?: number | null

  atime?: Date | null

  mtime?: Date | null

  ctime?: Date | null

  birthtime?: Date | null
  /** Copy file to static directory and return public url to it */
  publicURL?: string | null
}
/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Node | null
  /** The children of this node. */
  children?: (Node | null)[] | null

  internal?: Internal_11 | null

  frontmatter?: Frontmatter_2 | null

  rawMarkdownBody?: string | null

  fileAbsolutePath?: string | null

  fields?: Fields_2 | null

  html?: string | null

  htmlAst?: Json | null

  excerpt?: string | null

  headings?: (MarkdownHeading | null)[] | null

  timeToRead?: number | null

  tableOfContents?: string | null

  wordCount?: WordCount | null
}

export interface Internal_11 {
  content?: string | null

  type?: string | null

  contentDigest?: string | null

  owner?: string | null

  fieldOwners?: FieldOwners_2 | null
}

export interface FieldOwners_2 {
  slug?: string | null
}

export interface Frontmatter_2 {
  title?: string | null

  _PARENT?: string | null
}

export interface Fields_2 {
  slug?: string | null
}

export interface MarkdownHeading {
  value?: string | null

  depth?: number | null
}

export interface WordCount {
  paragraphs?: number | null

  sentences?: number | null

  words?: number | null
}

export interface Internal_10 {
  contentDigest?: string | null

  type?: string | null

  mediaType?: string | null

  description?: string | null

  owner?: string | null
}
/** A connection to a list of items. */
export interface FileGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: (FileGroupConnectionEdge | null)[] | null

  field?: string | null

  fieldValue?: string | null

  totalCount?: number | null
}
/** An edge in a connection. */
export interface FileGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: File | null
  /** The next edge in the connection */
  next?: File | null
  /** The previous edge in the connection */
  previous?: File | null
}
/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: (MarkdownRemarkEdge | null)[] | null

  totalCount?: number | null

  distinct?: (string | null)[] | null

  group?: (MarkdownRemarkGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface MarkdownRemarkEdge {
  /** The item at the end of the edge */
  node?: MarkdownRemark | null
  /** The next edge in the connection */
  next?: MarkdownRemark | null
  /** The previous edge in the connection */
  previous?: MarkdownRemark | null
}
/** A connection to a list of items. */
export interface MarkdownRemarkGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: (MarkdownRemarkGroupConnectionEdge | null)[] | null

  field?: string | null

  fieldValue?: string | null

  totalCount?: number | null
}
/** An edge in a connection. */
export interface MarkdownRemarkGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: MarkdownRemark | null
  /** The next edge in the connection */
  next?: MarkdownRemark | null
  /** The previous edge in the connection */
  previous?: MarkdownRemark | null
}
/** Node of type Site */
export interface Site extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Node | null
  /** The children of this node. */
  children?: (Node | null)[] | null

  siteMetadata?: SiteMetadata_2 | null

  port?: Date | null

  host?: string | null

  pathPrefix?: string | null

  polyfill?: boolean | null

  buildTime?: Date | null

  internal?: Internal_12 | null
}

export interface SiteMetadata_2 {
  title?: string | null
}

export interface Internal_12 {
  contentDigest?: string | null

  type?: string | null

  owner?: string | null
}

// ====================================================
// InputTypes
// ====================================================

export interface SitePageConnectionSort {
  fields: (SitePageConnectionSortByFieldsEnum | null)[]

  order?: SitePageConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: SitePageConnectionJsonNameQueryString | null

  internalComponentName?: SitePageConnectionInternalComponentNameQueryString | null

  path?: SitePageConnectionPathQueryString_2 | null

  component?: SitePageConnectionComponentQueryString | null

  componentChunkName?: SitePageConnectionComponentChunkNameQueryString | null

  context?: SitePageConnectionContextInputObject | null

  pluginCreator?: SitePageConnectionPluginCreatorInputObject | null

  pluginCreatorId?: SitePageConnectionPluginCreatorIdQueryString_2 | null

  componentPath?: SitePageConnectionComponentPathQueryString | null

  id?: SitePageConnectionIdQueryString_2 | null

  internal?: SitePageConnectionInternalInputObject_2 | null
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionComponentQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionContextInputObject {
  slug?: SitePageConnectionContextSlugQueryString | null
}

export interface SitePageConnectionContextSlugQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: SitePageConnectionPluginCreatorResolveQueryString | null

  id?: SitePageConnectionPluginCreatorIdQueryString | null

  name?: SitePageConnectionPluginCreatorNameQueryString | null

  version?: SitePageConnectionPluginCreatorVersionQueryString | null

  pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsInputObject | null

  nodeAPIs?: SitePageConnectionPluginCreatorNodeApIsQueryList | null

  ssrAPIs?: SitePageConnectionPluginCreatorSsrApIsQueryList | null

  pluginFilepath?: SitePageConnectionPluginCreatorPluginFilepathQueryString | null

  packageJson?: SitePageConnectionPluginCreatorPackageJsonInputObject | null

  parent?: SitePageConnectionPluginCreatorParentQueryString | null

  internal?: SitePageConnectionPluginCreatorInternalInputObject | null
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  name?: SitePageConnectionPluginCreatorPluginOptionsNameQueryString | null

  path?: SitePageConnectionPluginCreatorPluginOptionsPathQueryString | null

  pathCheck?: SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null

  ne?: boolean | null

  in?: (boolean | null)[] | null

  nin?: (boolean | null)[] | null
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonNameQueryString | null

  description?: SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null

  version?: SitePageConnectionPluginCreatorPackageJsonVersionQueryString | null

  main?: SitePageConnectionPluginCreatorPackageJsonMainQueryString | null

  author?: SitePageConnectionPluginCreatorPackageJsonAuthorQueryString | null

  license?: SitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null

  dependencies?: SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null

  devDependencies?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null

  peerDependencies?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null

  keywords?: SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null

  version?: SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null

  version?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null

  version?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: SitePageConnectionPluginCreatorInternalContentDigestQueryString | null

  type?: SitePageConnectionPluginCreatorInternalTypeQueryString | null

  owner?: SitePageConnectionPluginCreatorInternalOwnerQueryString | null
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: SitePageConnectionInternalTypeQueryString_2 | null

  contentDigest?: SitePageConnectionInternalContentDigestQueryString_2 | null

  description?: SitePageConnectionInternalDescriptionQueryString | null

  owner?: SitePageConnectionInternalOwnerQueryString_2 | null
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionSort {
  fields: (SitePluginConnectionSortByFieldsEnum | null)[]

  order?: SitePluginConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: SitePluginConnectionResolveQueryString_2 | null

  id?: SitePluginConnectionIdQueryString_2 | null

  name?: SitePluginConnectionNameQueryString_2 | null

  version?: SitePluginConnectionVersionQueryString_2 | null

  pluginOptions?: SitePluginConnectionPluginOptionsInputObject_2 | null

  nodeAPIs?: SitePluginConnectionNodeApIsQueryList_2 | null

  ssrAPIs?: SitePluginConnectionSsrApIsQueryList_2 | null

  pluginFilepath?: SitePluginConnectionPluginFilepathQueryString_2 | null

  packageJson?: SitePluginConnectionPackageJsonInputObject_2 | null

  internal?: SitePluginConnectionInternalInputObject_2 | null
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  name?: SitePluginConnectionPluginOptionsNameQueryString_2 | null

  path?: SitePluginConnectionPluginOptionsPathQueryString_2 | null

  pathCheck?: SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null

  ne?: boolean | null

  in?: (boolean | null)[] | null

  nin?: (boolean | null)[] | null
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: SitePluginConnectionPackageJsonNameQueryString_2 | null

  description?: SitePluginConnectionPackageJsonDescriptionQueryString_2 | null

  version?: SitePluginConnectionPackageJsonVersionQueryString_2 | null

  main?: SitePluginConnectionPackageJsonMainQueryString_2 | null

  author?: SitePluginConnectionPackageJsonAuthorQueryString_2 | null

  license?: SitePluginConnectionPackageJsonLicenseQueryString_2 | null

  dependencies?: SitePluginConnectionPackageJsonDependenciesQueryList_2 | null

  devDependencies?: SitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null

  peerDependencies?: SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null

  keywords?: SitePluginConnectionPackageJsonKeywordsQueryList_2 | null
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null

  version?: SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null

  version?: SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null

  version?: SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: SitePluginConnectionInternalContentDigestQueryString_2 | null

  type?: SitePluginConnectionInternalTypeQueryString_2 | null

  owner?: SitePluginConnectionInternalOwnerQueryString_2 | null
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionSort {
  fields: (DirectoryConnectionSortByFieldsEnum | null)[]

  order?: DirectoryConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterDirectory {
  id?: DirectoryConnectionIdQueryString_2 | null

  internal?: DirectoryConnectionInternalInputObject_2 | null

  sourceInstanceName?: DirectoryConnectionSourceInstanceNameQueryString_2 | null

  absolutePath?: DirectoryConnectionAbsolutePathQueryString_2 | null

  relativePath?: DirectoryConnectionRelativePathQueryString_2 | null

  extension?: DirectoryConnectionExtensionQueryString_2 | null

  size?: DirectoryConnectionSizeQueryInteger_2 | null

  prettySize?: DirectoryConnectionPrettySizeQueryString_2 | null

  modifiedTime?: DirectoryConnectionModifiedTimeQueryString_2 | null

  accessTime?: DirectoryConnectionAccessTimeQueryString_2 | null

  changeTime?: DirectoryConnectionChangeTimeQueryString_2 | null

  birthTime?: DirectoryConnectionBirthTimeQueryString_2 | null

  root?: DirectoryConnectionRootQueryString_2 | null

  dir?: DirectoryConnectionDirQueryString_2 | null

  base?: DirectoryConnectionBaseQueryString_2 | null

  ext?: DirectoryConnectionExtQueryString_2 | null

  name?: DirectoryConnectionNameQueryString_2 | null

  relativeDirectory?: DirectoryConnectionRelativeDirectoryQueryString_2 | null

  dev?: DirectoryConnectionDevQueryInteger_2 | null

  mode?: DirectoryConnectionModeQueryInteger_2 | null

  nlink?: DirectoryConnectionNlinkQueryInteger_2 | null

  uid?: DirectoryConnectionUidQueryInteger_2 | null

  gid?: DirectoryConnectionGidQueryInteger_2 | null

  rdev?: DirectoryConnectionRdevQueryInteger_2 | null

  blksize?: DirectoryConnectionBlksizeQueryInteger_2 | null

  ino?: DirectoryConnectionInoQueryInteger_2 | null

  blocks?: DirectoryConnectionBlocksQueryInteger_2 | null

  atimeMs?: DirectoryConnectionAtimeMsQueryFloat_2 | null

  mtimeMs?: DirectoryConnectionMtimeMsQueryFloat_2 | null

  ctimeMs?: DirectoryConnectionCtimeMsQueryFloat_2 | null

  birthtimeMs?: DirectoryConnectionBirthtimeMsQueryFloat_2 | null

  atime?: DirectoryConnectionAtimeQueryString_2 | null

  mtime?: DirectoryConnectionMtimeQueryString_2 | null

  ctime?: DirectoryConnectionCtimeQueryString_2 | null

  birthtime?: DirectoryConnectionBirthtimeQueryString_2 | null
}

export interface DirectoryConnectionIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionInternalInputObject_2 {
  contentDigest?: DirectoryConnectionInternalContentDigestQueryString_2 | null

  type?: DirectoryConnectionInternalTypeQueryString_2 | null

  description?: DirectoryConnectionInternalDescriptionQueryString_2 | null

  owner?: DirectoryConnectionInternalOwnerQueryString_2 | null
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionExtensionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionRootQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionDirQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionBaseQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionExtQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionDevQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionModeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionUidQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionGidQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionInoQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryConnectionAtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionMtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionCtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionSort {
  fields: (FileConnectionSortByFieldsEnum | null)[]

  order?: FileConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterFile {
  id?: FileConnectionIdQueryString_2 | null

  internal?: FileConnectionInternalInputObject_2 | null

  sourceInstanceName?: FileConnectionSourceInstanceNameQueryString_2 | null

  absolutePath?: FileConnectionAbsolutePathQueryString_2 | null

  relativePath?: FileConnectionRelativePathQueryString_2 | null

  extension?: FileConnectionExtensionQueryString_2 | null

  size?: FileConnectionSizeQueryInteger_2 | null

  prettySize?: FileConnectionPrettySizeQueryString_2 | null

  modifiedTime?: FileConnectionModifiedTimeQueryString_2 | null

  accessTime?: FileConnectionAccessTimeQueryString_2 | null

  changeTime?: FileConnectionChangeTimeQueryString_2 | null

  birthTime?: FileConnectionBirthTimeQueryString_2 | null

  root?: FileConnectionRootQueryString_2 | null

  dir?: FileConnectionDirQueryString_2 | null

  base?: FileConnectionBaseQueryString_2 | null

  ext?: FileConnectionExtQueryString_2 | null

  name?: FileConnectionNameQueryString_2 | null

  relativeDirectory?: FileConnectionRelativeDirectoryQueryString_2 | null

  dev?: FileConnectionDevQueryInteger_2 | null

  mode?: FileConnectionModeQueryInteger_2 | null

  nlink?: FileConnectionNlinkQueryInteger_2 | null

  uid?: FileConnectionUidQueryInteger_2 | null

  gid?: FileConnectionGidQueryInteger_2 | null

  rdev?: FileConnectionRdevQueryInteger_2 | null

  blksize?: FileConnectionBlksizeQueryInteger_2 | null

  ino?: FileConnectionInoQueryInteger_2 | null

  blocks?: FileConnectionBlocksQueryInteger_2 | null

  atimeMs?: FileConnectionAtimeMsQueryFloat_2 | null

  mtimeMs?: FileConnectionMtimeMsQueryFloat_2 | null

  ctimeMs?: FileConnectionCtimeMsQueryFloat_2 | null

  birthtimeMs?: FileConnectionBirthtimeMsQueryFloat_2 | null

  atime?: FileConnectionAtimeQueryString_2 | null

  mtime?: FileConnectionMtimeQueryString_2 | null

  ctime?: FileConnectionCtimeQueryString_2 | null

  birthtime?: FileConnectionBirthtimeQueryString_2 | null

  publicURL?: PublicUrlQueryString_4 | null
}

export interface FileConnectionIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionInternalInputObject_2 {
  contentDigest?: FileConnectionInternalContentDigestQueryString_2 | null

  type?: FileConnectionInternalTypeQueryString_2 | null

  mediaType?: FileConnectionInternalMediaTypeQueryString_2 | null

  description?: FileConnectionInternalDescriptionQueryString_2 | null

  owner?: FileConnectionInternalOwnerQueryString_2 | null
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionInternalTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionInternalOwnerQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionAbsolutePathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionRelativePathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionExtensionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionSizeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionPrettySizeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionModifiedTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionAccessTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionChangeTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionBirthTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionRootQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionDirQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionBaseQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionExtQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionDevQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionModeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionNlinkQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionUidQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionGidQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionRdevQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionBlksizeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionInoQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionBlocksQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileConnectionAtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionMtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionCtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileConnectionBirthtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface PublicUrlQueryString_4 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkConnectionSort {
  fields: (MarkdownRemarkConnectionSortByFieldsEnum | null)[]

  order?: MarkdownRemarkConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
  id?: MarkdownRemarkConnectionIdQueryString_2 | null

  internal?: MarkdownRemarkConnectionInternalInputObject_2 | null

  frontmatter?: MarkdownRemarkConnectionFrontmatterInputObject_2 | null

  excerpt?: ExcerptQueryString_4 | null

  rawMarkdownBody?: MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 | null

  fileAbsolutePath?: MarkdownRemarkConnectionFileAbsolutePathQueryString_2 | null

  fields?: MarkdownRemarkConnectionFieldsInputObject_2 | null

  html?: HtmlQueryString_4 | null

  headings?: HeadingsQueryList_4 | null

  timeToRead?: TimeToReadQueryInt_4 | null

  tableOfContents?: TableOfContentsQueryString_4 | null

  wordCount?: WordCountTypeName_4 | null
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
  content?: MarkdownRemarkConnectionInternalContentQueryString_2 | null

  type?: MarkdownRemarkConnectionInternalTypeQueryString_2 | null

  contentDigest?: MarkdownRemarkConnectionInternalContentDigestQueryString_2 | null

  owner?: MarkdownRemarkConnectionInternalOwnerQueryString_2 | null

  fieldOwners?: MarkdownRemarkConnectionInternalFieldOwnersInputObject_2 | null
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug?: MarkdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null
}

export interface MarkdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
  title?: MarkdownRemarkConnectionFrontmatterTitleQueryString_2 | null

  _PARENT?: MarkdownRemarkConnectionFrontmatterParentQueryString_2 | null
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkConnectionFrontmatterParentQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface ExcerptQueryString_4 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkConnectionFieldsInputObject_2 {
  slug?: MarkdownRemarkConnectionFieldsSlugQueryString_2 | null
}

export interface MarkdownRemarkConnectionFieldsSlugQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface HtmlQueryString_4 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface HeadingsQueryList_4 {
  elemMatch?: HeadingsListElemTypeName_4 | null
}

export interface HeadingsListElemTypeName_4 {
  value?: HeadingsListElemValueQueryString_4 | null

  depth?: HeadingsListElemDepthQueryInt_4 | null
}

export interface HeadingsListElemValueQueryString_4 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface HeadingsListElemDepthQueryInt_4 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface TimeToReadQueryInt_4 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface TableOfContentsQueryString_4 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface WordCountTypeName_4 {
  paragraphs?: WordCountParagraphsQueryInt_4 | null

  sentences?: WordCountSentencesQueryInt_4 | null

  words?: WordCountWordsQueryInt_4 | null
}

export interface WordCountParagraphsQueryInt_4 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface WordCountSentencesQueryInt_4 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface WordCountWordsQueryInt_4 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface SitePageJsonNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageInternalComponentNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageComponentQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageComponentChunkNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageContextInputObject {
  slug?: SitePageContextSlugQueryString | null
}

export interface SitePageContextSlugQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInputObject {
  resolve?: SitePagePluginCreatorResolveQueryString | null

  id?: SitePagePluginCreatorIdQueryString | null

  name?: SitePagePluginCreatorNameQueryString | null

  version?: SitePagePluginCreatorVersionQueryString | null

  pluginOptions?: SitePagePluginCreatorPluginOptionsInputObject | null

  nodeAPIs?: SitePagePluginCreatorNodeApIsQueryList | null

  ssrAPIs?: SitePagePluginCreatorSsrApIsQueryList | null

  pluginFilepath?: SitePagePluginCreatorPluginFilepathQueryString | null

  packageJson?: SitePagePluginCreatorPackageJsonInputObject | null

  parent?: SitePagePluginCreatorParentQueryString | null

  internal?: SitePagePluginCreatorInternalInputObject | null
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  name?: SitePagePluginCreatorPluginOptionsNameQueryString | null

  path?: SitePagePluginCreatorPluginOptionsPathQueryString | null

  pathCheck?: SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null

  ne?: boolean | null

  in?: (boolean | null)[] | null

  nin?: (boolean | null)[] | null
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: SitePagePluginCreatorPackageJsonNameQueryString | null

  description?: SitePagePluginCreatorPackageJsonDescriptionQueryString | null

  version?: SitePagePluginCreatorPackageJsonVersionQueryString | null

  main?: SitePagePluginCreatorPackageJsonMainQueryString | null

  author?: SitePagePluginCreatorPackageJsonAuthorQueryString | null

  license?: SitePagePluginCreatorPackageJsonLicenseQueryString | null

  dependencies?: SitePagePluginCreatorPackageJsonDependenciesQueryList | null

  devDependencies?: SitePagePluginCreatorPackageJsonDevDependenciesQueryList | null

  peerDependencies?: SitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null

  keywords?: SitePagePluginCreatorPackageJsonKeywordsQueryList | null
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDependenciesNameQueryString | null

  version?: SitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDevDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null

  version?: SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null

  version?: SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: SitePagePluginCreatorInternalContentDigestQueryString | null

  type?: SitePagePluginCreatorInternalTypeQueryString | null

  owner?: SitePagePluginCreatorInternalOwnerQueryString | null
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageComponentPathQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageInternalInputObject_2 {
  type?: SitePageInternalTypeQueryString_2 | null

  contentDigest?: SitePageInternalContentDigestQueryString_2 | null

  description?: SitePageInternalDescriptionQueryString | null

  owner?: SitePageInternalOwnerQueryString_2 | null
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageInternalDescriptionQueryString {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginResolveQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginVersionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsInputObject_2 {
  name?: SitePluginPluginOptionsNameQueryString_2 | null

  path?: SitePluginPluginOptionsPathQueryString_2 | null

  pathCheck?: SitePluginPluginOptionsPathCheckQueryBoolean_2 | null
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null

  ne?: boolean | null

  in?: (boolean | null)[] | null

  nin?: (boolean | null)[] | null
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: SitePluginPackageJsonNameQueryString_2 | null

  description?: SitePluginPackageJsonDescriptionQueryString_2 | null

  version?: SitePluginPackageJsonVersionQueryString_2 | null

  main?: SitePluginPackageJsonMainQueryString_2 | null

  author?: SitePluginPackageJsonAuthorQueryString_2 | null

  license?: SitePluginPackageJsonLicenseQueryString_2 | null

  dependencies?: SitePluginPackageJsonDependenciesQueryList_2 | null

  devDependencies?: SitePluginPackageJsonDevDependenciesQueryList_2 | null

  peerDependencies?: SitePluginPackageJsonPeerDependenciesQueryList_2 | null

  keywords?: SitePluginPackageJsonKeywordsQueryList_2 | null
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDependenciesNameQueryString_2 | null

  version?: SitePluginPackageJsonDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDevDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDevDependenciesNameQueryString_2 | null

  version?: SitePluginPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonPeerDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginPackageJsonPeerDependenciesNameQueryString_2 | null

  version?: SitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: SitePluginInternalContentDigestQueryString_2 | null

  type?: SitePluginInternalTypeQueryString_2 | null

  owner?: SitePluginInternalOwnerQueryString_2 | null
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SiteSiteMetadataInputObject_2 {
  title?: SiteSiteMetadataTitleQueryString_2 | null
}

export interface SiteSiteMetadataTitleQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePortQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SiteHostQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePathPrefixQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: boolean | null

  ne?: boolean | null

  in?: (boolean | null)[] | null

  nin?: (boolean | null)[] | null
}

export interface SiteBuildTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SiteIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SiteInternalInputObject_2 {
  contentDigest?: SiteInternalContentDigestQueryString_2 | null

  type?: SiteInternalTypeQueryString_2 | null

  owner?: SiteInternalOwnerQueryString_2 | null
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SiteInternalTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryInternalInputObject_2 {
  contentDigest?: DirectoryInternalContentDigestQueryString_2 | null

  type?: DirectoryInternalTypeQueryString_2 | null

  description?: DirectoryInternalDescriptionQueryString_2 | null

  owner?: DirectoryInternalOwnerQueryString_2 | null
}

export interface DirectoryInternalContentDigestQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryInternalTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryInternalDescriptionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryInternalOwnerQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectorySourceInstanceNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryAbsolutePathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryRelativePathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryExtensionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectorySizeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryPrettySizeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryModifiedTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryAccessTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryChangeTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryBirthTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryRootQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryDirQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryBaseQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryExtQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryDevQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryModeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryNlinkQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryUidQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryGidQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryRdevQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryBlksizeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryInoQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryBlocksQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryAtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryMtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryCtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface DirectoryAtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryMtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryCtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface DirectoryBirthtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileInternalInputObject_2 {
  contentDigest?: FileInternalContentDigestQueryString_2 | null

  type?: FileInternalTypeQueryString_2 | null

  mediaType?: FileInternalMediaTypeQueryString_2 | null

  description?: FileInternalDescriptionQueryString_2 | null

  owner?: FileInternalOwnerQueryString_2 | null
}

export interface FileInternalContentDigestQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileInternalTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileInternalMediaTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileInternalDescriptionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileInternalOwnerQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileSourceInstanceNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileAbsolutePathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileRelativePathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileExtensionQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileSizeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FilePrettySizeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileModifiedTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileAccessTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileChangeTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileBirthTimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileRootQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileDirQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileBaseQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileExtQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileNameQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileRelativeDirectoryQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileDevQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileModeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileNlinkQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileUidQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileGidQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileRdevQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileBlksizeQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileInoQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileBlocksQueryInteger_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileAtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileMtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileCtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileBirthtimeMsQueryFloat_2 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface FileAtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileMtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileCtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface FileBirthtimeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface PublicUrlQueryString_3 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkIdQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkInternalInputObject_2 {
  content?: MarkdownRemarkInternalContentQueryString_2 | null

  type?: MarkdownRemarkInternalTypeQueryString_2 | null

  contentDigest?: MarkdownRemarkInternalContentDigestQueryString_2 | null

  owner?: MarkdownRemarkInternalOwnerQueryString_2 | null

  fieldOwners?: MarkdownRemarkInternalFieldOwnersInputObject_2 | null
}

export interface MarkdownRemarkInternalContentQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkInternalFieldOwnersInputObject_2 {
  slug?: MarkdownRemarkInternalFieldOwnersSlugQueryString_2 | null
}

export interface MarkdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
  title?: MarkdownRemarkFrontmatterTitleQueryString_2 | null

  _PARENT?: MarkdownRemarkFrontmatterParentQueryString_2 | null
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkFrontmatterParentQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface ExcerptQueryString_3 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkFileAbsolutePathQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface MarkdownRemarkFieldsInputObject_2 {
  slug?: MarkdownRemarkFieldsSlugQueryString_2 | null
}

export interface MarkdownRemarkFieldsSlugQueryString_2 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface HtmlQueryString_3 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface HeadingsQueryList_3 {
  elemMatch?: HeadingsListElemTypeName_3 | null
}

export interface HeadingsListElemTypeName_3 {
  value?: HeadingsListElemValueQueryString_3 | null

  depth?: HeadingsListElemDepthQueryInt_3 | null
}

export interface HeadingsListElemValueQueryString_3 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface HeadingsListElemDepthQueryInt_3 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface TimeToReadQueryInt_3 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface TableOfContentsQueryString_3 {
  eq?: string | null

  ne?: string | null

  regex?: string | null

  glob?: string | null

  in?: (string | null)[] | null

  nin?: (string | null)[] | null
}

export interface WordCountTypeName_3 {
  paragraphs?: WordCountParagraphsQueryInt_3 | null

  sentences?: WordCountSentencesQueryInt_3 | null

  words?: WordCountWordsQueryInt_3 | null
}

export interface WordCountParagraphsQueryInt_3 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface WordCountSentencesQueryInt_3 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

export interface WordCountWordsQueryInt_3 {
  eq?: number | null

  ne?: number | null

  gt?: number | null

  gte?: number | null

  lt?: number | null

  lte?: number | null

  in?: (number | null)[] | null

  nin?: (number | null)[] | null
}

// ====================================================
// Arguments
// ====================================================

export interface AllSitePageQueryArgs {
  skip?: number | null

  limit?: number | null

  sort?: SitePageConnectionSort | null

  filter?: FilterSitePage | null
}
export interface AllSitePluginQueryArgs {
  skip?: number | null

  limit?: number | null

  sort?: SitePluginConnectionSort | null

  filter?: FilterSitePlugin | null
}
export interface AllDirectoryQueryArgs {
  skip?: number | null

  limit?: number | null

  sort?: DirectoryConnectionSort | null

  filter?: FilterDirectory | null
}
export interface AllFileQueryArgs {
  skip?: number | null

  limit?: number | null

  sort?: FileConnectionSort | null

  filter?: FilterFile | null
}
export interface AllMarkdownRemarkQueryArgs {
  skip?: number | null

  limit?: number | null

  sort?: MarkdownRemarkConnectionSort | null

  filter?: FilterMarkdownRemark | null
}
export interface SitePageQueryArgs {
  jsonName?: SitePageJsonNameQueryString | null

  internalComponentName?: SitePageInternalComponentNameQueryString | null

  path?: SitePagePathQueryString_2 | null

  component?: SitePageComponentQueryString | null

  componentChunkName?: SitePageComponentChunkNameQueryString | null

  context?: SitePageContextInputObject | null

  pluginCreator?: SitePagePluginCreatorInputObject | null

  pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null

  componentPath?: SitePageComponentPathQueryString | null

  id?: SitePageIdQueryString_2 | null

  internal?: SitePageInternalInputObject_2 | null
}
export interface SitePluginQueryArgs {
  resolve?: SitePluginResolveQueryString_2 | null

  id?: SitePluginIdQueryString_2 | null

  name?: SitePluginNameQueryString_2 | null

  version?: SitePluginVersionQueryString_2 | null

  pluginOptions?: SitePluginPluginOptionsInputObject_2 | null

  nodeAPIs?: SitePluginNodeApIsQueryList_2 | null

  ssrAPIs?: SitePluginSsrApIsQueryList_2 | null

  pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null

  packageJson?: SitePluginPackageJsonInputObject_2 | null

  internal?: SitePluginInternalInputObject_2 | null
}
export interface SiteQueryArgs {
  siteMetadata?: SiteSiteMetadataInputObject_2 | null

  port?: SitePortQueryString_2 | null

  host?: SiteHostQueryString_2 | null

  pathPrefix?: SitePathPrefixQueryString_2 | null

  polyfill?: SitePolyfillQueryBoolean_2 | null

  buildTime?: SiteBuildTimeQueryString_2 | null

  id?: SiteIdQueryString_2 | null

  internal?: SiteInternalInputObject_2 | null
}
export interface DirectoryQueryArgs {
  id?: DirectoryIdQueryString_2 | null

  internal?: DirectoryInternalInputObject_2 | null

  sourceInstanceName?: DirectorySourceInstanceNameQueryString_2 | null

  absolutePath?: DirectoryAbsolutePathQueryString_2 | null

  relativePath?: DirectoryRelativePathQueryString_2 | null

  extension?: DirectoryExtensionQueryString_2 | null

  size?: DirectorySizeQueryInteger_2 | null

  prettySize?: DirectoryPrettySizeQueryString_2 | null

  modifiedTime?: DirectoryModifiedTimeQueryString_2 | null

  accessTime?: DirectoryAccessTimeQueryString_2 | null

  changeTime?: DirectoryChangeTimeQueryString_2 | null

  birthTime?: DirectoryBirthTimeQueryString_2 | null

  root?: DirectoryRootQueryString_2 | null

  dir?: DirectoryDirQueryString_2 | null

  base?: DirectoryBaseQueryString_2 | null

  ext?: DirectoryExtQueryString_2 | null

  name?: DirectoryNameQueryString_2 | null

  relativeDirectory?: DirectoryRelativeDirectoryQueryString_2 | null

  dev?: DirectoryDevQueryInteger_2 | null

  mode?: DirectoryModeQueryInteger_2 | null

  nlink?: DirectoryNlinkQueryInteger_2 | null

  uid?: DirectoryUidQueryInteger_2 | null

  gid?: DirectoryGidQueryInteger_2 | null

  rdev?: DirectoryRdevQueryInteger_2 | null

  blksize?: DirectoryBlksizeQueryInteger_2 | null

  ino?: DirectoryInoQueryInteger_2 | null

  blocks?: DirectoryBlocksQueryInteger_2 | null

  atimeMs?: DirectoryAtimeMsQueryFloat_2 | null

  mtimeMs?: DirectoryMtimeMsQueryFloat_2 | null

  ctimeMs?: DirectoryCtimeMsQueryFloat_2 | null

  birthtimeMs?: DirectoryBirthtimeMsQueryFloat_2 | null

  atime?: DirectoryAtimeQueryString_2 | null

  mtime?: DirectoryMtimeQueryString_2 | null

  ctime?: DirectoryCtimeQueryString_2 | null

  birthtime?: DirectoryBirthtimeQueryString_2 | null
}
export interface FileQueryArgs {
  id?: FileIdQueryString_2 | null

  internal?: FileInternalInputObject_2 | null

  sourceInstanceName?: FileSourceInstanceNameQueryString_2 | null

  absolutePath?: FileAbsolutePathQueryString_2 | null

  relativePath?: FileRelativePathQueryString_2 | null

  extension?: FileExtensionQueryString_2 | null

  size?: FileSizeQueryInteger_2 | null

  prettySize?: FilePrettySizeQueryString_2 | null

  modifiedTime?: FileModifiedTimeQueryString_2 | null

  accessTime?: FileAccessTimeQueryString_2 | null

  changeTime?: FileChangeTimeQueryString_2 | null

  birthTime?: FileBirthTimeQueryString_2 | null

  root?: FileRootQueryString_2 | null

  dir?: FileDirQueryString_2 | null

  base?: FileBaseQueryString_2 | null

  ext?: FileExtQueryString_2 | null

  name?: FileNameQueryString_2 | null

  relativeDirectory?: FileRelativeDirectoryQueryString_2 | null

  dev?: FileDevQueryInteger_2 | null

  mode?: FileModeQueryInteger_2 | null

  nlink?: FileNlinkQueryInteger_2 | null

  uid?: FileUidQueryInteger_2 | null

  gid?: FileGidQueryInteger_2 | null

  rdev?: FileRdevQueryInteger_2 | null

  blksize?: FileBlksizeQueryInteger_2 | null

  ino?: FileInoQueryInteger_2 | null

  blocks?: FileBlocksQueryInteger_2 | null

  atimeMs?: FileAtimeMsQueryFloat_2 | null

  mtimeMs?: FileMtimeMsQueryFloat_2 | null

  ctimeMs?: FileCtimeMsQueryFloat_2 | null

  birthtimeMs?: FileBirthtimeMsQueryFloat_2 | null

  atime?: FileAtimeQueryString_2 | null

  mtime?: FileMtimeQueryString_2 | null

  ctime?: FileCtimeQueryString_2 | null

  birthtime?: FileBirthtimeQueryString_2 | null

  publicURL?: PublicUrlQueryString_3 | null
}
export interface MarkdownRemarkQueryArgs {
  id?: MarkdownRemarkIdQueryString_2 | null

  internal?: MarkdownRemarkInternalInputObject_2 | null

  frontmatter?: MarkdownRemarkFrontmatterInputObject_2 | null

  excerpt?: ExcerptQueryString_3 | null

  rawMarkdownBody?: MarkdownRemarkRawMarkdownBodyQueryString_2 | null

  fileAbsolutePath?: MarkdownRemarkFileAbsolutePathQueryString_2 | null

  fields?: MarkdownRemarkFieldsInputObject_2 | null

  html?: HtmlQueryString_3 | null

  headings?: HeadingsQueryList_3 | null

  timeToRead?: TimeToReadQueryInt_3 | null

  tableOfContents?: TableOfContentsQueryString_3 | null

  wordCount?: WordCountTypeName_3 | null
}
export interface DistinctSitePageConnectionArgs {
  field?: SitePageDistinctEnum | null
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null

  limit?: number | null

  field?: SitePageGroupEnum | null
}
export interface DistinctSitePluginConnectionArgs {
  field?: SitePluginDistinctEnum | null
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null

  limit?: number | null

  field?: SitePluginGroupEnum | null
}
export interface DistinctDirectoryConnectionArgs {
  field?: DirectoryDistinctEnum | null
}
export interface GroupDirectoryConnectionArgs {
  skip?: number | null

  limit?: number | null

  field?: DirectoryGroupEnum | null
}
export interface ModifiedTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface AccessTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface ChangeTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface BirthTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface AtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface MtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface CtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface BirthtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface DistinctFileConnectionArgs {
  field?: FileDistinctEnum | null
}
export interface GroupFileConnectionArgs {
  skip?: number | null

  limit?: number | null

  field?: FileGroupEnum | null
}
export interface ModifiedTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface AccessTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface ChangeTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface BirthTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface AtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface MtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface CtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface BirthtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number | null

  truncate?: boolean | null
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: HeadingLevels | null
}
export interface TableOfContentsMarkdownRemarkArgs {
  pathToSlugField?: string | null
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: MarkdownRemarkDistinctEnum | null
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: number | null

  limit?: number | null

  field?: MarkdownRemarkGroupEnum | null
}
export interface PortSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}
export interface BuildTimeSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null
}

// ====================================================
// Enums
// ====================================================

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePageDistinctEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageGroupEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePluginDistinctEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginGroupEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum DirectoryConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum DirectoryConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum DirectoryDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum DirectoryGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum FileConnectionSortByFieldsEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  publicURL = 'publicURL',
}

export enum FileConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum HeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum FileDistinctEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum FileGroupEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter____PARENT = 'frontmatter____PARENT',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
  html = 'html',
  headings = 'headings',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
}

export enum MarkdownRemarkConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum MarkdownRemarkDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter____PARENT = 'frontmatter____PARENT',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
}

export enum MarkdownRemarkGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter____PARENT = 'frontmatter____PARENT',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
}

// ====================================================
// END: Typescript template
// ====================================================

// ====================================================
// Documents
// ====================================================

export namespace SiteTitleQuery {
  export type Variables = {}

  export type Query = {
    __typename?: 'Query'

    site?: Site | null
  }

  export type Site = {
    __typename?: 'Site'

    siteMetadata?: SiteMetadata | null
  }

  export type SiteMetadata = {
    __typename?: 'siteMetadata_2'

    title?: string | null
  }
}

export namespace GetBlogData {
  export type Variables = {
    slug: string
  }

  export type Query = {
    __typename?: 'Query'

    markdownRemark?: MarkdownRemark | null
  }

  export type MarkdownRemark = {
    __typename?: 'MarkdownRemark'

    html?: string | null

    frontmatter?: Frontmatter | null
  }

  export type Frontmatter = {
    __typename?: 'frontmatter_2'

    title?: string | null
  }
}