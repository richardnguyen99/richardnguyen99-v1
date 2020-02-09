export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  JSON: any,
  Date: any,
  Github_URI: any,
  Github_DateTime: any,
  Github_HTML: any,
  Github_GitObjectID: any,
  Github_GitTimestamp: any,
  Github_GitSSHRemote: any,
  Github_Date: any,
  Github_PreciseDateTime: any,
  Github_X509Certificate: any,
};











export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars['Boolean']>,
  ne: Maybe<Scalars['Boolean']>,
  in: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq: Maybe<Scalars['Date']>,
  ne: Maybe<Scalars['Date']>,
  gt: Maybe<Scalars['Date']>,
  gte: Maybe<Scalars['Date']>,
  lt: Maybe<Scalars['Date']>,
  lte: Maybe<Scalars['Date']>,
  in: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  sourceInstanceName: Maybe<Scalars['String']>,
  absolutePath: Maybe<Scalars['String']>,
  relativePath: Maybe<Scalars['String']>,
  extension: Maybe<Scalars['String']>,
  size: Maybe<Scalars['Int']>,
  prettySize: Maybe<Scalars['String']>,
  modifiedTime: Maybe<Scalars['Date']>,
  accessTime: Maybe<Scalars['Date']>,
  changeTime: Maybe<Scalars['Date']>,
  birthTime: Maybe<Scalars['Date']>,
  root: Maybe<Scalars['String']>,
  dir: Maybe<Scalars['String']>,
  base: Maybe<Scalars['String']>,
  ext: Maybe<Scalars['String']>,
  name: Maybe<Scalars['String']>,
  relativeDirectory: Maybe<Scalars['String']>,
  dev: Maybe<Scalars['Int']>,
  mode: Maybe<Scalars['Int']>,
  nlink: Maybe<Scalars['Int']>,
  uid: Maybe<Scalars['Int']>,
  gid: Maybe<Scalars['Int']>,
  rdev: Maybe<Scalars['Int']>,
  blksize: Maybe<Scalars['Int']>,
  ino: Maybe<Scalars['Float']>,
  blocks: Maybe<Scalars['Int']>,
  atimeMs: Maybe<Scalars['Float']>,
  mtimeMs: Maybe<Scalars['Float']>,
  ctimeMs: Maybe<Scalars['Float']>,
  birthtimeMs: Maybe<Scalars['Float']>,
  atime: Maybe<Scalars['Date']>,
  mtime: Maybe<Scalars['Date']>,
  ctime: Maybe<Scalars['Date']>,
  birthtime: Maybe<Scalars['Date']>,
};


export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryBirthtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next: Maybe<Directory>,
  node: Directory,
  previous: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export type DirectoryFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  sourceInstanceName: Maybe<StringQueryOperatorInput>,
  absolutePath: Maybe<StringQueryOperatorInput>,
  relativePath: Maybe<StringQueryOperatorInput>,
  extension: Maybe<StringQueryOperatorInput>,
  size: Maybe<IntQueryOperatorInput>,
  prettySize: Maybe<StringQueryOperatorInput>,
  modifiedTime: Maybe<DateQueryOperatorInput>,
  accessTime: Maybe<DateQueryOperatorInput>,
  changeTime: Maybe<DateQueryOperatorInput>,
  birthTime: Maybe<DateQueryOperatorInput>,
  root: Maybe<StringQueryOperatorInput>,
  dir: Maybe<StringQueryOperatorInput>,
  base: Maybe<StringQueryOperatorInput>,
  ext: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  relativeDirectory: Maybe<StringQueryOperatorInput>,
  dev: Maybe<IntQueryOperatorInput>,
  mode: Maybe<IntQueryOperatorInput>,
  nlink: Maybe<IntQueryOperatorInput>,
  uid: Maybe<IntQueryOperatorInput>,
  gid: Maybe<IntQueryOperatorInput>,
  rdev: Maybe<IntQueryOperatorInput>,
  blksize: Maybe<IntQueryOperatorInput>,
  ino: Maybe<FloatQueryOperatorInput>,
  blocks: Maybe<IntQueryOperatorInput>,
  atimeMs: Maybe<FloatQueryOperatorInput>,
  mtimeMs: Maybe<FloatQueryOperatorInput>,
  ctimeMs: Maybe<FloatQueryOperatorInput>,
  birthtimeMs: Maybe<FloatQueryOperatorInput>,
  atime: Maybe<DateQueryOperatorInput>,
  mtime: Maybe<DateQueryOperatorInput>,
  ctime: Maybe<DateQueryOperatorInput>,
  birthtime: Maybe<DateQueryOperatorInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity: Maybe<Scalars['Int']>,
};

export type File = Node & {
   __typename?: 'File',
  birthtime: Maybe<Scalars['Date']>,
  birthtimeMs: Maybe<Scalars['Float']>,
  sourceInstanceName: Maybe<Scalars['String']>,
  absolutePath: Maybe<Scalars['String']>,
  relativePath: Maybe<Scalars['String']>,
  extension: Maybe<Scalars['String']>,
  size: Maybe<Scalars['Int']>,
  prettySize: Maybe<Scalars['String']>,
  modifiedTime: Maybe<Scalars['Date']>,
  accessTime: Maybe<Scalars['Date']>,
  changeTime: Maybe<Scalars['Date']>,
  birthTime: Maybe<Scalars['Date']>,
  root: Maybe<Scalars['String']>,
  dir: Maybe<Scalars['String']>,
  base: Maybe<Scalars['String']>,
  ext: Maybe<Scalars['String']>,
  name: Maybe<Scalars['String']>,
  relativeDirectory: Maybe<Scalars['String']>,
  dev: Maybe<Scalars['Int']>,
  mode: Maybe<Scalars['Int']>,
  nlink: Maybe<Scalars['Int']>,
  uid: Maybe<Scalars['Int']>,
  gid: Maybe<Scalars['Int']>,
  rdev: Maybe<Scalars['Int']>,
  blksize: Maybe<Scalars['Int']>,
  ino: Maybe<Scalars['Float']>,
  blocks: Maybe<Scalars['Int']>,
  atimeMs: Maybe<Scalars['Float']>,
  mtimeMs: Maybe<Scalars['Float']>,
  ctimeMs: Maybe<Scalars['Float']>,
  atime: Maybe<Scalars['Date']>,
  mtime: Maybe<Scalars['Date']>,
  ctime: Maybe<Scalars['Date']>,
  publicURL: Maybe<Scalars['String']>,
  childImageSharp: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childMdx: Maybe<Mdx>,
};


export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next: Maybe<File>,
  node: File,
  previous: Maybe<File>,
};

export enum FileFieldsEnum {
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
  ChildMdxFrontmatterCategories = 'childMdx___frontmatter___categories',
  ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
  ChildMdxFrontmatterThumbnailBirthtime = 'childMdx___frontmatter___thumbnail___birthtime',
  ChildMdxFrontmatterThumbnailBirthtimeMs = 'childMdx___frontmatter___thumbnail___birthtimeMs',
  ChildMdxFrontmatterThumbnailSourceInstanceName = 'childMdx___frontmatter___thumbnail___sourceInstanceName',
  ChildMdxFrontmatterThumbnailAbsolutePath = 'childMdx___frontmatter___thumbnail___absolutePath',
  ChildMdxFrontmatterThumbnailRelativePath = 'childMdx___frontmatter___thumbnail___relativePath',
  ChildMdxFrontmatterThumbnailExtension = 'childMdx___frontmatter___thumbnail___extension',
  ChildMdxFrontmatterThumbnailSize = 'childMdx___frontmatter___thumbnail___size',
  ChildMdxFrontmatterThumbnailPrettySize = 'childMdx___frontmatter___thumbnail___prettySize',
  ChildMdxFrontmatterThumbnailModifiedTime = 'childMdx___frontmatter___thumbnail___modifiedTime',
  ChildMdxFrontmatterThumbnailAccessTime = 'childMdx___frontmatter___thumbnail___accessTime',
  ChildMdxFrontmatterThumbnailChangeTime = 'childMdx___frontmatter___thumbnail___changeTime',
  ChildMdxFrontmatterThumbnailBirthTime = 'childMdx___frontmatter___thumbnail___birthTime',
  ChildMdxFrontmatterThumbnailRoot = 'childMdx___frontmatter___thumbnail___root',
  ChildMdxFrontmatterThumbnailDir = 'childMdx___frontmatter___thumbnail___dir',
  ChildMdxFrontmatterThumbnailBase = 'childMdx___frontmatter___thumbnail___base',
  ChildMdxFrontmatterThumbnailExt = 'childMdx___frontmatter___thumbnail___ext',
  ChildMdxFrontmatterThumbnailName = 'childMdx___frontmatter___thumbnail___name',
  ChildMdxFrontmatterThumbnailRelativeDirectory = 'childMdx___frontmatter___thumbnail___relativeDirectory',
  ChildMdxFrontmatterThumbnailDev = 'childMdx___frontmatter___thumbnail___dev',
  ChildMdxFrontmatterThumbnailMode = 'childMdx___frontmatter___thumbnail___mode',
  ChildMdxFrontmatterThumbnailNlink = 'childMdx___frontmatter___thumbnail___nlink',
  ChildMdxFrontmatterThumbnailUid = 'childMdx___frontmatter___thumbnail___uid',
  ChildMdxFrontmatterThumbnailGid = 'childMdx___frontmatter___thumbnail___gid',
  ChildMdxFrontmatterThumbnailRdev = 'childMdx___frontmatter___thumbnail___rdev',
  ChildMdxFrontmatterThumbnailBlksize = 'childMdx___frontmatter___thumbnail___blksize',
  ChildMdxFrontmatterThumbnailIno = 'childMdx___frontmatter___thumbnail___ino',
  ChildMdxFrontmatterThumbnailBlocks = 'childMdx___frontmatter___thumbnail___blocks',
  ChildMdxFrontmatterThumbnailAtimeMs = 'childMdx___frontmatter___thumbnail___atimeMs',
  ChildMdxFrontmatterThumbnailMtimeMs = 'childMdx___frontmatter___thumbnail___mtimeMs',
  ChildMdxFrontmatterThumbnailCtimeMs = 'childMdx___frontmatter___thumbnail___ctimeMs',
  ChildMdxFrontmatterThumbnailAtime = 'childMdx___frontmatter___thumbnail___atime',
  ChildMdxFrontmatterThumbnailMtime = 'childMdx___frontmatter___thumbnail___mtime',
  ChildMdxFrontmatterThumbnailCtime = 'childMdx___frontmatter___thumbnail___ctime',
  ChildMdxFrontmatterThumbnailPublicUrl = 'childMdx___frontmatter___thumbnail___publicURL',
  ChildMdxFrontmatterThumbnailId = 'childMdx___frontmatter___thumbnail___id',
  ChildMdxFrontmatterThumbnailChildren = 'childMdx___frontmatter___thumbnail___children',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxFieldsSlug = 'childMdx___fields___slug',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type'
}

export type FileFilterInput = {
  birthtime: Maybe<DateQueryOperatorInput>,
  birthtimeMs: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName: Maybe<StringQueryOperatorInput>,
  absolutePath: Maybe<StringQueryOperatorInput>,
  relativePath: Maybe<StringQueryOperatorInput>,
  extension: Maybe<StringQueryOperatorInput>,
  size: Maybe<IntQueryOperatorInput>,
  prettySize: Maybe<StringQueryOperatorInput>,
  modifiedTime: Maybe<DateQueryOperatorInput>,
  accessTime: Maybe<DateQueryOperatorInput>,
  changeTime: Maybe<DateQueryOperatorInput>,
  birthTime: Maybe<DateQueryOperatorInput>,
  root: Maybe<StringQueryOperatorInput>,
  dir: Maybe<StringQueryOperatorInput>,
  base: Maybe<StringQueryOperatorInput>,
  ext: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  relativeDirectory: Maybe<StringQueryOperatorInput>,
  dev: Maybe<IntQueryOperatorInput>,
  mode: Maybe<IntQueryOperatorInput>,
  nlink: Maybe<IntQueryOperatorInput>,
  uid: Maybe<IntQueryOperatorInput>,
  gid: Maybe<IntQueryOperatorInput>,
  rdev: Maybe<IntQueryOperatorInput>,
  blksize: Maybe<IntQueryOperatorInput>,
  ino: Maybe<FloatQueryOperatorInput>,
  blocks: Maybe<IntQueryOperatorInput>,
  atimeMs: Maybe<FloatQueryOperatorInput>,
  mtimeMs: Maybe<FloatQueryOperatorInput>,
  ctimeMs: Maybe<FloatQueryOperatorInput>,
  atime: Maybe<DateQueryOperatorInput>,
  mtime: Maybe<DateQueryOperatorInput>,
  ctime: Maybe<DateQueryOperatorInput>,
  publicURL: Maybe<StringQueryOperatorInput>,
  childImageSharp: Maybe<ImageSharpFilterInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  childMdx: Maybe<MdxFilterInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars['Float']>,
  ne: Maybe<Scalars['Float']>,
  gt: Maybe<Scalars['Float']>,
  gte: Maybe<Scalars['Float']>,
  lt: Maybe<Scalars['Float']>,
  lte: Maybe<Scalars['Float']>,
  in: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type Github = {
   __typename?: 'Github',
  codeOfConduct: Maybe<Github_CodeOfConduct>,
  codesOfConduct: Maybe<Array<Maybe<Github_CodeOfConduct>>>,
  enterprise: Maybe<Github_Enterprise>,
  enterpriseAdministratorInvitation: Maybe<Github_EnterpriseAdministratorInvitation>,
  enterpriseAdministratorInvitationByToken: Maybe<Github_EnterpriseAdministratorInvitation>,
  license: Maybe<Github_License>,
  licenses: Array<Maybe<Github_License>>,
  marketplaceCategories: Array<Github_MarketplaceCategory>,
  marketplaceCategory: Maybe<Github_MarketplaceCategory>,
  marketplaceListing: Maybe<Github_MarketplaceListing>,
  marketplaceListings: Github_MarketplaceListingConnection,
  meta: Github_GitHubMetadata,
  node: Maybe<Github_Node>,
  nodes: Array<Maybe<Github_Node>>,
  organization: Maybe<Github_Organization>,
  rateLimit: Maybe<Github_RateLimit>,
  relay: Query,
  repository: Maybe<Github_Repository>,
  repositoryOwner: Maybe<Github_RepositoryOwner>,
  resource: Maybe<Github_UniformResourceLocatable>,
  search: Github_SearchResultItemConnection,
  securityAdvisories: Github_SecurityAdvisoryConnection,
  securityAdvisory: Maybe<Github_SecurityAdvisory>,
  securityVulnerabilities: Github_SecurityVulnerabilityConnection,
  sponsorsListing: Maybe<Github_SponsorsListing>,
  topic: Maybe<Github_Topic>,
  user: Maybe<Github_User>,
  viewer: Github_User,
};


export type GithubCodeOfConductArgs = {
  key: Scalars['String']
};


export type GithubEnterpriseArgs = {
  slug: Scalars['String'],
  invitationToken: Maybe<Scalars['String']>
};


export type GithubEnterpriseAdministratorInvitationArgs = {
  userLogin: Scalars['String'],
  enterpriseSlug: Scalars['String'],
  role: Github_EnterpriseAdministratorRole
};


export type GithubEnterpriseAdministratorInvitationByTokenArgs = {
  invitationToken: Scalars['String']
};


export type GithubLicenseArgs = {
  key: Scalars['String']
};


export type GithubMarketplaceCategoriesArgs = {
  includeCategories: Maybe<Array<Scalars['String']>>,
  excludeEmpty: Maybe<Scalars['Boolean']>,
  excludeSubcategories: Maybe<Scalars['Boolean']>
};


export type GithubMarketplaceCategoryArgs = {
  slug: Scalars['String'],
  useTopicAliases: Maybe<Scalars['Boolean']>
};


export type GithubMarketplaceListingArgs = {
  slug: Scalars['String']
};


export type GithubMarketplaceListingsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  categorySlug: Maybe<Scalars['String']>,
  useTopicAliases: Maybe<Scalars['Boolean']>,
  viewerCanAdmin: Maybe<Scalars['Boolean']>,
  adminId: Maybe<Scalars['ID']>,
  organizationId: Maybe<Scalars['ID']>,
  allStates: Maybe<Scalars['Boolean']>,
  slugs: Maybe<Array<Maybe<Scalars['String']>>>,
  primaryCategoryOnly?: Maybe<Scalars['Boolean']>,
  withFreeTrialsOnly?: Maybe<Scalars['Boolean']>
};


export type GithubNodeArgs = {
  id: Scalars['ID']
};


export type GithubNodesArgs = {
  ids: Array<Scalars['ID']>
};


export type GithubOrganizationArgs = {
  login: Scalars['String']
};


export type GithubRateLimitArgs = {
  dryRun?: Maybe<Scalars['Boolean']>
};


export type GithubRepositoryArgs = {
  owner: Scalars['String'],
  name: Scalars['String']
};


export type GithubRepositoryOwnerArgs = {
  login: Scalars['String']
};


export type GithubResourceArgs = {
  url: Scalars['Github_URI']
};


export type GithubSearchArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  query: Scalars['String'],
  type: Github_SearchType
};


export type GithubSecurityAdvisoriesArgs = {
  orderBy?: Maybe<Github_SecurityAdvisoryOrder>,
  identifier: Maybe<Github_SecurityAdvisoryIdentifierFilter>,
  publishedSince: Maybe<Scalars['Github_DateTime']>,
  updatedSince: Maybe<Scalars['Github_DateTime']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type GithubSecurityAdvisoryArgs = {
  ghsaId: Scalars['String']
};


export type GithubSecurityVulnerabilitiesArgs = {
  orderBy?: Maybe<Github_SecurityVulnerabilityOrder>,
  ecosystem: Maybe<Github_SecurityAdvisoryEcosystem>,
  package: Maybe<Scalars['String']>,
  severities: Maybe<Array<Github_SecurityAdvisorySeverity>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type GithubSponsorsListingArgs = {
  slug: Scalars['String']
};


export type GithubTopicArgs = {
  name: Scalars['String']
};


export type GithubUserArgs = {
  login: Scalars['String']
};

export type Github_AcceptEnterpriseAdministratorInvitationInput = {
  invitationId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AcceptEnterpriseAdministratorInvitationPayload = {
   __typename?: 'Github_AcceptEnterpriseAdministratorInvitationPayload',
  clientMutationId: Maybe<Scalars['String']>,
  invitation: Maybe<Github_EnterpriseAdministratorInvitation>,
  message: Maybe<Scalars['String']>,
};

export type Github_AcceptTopicSuggestionInput = {
  repositoryId: Scalars['ID'],
  name: Scalars['String'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AcceptTopicSuggestionPayload = {
   __typename?: 'Github_AcceptTopicSuggestionPayload',
  clientMutationId: Maybe<Scalars['String']>,
  topic: Maybe<Github_Topic>,
};

export enum Github_ActionExecutionCapabilitySetting {
  Disabled = 'DISABLED',
  AllActions = 'ALL_ACTIONS',
  LocalActionsOnly = 'LOCAL_ACTIONS_ONLY',
  NoPolicy = 'NO_POLICY'
}

export type Github_Actor = {
  avatarUrl: Scalars['Github_URI'],
  login: Scalars['String'],
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
};


export type Github_ActorAvatarUrlArgs = {
  size: Maybe<Scalars['Int']>
};

export type Github_ActorLocation = {
   __typename?: 'Github_ActorLocation',
  city: Maybe<Scalars['String']>,
  country: Maybe<Scalars['String']>,
  countryCode: Maybe<Scalars['String']>,
  region: Maybe<Scalars['String']>,
  regionCode: Maybe<Scalars['String']>,
};

export type Github_AddAssigneesToAssignableInput = {
  assignableId: Scalars['ID'],
  assigneeIds: Array<Scalars['ID']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AddAssigneesToAssignablePayload = {
   __typename?: 'Github_AddAssigneesToAssignablePayload',
  assignable: Maybe<Github_Assignable>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AddCommentInput = {
  subjectId: Scalars['ID'],
  body: Scalars['String'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AddCommentPayload = {
   __typename?: 'Github_AddCommentPayload',
  clientMutationId: Maybe<Scalars['String']>,
  commentEdge: Maybe<Github_IssueCommentEdge>,
  subject: Maybe<Github_Node>,
  timelineEdge: Maybe<Github_IssueTimelineItemEdge>,
};

export type Github_AddedToProjectEvent = Github_Node & {
   __typename?: 'Github_AddedToProjectEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type Github_AddLabelsToLabelableInput = {
  labelableId: Scalars['ID'],
  labelIds: Array<Scalars['ID']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AddLabelsToLabelablePayload = {
   __typename?: 'Github_AddLabelsToLabelablePayload',
  clientMutationId: Maybe<Scalars['String']>,
  labelable: Maybe<Github_Labelable>,
};

export type Github_AddProjectCardInput = {
  projectColumnId: Scalars['ID'],
  contentId: Maybe<Scalars['ID']>,
  note: Maybe<Scalars['String']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AddProjectCardPayload = {
   __typename?: 'Github_AddProjectCardPayload',
  cardEdge: Maybe<Github_ProjectCardEdge>,
  clientMutationId: Maybe<Scalars['String']>,
  projectColumn: Maybe<Github_ProjectColumn>,
};

export type Github_AddProjectColumnInput = {
  projectId: Scalars['ID'],
  name: Scalars['String'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AddProjectColumnPayload = {
   __typename?: 'Github_AddProjectColumnPayload',
  clientMutationId: Maybe<Scalars['String']>,
  columnEdge: Maybe<Github_ProjectColumnEdge>,
  project: Maybe<Github_Project>,
};

export type Github_AddPullRequestReviewCommentInput = {
  pullRequestId: Maybe<Scalars['ID']>,
  pullRequestReviewId: Maybe<Scalars['ID']>,
  commitOID: Maybe<Scalars['Github_GitObjectID']>,
  body: Scalars['String'],
  path: Maybe<Scalars['String']>,
  position: Maybe<Scalars['Int']>,
  inReplyTo: Maybe<Scalars['ID']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AddPullRequestReviewCommentPayload = {
   __typename?: 'Github_AddPullRequestReviewCommentPayload',
  clientMutationId: Maybe<Scalars['String']>,
  comment: Maybe<Github_PullRequestReviewComment>,
  commentEdge: Maybe<Github_PullRequestReviewCommentEdge>,
};

export type Github_AddPullRequestReviewInput = {
  pullRequestId: Scalars['ID'],
  commitOID: Maybe<Scalars['Github_GitObjectID']>,
  body: Maybe<Scalars['String']>,
  event: Maybe<Github_PullRequestReviewEvent>,
  comments: Maybe<Array<Maybe<Github_DraftPullRequestReviewComment>>>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AddPullRequestReviewPayload = {
   __typename?: 'Github_AddPullRequestReviewPayload',
  clientMutationId: Maybe<Scalars['String']>,
  pullRequestReview: Maybe<Github_PullRequestReview>,
  reviewEdge: Maybe<Github_PullRequestReviewEdge>,
};

export type Github_AddReactionInput = {
  subjectId: Scalars['ID'],
  content: Github_ReactionContent,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AddReactionPayload = {
   __typename?: 'Github_AddReactionPayload',
  clientMutationId: Maybe<Scalars['String']>,
  reaction: Maybe<Github_Reaction>,
  subject: Maybe<Github_Reactable>,
};

export type Github_AddStarInput = {
  starrableId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_AddStarPayload = {
   __typename?: 'Github_AddStarPayload',
  clientMutationId: Maybe<Scalars['String']>,
  starrable: Maybe<Github_Starrable>,
};

export type Github_App = Github_Node & {
   __typename?: 'Github_App',
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  description: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  logoBackgroundColor: Scalars['String'],
  logoUrl: Scalars['Github_URI'],
  name: Scalars['String'],
  slug: Scalars['String'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
};


export type Github_AppLogoUrlArgs = {
  size: Maybe<Scalars['Int']>
};

export type Github_ArchiveRepositoryInput = {
  repositoryId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_ArchiveRepositoryPayload = {
   __typename?: 'Github_ArchiveRepositoryPayload',
  clientMutationId: Maybe<Scalars['String']>,
  repository: Maybe<Github_Repository>,
};

export type Github_Assignable = {
  assignees: Github_UserConnection,
};


export type Github_AssignableAssigneesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_AssignedEvent = Github_Node & {
   __typename?: 'Github_AssignedEvent',
  actor: Maybe<Github_Actor>,
  assignable: Github_Assignable,
  assignee: Maybe<Github_Assignee>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  user: Maybe<Github_User>,
};

export type Github_Assignee = Github_Bot | Github_Mannequin | Github_Organization | Github_User;

export type Github_AuditEntry = {
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  operationType: Maybe<Github_OperationType>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_AuditEntryActor = Github_Bot | Github_Organization | Github_User;

export type Github_AuditLogOrder = {
  field: Maybe<Github_AuditLogOrderField>,
  direction: Maybe<Github_OrderDirection>,
};

export enum Github_AuditLogOrderField {
  CreatedAt = 'CREATED_AT'
}

export type Github_BaseRefChangedEvent = Github_Node & {
   __typename?: 'Github_BaseRefChangedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type Github_BaseRefForcePushedEvent = Github_Node & {
   __typename?: 'Github_BaseRefForcePushedEvent',
  actor: Maybe<Github_Actor>,
  afterCommit: Maybe<Github_Commit>,
  beforeCommit: Maybe<Github_Commit>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  pullRequest: Github_PullRequest,
  ref: Maybe<Github_Ref>,
};

export type Github_Blame = {
   __typename?: 'Github_Blame',
  ranges: Array<Github_BlameRange>,
};

export type Github_BlameRange = {
   __typename?: 'Github_BlameRange',
  age: Scalars['Int'],
  commit: Github_Commit,
  endingLine: Scalars['Int'],
  startingLine: Scalars['Int'],
};

export type Github_Blob = Github_Node & Github_GitObject & {
   __typename?: 'Github_Blob',
  abbreviatedOid: Scalars['String'],
  byteSize: Scalars['Int'],
  commitResourcePath: Scalars['Github_URI'],
  commitUrl: Scalars['Github_URI'],
  id: Scalars['ID'],
  isBinary: Scalars['Boolean'],
  isTruncated: Scalars['Boolean'],
  oid: Scalars['Github_GitObjectID'],
  repository: Github_Repository,
  text: Maybe<Scalars['String']>,
};

export type Github_Bot = Github_Node & Github_Actor & Github_UniformResourceLocatable & {
   __typename?: 'Github_Bot',
  avatarUrl: Scalars['Github_URI'],
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  login: Scalars['String'],
  resourcePath: Scalars['Github_URI'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
};


export type Github_BotAvatarUrlArgs = {
  size: Maybe<Scalars['Int']>
};

export type Github_BranchProtectionRule = Github_Node & {
   __typename?: 'Github_BranchProtectionRule',
  branchProtectionRuleConflicts: Github_BranchProtectionRuleConflictConnection,
  creator: Maybe<Github_Actor>,
  databaseId: Maybe<Scalars['Int']>,
  dismissesStaleReviews: Scalars['Boolean'],
  id: Scalars['ID'],
  isAdminEnforced: Scalars['Boolean'],
  matchingRefs: Github_RefConnection,
  pattern: Scalars['String'],
  pushAllowances: Github_PushAllowanceConnection,
  repository: Maybe<Github_Repository>,
  requiredApprovingReviewCount: Maybe<Scalars['Int']>,
  requiredStatusCheckContexts: Maybe<Array<Maybe<Scalars['String']>>>,
  requiresApprovingReviews: Scalars['Boolean'],
  requiresCodeOwnerReviews: Scalars['Boolean'],
  requiresCommitSignatures: Scalars['Boolean'],
  requiresStatusChecks: Scalars['Boolean'],
  requiresStrictStatusChecks: Scalars['Boolean'],
  restrictsPushes: Scalars['Boolean'],
  restrictsReviewDismissals: Scalars['Boolean'],
  reviewDismissalAllowances: Github_ReviewDismissalAllowanceConnection,
};


export type Github_BranchProtectionRuleBranchProtectionRuleConflictsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_BranchProtectionRuleMatchingRefsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_BranchProtectionRulePushAllowancesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_BranchProtectionRuleReviewDismissalAllowancesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_BranchProtectionRuleConflict = {
   __typename?: 'Github_BranchProtectionRuleConflict',
  branchProtectionRule: Maybe<Github_BranchProtectionRule>,
  conflictingBranchProtectionRule: Maybe<Github_BranchProtectionRule>,
  ref: Maybe<Github_Ref>,
};

export type Github_BranchProtectionRuleConflictConnection = {
   __typename?: 'Github_BranchProtectionRuleConflictConnection',
  edges: Maybe<Array<Maybe<Github_BranchProtectionRuleConflictEdge>>>,
  nodes: Maybe<Array<Maybe<Github_BranchProtectionRuleConflict>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_BranchProtectionRuleConflictEdge = {
   __typename?: 'Github_BranchProtectionRuleConflictEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_BranchProtectionRuleConflict>,
};

export type Github_BranchProtectionRuleConnection = {
   __typename?: 'Github_BranchProtectionRuleConnection',
  edges: Maybe<Array<Maybe<Github_BranchProtectionRuleEdge>>>,
  nodes: Maybe<Array<Maybe<Github_BranchProtectionRule>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_BranchProtectionRuleEdge = {
   __typename?: 'Github_BranchProtectionRuleEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_BranchProtectionRule>,
};

export type Github_CancelEnterpriseAdminInvitationInput = {
  invitationId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CancelEnterpriseAdminInvitationPayload = {
   __typename?: 'Github_CancelEnterpriseAdminInvitationPayload',
  clientMutationId: Maybe<Scalars['String']>,
  invitation: Maybe<Github_EnterpriseAdministratorInvitation>,
  message: Maybe<Scalars['String']>,
};

export type Github_ChangeUserStatusInput = {
  emoji: Maybe<Scalars['String']>,
  message: Maybe<Scalars['String']>,
  organizationId: Maybe<Scalars['ID']>,
  limitedAvailability: Maybe<Scalars['Boolean']>,
  expiresAt: Maybe<Scalars['Github_DateTime']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_ChangeUserStatusPayload = {
   __typename?: 'Github_ChangeUserStatusPayload',
  clientMutationId: Maybe<Scalars['String']>,
  status: Maybe<Github_UserStatus>,
};

export type Github_ClearLabelsFromLabelableInput = {
  labelableId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_ClearLabelsFromLabelablePayload = {
   __typename?: 'Github_ClearLabelsFromLabelablePayload',
  clientMutationId: Maybe<Scalars['String']>,
  labelable: Maybe<Github_Labelable>,
};

export type Github_CloneProjectInput = {
  targetOwnerId: Scalars['ID'],
  sourceId: Scalars['ID'],
  includeWorkflows: Scalars['Boolean'],
  name: Scalars['String'],
  body: Maybe<Scalars['String']>,
  public: Maybe<Scalars['Boolean']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CloneProjectPayload = {
   __typename?: 'Github_CloneProjectPayload',
  clientMutationId: Maybe<Scalars['String']>,
  jobStatusId: Maybe<Scalars['String']>,
  project: Maybe<Github_Project>,
};

export type Github_CloneTemplateRepositoryInput = {
  repositoryId: Scalars['ID'],
  name: Scalars['String'],
  ownerId: Scalars['ID'],
  description: Maybe<Scalars['String']>,
  visibility: Github_RepositoryVisibility,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CloneTemplateRepositoryPayload = {
   __typename?: 'Github_CloneTemplateRepositoryPayload',
  clientMutationId: Maybe<Scalars['String']>,
  repository: Maybe<Github_Repository>,
};

export type Github_Closable = {
  closed: Scalars['Boolean'],
  closedAt: Maybe<Scalars['Github_DateTime']>,
};

export type Github_ClosedEvent = Github_Node & Github_UniformResourceLocatable & {
   __typename?: 'Github_ClosedEvent',
  actor: Maybe<Github_Actor>,
  closable: Github_Closable,
  closer: Maybe<Github_Closer>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
};

export type Github_CloseIssueInput = {
  issueId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CloseIssuePayload = {
   __typename?: 'Github_CloseIssuePayload',
  clientMutationId: Maybe<Scalars['String']>,
  issue: Maybe<Github_Issue>,
};

export type Github_ClosePullRequestInput = {
  pullRequestId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_ClosePullRequestPayload = {
   __typename?: 'Github_ClosePullRequestPayload',
  clientMutationId: Maybe<Scalars['String']>,
  pullRequest: Maybe<Github_PullRequest>,
};

export type Github_Closer = Github_Commit | Github_PullRequest;

export type Github_CodeOfConduct = Github_Node & {
   __typename?: 'Github_CodeOfConduct',
  body: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  key: Scalars['String'],
  name: Scalars['String'],
  resourcePath: Maybe<Scalars['Github_URI']>,
  url: Maybe<Scalars['Github_URI']>,
};

export enum Github_CollaboratorAffiliation {
  Outside = 'OUTSIDE',
  Direct = 'DIRECT',
  All = 'ALL'
}

export type Github_Comment = {
  author: Maybe<Github_Actor>,
  authorAssociation: Github_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['Github_HTML'],
  bodyText: Scalars['String'],
  createdAt: Scalars['Github_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  editor: Maybe<Github_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  lastEditedAt: Maybe<Scalars['Github_DateTime']>,
  publishedAt: Maybe<Scalars['Github_DateTime']>,
  updatedAt: Scalars['Github_DateTime'],
  userContentEdits: Maybe<Github_UserContentEditConnection>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type Github_CommentUserContentEditsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export enum Github_CommentAuthorAssociation {
  Member = 'MEMBER',
  Owner = 'OWNER',
  Collaborator = 'COLLABORATOR',
  Contributor = 'CONTRIBUTOR',
  FirstTimeContributor = 'FIRST_TIME_CONTRIBUTOR',
  FirstTimer = 'FIRST_TIMER',
  None = 'NONE'
}

export enum Github_CommentCannotUpdateReason {
  Archived = 'ARCHIVED',
  InsufficientAccess = 'INSUFFICIENT_ACCESS',
  Locked = 'LOCKED',
  LoginRequired = 'LOGIN_REQUIRED',
  Maintenance = 'MAINTENANCE',
  VerifiedEmailRequired = 'VERIFIED_EMAIL_REQUIRED',
  Denied = 'DENIED'
}

export type Github_CommentDeletedEvent = Github_Node & {
   __typename?: 'Github_CommentDeletedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type Github_Commit = Github_Node & Github_GitObject & Github_Subscribable & Github_UniformResourceLocatable & {
   __typename?: 'Github_Commit',
  abbreviatedOid: Scalars['String'],
  additions: Scalars['Int'],
  associatedPullRequests: Maybe<Github_PullRequestConnection>,
  author: Maybe<Github_GitActor>,
  authoredByCommitter: Scalars['Boolean'],
  authoredDate: Scalars['Github_DateTime'],
  blame: Github_Blame,
  changedFiles: Scalars['Int'],
  comments: Github_CommitCommentConnection,
  commitResourcePath: Scalars['Github_URI'],
  commitUrl: Scalars['Github_URI'],
  committedDate: Scalars['Github_DateTime'],
  committedViaWeb: Scalars['Boolean'],
  committer: Maybe<Github_GitActor>,
  deletions: Scalars['Int'],
  deployments: Maybe<Github_DeploymentConnection>,
  history: Github_CommitHistoryConnection,
  id: Scalars['ID'],
  message: Scalars['String'],
  messageBody: Scalars['String'],
  messageBodyHTML: Scalars['Github_HTML'],
  messageHeadline: Scalars['String'],
  messageHeadlineHTML: Scalars['Github_HTML'],
  oid: Scalars['Github_GitObjectID'],
  parents: Github_CommitConnection,
  pushedDate: Maybe<Scalars['Github_DateTime']>,
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  signature: Maybe<Github_GitSignature>,
  status: Maybe<Github_Status>,
  tarballUrl: Scalars['Github_URI'],
  tree: Github_Tree,
  treeResourcePath: Scalars['Github_URI'],
  treeUrl: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerSubscription: Maybe<Github_SubscriptionState>,
  zipballUrl: Scalars['Github_URI'],
};


export type Github_CommitAssociatedPullRequestsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_PullRequestOrder>
};


export type Github_CommitBlameArgs = {
  path: Scalars['String']
};


export type Github_CommitCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_CommitDeploymentsArgs = {
  environments: Maybe<Array<Scalars['String']>>,
  orderBy?: Maybe<Github_DeploymentOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_CommitHistoryArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  path: Maybe<Scalars['String']>,
  author: Maybe<Github_CommitAuthor>,
  since: Maybe<Scalars['Github_GitTimestamp']>,
  until: Maybe<Scalars['Github_GitTimestamp']>
};


export type Github_CommitParentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_CommitAuthor = {
  id: Maybe<Scalars['ID']>,
  emails: Maybe<Array<Scalars['String']>>,
};

export type Github_CommitComment = Github_Node & Github_Comment & Github_Deletable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
   __typename?: 'Github_CommitComment',
  author: Maybe<Github_Actor>,
  authorAssociation: Github_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['Github_HTML'],
  bodyText: Scalars['String'],
  commit: Maybe<Github_Commit>,
  createdAt: Scalars['Github_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId: Maybe<Scalars['Int']>,
  editor: Maybe<Github_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isMinimized: Scalars['Boolean'],
  lastEditedAt: Maybe<Scalars['Github_DateTime']>,
  minimizedReason: Maybe<Scalars['String']>,
  path: Maybe<Scalars['String']>,
  position: Maybe<Scalars['Int']>,
  publishedAt: Maybe<Scalars['Github_DateTime']>,
  reactionGroups: Maybe<Array<Github_ReactionGroup>>,
  reactions: Github_ReactionConnection,
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  userContentEdits: Maybe<Github_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanMinimize: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<Github_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type Github_CommitCommentReactionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  content: Maybe<Github_ReactionContent>,
  orderBy: Maybe<Github_ReactionOrder>
};


export type Github_CommitCommentUserContentEditsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_CommitCommentConnection = {
   __typename?: 'Github_CommitCommentConnection',
  edges: Maybe<Array<Maybe<Github_CommitCommentEdge>>>,
  nodes: Maybe<Array<Maybe<Github_CommitComment>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_CommitCommentEdge = {
   __typename?: 'Github_CommitCommentEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_CommitComment>,
};

export type Github_CommitCommentThread = Github_Node & Github_RepositoryNode & {
   __typename?: 'Github_CommitCommentThread',
  comments: Github_CommitCommentConnection,
  commit: Maybe<Github_Commit>,
  id: Scalars['ID'],
  path: Maybe<Scalars['String']>,
  position: Maybe<Scalars['Int']>,
  repository: Github_Repository,
};


export type Github_CommitCommentThreadCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_CommitConnection = {
   __typename?: 'Github_CommitConnection',
  edges: Maybe<Array<Maybe<Github_CommitEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Commit>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_CommitContributionOrder = {
  field: Github_CommitContributionOrderField,
  direction: Github_OrderDirection,
};

export enum Github_CommitContributionOrderField {
  OccurredAt = 'OCCURRED_AT',
  CommitCount = 'COMMIT_COUNT'
}

export type Github_CommitContributionsByRepository = {
   __typename?: 'Github_CommitContributionsByRepository',
  contributions: Github_CreatedCommitContributionConnection,
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
};


export type Github_CommitContributionsByRepositoryContributionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_CommitContributionOrder>
};

export type Github_CommitEdge = {
   __typename?: 'Github_CommitEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Commit>,
};

export type Github_CommitHistoryConnection = {
   __typename?: 'Github_CommitHistoryConnection',
  edges: Maybe<Array<Maybe<Github_CommitEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Commit>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_ConnectedEvent = Github_Node & {
   __typename?: 'Github_ConnectedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  isCrossRepository: Scalars['Boolean'],
  source: Github_ReferencedSubject,
  subject: Github_ReferencedSubject,
};

export type Github_Contribution = {
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['Github_DateTime'],
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
  user: Github_User,
};

export type Github_ContributionCalendar = {
   __typename?: 'Github_ContributionCalendar',
  colors: Array<Scalars['String']>,
  isHalloween: Scalars['Boolean'],
  months: Array<Github_ContributionCalendarMonth>,
  totalContributions: Scalars['Int'],
  weeks: Array<Github_ContributionCalendarWeek>,
};

export type Github_ContributionCalendarDay = {
   __typename?: 'Github_ContributionCalendarDay',
  color: Scalars['String'],
  contributionCount: Scalars['Int'],
  date: Scalars['Github_Date'],
  weekday: Scalars['Int'],
};

export type Github_ContributionCalendarMonth = {
   __typename?: 'Github_ContributionCalendarMonth',
  firstDay: Scalars['Github_Date'],
  name: Scalars['String'],
  totalWeeks: Scalars['Int'],
  year: Scalars['Int'],
};

export type Github_ContributionCalendarWeek = {
   __typename?: 'Github_ContributionCalendarWeek',
  contributionDays: Array<Github_ContributionCalendarDay>,
  firstDay: Scalars['Github_Date'],
};

export type Github_ContributionOrder = {
  field: Maybe<Github_ContributionOrderField>,
  direction: Github_OrderDirection,
};

export enum Github_ContributionOrderField {
  OccurredAt = 'OCCURRED_AT'
}

export type Github_ContributionsCollection = {
   __typename?: 'Github_ContributionsCollection',
  commitContributionsByRepository: Array<Github_CommitContributionsByRepository>,
  contributionCalendar: Github_ContributionCalendar,
  contributionYears: Array<Scalars['Int']>,
  doesEndInCurrentMonth: Scalars['Boolean'],
  earliestRestrictedContributionDate: Maybe<Scalars['Github_Date']>,
  endedAt: Scalars['Github_DateTime'],
  firstIssueContribution: Maybe<Github_CreatedIssueOrRestrictedContribution>,
  firstPullRequestContribution: Maybe<Github_CreatedPullRequestOrRestrictedContribution>,
  firstRepositoryContribution: Maybe<Github_CreatedRepositoryOrRestrictedContribution>,
  hasActivityInThePast: Scalars['Boolean'],
  hasAnyContributions: Scalars['Boolean'],
  hasAnyRestrictedContributions: Scalars['Boolean'],
  isSingleDay: Scalars['Boolean'],
  issueContributions: Github_CreatedIssueContributionConnection,
  issueContributionsByRepository: Array<Github_IssueContributionsByRepository>,
  joinedGitHubContribution: Maybe<Github_JoinedGitHubContribution>,
  latestRestrictedContributionDate: Maybe<Scalars['Github_Date']>,
  mostRecentCollectionWithActivity: Maybe<Github_ContributionsCollection>,
  mostRecentCollectionWithoutActivity: Maybe<Github_ContributionsCollection>,
  popularIssueContribution: Maybe<Github_CreatedIssueContribution>,
  popularPullRequestContribution: Maybe<Github_CreatedPullRequestContribution>,
  pullRequestContributions: Github_CreatedPullRequestContributionConnection,
  pullRequestContributionsByRepository: Array<Github_PullRequestContributionsByRepository>,
  pullRequestReviewContributions: Github_CreatedPullRequestReviewContributionConnection,
  pullRequestReviewContributionsByRepository: Array<Github_PullRequestReviewContributionsByRepository>,
  repositoryContributions: Github_CreatedRepositoryContributionConnection,
  restrictedContributionsCount: Scalars['Int'],
  startedAt: Scalars['Github_DateTime'],
  totalCommitContributions: Scalars['Int'],
  totalIssueContributions: Scalars['Int'],
  totalPullRequestContributions: Scalars['Int'],
  totalPullRequestReviewContributions: Scalars['Int'],
  totalRepositoriesWithContributedCommits: Scalars['Int'],
  totalRepositoriesWithContributedIssues: Scalars['Int'],
  totalRepositoriesWithContributedPullRequestReviews: Scalars['Int'],
  totalRepositoriesWithContributedPullRequests: Scalars['Int'],
  totalRepositoryContributions: Scalars['Int'],
  user: Github_User,
};


export type Github_ContributionsCollectionCommitContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>
};


export type Github_ContributionsCollectionIssueContributionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<Github_ContributionOrder>
};


export type Github_ContributionsCollectionIssueContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>,
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type Github_ContributionsCollectionPullRequestContributionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<Github_ContributionOrder>
};


export type Github_ContributionsCollectionPullRequestContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>,
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type Github_ContributionsCollectionPullRequestReviewContributionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_ContributionOrder>
};


export type Github_ContributionsCollectionPullRequestReviewContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>
};


export type Github_ContributionsCollectionRepositoryContributionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  excludeFirst?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<Github_ContributionOrder>
};


export type Github_ContributionsCollectionTotalIssueContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type Github_ContributionsCollectionTotalPullRequestContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type Github_ContributionsCollectionTotalRepositoriesWithContributedIssuesArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type Github_ContributionsCollectionTotalRepositoriesWithContributedPullRequestsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type Github_ContributionsCollectionTotalRepositoryContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>
};

export type Github_ConvertedNoteToIssueEvent = Github_Node & {
   __typename?: 'Github_ConvertedNoteToIssueEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type Github_ConvertProjectCardNoteToIssueInput = {
  projectCardId: Scalars['ID'],
  repositoryId: Scalars['ID'],
  title: Maybe<Scalars['String']>,
  body: Maybe<Scalars['String']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_ConvertProjectCardNoteToIssuePayload = {
   __typename?: 'Github_ConvertProjectCardNoteToIssuePayload',
  clientMutationId: Maybe<Scalars['String']>,
  projectCard: Maybe<Github_ProjectCard>,
};

export type Github_CreateBranchProtectionRuleInput = {
  repositoryId: Scalars['ID'],
  pattern: Scalars['String'],
  requiresApprovingReviews: Maybe<Scalars['Boolean']>,
  requiredApprovingReviewCount: Maybe<Scalars['Int']>,
  requiresCommitSignatures: Maybe<Scalars['Boolean']>,
  isAdminEnforced: Maybe<Scalars['Boolean']>,
  requiresStatusChecks: Maybe<Scalars['Boolean']>,
  requiresStrictStatusChecks: Maybe<Scalars['Boolean']>,
  requiresCodeOwnerReviews: Maybe<Scalars['Boolean']>,
  dismissesStaleReviews: Maybe<Scalars['Boolean']>,
  restrictsReviewDismissals: Maybe<Scalars['Boolean']>,
  reviewDismissalActorIds: Maybe<Array<Scalars['ID']>>,
  restrictsPushes: Maybe<Scalars['Boolean']>,
  pushActorIds: Maybe<Array<Scalars['ID']>>,
  requiredStatusCheckContexts: Maybe<Array<Scalars['String']>>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CreateBranchProtectionRulePayload = {
   __typename?: 'Github_CreateBranchProtectionRulePayload',
  branchProtectionRule: Maybe<Github_BranchProtectionRule>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CreatedCommitContribution = Github_Contribution & {
   __typename?: 'Github_CreatedCommitContribution',
  commitCount: Scalars['Int'],
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['Github_DateTime'],
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
  user: Github_User,
};

export type Github_CreatedCommitContributionConnection = {
   __typename?: 'Github_CreatedCommitContributionConnection',
  edges: Maybe<Array<Maybe<Github_CreatedCommitContributionEdge>>>,
  nodes: Maybe<Array<Maybe<Github_CreatedCommitContribution>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_CreatedCommitContributionEdge = {
   __typename?: 'Github_CreatedCommitContributionEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_CreatedCommitContribution>,
};

export type Github_CreatedIssueContribution = Github_Contribution & {
   __typename?: 'Github_CreatedIssueContribution',
  isRestricted: Scalars['Boolean'],
  issue: Github_Issue,
  occurredAt: Scalars['Github_DateTime'],
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
  user: Github_User,
};

export type Github_CreatedIssueContributionConnection = {
   __typename?: 'Github_CreatedIssueContributionConnection',
  edges: Maybe<Array<Maybe<Github_CreatedIssueContributionEdge>>>,
  nodes: Maybe<Array<Maybe<Github_CreatedIssueContribution>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_CreatedIssueContributionEdge = {
   __typename?: 'Github_CreatedIssueContributionEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_CreatedIssueContribution>,
};

export type Github_CreatedIssueOrRestrictedContribution = Github_CreatedIssueContribution | Github_RestrictedContribution;

export type Github_CreatedPullRequestContribution = Github_Contribution & {
   __typename?: 'Github_CreatedPullRequestContribution',
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['Github_DateTime'],
  pullRequest: Github_PullRequest,
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
  user: Github_User,
};

export type Github_CreatedPullRequestContributionConnection = {
   __typename?: 'Github_CreatedPullRequestContributionConnection',
  edges: Maybe<Array<Maybe<Github_CreatedPullRequestContributionEdge>>>,
  nodes: Maybe<Array<Maybe<Github_CreatedPullRequestContribution>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_CreatedPullRequestContributionEdge = {
   __typename?: 'Github_CreatedPullRequestContributionEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_CreatedPullRequestContribution>,
};

export type Github_CreatedPullRequestOrRestrictedContribution = Github_CreatedPullRequestContribution | Github_RestrictedContribution;

export type Github_CreatedPullRequestReviewContribution = Github_Contribution & {
   __typename?: 'Github_CreatedPullRequestReviewContribution',
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['Github_DateTime'],
  pullRequest: Github_PullRequest,
  pullRequestReview: Github_PullRequestReview,
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
  user: Github_User,
};

export type Github_CreatedPullRequestReviewContributionConnection = {
   __typename?: 'Github_CreatedPullRequestReviewContributionConnection',
  edges: Maybe<Array<Maybe<Github_CreatedPullRequestReviewContributionEdge>>>,
  nodes: Maybe<Array<Maybe<Github_CreatedPullRequestReviewContribution>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_CreatedPullRequestReviewContributionEdge = {
   __typename?: 'Github_CreatedPullRequestReviewContributionEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_CreatedPullRequestReviewContribution>,
};

export type Github_CreatedRepositoryContribution = Github_Contribution & {
   __typename?: 'Github_CreatedRepositoryContribution',
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['Github_DateTime'],
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
  user: Github_User,
};

export type Github_CreatedRepositoryContributionConnection = {
   __typename?: 'Github_CreatedRepositoryContributionConnection',
  edges: Maybe<Array<Maybe<Github_CreatedRepositoryContributionEdge>>>,
  nodes: Maybe<Array<Maybe<Github_CreatedRepositoryContribution>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_CreatedRepositoryContributionEdge = {
   __typename?: 'Github_CreatedRepositoryContributionEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_CreatedRepositoryContribution>,
};

export type Github_CreatedRepositoryOrRestrictedContribution = Github_CreatedRepositoryContribution | Github_RestrictedContribution;

export type Github_CreateEnterpriseOrganizationInput = {
  enterpriseId: Scalars['ID'],
  login: Scalars['String'],
  profileName: Scalars['String'],
  billingEmail: Scalars['String'],
  adminLogins: Array<Scalars['String']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CreateEnterpriseOrganizationPayload = {
   __typename?: 'Github_CreateEnterpriseOrganizationPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  organization: Maybe<Github_Organization>,
};

export type Github_CreateIssueInput = {
  repositoryId: Scalars['ID'],
  title: Scalars['String'],
  body: Maybe<Scalars['String']>,
  assigneeIds: Maybe<Array<Scalars['ID']>>,
  milestoneId: Maybe<Scalars['ID']>,
  labelIds: Maybe<Array<Scalars['ID']>>,
  projectIds: Maybe<Array<Scalars['ID']>>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CreateIssuePayload = {
   __typename?: 'Github_CreateIssuePayload',
  clientMutationId: Maybe<Scalars['String']>,
  issue: Maybe<Github_Issue>,
};

export type Github_CreateProjectInput = {
  ownerId: Scalars['ID'],
  name: Scalars['String'],
  body: Maybe<Scalars['String']>,
  template: Maybe<Github_ProjectTemplate>,
  repositoryIds: Maybe<Array<Scalars['ID']>>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CreateProjectPayload = {
   __typename?: 'Github_CreateProjectPayload',
  clientMutationId: Maybe<Scalars['String']>,
  project: Maybe<Github_Project>,
};

export type Github_CreatePullRequestInput = {
  repositoryId: Scalars['ID'],
  baseRefName: Scalars['String'],
  headRefName: Scalars['String'],
  title: Scalars['String'],
  body: Maybe<Scalars['String']>,
  maintainerCanModify: Maybe<Scalars['Boolean']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CreatePullRequestPayload = {
   __typename?: 'Github_CreatePullRequestPayload',
  clientMutationId: Maybe<Scalars['String']>,
  pullRequest: Maybe<Github_PullRequest>,
};

export type Github_CreateRefInput = {
  repositoryId: Scalars['ID'],
  name: Scalars['String'],
  oid: Scalars['Github_GitObjectID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CreateRefPayload = {
   __typename?: 'Github_CreateRefPayload',
  clientMutationId: Maybe<Scalars['String']>,
  ref: Maybe<Github_Ref>,
};

export type Github_CreateRepositoryInput = {
  name: Scalars['String'],
  ownerId: Maybe<Scalars['ID']>,
  description: Maybe<Scalars['String']>,
  visibility: Github_RepositoryVisibility,
  template: Maybe<Scalars['Boolean']>,
  homepageUrl: Maybe<Scalars['Github_URI']>,
  hasWikiEnabled: Maybe<Scalars['Boolean']>,
  hasIssuesEnabled: Maybe<Scalars['Boolean']>,
  teamId: Maybe<Scalars['ID']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CreateRepositoryPayload = {
   __typename?: 'Github_CreateRepositoryPayload',
  clientMutationId: Maybe<Scalars['String']>,
  repository: Maybe<Github_Repository>,
};

export type Github_CreateTeamDiscussionCommentInput = {
  discussionId: Scalars['ID'],
  body: Scalars['String'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CreateTeamDiscussionCommentPayload = {
   __typename?: 'Github_CreateTeamDiscussionCommentPayload',
  clientMutationId: Maybe<Scalars['String']>,
  teamDiscussionComment: Maybe<Github_TeamDiscussionComment>,
};

export type Github_CreateTeamDiscussionInput = {
  teamId: Scalars['ID'],
  title: Scalars['String'],
  body: Scalars['String'],
  private: Maybe<Scalars['Boolean']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_CreateTeamDiscussionPayload = {
   __typename?: 'Github_CreateTeamDiscussionPayload',
  clientMutationId: Maybe<Scalars['String']>,
  teamDiscussion: Maybe<Github_TeamDiscussion>,
};

export type Github_CrossReferencedEvent = Github_Node & Github_UniformResourceLocatable & {
   __typename?: 'Github_CrossReferencedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  isCrossRepository: Scalars['Boolean'],
  referencedAt: Scalars['Github_DateTime'],
  resourcePath: Scalars['Github_URI'],
  source: Github_ReferencedSubject,
  target: Github_ReferencedSubject,
  url: Scalars['Github_URI'],
  willCloseTarget: Scalars['Boolean'],
};



export type Github_DeclineTopicSuggestionInput = {
  repositoryId: Scalars['ID'],
  name: Scalars['String'],
  reason: Github_TopicSuggestionDeclineReason,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeclineTopicSuggestionPayload = {
   __typename?: 'Github_DeclineTopicSuggestionPayload',
  clientMutationId: Maybe<Scalars['String']>,
  topic: Maybe<Github_Topic>,
};

export enum Github_DefaultRepositoryPermissionField {
  None = 'NONE',
  Read = 'READ',
  Write = 'WRITE',
  Admin = 'ADMIN'
}

export type Github_Deletable = {
  viewerCanDelete: Scalars['Boolean'],
};

export type Github_DeleteBranchProtectionRuleInput = {
  branchProtectionRuleId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteBranchProtectionRulePayload = {
   __typename?: 'Github_DeleteBranchProtectionRulePayload',
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteIssueCommentInput = {
  id: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteIssueCommentPayload = {
   __typename?: 'Github_DeleteIssueCommentPayload',
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteIssueInput = {
  issueId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteIssuePayload = {
   __typename?: 'Github_DeleteIssuePayload',
  clientMutationId: Maybe<Scalars['String']>,
  repository: Maybe<Github_Repository>,
};

export type Github_DeleteProjectCardInput = {
  cardId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteProjectCardPayload = {
   __typename?: 'Github_DeleteProjectCardPayload',
  clientMutationId: Maybe<Scalars['String']>,
  column: Maybe<Github_ProjectColumn>,
  deletedCardId: Maybe<Scalars['ID']>,
};

export type Github_DeleteProjectColumnInput = {
  columnId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteProjectColumnPayload = {
   __typename?: 'Github_DeleteProjectColumnPayload',
  clientMutationId: Maybe<Scalars['String']>,
  deletedColumnId: Maybe<Scalars['ID']>,
  project: Maybe<Github_Project>,
};

export type Github_DeleteProjectInput = {
  projectId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteProjectPayload = {
   __typename?: 'Github_DeleteProjectPayload',
  clientMutationId: Maybe<Scalars['String']>,
  owner: Maybe<Github_ProjectOwner>,
};

export type Github_DeletePullRequestReviewCommentInput = {
  id: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeletePullRequestReviewCommentPayload = {
   __typename?: 'Github_DeletePullRequestReviewCommentPayload',
  clientMutationId: Maybe<Scalars['String']>,
  pullRequestReview: Maybe<Github_PullRequestReview>,
};

export type Github_DeletePullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeletePullRequestReviewPayload = {
   __typename?: 'Github_DeletePullRequestReviewPayload',
  clientMutationId: Maybe<Scalars['String']>,
  pullRequestReview: Maybe<Github_PullRequestReview>,
};

export type Github_DeleteRefInput = {
  refId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteRefPayload = {
   __typename?: 'Github_DeleteRefPayload',
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteTeamDiscussionCommentInput = {
  id: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteTeamDiscussionCommentPayload = {
   __typename?: 'Github_DeleteTeamDiscussionCommentPayload',
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteTeamDiscussionInput = {
  id: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DeleteTeamDiscussionPayload = {
   __typename?: 'Github_DeleteTeamDiscussionPayload',
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DemilestonedEvent = Github_Node & {
   __typename?: 'Github_DemilestonedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  milestoneTitle: Scalars['String'],
  subject: Github_MilestoneItem,
};

export type Github_DeployedEvent = Github_Node & {
   __typename?: 'Github_DeployedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  deployment: Github_Deployment,
  id: Scalars['ID'],
  pullRequest: Github_PullRequest,
  ref: Maybe<Github_Ref>,
};

export type Github_DeployKey = Github_Node & {
   __typename?: 'Github_DeployKey',
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  key: Scalars['String'],
  readOnly: Scalars['Boolean'],
  title: Scalars['String'],
  verified: Scalars['Boolean'],
};

export type Github_DeployKeyConnection = {
   __typename?: 'Github_DeployKeyConnection',
  edges: Maybe<Array<Maybe<Github_DeployKeyEdge>>>,
  nodes: Maybe<Array<Maybe<Github_DeployKey>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_DeployKeyEdge = {
   __typename?: 'Github_DeployKeyEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_DeployKey>,
};

export type Github_Deployment = Github_Node & {
   __typename?: 'Github_Deployment',
  commit: Maybe<Github_Commit>,
  commitOid: Scalars['String'],
  createdAt: Scalars['Github_DateTime'],
  creator: Maybe<Github_Actor>,
  databaseId: Maybe<Scalars['Int']>,
  description: Maybe<Scalars['String']>,
  environment: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  latestEnvironment: Maybe<Scalars['String']>,
  latestStatus: Maybe<Github_DeploymentStatus>,
  originalEnvironment: Maybe<Scalars['String']>,
  payload: Maybe<Scalars['String']>,
  ref: Maybe<Github_Ref>,
  repository: Github_Repository,
  state: Maybe<Github_DeploymentState>,
  statuses: Maybe<Github_DeploymentStatusConnection>,
  task: Maybe<Scalars['String']>,
  updatedAt: Scalars['Github_DateTime'],
};


export type Github_DeploymentStatusesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_DeploymentConnection = {
   __typename?: 'Github_DeploymentConnection',
  edges: Maybe<Array<Maybe<Github_DeploymentEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Deployment>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_DeploymentEdge = {
   __typename?: 'Github_DeploymentEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Deployment>,
};

export type Github_DeploymentEnvironmentChangedEvent = Github_Node & {
   __typename?: 'Github_DeploymentEnvironmentChangedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  deploymentStatus: Github_DeploymentStatus,
  id: Scalars['ID'],
  pullRequest: Github_PullRequest,
};

export type Github_DeploymentOrder = {
  field: Github_DeploymentOrderField,
  direction: Github_OrderDirection,
};

export enum Github_DeploymentOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum Github_DeploymentState {
  Abandoned = 'ABANDONED',
  Active = 'ACTIVE',
  Destroyed = 'DESTROYED',
  Error = 'ERROR',
  Failure = 'FAILURE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Queued = 'QUEUED',
  InProgress = 'IN_PROGRESS'
}

export type Github_DeploymentStatus = Github_Node & {
   __typename?: 'Github_DeploymentStatus',
  createdAt: Scalars['Github_DateTime'],
  creator: Maybe<Github_Actor>,
  deployment: Github_Deployment,
  description: Maybe<Scalars['String']>,
  environmentUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  logUrl: Maybe<Scalars['Github_URI']>,
  state: Github_DeploymentStatusState,
  updatedAt: Scalars['Github_DateTime'],
};

export type Github_DeploymentStatusConnection = {
   __typename?: 'Github_DeploymentStatusConnection',
  edges: Maybe<Array<Maybe<Github_DeploymentStatusEdge>>>,
  nodes: Maybe<Array<Maybe<Github_DeploymentStatus>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_DeploymentStatusEdge = {
   __typename?: 'Github_DeploymentStatusEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_DeploymentStatus>,
};

export enum Github_DeploymentStatusState {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Inactive = 'INACTIVE',
  Error = 'ERROR',
  Queued = 'QUEUED',
  InProgress = 'IN_PROGRESS'
}

export type Github_DisconnectedEvent = Github_Node & {
   __typename?: 'Github_DisconnectedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  isCrossRepository: Scalars['Boolean'],
  source: Github_ReferencedSubject,
  subject: Github_ReferencedSubject,
};

export type Github_DismissPullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'],
  message: Scalars['String'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_DismissPullRequestReviewPayload = {
   __typename?: 'Github_DismissPullRequestReviewPayload',
  clientMutationId: Maybe<Scalars['String']>,
  pullRequestReview: Maybe<Github_PullRequestReview>,
};

export type Github_DraftPullRequestReviewComment = {
  path: Scalars['String'],
  position: Scalars['Int'],
  body: Scalars['String'],
};

export type Github_Enterprise = Github_Node & {
   __typename?: 'Github_Enterprise',
  avatarUrl: Scalars['Github_URI'],
  billingInfo: Maybe<Github_EnterpriseBillingInfo>,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  description: Maybe<Scalars['String']>,
  descriptionHTML: Scalars['Github_HTML'],
  id: Scalars['ID'],
  location: Maybe<Scalars['String']>,
  members: Github_EnterpriseMemberConnection,
  name: Scalars['String'],
  organizations: Github_OrganizationConnection,
  ownerInfo: Maybe<Github_EnterpriseOwnerInfo>,
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
  userAccounts: Github_EnterpriseUserAccountConnection,
  viewerIsAdmin: Scalars['Boolean'],
  websiteUrl: Maybe<Scalars['Github_URI']>,
};


export type Github_EnterpriseAvatarUrlArgs = {
  size: Maybe<Scalars['Int']>
};


export type Github_EnterpriseMembersArgs = {
  organizationLogins: Maybe<Array<Scalars['String']>>,
  query: Maybe<Scalars['String']>,
  orderBy?: Maybe<Github_EnterpriseMemberOrder>,
  role: Maybe<Github_EnterpriseUserAccountMembershipRole>,
  deployment: Maybe<Github_EnterpriseUserDeployment>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_EnterpriseOrganizationsArgs = {
  query: Maybe<Scalars['String']>,
  orderBy?: Maybe<Github_OrganizationOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_EnterpriseUserAccountsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_EnterpriseAdministratorConnection = {
   __typename?: 'Github_EnterpriseAdministratorConnection',
  edges: Maybe<Array<Maybe<Github_EnterpriseAdministratorEdge>>>,
  nodes: Maybe<Array<Maybe<Github_User>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterpriseAdministratorEdge = {
   __typename?: 'Github_EnterpriseAdministratorEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_User>,
  role: Github_EnterpriseAdministratorRole,
};

export type Github_EnterpriseAdministratorInvitation = Github_Node & {
   __typename?: 'Github_EnterpriseAdministratorInvitation',
  createdAt: Scalars['Github_DateTime'],
  email: Maybe<Scalars['String']>,
  enterprise: Github_Enterprise,
  id: Scalars['ID'],
  invitee: Maybe<Github_User>,
  inviter: Maybe<Github_User>,
  role: Github_EnterpriseAdministratorRole,
};

export type Github_EnterpriseAdministratorInvitationConnection = {
   __typename?: 'Github_EnterpriseAdministratorInvitationConnection',
  edges: Maybe<Array<Maybe<Github_EnterpriseAdministratorInvitationEdge>>>,
  nodes: Maybe<Array<Maybe<Github_EnterpriseAdministratorInvitation>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterpriseAdministratorInvitationEdge = {
   __typename?: 'Github_EnterpriseAdministratorInvitationEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_EnterpriseAdministratorInvitation>,
};

export type Github_EnterpriseAdministratorInvitationOrder = {
  field: Github_EnterpriseAdministratorInvitationOrderField,
  direction: Github_OrderDirection,
};

export enum Github_EnterpriseAdministratorInvitationOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum Github_EnterpriseAdministratorRole {
  Owner = 'OWNER',
  BillingManager = 'BILLING_MANAGER'
}

export type Github_EnterpriseAuditEntryData = {
  enterpriseResourcePath: Maybe<Scalars['Github_URI']>,
  enterpriseSlug: Maybe<Scalars['String']>,
  enterpriseUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_EnterpriseBillingInfo = {
   __typename?: 'Github_EnterpriseBillingInfo',
  allLicensableUsersCount: Scalars['Int'],
  assetPacks: Scalars['Int'],
  availableSeats: Scalars['Int'],
  bandwidthQuota: Scalars['Float'],
  bandwidthUsage: Scalars['Float'],
  bandwidthUsagePercentage: Scalars['Int'],
  seats: Scalars['Int'],
  storageQuota: Scalars['Float'],
  storageUsage: Scalars['Float'],
  storageUsagePercentage: Scalars['Int'],
  totalAvailableLicenses: Scalars['Int'],
  totalLicenses: Scalars['Int'],
};

export enum Github_EnterpriseDefaultRepositoryPermissionSettingValue {
  NoPolicy = 'NO_POLICY',
  Admin = 'ADMIN',
  Write = 'WRITE',
  Read = 'READ',
  None = 'NONE'
}

export enum Github_EnterpriseEnabledDisabledSettingValue {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED',
  NoPolicy = 'NO_POLICY'
}

export enum Github_EnterpriseEnabledSettingValue {
  Enabled = 'ENABLED',
  NoPolicy = 'NO_POLICY'
}

export type Github_EnterpriseIdentityProvider = Github_Node & {
   __typename?: 'Github_EnterpriseIdentityProvider',
  digestMethod: Maybe<Github_SamlDigestAlgorithm>,
  enterprise: Maybe<Github_Enterprise>,
  externalIdentities: Github_ExternalIdentityConnection,
  id: Scalars['ID'],
  idpCertificate: Maybe<Scalars['Github_X509Certificate']>,
  issuer: Maybe<Scalars['String']>,
  recoveryCodes: Maybe<Array<Scalars['String']>>,
  signatureMethod: Maybe<Github_SamlSignatureAlgorithm>,
  ssoUrl: Maybe<Scalars['Github_URI']>,
};


export type Github_EnterpriseIdentityProviderExternalIdentitiesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_EnterpriseMember = Github_EnterpriseUserAccount | Github_User;

export type Github_EnterpriseMemberConnection = {
   __typename?: 'Github_EnterpriseMemberConnection',
  edges: Maybe<Array<Maybe<Github_EnterpriseMemberEdge>>>,
  nodes: Maybe<Array<Maybe<Github_EnterpriseMember>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterpriseMemberEdge = {
   __typename?: 'Github_EnterpriseMemberEdge',
  cursor: Scalars['String'],
  isUnlicensed: Scalars['Boolean'],
  node: Maybe<Github_EnterpriseMember>,
};

export type Github_EnterpriseMemberOrder = {
  field: Github_EnterpriseMemberOrderField,
  direction: Github_OrderDirection,
};

export enum Github_EnterpriseMemberOrderField {
  Login = 'LOGIN',
  CreatedAt = 'CREATED_AT'
}

export enum Github_EnterpriseMembersCanCreateRepositoriesSettingValue {
  NoPolicy = 'NO_POLICY',
  All = 'ALL',
  Public = 'PUBLIC',
  Private = 'PRIVATE',
  Disabled = 'DISABLED'
}

export enum Github_EnterpriseMembersCanMakePurchasesSettingValue {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED'
}

export type Github_EnterpriseOrganizationMembershipConnection = {
   __typename?: 'Github_EnterpriseOrganizationMembershipConnection',
  edges: Maybe<Array<Maybe<Github_EnterpriseOrganizationMembershipEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Organization>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterpriseOrganizationMembershipEdge = {
   __typename?: 'Github_EnterpriseOrganizationMembershipEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Organization>,
  role: Github_EnterpriseUserAccountMembershipRole,
};

export type Github_EnterpriseOutsideCollaboratorConnection = {
   __typename?: 'Github_EnterpriseOutsideCollaboratorConnection',
  edges: Maybe<Array<Maybe<Github_EnterpriseOutsideCollaboratorEdge>>>,
  nodes: Maybe<Array<Maybe<Github_User>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterpriseOutsideCollaboratorEdge = {
   __typename?: 'Github_EnterpriseOutsideCollaboratorEdge',
  cursor: Scalars['String'],
  isUnlicensed: Scalars['Boolean'],
  node: Maybe<Github_User>,
  repositories: Github_EnterpriseRepositoryInfoConnection,
};


export type Github_EnterpriseOutsideCollaboratorEdgeRepositoriesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_RepositoryOrder>
};

export type Github_EnterpriseOwnerInfo = {
   __typename?: 'Github_EnterpriseOwnerInfo',
  actionExecutionCapabilitySettingOrganizations: Github_OrganizationConnection,
  admins: Github_EnterpriseAdministratorConnection,
  affiliatedUsersWithTwoFactorDisabled: Github_UserConnection,
  affiliatedUsersWithTwoFactorDisabledExist: Scalars['Boolean'],
  allowPrivateRepositoryForkingSetting: Github_EnterpriseEnabledDisabledSettingValue,
  allowPrivateRepositoryForkingSettingOrganizations: Github_OrganizationConnection,
  defaultRepositoryPermissionSetting: Github_EnterpriseDefaultRepositoryPermissionSettingValue,
  defaultRepositoryPermissionSettingOrganizations: Github_OrganizationConnection,
  enterpriseServerInstallations: Github_EnterpriseServerInstallationConnection,
  isUpdatingDefaultRepositoryPermission: Scalars['Boolean'],
  isUpdatingTwoFactorRequirement: Scalars['Boolean'],
  membersCanChangeRepositoryVisibilitySetting: Github_EnterpriseEnabledDisabledSettingValue,
  membersCanChangeRepositoryVisibilitySettingOrganizations: Github_OrganizationConnection,
  membersCanCreateInternalRepositoriesSetting: Maybe<Scalars['Boolean']>,
  membersCanCreatePrivateRepositoriesSetting: Maybe<Scalars['Boolean']>,
  membersCanCreatePublicRepositoriesSetting: Maybe<Scalars['Boolean']>,
  membersCanCreateRepositoriesSetting: Maybe<Github_EnterpriseMembersCanCreateRepositoriesSettingValue>,
  membersCanCreateRepositoriesSettingOrganizations: Github_OrganizationConnection,
  membersCanDeleteIssuesSetting: Github_EnterpriseEnabledDisabledSettingValue,
  membersCanDeleteIssuesSettingOrganizations: Github_OrganizationConnection,
  membersCanDeleteRepositoriesSetting: Github_EnterpriseEnabledDisabledSettingValue,
  membersCanDeleteRepositoriesSettingOrganizations: Github_OrganizationConnection,
  membersCanInviteCollaboratorsSetting: Github_EnterpriseEnabledDisabledSettingValue,
  membersCanInviteCollaboratorsSettingOrganizations: Github_OrganizationConnection,
  membersCanMakePurchasesSetting: Github_EnterpriseMembersCanMakePurchasesSettingValue,
  membersCanUpdateProtectedBranchesSetting: Github_EnterpriseEnabledDisabledSettingValue,
  membersCanUpdateProtectedBranchesSettingOrganizations: Github_OrganizationConnection,
  membersCanViewDependencyInsightsSetting: Github_EnterpriseEnabledDisabledSettingValue,
  membersCanViewDependencyInsightsSettingOrganizations: Github_OrganizationConnection,
  organizationProjectsSetting: Github_EnterpriseEnabledDisabledSettingValue,
  organizationProjectsSettingOrganizations: Github_OrganizationConnection,
  outsideCollaborators: Github_EnterpriseOutsideCollaboratorConnection,
  pendingAdminInvitations: Github_EnterpriseAdministratorInvitationConnection,
  pendingCollaborators: Github_EnterprisePendingCollaboratorConnection,
  pendingMemberInvitations: Github_EnterprisePendingMemberInvitationConnection,
  repositoryProjectsSetting: Github_EnterpriseEnabledDisabledSettingValue,
  repositoryProjectsSettingOrganizations: Github_OrganizationConnection,
  samlIdentityProvider: Maybe<Github_EnterpriseIdentityProvider>,
  samlIdentityProviderSettingOrganizations: Github_OrganizationConnection,
  teamDiscussionsSetting: Github_EnterpriseEnabledDisabledSettingValue,
  teamDiscussionsSettingOrganizations: Github_OrganizationConnection,
  twoFactorRequiredSetting: Github_EnterpriseEnabledSettingValue,
  twoFactorRequiredSettingOrganizations: Github_OrganizationConnection,
};


export type Github_EnterpriseOwnerInfoActionExecutionCapabilitySettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoAdminsArgs = {
  query: Maybe<Scalars['String']>,
  role: Maybe<Github_EnterpriseAdministratorRole>,
  orderBy?: Maybe<Github_EnterpriseMemberOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_EnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_EnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Github_DefaultRepositoryPermissionField,
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoEnterpriseServerInstallationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  connectedOnly?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<Github_EnterpriseServerInstallationOrder>
};


export type Github_EnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Github_OrganizationMembersCanCreateRepositoriesSettingValue,
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoOutsideCollaboratorsArgs = {
  login: Maybe<Scalars['String']>,
  query: Maybe<Scalars['String']>,
  orderBy?: Maybe<Github_EnterpriseMemberOrder>,
  visibility: Maybe<Github_RepositoryVisibility>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_EnterpriseOwnerInfoPendingAdminInvitationsArgs = {
  query: Maybe<Scalars['String']>,
  orderBy?: Maybe<Github_EnterpriseAdministratorInvitationOrder>,
  role: Maybe<Github_EnterpriseAdministratorRole>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_EnterpriseOwnerInfoPendingCollaboratorsArgs = {
  query: Maybe<Scalars['String']>,
  orderBy?: Maybe<Github_RepositoryInvitationOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_EnterpriseOwnerInfoPendingMemberInvitationsArgs = {
  query: Maybe<Scalars['String']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_EnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Github_IdentityProviderConfigurationState,
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<Github_OrganizationOrder>
};


export type Github_EnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<Github_OrganizationOrder>
};

export type Github_EnterprisePendingCollaboratorConnection = {
   __typename?: 'Github_EnterprisePendingCollaboratorConnection',
  edges: Maybe<Array<Maybe<Github_EnterprisePendingCollaboratorEdge>>>,
  nodes: Maybe<Array<Maybe<Github_User>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterprisePendingCollaboratorEdge = {
   __typename?: 'Github_EnterprisePendingCollaboratorEdge',
  cursor: Scalars['String'],
  isUnlicensed: Scalars['Boolean'],
  node: Maybe<Github_User>,
  repositories: Github_EnterpriseRepositoryInfoConnection,
};


export type Github_EnterprisePendingCollaboratorEdgeRepositoriesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_RepositoryOrder>
};

export type Github_EnterprisePendingMemberInvitationConnection = {
   __typename?: 'Github_EnterprisePendingMemberInvitationConnection',
  edges: Maybe<Array<Maybe<Github_EnterprisePendingMemberInvitationEdge>>>,
  nodes: Maybe<Array<Maybe<Github_OrganizationInvitation>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
  totalUniqueUserCount: Scalars['Int'],
};

export type Github_EnterprisePendingMemberInvitationEdge = {
   __typename?: 'Github_EnterprisePendingMemberInvitationEdge',
  cursor: Scalars['String'],
  isUnlicensed: Scalars['Boolean'],
  node: Maybe<Github_OrganizationInvitation>,
};

export type Github_EnterpriseRepositoryInfo = Github_Node & {
   __typename?: 'Github_EnterpriseRepositoryInfo',
  id: Scalars['ID'],
  isPrivate: Scalars['Boolean'],
  name: Scalars['String'],
  nameWithOwner: Scalars['String'],
};

export type Github_EnterpriseRepositoryInfoConnection = {
   __typename?: 'Github_EnterpriseRepositoryInfoConnection',
  edges: Maybe<Array<Maybe<Github_EnterpriseRepositoryInfoEdge>>>,
  nodes: Maybe<Array<Maybe<Github_EnterpriseRepositoryInfo>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterpriseRepositoryInfoEdge = {
   __typename?: 'Github_EnterpriseRepositoryInfoEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_EnterpriseRepositoryInfo>,
};

export type Github_EnterpriseServerInstallation = Github_Node & {
   __typename?: 'Github_EnterpriseServerInstallation',
  createdAt: Scalars['Github_DateTime'],
  customerName: Scalars['String'],
  hostName: Scalars['String'],
  id: Scalars['ID'],
  isConnected: Scalars['Boolean'],
  updatedAt: Scalars['Github_DateTime'],
  userAccounts: Github_EnterpriseServerUserAccountConnection,
  userAccountsUploads: Github_EnterpriseServerUserAccountsUploadConnection,
};


export type Github_EnterpriseServerInstallationUserAccountsArgs = {
  orderBy?: Maybe<Github_EnterpriseServerUserAccountOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_EnterpriseServerInstallationUserAccountsUploadsArgs = {
  orderBy?: Maybe<Github_EnterpriseServerUserAccountsUploadOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_EnterpriseServerInstallationConnection = {
   __typename?: 'Github_EnterpriseServerInstallationConnection',
  edges: Maybe<Array<Maybe<Github_EnterpriseServerInstallationEdge>>>,
  nodes: Maybe<Array<Maybe<Github_EnterpriseServerInstallation>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterpriseServerInstallationEdge = {
   __typename?: 'Github_EnterpriseServerInstallationEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_EnterpriseServerInstallation>,
};

export type Github_EnterpriseServerInstallationOrder = {
  field: Github_EnterpriseServerInstallationOrderField,
  direction: Github_OrderDirection,
};

export enum Github_EnterpriseServerInstallationOrderField {
  HostName = 'HOST_NAME',
  CustomerName = 'CUSTOMER_NAME',
  CreatedAt = 'CREATED_AT'
}

export type Github_EnterpriseServerUserAccount = Github_Node & {
   __typename?: 'Github_EnterpriseServerUserAccount',
  createdAt: Scalars['Github_DateTime'],
  emails: Github_EnterpriseServerUserAccountEmailConnection,
  enterpriseServerInstallation: Github_EnterpriseServerInstallation,
  id: Scalars['ID'],
  isSiteAdmin: Scalars['Boolean'],
  login: Scalars['String'],
  profileName: Maybe<Scalars['String']>,
  remoteCreatedAt: Scalars['Github_DateTime'],
  remoteUserId: Scalars['Int'],
  updatedAt: Scalars['Github_DateTime'],
};


export type Github_EnterpriseServerUserAccountEmailsArgs = {
  orderBy?: Maybe<Github_EnterpriseServerUserAccountEmailOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_EnterpriseServerUserAccountConnection = {
   __typename?: 'Github_EnterpriseServerUserAccountConnection',
  edges: Maybe<Array<Maybe<Github_EnterpriseServerUserAccountEdge>>>,
  nodes: Maybe<Array<Maybe<Github_EnterpriseServerUserAccount>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterpriseServerUserAccountEdge = {
   __typename?: 'Github_EnterpriseServerUserAccountEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_EnterpriseServerUserAccount>,
};

export type Github_EnterpriseServerUserAccountEmail = Github_Node & {
   __typename?: 'Github_EnterpriseServerUserAccountEmail',
  createdAt: Scalars['Github_DateTime'],
  email: Scalars['String'],
  id: Scalars['ID'],
  isPrimary: Scalars['Boolean'],
  updatedAt: Scalars['Github_DateTime'],
  userAccount: Github_EnterpriseServerUserAccount,
};

export type Github_EnterpriseServerUserAccountEmailConnection = {
   __typename?: 'Github_EnterpriseServerUserAccountEmailConnection',
  edges: Maybe<Array<Maybe<Github_EnterpriseServerUserAccountEmailEdge>>>,
  nodes: Maybe<Array<Maybe<Github_EnterpriseServerUserAccountEmail>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterpriseServerUserAccountEmailEdge = {
   __typename?: 'Github_EnterpriseServerUserAccountEmailEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_EnterpriseServerUserAccountEmail>,
};

export type Github_EnterpriseServerUserAccountEmailOrder = {
  field: Github_EnterpriseServerUserAccountEmailOrderField,
  direction: Github_OrderDirection,
};

export enum Github_EnterpriseServerUserAccountEmailOrderField {
  Email = 'EMAIL'
}

export type Github_EnterpriseServerUserAccountOrder = {
  field: Github_EnterpriseServerUserAccountOrderField,
  direction: Github_OrderDirection,
};

export enum Github_EnterpriseServerUserAccountOrderField {
  Login = 'LOGIN',
  RemoteCreatedAt = 'REMOTE_CREATED_AT'
}

export type Github_EnterpriseServerUserAccountsUpload = Github_Node & {
   __typename?: 'Github_EnterpriseServerUserAccountsUpload',
  createdAt: Scalars['Github_DateTime'],
  enterprise: Github_Enterprise,
  enterpriseServerInstallation: Github_EnterpriseServerInstallation,
  id: Scalars['ID'],
  name: Scalars['String'],
  syncState: Github_EnterpriseServerUserAccountsUploadSyncState,
  updatedAt: Scalars['Github_DateTime'],
};

export type Github_EnterpriseServerUserAccountsUploadConnection = {
   __typename?: 'Github_EnterpriseServerUserAccountsUploadConnection',
  edges: Maybe<Array<Maybe<Github_EnterpriseServerUserAccountsUploadEdge>>>,
  nodes: Maybe<Array<Maybe<Github_EnterpriseServerUserAccountsUpload>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterpriseServerUserAccountsUploadEdge = {
   __typename?: 'Github_EnterpriseServerUserAccountsUploadEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_EnterpriseServerUserAccountsUpload>,
};

export type Github_EnterpriseServerUserAccountsUploadOrder = {
  field: Github_EnterpriseServerUserAccountsUploadOrderField,
  direction: Github_OrderDirection,
};

export enum Github_EnterpriseServerUserAccountsUploadOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum Github_EnterpriseServerUserAccountsUploadSyncState {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE'
}

export type Github_EnterpriseUserAccount = Github_Node & Github_Actor & {
   __typename?: 'Github_EnterpriseUserAccount',
  avatarUrl: Scalars['Github_URI'],
  createdAt: Scalars['Github_DateTime'],
  enterprise: Github_Enterprise,
  id: Scalars['ID'],
  login: Scalars['String'],
  name: Maybe<Scalars['String']>,
  organizations: Github_EnterpriseOrganizationMembershipConnection,
  resourcePath: Scalars['Github_URI'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  user: Maybe<Github_User>,
};


export type Github_EnterpriseUserAccountAvatarUrlArgs = {
  size: Maybe<Scalars['Int']>
};


export type Github_EnterpriseUserAccountOrganizationsArgs = {
  query: Maybe<Scalars['String']>,
  orderBy?: Maybe<Github_OrganizationOrder>,
  role: Maybe<Github_EnterpriseUserAccountMembershipRole>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_EnterpriseUserAccountConnection = {
   __typename?: 'Github_EnterpriseUserAccountConnection',
  edges: Maybe<Array<Maybe<Github_EnterpriseUserAccountEdge>>>,
  nodes: Maybe<Array<Maybe<Github_EnterpriseUserAccount>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_EnterpriseUserAccountEdge = {
   __typename?: 'Github_EnterpriseUserAccountEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_EnterpriseUserAccount>,
};

export enum Github_EnterpriseUserAccountMembershipRole {
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export enum Github_EnterpriseUserDeployment {
  Cloud = 'CLOUD',
  Server = 'SERVER'
}

export type Github_ExternalIdentity = Github_Node & {
   __typename?: 'Github_ExternalIdentity',
  guid: Scalars['String'],
  id: Scalars['ID'],
  organizationInvitation: Maybe<Github_OrganizationInvitation>,
  samlIdentity: Maybe<Github_ExternalIdentitySamlAttributes>,
  scimIdentity: Maybe<Github_ExternalIdentityScimAttributes>,
  user: Maybe<Github_User>,
};

export type Github_ExternalIdentityConnection = {
   __typename?: 'Github_ExternalIdentityConnection',
  edges: Maybe<Array<Maybe<Github_ExternalIdentityEdge>>>,
  nodes: Maybe<Array<Maybe<Github_ExternalIdentity>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_ExternalIdentityEdge = {
   __typename?: 'Github_ExternalIdentityEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_ExternalIdentity>,
};

export type Github_ExternalIdentitySamlAttributes = {
   __typename?: 'Github_ExternalIdentitySamlAttributes',
  nameId: Maybe<Scalars['String']>,
};

export type Github_ExternalIdentityScimAttributes = {
   __typename?: 'Github_ExternalIdentityScimAttributes',
  username: Maybe<Scalars['String']>,
};

export type Github_FollowerConnection = {
   __typename?: 'Github_FollowerConnection',
  edges: Maybe<Array<Maybe<Github_UserEdge>>>,
  nodes: Maybe<Array<Maybe<Github_User>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_FollowingConnection = {
   __typename?: 'Github_FollowingConnection',
  edges: Maybe<Array<Maybe<Github_UserEdge>>>,
  nodes: Maybe<Array<Maybe<Github_User>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_FollowUserInput = {
  userId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_FollowUserPayload = {
   __typename?: 'Github_FollowUserPayload',
  clientMutationId: Maybe<Scalars['String']>,
  user: Maybe<Github_User>,
};

export type Github_FundingLink = {
   __typename?: 'Github_FundingLink',
  platform: Github_FundingPlatform,
  url: Scalars['Github_URI'],
};

export enum Github_FundingPlatform {
  Github = 'GITHUB',
  Patreon = 'PATREON',
  OpenCollective = 'OPEN_COLLECTIVE',
  KoFi = 'KO_FI',
  Tidelift = 'TIDELIFT',
  CommunityBridge = 'COMMUNITY_BRIDGE',
  Liberapay = 'LIBERAPAY',
  Issuehunt = 'ISSUEHUNT',
  Otechie = 'OTECHIE',
  Custom = 'CUSTOM'
}

export type Github_GenericHovercardContext = Github_HovercardContext & {
   __typename?: 'Github_GenericHovercardContext',
  message: Scalars['String'],
  octicon: Scalars['String'],
};

export type Github_Gist = Github_Node & Github_Starrable & Github_UniformResourceLocatable & {
   __typename?: 'Github_Gist',
  comments: Github_GistCommentConnection,
  createdAt: Scalars['Github_DateTime'],
  description: Maybe<Scalars['String']>,
  files: Maybe<Array<Maybe<Github_GistFile>>>,
  forks: Github_GistConnection,
  id: Scalars['ID'],
  isFork: Scalars['Boolean'],
  isPublic: Scalars['Boolean'],
  name: Scalars['String'],
  owner: Maybe<Github_RepositoryOwner>,
  pushedAt: Maybe<Scalars['Github_DateTime']>,
  resourcePath: Scalars['Github_URI'],
  stargazers: Github_StargazerConnection,
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  viewerHasStarred: Scalars['Boolean'],
};


export type Github_GistCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_GistFilesArgs = {
  limit?: Maybe<Scalars['Int']>,
  oid: Maybe<Scalars['Github_GitObjectID']>
};


export type Github_GistForksArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Maybe<Github_GistOrder>
};


export type Github_GistStargazersArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Maybe<Github_StarOrder>
};

export type Github_GistComment = Github_Node & Github_Comment & Github_Deletable & Github_Updatable & Github_UpdatableComment & {
   __typename?: 'Github_GistComment',
  author: Maybe<Github_Actor>,
  authorAssociation: Github_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['Github_HTML'],
  bodyText: Scalars['String'],
  createdAt: Scalars['Github_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId: Maybe<Scalars['Int']>,
  editor: Maybe<Github_Actor>,
  gist: Github_Gist,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isMinimized: Scalars['Boolean'],
  lastEditedAt: Maybe<Scalars['Github_DateTime']>,
  minimizedReason: Maybe<Scalars['String']>,
  publishedAt: Maybe<Scalars['Github_DateTime']>,
  updatedAt: Scalars['Github_DateTime'],
  userContentEdits: Maybe<Github_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanMinimize: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<Github_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type Github_GistCommentUserContentEditsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_GistCommentConnection = {
   __typename?: 'Github_GistCommentConnection',
  edges: Maybe<Array<Maybe<Github_GistCommentEdge>>>,
  nodes: Maybe<Array<Maybe<Github_GistComment>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_GistCommentEdge = {
   __typename?: 'Github_GistCommentEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_GistComment>,
};

export type Github_GistConnection = {
   __typename?: 'Github_GistConnection',
  edges: Maybe<Array<Maybe<Github_GistEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Gist>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_GistEdge = {
   __typename?: 'Github_GistEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Gist>,
};

export type Github_GistFile = {
   __typename?: 'Github_GistFile',
  encodedName: Maybe<Scalars['String']>,
  encoding: Maybe<Scalars['String']>,
  extension: Maybe<Scalars['String']>,
  isImage: Scalars['Boolean'],
  isTruncated: Scalars['Boolean'],
  language: Maybe<Github_Language>,
  name: Maybe<Scalars['String']>,
  size: Maybe<Scalars['Int']>,
  text: Maybe<Scalars['String']>,
};


export type Github_GistFileTextArgs = {
  truncate: Maybe<Scalars['Int']>
};

export type Github_GistOrder = {
  field: Github_GistOrderField,
  direction: Github_OrderDirection,
};

export enum Github_GistOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  PushedAt = 'PUSHED_AT'
}

export enum Github_GistPrivacy {
  Public = 'PUBLIC',
  Secret = 'SECRET',
  All = 'ALL'
}

export type Github_GitActor = {
   __typename?: 'Github_GitActor',
  avatarUrl: Scalars['Github_URI'],
  date: Maybe<Scalars['Github_GitTimestamp']>,
  email: Maybe<Scalars['String']>,
  name: Maybe<Scalars['String']>,
  user: Maybe<Github_User>,
};


export type Github_GitActorAvatarUrlArgs = {
  size: Maybe<Scalars['Int']>
};

export type Github_GitHubMetadata = {
   __typename?: 'Github_GitHubMetadata',
  gitHubServicesSha: Scalars['Github_GitObjectID'],
  gitIpAddresses: Maybe<Array<Scalars['String']>>,
  hookIpAddresses: Maybe<Array<Scalars['String']>>,
  importerIpAddresses: Maybe<Array<Scalars['String']>>,
  isPasswordAuthenticationVerifiable: Scalars['Boolean'],
  pagesIpAddresses: Maybe<Array<Scalars['String']>>,
};

export type Github_GitObject = {
  abbreviatedOid: Scalars['String'],
  commitResourcePath: Scalars['Github_URI'],
  commitUrl: Scalars['Github_URI'],
  id: Scalars['ID'],
  oid: Scalars['Github_GitObjectID'],
  repository: Github_Repository,
};


export type Github_GitSignature = {
  email: Scalars['String'],
  isValid: Scalars['Boolean'],
  payload: Scalars['String'],
  signature: Scalars['String'],
  signer: Maybe<Github_User>,
  state: Github_GitSignatureState,
  wasSignedByGitHub: Scalars['Boolean'],
};

export enum Github_GitSignatureState {
  Valid = 'VALID',
  Invalid = 'INVALID',
  MalformedSig = 'MALFORMED_SIG',
  UnknownKey = 'UNKNOWN_KEY',
  BadEmail = 'BAD_EMAIL',
  UnverifiedEmail = 'UNVERIFIED_EMAIL',
  NoUser = 'NO_USER',
  UnknownSigType = 'UNKNOWN_SIG_TYPE',
  Unsigned = 'UNSIGNED',
  GpgverifyUnavailable = 'GPGVERIFY_UNAVAILABLE',
  GpgverifyError = 'GPGVERIFY_ERROR',
  NotSigningKey = 'NOT_SIGNING_KEY',
  ExpiredKey = 'EXPIRED_KEY',
  OcspPending = 'OCSP_PENDING',
  OcspError = 'OCSP_ERROR',
  BadCert = 'BAD_CERT',
  OcspRevoked = 'OCSP_REVOKED'
}



export type Github_GpgSignature = Github_GitSignature & {
   __typename?: 'Github_GpgSignature',
  email: Scalars['String'],
  isValid: Scalars['Boolean'],
  keyId: Maybe<Scalars['String']>,
  payload: Scalars['String'],
  signature: Scalars['String'],
  signer: Maybe<Github_User>,
  state: Github_GitSignatureState,
  wasSignedByGitHub: Scalars['Boolean'],
};

export type Github_HeadRefDeletedEvent = Github_Node & {
   __typename?: 'Github_HeadRefDeletedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  headRef: Maybe<Github_Ref>,
  headRefName: Scalars['String'],
  id: Scalars['ID'],
  pullRequest: Github_PullRequest,
};

export type Github_HeadRefForcePushedEvent = Github_Node & {
   __typename?: 'Github_HeadRefForcePushedEvent',
  actor: Maybe<Github_Actor>,
  afterCommit: Maybe<Github_Commit>,
  beforeCommit: Maybe<Github_Commit>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  pullRequest: Github_PullRequest,
  ref: Maybe<Github_Ref>,
};

export type Github_HeadRefRestoredEvent = Github_Node & {
   __typename?: 'Github_HeadRefRestoredEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  pullRequest: Github_PullRequest,
};

export type Github_Hovercard = {
   __typename?: 'Github_Hovercard',
  contexts: Array<Github_HovercardContext>,
};

export type Github_HovercardContext = {
  message: Scalars['String'],
  octicon: Scalars['String'],
};


export enum Github_IdentityProviderConfigurationState {
  Enforced = 'ENFORCED',
  Configured = 'CONFIGURED',
  Unconfigured = 'UNCONFIGURED'
}

export type Github_InviteEnterpriseAdminInput = {
  enterpriseId: Scalars['ID'],
  invitee: Maybe<Scalars['String']>,
  email: Maybe<Scalars['String']>,
  role: Maybe<Github_EnterpriseAdministratorRole>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_InviteEnterpriseAdminPayload = {
   __typename?: 'Github_InviteEnterpriseAdminPayload',
  clientMutationId: Maybe<Scalars['String']>,
  invitation: Maybe<Github_EnterpriseAdministratorInvitation>,
};

export type Github_Issue = Github_Node & Github_Assignable & Github_Closable & Github_Comment & Github_Updatable & Github_UpdatableComment & Github_Labelable & Github_Lockable & Github_Reactable & Github_RepositoryNode & Github_Subscribable & Github_UniformResourceLocatable & {
   __typename?: 'Github_Issue',
  activeLockReason: Maybe<Github_LockReason>,
  assignees: Github_UserConnection,
  author: Maybe<Github_Actor>,
  authorAssociation: Github_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['Github_HTML'],
  bodyText: Scalars['String'],
  closed: Scalars['Boolean'],
  closedAt: Maybe<Scalars['Github_DateTime']>,
  comments: Github_IssueCommentConnection,
  createdAt: Scalars['Github_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId: Maybe<Scalars['Int']>,
  editor: Maybe<Github_Actor>,
  hovercard: Github_Hovercard,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  labels: Maybe<Github_LabelConnection>,
  lastEditedAt: Maybe<Scalars['Github_DateTime']>,
  locked: Scalars['Boolean'],
  milestone: Maybe<Github_Milestone>,
  number: Scalars['Int'],
  participants: Github_UserConnection,
  projectCards: Github_ProjectCardConnection,
  publishedAt: Maybe<Scalars['Github_DateTime']>,
  reactionGroups: Maybe<Array<Github_ReactionGroup>>,
  reactions: Github_ReactionConnection,
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  state: Github_IssueState,
  timeline: Github_IssueTimelineConnection,
  timelineItems: Github_IssueTimelineItemsConnection,
  title: Scalars['String'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  userContentEdits: Maybe<Github_UserContentEditConnection>,
  viewerCanReact: Scalars['Boolean'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<Github_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
  viewerSubscription: Maybe<Github_SubscriptionState>,
};


export type Github_IssueAssigneesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_IssueCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_IssueHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>
};


export type Github_IssueLabelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_IssueParticipantsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_IssueProjectCardsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  archivedStates?: Maybe<Array<Maybe<Github_ProjectCardArchivedState>>>
};


export type Github_IssueReactionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  content: Maybe<Github_ReactionContent>,
  orderBy: Maybe<Github_ReactionOrder>
};


export type Github_IssueTimelineArgs = {
  since: Maybe<Scalars['Github_DateTime']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_IssueTimelineItemsArgs = {
  since: Maybe<Scalars['Github_DateTime']>,
  skip: Maybe<Scalars['Int']>,
  itemTypes: Maybe<Array<Github_IssueTimelineItemsItemType>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_IssueUserContentEditsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_IssueComment = Github_Node & Github_Comment & Github_Deletable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
   __typename?: 'Github_IssueComment',
  author: Maybe<Github_Actor>,
  authorAssociation: Github_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['Github_HTML'],
  bodyText: Scalars['String'],
  createdAt: Scalars['Github_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId: Maybe<Scalars['Int']>,
  editor: Maybe<Github_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isMinimized: Scalars['Boolean'],
  issue: Github_Issue,
  lastEditedAt: Maybe<Scalars['Github_DateTime']>,
  minimizedReason: Maybe<Scalars['String']>,
  publishedAt: Maybe<Scalars['Github_DateTime']>,
  pullRequest: Maybe<Github_PullRequest>,
  reactionGroups: Maybe<Array<Github_ReactionGroup>>,
  reactions: Github_ReactionConnection,
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  userContentEdits: Maybe<Github_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanMinimize: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<Github_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type Github_IssueCommentReactionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  content: Maybe<Github_ReactionContent>,
  orderBy: Maybe<Github_ReactionOrder>
};


export type Github_IssueCommentUserContentEditsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_IssueCommentConnection = {
   __typename?: 'Github_IssueCommentConnection',
  edges: Maybe<Array<Maybe<Github_IssueCommentEdge>>>,
  nodes: Maybe<Array<Maybe<Github_IssueComment>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_IssueCommentEdge = {
   __typename?: 'Github_IssueCommentEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_IssueComment>,
};

export type Github_IssueConnection = {
   __typename?: 'Github_IssueConnection',
  edges: Maybe<Array<Maybe<Github_IssueEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Issue>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_IssueContributionsByRepository = {
   __typename?: 'Github_IssueContributionsByRepository',
  contributions: Github_CreatedIssueContributionConnection,
  repository: Github_Repository,
};


export type Github_IssueContributionsByRepositoryContributionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_ContributionOrder>
};

export type Github_IssueEdge = {
   __typename?: 'Github_IssueEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Issue>,
};

export type Github_IssueFilters = {
  assignee: Maybe<Scalars['String']>,
  createdBy: Maybe<Scalars['String']>,
  labels: Maybe<Array<Scalars['String']>>,
  mentioned: Maybe<Scalars['String']>,
  milestone: Maybe<Scalars['String']>,
  since: Maybe<Scalars['Github_DateTime']>,
  states: Maybe<Array<Github_IssueState>>,
  viewerSubscribed: Maybe<Scalars['Boolean']>,
};

export type Github_IssueOrder = {
  field: Github_IssueOrderField,
  direction: Github_OrderDirection,
};

export enum Github_IssueOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Comments = 'COMMENTS'
}

export type Github_IssueOrPullRequest = Github_Issue | Github_PullRequest;

export enum Github_IssueState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export type Github_IssueTimelineConnection = {
   __typename?: 'Github_IssueTimelineConnection',
  edges: Maybe<Array<Maybe<Github_IssueTimelineItemEdge>>>,
  nodes: Maybe<Array<Maybe<Github_IssueTimelineItem>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_IssueTimelineItem = Github_AssignedEvent | Github_ClosedEvent | Github_Commit | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MilestonedEvent | Github_ReferencedEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_SubscribedEvent | Github_TransferredEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

export type Github_IssueTimelineItemEdge = {
   __typename?: 'Github_IssueTimelineItemEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_IssueTimelineItem>,
};

export type Github_IssueTimelineItems = Github_AddedToProjectEvent | Github_AssignedEvent | Github_ClosedEvent | Github_CommentDeletedEvent | Github_ConnectedEvent | Github_ConvertedNoteToIssueEvent | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_DisconnectedEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MarkedAsDuplicateEvent | Github_MentionedEvent | Github_MilestonedEvent | Github_MovedColumnsInProjectEvent | Github_PinnedEvent | Github_ReferencedEvent | Github_RemovedFromProjectEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_SubscribedEvent | Github_TransferredEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnmarkedAsDuplicateEvent | Github_UnpinnedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

export type Github_IssueTimelineItemsConnection = {
   __typename?: 'Github_IssueTimelineItemsConnection',
  edges: Maybe<Array<Maybe<Github_IssueTimelineItemsEdge>>>,
  filteredCount: Scalars['Int'],
  nodes: Maybe<Array<Maybe<Github_IssueTimelineItems>>>,
  pageCount: Scalars['Int'],
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
  updatedAt: Scalars['Github_DateTime'],
};

export type Github_IssueTimelineItemsEdge = {
   __typename?: 'Github_IssueTimelineItemsEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_IssueTimelineItems>,
};

export enum Github_IssueTimelineItemsItemType {
  IssueComment = 'ISSUE_COMMENT',
  CrossReferencedEvent = 'CROSS_REFERENCED_EVENT',
  AddedToProjectEvent = 'ADDED_TO_PROJECT_EVENT',
  AssignedEvent = 'ASSIGNED_EVENT',
  ClosedEvent = 'CLOSED_EVENT',
  CommentDeletedEvent = 'COMMENT_DELETED_EVENT',
  ConnectedEvent = 'CONNECTED_EVENT',
  ConvertedNoteToIssueEvent = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  DemilestonedEvent = 'DEMILESTONED_EVENT',
  DisconnectedEvent = 'DISCONNECTED_EVENT',
  LabeledEvent = 'LABELED_EVENT',
  LockedEvent = 'LOCKED_EVENT',
  MarkedAsDuplicateEvent = 'MARKED_AS_DUPLICATE_EVENT',
  MentionedEvent = 'MENTIONED_EVENT',
  MilestonedEvent = 'MILESTONED_EVENT',
  MovedColumnsInProjectEvent = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PinnedEvent = 'PINNED_EVENT',
  ReferencedEvent = 'REFERENCED_EVENT',
  RemovedFromProjectEvent = 'REMOVED_FROM_PROJECT_EVENT',
  RenamedTitleEvent = 'RENAMED_TITLE_EVENT',
  ReopenedEvent = 'REOPENED_EVENT',
  SubscribedEvent = 'SUBSCRIBED_EVENT',
  TransferredEvent = 'TRANSFERRED_EVENT',
  UnassignedEvent = 'UNASSIGNED_EVENT',
  UnlabeledEvent = 'UNLABELED_EVENT',
  UnlockedEvent = 'UNLOCKED_EVENT',
  UserBlockedEvent = 'USER_BLOCKED_EVENT',
  UnmarkedAsDuplicateEvent = 'UNMARKED_AS_DUPLICATE_EVENT',
  UnpinnedEvent = 'UNPINNED_EVENT',
  UnsubscribedEvent = 'UNSUBSCRIBED_EVENT'
}

export type Github_JoinedGitHubContribution = Github_Contribution & {
   __typename?: 'Github_JoinedGitHubContribution',
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['Github_DateTime'],
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
  user: Github_User,
};

export type Github_Label = Github_Node & {
   __typename?: 'Github_Label',
  color: Scalars['String'],
  createdAt: Maybe<Scalars['Github_DateTime']>,
  description: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isDefault: Scalars['Boolean'],
  issues: Github_IssueConnection,
  name: Scalars['String'],
  pullRequests: Github_PullRequestConnection,
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  updatedAt: Maybe<Scalars['Github_DateTime']>,
  url: Scalars['Github_URI'],
};


export type Github_LabelIssuesArgs = {
  orderBy: Maybe<Github_IssueOrder>,
  labels: Maybe<Array<Scalars['String']>>,
  states: Maybe<Array<Github_IssueState>>,
  filterBy: Maybe<Github_IssueFilters>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_LabelPullRequestsArgs = {
  states: Maybe<Array<Github_PullRequestState>>,
  labels: Maybe<Array<Scalars['String']>>,
  headRefName: Maybe<Scalars['String']>,
  baseRefName: Maybe<Scalars['String']>,
  orderBy: Maybe<Github_IssueOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_Labelable = {
  labels: Maybe<Github_LabelConnection>,
};


export type Github_LabelableLabelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_LabelConnection = {
   __typename?: 'Github_LabelConnection',
  edges: Maybe<Array<Maybe<Github_LabelEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Label>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_LabeledEvent = Github_Node & {
   __typename?: 'Github_LabeledEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  label: Github_Label,
  labelable: Github_Labelable,
};

export type Github_LabelEdge = {
   __typename?: 'Github_LabelEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Label>,
};

export type Github_LabelOrder = {
  field: Github_LabelOrderField,
  direction: Github_OrderDirection,
};

export enum Github_LabelOrderField {
  Name = 'NAME',
  CreatedAt = 'CREATED_AT'
}

export type Github_Language = Github_Node & {
   __typename?: 'Github_Language',
  color: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type Github_LanguageConnection = {
   __typename?: 'Github_LanguageConnection',
  edges: Maybe<Array<Maybe<Github_LanguageEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Language>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
  totalSize: Scalars['Int'],
};

export type Github_LanguageEdge = {
   __typename?: 'Github_LanguageEdge',
  cursor: Scalars['String'],
  node: Github_Language,
  size: Scalars['Int'],
};

export type Github_LanguageOrder = {
  field: Github_LanguageOrderField,
  direction: Github_OrderDirection,
};

export enum Github_LanguageOrderField {
  Size = 'SIZE'
}

export type Github_License = Github_Node & {
   __typename?: 'Github_License',
  body: Scalars['String'],
  conditions: Array<Maybe<Github_LicenseRule>>,
  description: Maybe<Scalars['String']>,
  featured: Scalars['Boolean'],
  hidden: Scalars['Boolean'],
  id: Scalars['ID'],
  implementation: Maybe<Scalars['String']>,
  key: Scalars['String'],
  limitations: Array<Maybe<Github_LicenseRule>>,
  name: Scalars['String'],
  nickname: Maybe<Scalars['String']>,
  permissions: Array<Maybe<Github_LicenseRule>>,
  pseudoLicense: Scalars['Boolean'],
  spdxId: Maybe<Scalars['String']>,
  url: Maybe<Scalars['Github_URI']>,
};

export type Github_LicenseRule = {
   __typename?: 'Github_LicenseRule',
  description: Scalars['String'],
  key: Scalars['String'],
  label: Scalars['String'],
};

export type Github_LinkRepositoryToProjectInput = {
  projectId: Scalars['ID'],
  repositoryId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_LinkRepositoryToProjectPayload = {
   __typename?: 'Github_LinkRepositoryToProjectPayload',
  clientMutationId: Maybe<Scalars['String']>,
  project: Maybe<Github_Project>,
  repository: Maybe<Github_Repository>,
};

export type Github_Lockable = {
  activeLockReason: Maybe<Github_LockReason>,
  locked: Scalars['Boolean'],
};

export type Github_LockedEvent = Github_Node & {
   __typename?: 'Github_LockedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  lockReason: Maybe<Github_LockReason>,
  lockable: Github_Lockable,
};

export type Github_LockLockableInput = {
  lockableId: Scalars['ID'],
  lockReason: Maybe<Github_LockReason>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_LockLockablePayload = {
   __typename?: 'Github_LockLockablePayload',
  actor: Maybe<Github_Actor>,
  clientMutationId: Maybe<Scalars['String']>,
  lockedRecord: Maybe<Github_Lockable>,
};

export enum Github_LockReason {
  OffTopic = 'OFF_TOPIC',
  TooHeated = 'TOO_HEATED',
  Resolved = 'RESOLVED',
  Spam = 'SPAM'
}

export type Github_Mannequin = Github_Node & Github_Actor & Github_UniformResourceLocatable & {
   __typename?: 'Github_Mannequin',
  avatarUrl: Scalars['Github_URI'],
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  email: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  login: Scalars['String'],
  resourcePath: Scalars['Github_URI'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
};


export type Github_MannequinAvatarUrlArgs = {
  size: Maybe<Scalars['Int']>
};

export type Github_MarkedAsDuplicateEvent = Github_Node & {
   __typename?: 'Github_MarkedAsDuplicateEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
};

export type Github_MarketplaceCategory = Github_Node & {
   __typename?: 'Github_MarketplaceCategory',
  description: Maybe<Scalars['String']>,
  howItWorks: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  primaryListingCount: Scalars['Int'],
  resourcePath: Scalars['Github_URI'],
  secondaryListingCount: Scalars['Int'],
  slug: Scalars['String'],
  url: Scalars['Github_URI'],
};

export type Github_MarketplaceListing = Github_Node & {
   __typename?: 'Github_MarketplaceListing',
  app: Maybe<Github_App>,
  companyUrl: Maybe<Scalars['Github_URI']>,
  configurationResourcePath: Scalars['Github_URI'],
  configurationUrl: Scalars['Github_URI'],
  documentationUrl: Maybe<Scalars['Github_URI']>,
  extendedDescription: Maybe<Scalars['String']>,
  extendedDescriptionHTML: Scalars['Github_HTML'],
  fullDescription: Scalars['String'],
  fullDescriptionHTML: Scalars['Github_HTML'],
  hasApprovalBeenRequested: Scalars['Boolean'],
  hasPublishedFreeTrialPlans: Scalars['Boolean'],
  hasTermsOfService: Scalars['Boolean'],
  howItWorks: Maybe<Scalars['String']>,
  howItWorksHTML: Scalars['Github_HTML'],
  id: Scalars['ID'],
  installationUrl: Maybe<Scalars['Github_URI']>,
  installedForViewer: Scalars['Boolean'],
  isApproved: Scalars['Boolean'],
  isArchived: Scalars['Boolean'],
  isDelisted: Scalars['Boolean'],
  isDraft: Scalars['Boolean'],
  isPaid: Scalars['Boolean'],
  isPublic: Scalars['Boolean'],
  isRejected: Scalars['Boolean'],
  isUnverified: Scalars['Boolean'],
  isUnverifiedPending: Scalars['Boolean'],
  isVerificationPendingFromDraft: Scalars['Boolean'],
  isVerificationPendingFromUnverified: Scalars['Boolean'],
  isVerified: Scalars['Boolean'],
  logoBackgroundColor: Scalars['String'],
  logoUrl: Maybe<Scalars['Github_URI']>,
  name: Scalars['String'],
  normalizedShortDescription: Scalars['String'],
  pricingUrl: Maybe<Scalars['Github_URI']>,
  primaryCategory: Github_MarketplaceCategory,
  privacyPolicyUrl: Scalars['Github_URI'],
  resourcePath: Scalars['Github_URI'],
  screenshotUrls: Array<Maybe<Scalars['String']>>,
  secondaryCategory: Maybe<Github_MarketplaceCategory>,
  shortDescription: Scalars['String'],
  slug: Scalars['String'],
  statusUrl: Maybe<Scalars['Github_URI']>,
  supportEmail: Maybe<Scalars['String']>,
  supportUrl: Scalars['Github_URI'],
  termsOfServiceUrl: Maybe<Scalars['Github_URI']>,
  url: Scalars['Github_URI'],
  viewerCanAddPlans: Scalars['Boolean'],
  viewerCanApprove: Scalars['Boolean'],
  viewerCanDelist: Scalars['Boolean'],
  viewerCanEdit: Scalars['Boolean'],
  viewerCanEditCategories: Scalars['Boolean'],
  viewerCanEditPlans: Scalars['Boolean'],
  viewerCanRedraft: Scalars['Boolean'],
  viewerCanReject: Scalars['Boolean'],
  viewerCanRequestApproval: Scalars['Boolean'],
  viewerHasPurchased: Scalars['Boolean'],
  viewerHasPurchasedForAllOrganizations: Scalars['Boolean'],
  viewerIsListingAdmin: Scalars['Boolean'],
};


export type Github_MarketplaceListingLogoUrlArgs = {
  size?: Maybe<Scalars['Int']>
};

export type Github_MarketplaceListingConnection = {
   __typename?: 'Github_MarketplaceListingConnection',
  edges: Maybe<Array<Maybe<Github_MarketplaceListingEdge>>>,
  nodes: Maybe<Array<Maybe<Github_MarketplaceListing>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_MarketplaceListingEdge = {
   __typename?: 'Github_MarketplaceListingEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_MarketplaceListing>,
};

export type Github_MembersCanDeleteReposClearAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_MembersCanDeleteReposClearAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  enterpriseResourcePath: Maybe<Scalars['Github_URI']>,
  enterpriseSlug: Maybe<Scalars['String']>,
  enterpriseUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_MembersCanDeleteReposDisableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_MembersCanDeleteReposDisableAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  enterpriseResourcePath: Maybe<Scalars['Github_URI']>,
  enterpriseSlug: Maybe<Scalars['String']>,
  enterpriseUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_MembersCanDeleteReposEnableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_MembersCanDeleteReposEnableAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  enterpriseResourcePath: Maybe<Scalars['Github_URI']>,
  enterpriseSlug: Maybe<Scalars['String']>,
  enterpriseUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_MemberStatusable = {
  memberStatuses: Github_UserStatusConnection,
};


export type Github_MemberStatusableMemberStatusesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_UserStatusOrder>
};

export type Github_MentionedEvent = Github_Node & {
   __typename?: 'Github_MentionedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export enum Github_MergeableState {
  Mergeable = 'MERGEABLE',
  Conflicting = 'CONFLICTING',
  Unknown = 'UNKNOWN'
}

export type Github_MergeBranchInput = {
  repositoryId: Scalars['ID'],
  base: Scalars['String'],
  head: Scalars['String'],
  commitMessage: Maybe<Scalars['String']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_MergeBranchPayload = {
   __typename?: 'Github_MergeBranchPayload',
  clientMutationId: Maybe<Scalars['String']>,
  mergeCommit: Maybe<Github_Commit>,
};

export type Github_MergedEvent = Github_Node & Github_UniformResourceLocatable & {
   __typename?: 'Github_MergedEvent',
  actor: Maybe<Github_Actor>,
  commit: Maybe<Github_Commit>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  mergeRef: Maybe<Github_Ref>,
  mergeRefName: Scalars['String'],
  pullRequest: Github_PullRequest,
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
};

export type Github_MergePullRequestInput = {
  pullRequestId: Scalars['ID'],
  commitHeadline: Maybe<Scalars['String']>,
  commitBody: Maybe<Scalars['String']>,
  expectedHeadOid: Maybe<Scalars['Github_GitObjectID']>,
  mergeMethod: Maybe<Github_PullRequestMergeMethod>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_MergePullRequestPayload = {
   __typename?: 'Github_MergePullRequestPayload',
  actor: Maybe<Github_Actor>,
  clientMutationId: Maybe<Scalars['String']>,
  pullRequest: Maybe<Github_PullRequest>,
};

export type Github_Milestone = Github_Node & Github_Closable & Github_UniformResourceLocatable & {
   __typename?: 'Github_Milestone',
  closed: Scalars['Boolean'],
  closedAt: Maybe<Scalars['Github_DateTime']>,
  createdAt: Scalars['Github_DateTime'],
  creator: Maybe<Github_Actor>,
  description: Maybe<Scalars['String']>,
  dueOn: Maybe<Scalars['Github_DateTime']>,
  id: Scalars['ID'],
  issuePrioritiesDebug: Scalars['String'],
  issues: Github_IssueConnection,
  number: Scalars['Int'],
  pullRequests: Github_PullRequestConnection,
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  state: Github_MilestoneState,
  title: Scalars['String'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
};


export type Github_MilestoneIssuesArgs = {
  orderBy: Maybe<Github_IssueOrder>,
  labels: Maybe<Array<Scalars['String']>>,
  states: Maybe<Array<Github_IssueState>>,
  filterBy: Maybe<Github_IssueFilters>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_MilestonePullRequestsArgs = {
  states: Maybe<Array<Github_PullRequestState>>,
  labels: Maybe<Array<Scalars['String']>>,
  headRefName: Maybe<Scalars['String']>,
  baseRefName: Maybe<Scalars['String']>,
  orderBy: Maybe<Github_IssueOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_MilestoneConnection = {
   __typename?: 'Github_MilestoneConnection',
  edges: Maybe<Array<Maybe<Github_MilestoneEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Milestone>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_MilestonedEvent = Github_Node & {
   __typename?: 'Github_MilestonedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  milestoneTitle: Scalars['String'],
  subject: Github_MilestoneItem,
};

export type Github_MilestoneEdge = {
   __typename?: 'Github_MilestoneEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Milestone>,
};

export type Github_MilestoneItem = Github_Issue | Github_PullRequest;

export type Github_MilestoneOrder = {
  field: Github_MilestoneOrderField,
  direction: Github_OrderDirection,
};

export enum Github_MilestoneOrderField {
  DueDate = 'DUE_DATE',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Number = 'NUMBER'
}

export enum Github_MilestoneState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export type Github_MovedColumnsInProjectEvent = Github_Node & {
   __typename?: 'Github_MovedColumnsInProjectEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type Github_MoveProjectCardInput = {
  cardId: Scalars['ID'],
  columnId: Scalars['ID'],
  afterCardId: Maybe<Scalars['ID']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_MoveProjectCardPayload = {
   __typename?: 'Github_MoveProjectCardPayload',
  cardEdge: Maybe<Github_ProjectCardEdge>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_MoveProjectColumnInput = {
  columnId: Scalars['ID'],
  afterColumnId: Maybe<Scalars['ID']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_MoveProjectColumnPayload = {
   __typename?: 'Github_MoveProjectColumnPayload',
  clientMutationId: Maybe<Scalars['String']>,
  columnEdge: Maybe<Github_ProjectColumnEdge>,
};

export type Github_Node = {
  id: Scalars['ID'],
};

export type Github_OauthApplicationAuditEntryData = {
  oauthApplicationName: Maybe<Scalars['String']>,
  oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>,
  oauthApplicationUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OauthApplicationCreateAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OauthApplicationCreateAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  applicationUrl: Maybe<Scalars['Github_URI']>,
  callbackUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  oauthApplicationName: Maybe<Scalars['String']>,
  oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>,
  oauthApplicationUrl: Maybe<Scalars['Github_URI']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  rateLimit: Maybe<Scalars['Int']>,
  state: Maybe<Github_OauthApplicationCreateAuditEntryState>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export enum Github_OauthApplicationCreateAuditEntryState {
  Active = 'ACTIVE',
  Suspended = 'SUSPENDED',
  PendingDeletion = 'PENDING_DELETION'
}

export enum Github_OperationType {
  Access = 'ACCESS',
  Authentication = 'AUTHENTICATION',
  Create = 'CREATE',
  Modify = 'MODIFY',
  Remove = 'REMOVE',
  Restore = 'RESTORE',
  Transfer = 'TRANSFER'
}

export enum Github_OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Github_OrgAddBillingManagerAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgAddBillingManagerAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  invitationEmail: Maybe<Scalars['String']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgAddMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgAddMemberAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  permission: Maybe<Github_OrgAddMemberAuditEntryPermission>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export enum Github_OrgAddMemberAuditEntryPermission {
  Read = 'READ',
  Admin = 'ADMIN'
}

export type Github_Organization = Github_Node & Github_Actor & Github_RegistryPackageOwner & Github_RegistryPackageSearch & Github_ProjectOwner & Github_RepositoryOwner & Github_UniformResourceLocatable & Github_MemberStatusable & Github_ProfileOwner & Github_Sponsorable & {
   __typename?: 'Github_Organization',
  anyPinnableItems: Scalars['Boolean'],
  auditLog: Github_OrganizationAuditEntryConnection,
  avatarUrl: Scalars['Github_URI'],
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  description: Maybe<Scalars['String']>,
  descriptionHTML: Maybe<Scalars['String']>,
  email: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isVerified: Scalars['Boolean'],
  itemShowcase: Github_ProfileItemShowcase,
  location: Maybe<Scalars['String']>,
  login: Scalars['String'],
  memberStatuses: Github_UserStatusConnection,
  membersWithRole: Github_OrganizationMemberConnection,
  name: Maybe<Scalars['String']>,
  newTeamResourcePath: Scalars['Github_URI'],
  newTeamUrl: Scalars['Github_URI'],
  organizationBillingEmail: Maybe<Scalars['String']>,
  pendingMembers: Github_UserConnection,
  pinnableItems: Github_PinnableItemConnection,
  pinnedItems: Github_PinnableItemConnection,
  pinnedItemsRemaining: Scalars['Int'],
  pinnedRepositories: Github_RepositoryConnection,
  project: Maybe<Github_Project>,
  projects: Github_ProjectConnection,
  projectsResourcePath: Scalars['Github_URI'],
  projectsUrl: Scalars['Github_URI'],
  registryPackages: Github_RegistryPackageConnection,
  registryPackagesForQuery: Github_RegistryPackageConnection,
  repositories: Github_RepositoryConnection,
  repository: Maybe<Github_Repository>,
  requiresTwoFactorAuthentication: Maybe<Scalars['Boolean']>,
  resourcePath: Scalars['Github_URI'],
  samlIdentityProvider: Maybe<Github_OrganizationIdentityProvider>,
  sponsorsListing: Maybe<Github_SponsorsListing>,
  sponsorshipsAsMaintainer: Github_SponsorshipConnection,
  sponsorshipsAsSponsor: Github_SponsorshipConnection,
  team: Maybe<Github_Team>,
  teams: Github_TeamConnection,
  teamsResourcePath: Scalars['Github_URI'],
  teamsUrl: Scalars['Github_URI'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  viewerCanAdminister: Scalars['Boolean'],
  viewerCanChangePinnedItems: Scalars['Boolean'],
  viewerCanCreateProjects: Scalars['Boolean'],
  viewerCanCreateRepositories: Scalars['Boolean'],
  viewerCanCreateTeams: Scalars['Boolean'],
  viewerIsAMember: Scalars['Boolean'],
  websiteUrl: Maybe<Scalars['Github_URI']>,
};


export type Github_OrganizationAnyPinnableItemsArgs = {
  type: Maybe<Github_PinnableItemType>
};


export type Github_OrganizationAuditLogArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  query: Maybe<Scalars['String']>,
  orderBy?: Maybe<Github_AuditLogOrder>
};


export type Github_OrganizationAvatarUrlArgs = {
  size: Maybe<Scalars['Int']>
};


export type Github_OrganizationMemberStatusesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_UserStatusOrder>
};


export type Github_OrganizationMembersWithRoleArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_OrganizationPendingMembersArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_OrganizationPinnableItemsArgs = {
  types: Maybe<Array<Github_PinnableItemType>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_OrganizationPinnedItemsArgs = {
  types: Maybe<Array<Github_PinnableItemType>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_OrganizationPinnedRepositoriesArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>,
  orderBy: Maybe<Github_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  isLocked: Maybe<Scalars['Boolean']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_OrganizationProjectArgs = {
  number: Scalars['Int']
};


export type Github_OrganizationProjectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>,
  search: Maybe<Scalars['String']>,
  states: Maybe<Array<Github_ProjectState>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_OrganizationRegistryPackagesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  name: Maybe<Scalars['String']>,
  names: Maybe<Array<Maybe<Scalars['String']>>>,
  repositoryId: Maybe<Scalars['ID']>,
  packageType: Maybe<Github_RegistryPackageType>,
  registryPackageType: Maybe<Scalars['String']>,
  publicOnly?: Maybe<Scalars['Boolean']>
};


export type Github_OrganizationRegistryPackagesForQueryArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  query: Maybe<Scalars['String']>,
  packageType: Maybe<Github_RegistryPackageType>
};


export type Github_OrganizationRepositoriesArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>,
  orderBy: Maybe<Github_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  isLocked: Maybe<Scalars['Boolean']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  isFork: Maybe<Scalars['Boolean']>
};


export type Github_OrganizationRepositoryArgs = {
  name: Scalars['String']
};


export type Github_OrganizationSponsorshipsAsMaintainerArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  includePrivate?: Maybe<Scalars['Boolean']>,
  orderBy: Maybe<Github_SponsorshipOrder>
};


export type Github_OrganizationSponsorshipsAsSponsorArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Maybe<Github_SponsorshipOrder>
};


export type Github_OrganizationTeamArgs = {
  slug: Scalars['String']
};


export type Github_OrganizationTeamsArgs = {
  privacy: Maybe<Github_TeamPrivacy>,
  role: Maybe<Github_TeamRole>,
  query: Maybe<Scalars['String']>,
  userLogins: Maybe<Array<Scalars['String']>>,
  orderBy: Maybe<Github_TeamOrder>,
  ldapMapped: Maybe<Scalars['Boolean']>,
  rootTeamsOnly?: Maybe<Scalars['Boolean']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_OrganizationAuditEntry = Github_MembersCanDeleteReposClearAuditEntry | Github_MembersCanDeleteReposDisableAuditEntry | Github_MembersCanDeleteReposEnableAuditEntry | Github_OauthApplicationCreateAuditEntry | Github_OrgAddBillingManagerAuditEntry | Github_OrgAddMemberAuditEntry | Github_OrgBlockUserAuditEntry | Github_OrgConfigDisableCollaboratorsOnlyAuditEntry | Github_OrgConfigEnableCollaboratorsOnlyAuditEntry | Github_OrgCreateAuditEntry | Github_OrgDisableOauthAppRestrictionsAuditEntry | Github_OrgDisableSamlAuditEntry | Github_OrgDisableTwoFactorRequirementAuditEntry | Github_OrgEnableOauthAppRestrictionsAuditEntry | Github_OrgEnableSamlAuditEntry | Github_OrgEnableTwoFactorRequirementAuditEntry | Github_OrgInviteMemberAuditEntry | Github_OrgInviteToBusinessAuditEntry | Github_OrgOauthAppAccessApprovedAuditEntry | Github_OrgOauthAppAccessDeniedAuditEntry | Github_OrgOauthAppAccessRequestedAuditEntry | Github_OrgRemoveBillingManagerAuditEntry | Github_OrgRemoveMemberAuditEntry | Github_OrgRemoveOutsideCollaboratorAuditEntry | Github_OrgRestoreMemberAuditEntry | Github_OrgUnblockUserAuditEntry | Github_OrgUpdateDefaultRepositoryPermissionAuditEntry | Github_OrgUpdateMemberAuditEntry | Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntry | Github_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry | Github_PrivateRepositoryForkingDisableAuditEntry | Github_PrivateRepositoryForkingEnableAuditEntry | Github_RepoAccessAuditEntry | Github_RepoAddMemberAuditEntry | Github_RepoAddTopicAuditEntry | Github_RepoArchivedAuditEntry | Github_RepoChangeMergeSettingAuditEntry | Github_RepoConfigDisableAnonymousGitAccessAuditEntry | Github_RepoConfigDisableCollaboratorsOnlyAuditEntry | Github_RepoConfigDisableContributorsOnlyAuditEntry | Github_RepoConfigDisableSockpuppetDisallowedAuditEntry | Github_RepoConfigEnableAnonymousGitAccessAuditEntry | Github_RepoConfigEnableCollaboratorsOnlyAuditEntry | Github_RepoConfigEnableContributorsOnlyAuditEntry | Github_RepoConfigEnableSockpuppetDisallowedAuditEntry | Github_RepoConfigLockAnonymousGitAccessAuditEntry | Github_RepoConfigUnlockAnonymousGitAccessAuditEntry | Github_RepoCreateAuditEntry | Github_RepoDestroyAuditEntry | Github_RepoRemoveMemberAuditEntry | Github_RepoRemoveTopicAuditEntry | Github_RepositoryVisibilityChangeDisableAuditEntry | Github_RepositoryVisibilityChangeEnableAuditEntry | Github_TeamAddMemberAuditEntry | Github_TeamAddRepositoryAuditEntry | Github_TeamChangeParentTeamAuditEntry | Github_TeamRemoveMemberAuditEntry | Github_TeamRemoveRepositoryAuditEntry;

export type Github_OrganizationAuditEntryConnection = {
   __typename?: 'Github_OrganizationAuditEntryConnection',
  edges: Maybe<Array<Maybe<Github_OrganizationAuditEntryEdge>>>,
  nodes: Maybe<Array<Maybe<Github_OrganizationAuditEntry>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_OrganizationAuditEntryData = {
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrganizationAuditEntryEdge = {
   __typename?: 'Github_OrganizationAuditEntryEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_OrganizationAuditEntry>,
};

export type Github_OrganizationConnection = {
   __typename?: 'Github_OrganizationConnection',
  edges: Maybe<Array<Maybe<Github_OrganizationEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Organization>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_OrganizationEdge = {
   __typename?: 'Github_OrganizationEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Organization>,
};

export type Github_OrganizationIdentityProvider = Github_Node & {
   __typename?: 'Github_OrganizationIdentityProvider',
  digestMethod: Maybe<Scalars['Github_URI']>,
  externalIdentities: Github_ExternalIdentityConnection,
  id: Scalars['ID'],
  idpCertificate: Maybe<Scalars['Github_X509Certificate']>,
  issuer: Maybe<Scalars['String']>,
  organization: Maybe<Github_Organization>,
  signatureMethod: Maybe<Scalars['Github_URI']>,
  ssoUrl: Maybe<Scalars['Github_URI']>,
};


export type Github_OrganizationIdentityProviderExternalIdentitiesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_OrganizationInvitation = Github_Node & {
   __typename?: 'Github_OrganizationInvitation',
  createdAt: Scalars['Github_DateTime'],
  email: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  invitationType: Github_OrganizationInvitationType,
  invitee: Maybe<Github_User>,
  inviter: Github_User,
  organization: Github_Organization,
  role: Github_OrganizationInvitationRole,
};

export type Github_OrganizationInvitationConnection = {
   __typename?: 'Github_OrganizationInvitationConnection',
  edges: Maybe<Array<Maybe<Github_OrganizationInvitationEdge>>>,
  nodes: Maybe<Array<Maybe<Github_OrganizationInvitation>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_OrganizationInvitationEdge = {
   __typename?: 'Github_OrganizationInvitationEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_OrganizationInvitation>,
};

export enum Github_OrganizationInvitationRole {
  DirectMember = 'DIRECT_MEMBER',
  Admin = 'ADMIN',
  BillingManager = 'BILLING_MANAGER',
  Reinstate = 'REINSTATE'
}

export enum Github_OrganizationInvitationType {
  User = 'USER',
  Email = 'EMAIL'
}

export type Github_OrganizationMemberConnection = {
   __typename?: 'Github_OrganizationMemberConnection',
  edges: Maybe<Array<Maybe<Github_OrganizationMemberEdge>>>,
  nodes: Maybe<Array<Maybe<Github_User>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_OrganizationMemberEdge = {
   __typename?: 'Github_OrganizationMemberEdge',
  cursor: Scalars['String'],
  hasTwoFactorEnabled: Maybe<Scalars['Boolean']>,
  node: Maybe<Github_User>,
  role: Maybe<Github_OrganizationMemberRole>,
};

export enum Github_OrganizationMemberRole {
  Member = 'MEMBER',
  Admin = 'ADMIN'
}

export enum Github_OrganizationMembersCanCreateRepositoriesSettingValue {
  All = 'ALL',
  Private = 'PRIVATE',
  Disabled = 'DISABLED'
}

export type Github_OrganizationOrder = {
  field: Github_OrganizationOrderField,
  direction: Github_OrderDirection,
};

export enum Github_OrganizationOrderField {
  CreatedAt = 'CREATED_AT',
  Login = 'LOGIN'
}

export type Github_OrganizationsHovercardContext = Github_HovercardContext & {
   __typename?: 'Github_OrganizationsHovercardContext',
  message: Scalars['String'],
  octicon: Scalars['String'],
  relevantOrganizations: Github_OrganizationConnection,
  totalOrganizationCount: Scalars['Int'],
};


export type Github_OrganizationsHovercardContextRelevantOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_OrganizationTeamsHovercardContext = Github_HovercardContext & {
   __typename?: 'Github_OrganizationTeamsHovercardContext',
  message: Scalars['String'],
  octicon: Scalars['String'],
  relevantTeams: Github_TeamConnection,
  teamsResourcePath: Scalars['Github_URI'],
  teamsUrl: Scalars['Github_URI'],
  totalTeamCount: Scalars['Int'],
};


export type Github_OrganizationTeamsHovercardContextRelevantTeamsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_OrgBlockUserAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgBlockUserAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  blockedUser: Maybe<Github_User>,
  blockedUserName: Maybe<Scalars['String']>,
  blockedUserResourcePath: Maybe<Scalars['Github_URI']>,
  blockedUserUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgConfigDisableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgConfigDisableCollaboratorsOnlyAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgConfigEnableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgConfigEnableCollaboratorsOnlyAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgCreateAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgCreateAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  billingPlan: Maybe<Github_OrgCreateAuditEntryBillingPlan>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export enum Github_OrgCreateAuditEntryBillingPlan {
  Free = 'FREE',
  Business = 'BUSINESS',
  BusinessPlus = 'BUSINESS_PLUS',
  Unlimited = 'UNLIMITED',
  TieredPerSeat = 'TIERED_PER_SEAT'
}

export type Github_OrgDisableOauthAppRestrictionsAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgDisableOauthAppRestrictionsAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgDisableSamlAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgDisableSamlAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  digestMethodUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  issuerUrl: Maybe<Scalars['Github_URI']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  signatureMethodUrl: Maybe<Scalars['Github_URI']>,
  singleSignOnUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgDisableTwoFactorRequirementAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgDisableTwoFactorRequirementAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgEnableOauthAppRestrictionsAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgEnableOauthAppRestrictionsAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgEnableSamlAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgEnableSamlAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  digestMethodUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  issuerUrl: Maybe<Scalars['Github_URI']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  signatureMethodUrl: Maybe<Scalars['Github_URI']>,
  singleSignOnUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgEnableTwoFactorRequirementAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgEnableTwoFactorRequirementAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgInviteMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgInviteMemberAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  email: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationInvitation: Maybe<Github_OrganizationInvitation>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgInviteToBusinessAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgInviteToBusinessAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  enterpriseResourcePath: Maybe<Scalars['Github_URI']>,
  enterpriseSlug: Maybe<Scalars['String']>,
  enterpriseUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgOauthAppAccessApprovedAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgOauthAppAccessApprovedAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  oauthApplicationName: Maybe<Scalars['String']>,
  oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>,
  oauthApplicationUrl: Maybe<Scalars['Github_URI']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgOauthAppAccessDeniedAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgOauthAppAccessDeniedAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  oauthApplicationName: Maybe<Scalars['String']>,
  oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>,
  oauthApplicationUrl: Maybe<Scalars['Github_URI']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgOauthAppAccessRequestedAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgOauthAppAccessRequestedAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  oauthApplicationName: Maybe<Scalars['String']>,
  oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>,
  oauthApplicationUrl: Maybe<Scalars['Github_URI']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgRemoveBillingManagerAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgRemoveBillingManagerAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  reason: Maybe<Github_OrgRemoveBillingManagerAuditEntryReason>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export enum Github_OrgRemoveBillingManagerAuditEntryReason {
  TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',
  SamlSsoEnforcementRequiresExternalIdentity = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
}

export type Github_OrgRemoveMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgRemoveMemberAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  membershipTypes: Maybe<Array<Github_OrgRemoveMemberAuditEntryMembershipType>>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  reason: Maybe<Github_OrgRemoveMemberAuditEntryReason>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export enum Github_OrgRemoveMemberAuditEntryMembershipType {
  DirectMember = 'DIRECT_MEMBER',
  Admin = 'ADMIN',
  BillingManager = 'BILLING_MANAGER',
  Unaffiliated = 'UNAFFILIATED',
  OutsideCollaborator = 'OUTSIDE_COLLABORATOR'
}

export enum Github_OrgRemoveMemberAuditEntryReason {
  TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',
  SamlSsoEnforcementRequiresExternalIdentity = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
}

export type Github_OrgRemoveOutsideCollaboratorAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgRemoveOutsideCollaboratorAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  membershipTypes: Maybe<Array<Github_OrgRemoveOutsideCollaboratorAuditEntryMembershipType>>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  reason: Maybe<Github_OrgRemoveOutsideCollaboratorAuditEntryReason>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export enum Github_OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
  OutsideCollaborator = 'OUTSIDE_COLLABORATOR',
  Unaffiliated = 'UNAFFILIATED',
  BillingManager = 'BILLING_MANAGER'
}

export enum Github_OrgRemoveOutsideCollaboratorAuditEntryReason {
  TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING'
}

export type Github_OrgRestoreMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgRestoreMemberAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  restoredCustomEmailRoutingsCount: Maybe<Scalars['Int']>,
  restoredIssueAssignmentsCount: Maybe<Scalars['Int']>,
  restoredMemberships: Maybe<Array<Github_OrgRestoreMemberAuditEntryMembership>>,
  restoredMembershipsCount: Maybe<Scalars['Int']>,
  restoredRepositoriesCount: Maybe<Scalars['Int']>,
  restoredRepositoryStarsCount: Maybe<Scalars['Int']>,
  restoredRepositoryWatchesCount: Maybe<Scalars['Int']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgRestoreMemberAuditEntryMembership = Github_OrgRestoreMemberMembershipOrganizationAuditEntryData | Github_OrgRestoreMemberMembershipRepositoryAuditEntryData | Github_OrgRestoreMemberMembershipTeamAuditEntryData;

export type Github_OrgRestoreMemberMembershipOrganizationAuditEntryData = Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgRestoreMemberMembershipOrganizationAuditEntryData',
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgRestoreMemberMembershipRepositoryAuditEntryData = Github_RepositoryAuditEntryData & {
   __typename?: 'Github_OrgRestoreMemberMembershipRepositoryAuditEntryData',
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgRestoreMemberMembershipTeamAuditEntryData = Github_TeamAuditEntryData & {
   __typename?: 'Github_OrgRestoreMemberMembershipTeamAuditEntryData',
  team: Maybe<Github_Team>,
  teamName: Maybe<Scalars['String']>,
  teamResourcePath: Maybe<Scalars['Github_URI']>,
  teamUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgUnblockUserAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgUnblockUserAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  blockedUser: Maybe<Github_User>,
  blockedUserName: Maybe<Scalars['String']>,
  blockedUserResourcePath: Maybe<Scalars['Github_URI']>,
  blockedUserUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_OrgUpdateDefaultRepositoryPermissionAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgUpdateDefaultRepositoryPermissionAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  permission: Maybe<Github_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>,
  permissionWas: Maybe<Github_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export enum Github_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
  Read = 'READ',
  Write = 'WRITE',
  Admin = 'ADMIN',
  None = 'NONE'
}

export type Github_OrgUpdateMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgUpdateMemberAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  permission: Maybe<Github_OrgUpdateMemberAuditEntryPermission>,
  permissionWas: Maybe<Github_OrgUpdateMemberAuditEntryPermission>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export enum Github_OrgUpdateMemberAuditEntryPermission {
  Read = 'READ',
  Admin = 'ADMIN'
}

export type Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  canCreateRepositories: Maybe<Scalars['Boolean']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
  visibility: Maybe<Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>,
};

export enum Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
  All = 'ALL',
  Public = 'PUBLIC'
}

export type Github_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  canInviteOutsideCollaboratorsToRepositories: Maybe<Scalars['Boolean']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_PageInfo = {
   __typename?: 'Github_PageInfo',
  endCursor: Maybe<Scalars['String']>,
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor: Maybe<Scalars['String']>,
};

export type Github_PermissionGranter = Github_Organization | Github_Repository | Github_Team;

export type Github_PermissionSource = {
   __typename?: 'Github_PermissionSource',
  organization: Github_Organization,
  permission: Github_DefaultRepositoryPermissionField,
  source: Github_PermissionGranter,
};

export type Github_PinnableItem = Github_Gist | Github_Repository;

export type Github_PinnableItemConnection = {
   __typename?: 'Github_PinnableItemConnection',
  edges: Maybe<Array<Maybe<Github_PinnableItemEdge>>>,
  nodes: Maybe<Array<Maybe<Github_PinnableItem>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_PinnableItemEdge = {
   __typename?: 'Github_PinnableItemEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_PinnableItem>,
};

export enum Github_PinnableItemType {
  Repository = 'REPOSITORY',
  Gist = 'GIST',
  Issue = 'ISSUE',
  Project = 'PROJECT',
  PullRequest = 'PULL_REQUEST',
  User = 'USER',
  Organization = 'ORGANIZATION',
  Team = 'TEAM'
}

export type Github_PinnedEvent = Github_Node & {
   __typename?: 'Github_PinnedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  issue: Github_Issue,
};


export type Github_PrivateRepositoryForkingDisableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_PrivateRepositoryForkingDisableAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  enterpriseResourcePath: Maybe<Scalars['Github_URI']>,
  enterpriseSlug: Maybe<Scalars['String']>,
  enterpriseUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_PrivateRepositoryForkingEnableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_PrivateRepositoryForkingEnableAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  enterpriseResourcePath: Maybe<Scalars['Github_URI']>,
  enterpriseSlug: Maybe<Scalars['String']>,
  enterpriseUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_ProfileItemShowcase = {
   __typename?: 'Github_ProfileItemShowcase',
  hasPinnedItems: Scalars['Boolean'],
  items: Github_PinnableItemConnection,
};


export type Github_ProfileItemShowcaseItemsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_ProfileOwner = {
  anyPinnableItems: Scalars['Boolean'],
  email: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  itemShowcase: Github_ProfileItemShowcase,
  location: Maybe<Scalars['String']>,
  login: Scalars['String'],
  name: Maybe<Scalars['String']>,
  pinnableItems: Github_PinnableItemConnection,
  pinnedItems: Github_PinnableItemConnection,
  pinnedItemsRemaining: Scalars['Int'],
  viewerCanChangePinnedItems: Scalars['Boolean'],
  websiteUrl: Maybe<Scalars['Github_URI']>,
};


export type Github_ProfileOwnerAnyPinnableItemsArgs = {
  type: Maybe<Github_PinnableItemType>
};


export type Github_ProfileOwnerPinnableItemsArgs = {
  types: Maybe<Array<Github_PinnableItemType>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_ProfileOwnerPinnedItemsArgs = {
  types: Maybe<Array<Github_PinnableItemType>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_Project = Github_Node & Github_Closable & Github_Updatable & {
   __typename?: 'Github_Project',
  body: Maybe<Scalars['String']>,
  bodyHTML: Scalars['Github_HTML'],
  closed: Scalars['Boolean'],
  closedAt: Maybe<Scalars['Github_DateTime']>,
  columns: Github_ProjectColumnConnection,
  createdAt: Scalars['Github_DateTime'],
  creator: Maybe<Github_Actor>,
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  number: Scalars['Int'],
  owner: Github_ProjectOwner,
  pendingCards: Github_ProjectCardConnection,
  resourcePath: Scalars['Github_URI'],
  state: Github_ProjectState,
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  viewerCanUpdate: Scalars['Boolean'],
};


export type Github_ProjectColumnsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_ProjectPendingCardsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  archivedStates?: Maybe<Array<Maybe<Github_ProjectCardArchivedState>>>
};

export type Github_ProjectCard = Github_Node & {
   __typename?: 'Github_ProjectCard',
  column: Maybe<Github_ProjectColumn>,
  content: Maybe<Github_ProjectCardItem>,
  createdAt: Scalars['Github_DateTime'],
  creator: Maybe<Github_Actor>,
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  isArchived: Scalars['Boolean'],
  note: Maybe<Scalars['String']>,
  project: Github_Project,
  resourcePath: Scalars['Github_URI'],
  state: Maybe<Github_ProjectCardState>,
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
};

export enum Github_ProjectCardArchivedState {
  Archived = 'ARCHIVED',
  NotArchived = 'NOT_ARCHIVED'
}

export type Github_ProjectCardConnection = {
   __typename?: 'Github_ProjectCardConnection',
  edges: Maybe<Array<Maybe<Github_ProjectCardEdge>>>,
  nodes: Maybe<Array<Maybe<Github_ProjectCard>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_ProjectCardEdge = {
   __typename?: 'Github_ProjectCardEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_ProjectCard>,
};

export type Github_ProjectCardItem = Github_Issue | Github_PullRequest;

export enum Github_ProjectCardState {
  ContentOnly = 'CONTENT_ONLY',
  NoteOnly = 'NOTE_ONLY',
  Redacted = 'REDACTED'
}

export type Github_ProjectColumn = Github_Node & {
   __typename?: 'Github_ProjectColumn',
  cards: Github_ProjectCardConnection,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  project: Github_Project,
  purpose: Maybe<Github_ProjectColumnPurpose>,
  resourcePath: Scalars['Github_URI'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
};


export type Github_ProjectColumnCardsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  archivedStates?: Maybe<Array<Maybe<Github_ProjectCardArchivedState>>>
};

export type Github_ProjectColumnConnection = {
   __typename?: 'Github_ProjectColumnConnection',
  edges: Maybe<Array<Maybe<Github_ProjectColumnEdge>>>,
  nodes: Maybe<Array<Maybe<Github_ProjectColumn>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_ProjectColumnEdge = {
   __typename?: 'Github_ProjectColumnEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_ProjectColumn>,
};

export enum Github_ProjectColumnPurpose {
  Todo = 'TODO',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE'
}

export type Github_ProjectConnection = {
   __typename?: 'Github_ProjectConnection',
  edges: Maybe<Array<Maybe<Github_ProjectEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Project>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_ProjectEdge = {
   __typename?: 'Github_ProjectEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Project>,
};

export type Github_ProjectOrder = {
  field: Github_ProjectOrderField,
  direction: Github_OrderDirection,
};

export enum Github_ProjectOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Name = 'NAME'
}

export type Github_ProjectOwner = {
  id: Scalars['ID'],
  project: Maybe<Github_Project>,
  projects: Github_ProjectConnection,
  projectsResourcePath: Scalars['Github_URI'],
  projectsUrl: Scalars['Github_URI'],
  viewerCanCreateProjects: Scalars['Boolean'],
};


export type Github_ProjectOwnerProjectArgs = {
  number: Scalars['Int']
};


export type Github_ProjectOwnerProjectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>,
  search: Maybe<Scalars['String']>,
  states: Maybe<Array<Github_ProjectState>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export enum Github_ProjectState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export enum Github_ProjectTemplate {
  BasicKanban = 'BASIC_KANBAN',
  AutomatedKanbanV2 = 'AUTOMATED_KANBAN_V2',
  AutomatedReviewsKanban = 'AUTOMATED_REVIEWS_KANBAN',
  BugTriage = 'BUG_TRIAGE'
}

export type Github_PublicKey = Github_Node & {
   __typename?: 'Github_PublicKey',
  accessedAt: Maybe<Scalars['Github_DateTime']>,
  createdAt: Maybe<Scalars['Github_DateTime']>,
  fingerprint: Scalars['String'],
  id: Scalars['ID'],
  isReadOnly: Maybe<Scalars['Boolean']>,
  key: Scalars['String'],
  updatedAt: Maybe<Scalars['Github_DateTime']>,
};

export type Github_PublicKeyConnection = {
   __typename?: 'Github_PublicKeyConnection',
  edges: Maybe<Array<Maybe<Github_PublicKeyEdge>>>,
  nodes: Maybe<Array<Maybe<Github_PublicKey>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_PublicKeyEdge = {
   __typename?: 'Github_PublicKeyEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_PublicKey>,
};

export type Github_PullRequest = Github_Node & Github_Assignable & Github_Closable & Github_Comment & Github_Updatable & Github_UpdatableComment & Github_Labelable & Github_Lockable & Github_Reactable & Github_RepositoryNode & Github_Subscribable & Github_UniformResourceLocatable & {
   __typename?: 'Github_PullRequest',
  activeLockReason: Maybe<Github_LockReason>,
  additions: Scalars['Int'],
  assignees: Github_UserConnection,
  author: Maybe<Github_Actor>,
  authorAssociation: Github_CommentAuthorAssociation,
  baseRef: Maybe<Github_Ref>,
  baseRefName: Scalars['String'],
  baseRefOid: Scalars['Github_GitObjectID'],
  baseRepository: Maybe<Github_Repository>,
  body: Scalars['String'],
  bodyHTML: Scalars['Github_HTML'],
  bodyText: Scalars['String'],
  changedFiles: Scalars['Int'],
  checksResourcePath: Scalars['Github_URI'],
  checksUrl: Scalars['Github_URI'],
  closed: Scalars['Boolean'],
  closedAt: Maybe<Scalars['Github_DateTime']>,
  comments: Github_IssueCommentConnection,
  commits: Github_PullRequestCommitConnection,
  createdAt: Scalars['Github_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId: Maybe<Scalars['Int']>,
  deletions: Scalars['Int'],
  editor: Maybe<Github_Actor>,
  files: Maybe<Github_PullRequestChangedFileConnection>,
  headRef: Maybe<Github_Ref>,
  headRefName: Scalars['String'],
  headRefOid: Scalars['Github_GitObjectID'],
  headRepository: Maybe<Github_Repository>,
  headRepositoryOwner: Maybe<Github_RepositoryOwner>,
  hovercard: Github_Hovercard,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isCrossRepository: Scalars['Boolean'],
  labels: Maybe<Github_LabelConnection>,
  lastEditedAt: Maybe<Scalars['Github_DateTime']>,
  locked: Scalars['Boolean'],
  maintainerCanModify: Scalars['Boolean'],
  mergeCommit: Maybe<Github_Commit>,
  mergeable: Github_MergeableState,
  merged: Scalars['Boolean'],
  mergedAt: Maybe<Scalars['Github_DateTime']>,
  mergedBy: Maybe<Github_Actor>,
  milestone: Maybe<Github_Milestone>,
  number: Scalars['Int'],
  participants: Github_UserConnection,
  permalink: Scalars['Github_URI'],
  potentialMergeCommit: Maybe<Github_Commit>,
  projectCards: Github_ProjectCardConnection,
  publishedAt: Maybe<Scalars['Github_DateTime']>,
  reactionGroups: Maybe<Array<Github_ReactionGroup>>,
  reactions: Github_ReactionConnection,
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  revertResourcePath: Scalars['Github_URI'],
  revertUrl: Scalars['Github_URI'],
  reviewRequests: Maybe<Github_ReviewRequestConnection>,
  reviewThreads: Github_PullRequestReviewThreadConnection,
  reviews: Maybe<Github_PullRequestReviewConnection>,
  state: Github_PullRequestState,
  suggestedReviewers: Array<Maybe<Github_SuggestedReviewer>>,
  timeline: Github_PullRequestTimelineConnection,
  timelineItems: Github_PullRequestTimelineItemsConnection,
  title: Scalars['String'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  userContentEdits: Maybe<Github_UserContentEditConnection>,
  viewerCanApplySuggestion: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<Github_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
  viewerSubscription: Maybe<Github_SubscriptionState>,
};


export type Github_PullRequestAssigneesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestCommitsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestFilesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>
};


export type Github_PullRequestLabelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestParticipantsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestProjectCardsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  archivedStates?: Maybe<Array<Maybe<Github_ProjectCardArchivedState>>>
};


export type Github_PullRequestReactionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  content: Maybe<Github_ReactionContent>,
  orderBy: Maybe<Github_ReactionOrder>
};


export type Github_PullRequestReviewRequestsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestReviewThreadsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestReviewsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  states: Maybe<Array<Github_PullRequestReviewState>>,
  author: Maybe<Scalars['String']>
};


export type Github_PullRequestTimelineArgs = {
  since: Maybe<Scalars['Github_DateTime']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestTimelineItemsArgs = {
  since: Maybe<Scalars['Github_DateTime']>,
  skip: Maybe<Scalars['Int']>,
  itemTypes: Maybe<Array<Github_PullRequestTimelineItemsItemType>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestUserContentEditsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_PullRequestChangedFile = {
   __typename?: 'Github_PullRequestChangedFile',
  additions: Scalars['Int'],
  deletions: Scalars['Int'],
  path: Scalars['String'],
};

export type Github_PullRequestChangedFileConnection = {
   __typename?: 'Github_PullRequestChangedFileConnection',
  edges: Maybe<Array<Maybe<Github_PullRequestChangedFileEdge>>>,
  nodes: Maybe<Array<Maybe<Github_PullRequestChangedFile>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_PullRequestChangedFileEdge = {
   __typename?: 'Github_PullRequestChangedFileEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_PullRequestChangedFile>,
};

export type Github_PullRequestCommit = Github_Node & Github_UniformResourceLocatable & {
   __typename?: 'Github_PullRequestCommit',
  commit: Github_Commit,
  id: Scalars['ID'],
  pullRequest: Github_PullRequest,
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
};

export type Github_PullRequestCommitCommentThread = Github_Node & Github_RepositoryNode & {
   __typename?: 'Github_PullRequestCommitCommentThread',
  comments: Github_CommitCommentConnection,
  commit: Github_Commit,
  id: Scalars['ID'],
  path: Maybe<Scalars['String']>,
  position: Maybe<Scalars['Int']>,
  pullRequest: Github_PullRequest,
  repository: Github_Repository,
};


export type Github_PullRequestCommitCommentThreadCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_PullRequestCommitConnection = {
   __typename?: 'Github_PullRequestCommitConnection',
  edges: Maybe<Array<Maybe<Github_PullRequestCommitEdge>>>,
  nodes: Maybe<Array<Maybe<Github_PullRequestCommit>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_PullRequestCommitEdge = {
   __typename?: 'Github_PullRequestCommitEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_PullRequestCommit>,
};

export type Github_PullRequestConnection = {
   __typename?: 'Github_PullRequestConnection',
  edges: Maybe<Array<Maybe<Github_PullRequestEdge>>>,
  nodes: Maybe<Array<Maybe<Github_PullRequest>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_PullRequestContributionsByRepository = {
   __typename?: 'Github_PullRequestContributionsByRepository',
  contributions: Github_CreatedPullRequestContributionConnection,
  repository: Github_Repository,
};


export type Github_PullRequestContributionsByRepositoryContributionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_ContributionOrder>
};

export type Github_PullRequestEdge = {
   __typename?: 'Github_PullRequestEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_PullRequest>,
};

export enum Github_PullRequestMergeMethod {
  Merge = 'MERGE',
  Squash = 'SQUASH',
  Rebase = 'REBASE'
}

export type Github_PullRequestOrder = {
  field: Github_PullRequestOrderField,
  direction: Github_OrderDirection,
};

export enum Github_PullRequestOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type Github_PullRequestReview = Github_Node & Github_Comment & Github_Deletable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
   __typename?: 'Github_PullRequestReview',
  author: Maybe<Github_Actor>,
  authorAssociation: Github_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['Github_HTML'],
  bodyText: Scalars['String'],
  comments: Github_PullRequestReviewCommentConnection,
  commit: Maybe<Github_Commit>,
  createdAt: Scalars['Github_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId: Maybe<Scalars['Int']>,
  editor: Maybe<Github_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  lastEditedAt: Maybe<Scalars['Github_DateTime']>,
  onBehalfOf: Github_TeamConnection,
  publishedAt: Maybe<Scalars['Github_DateTime']>,
  pullRequest: Github_PullRequest,
  reactionGroups: Maybe<Array<Github_ReactionGroup>>,
  reactions: Github_ReactionConnection,
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  state: Github_PullRequestReviewState,
  submittedAt: Maybe<Scalars['Github_DateTime']>,
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  userContentEdits: Maybe<Github_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<Github_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type Github_PullRequestReviewCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestReviewOnBehalfOfArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_PullRequestReviewReactionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  content: Maybe<Github_ReactionContent>,
  orderBy: Maybe<Github_ReactionOrder>
};


export type Github_PullRequestReviewUserContentEditsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_PullRequestReviewComment = Github_Node & Github_Comment & Github_Deletable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
   __typename?: 'Github_PullRequestReviewComment',
  author: Maybe<Github_Actor>,
  authorAssociation: Github_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['Github_HTML'],
  bodyText: Scalars['String'],
  commit: Maybe<Github_Commit>,
  createdAt: Scalars['Github_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId: Maybe<Scalars['Int']>,
  diffHunk: Scalars['String'],
  draftedAt: Scalars['Github_DateTime'],
  editor: Maybe<Github_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isMinimized: Scalars['Boolean'],
  lastEditedAt: Maybe<Scalars['Github_DateTime']>,
  minimizedReason: Maybe<Scalars['String']>,
  originalCommit: Maybe<Github_Commit>,
  originalPosition: Scalars['Int'],
  outdated: Scalars['Boolean'],
  path: Scalars['String'],
  position: Maybe<Scalars['Int']>,
  publishedAt: Maybe<Scalars['Github_DateTime']>,
  pullRequest: Github_PullRequest,
  pullRequestReview: Maybe<Github_PullRequestReview>,
  reactionGroups: Maybe<Array<Github_ReactionGroup>>,
  reactions: Github_ReactionConnection,
  replyTo: Maybe<Github_PullRequestReviewComment>,
  repository: Github_Repository,
  resourcePath: Scalars['Github_URI'],
  state: Github_PullRequestReviewCommentState,
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  userContentEdits: Maybe<Github_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanMinimize: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<Github_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type Github_PullRequestReviewCommentReactionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  content: Maybe<Github_ReactionContent>,
  orderBy: Maybe<Github_ReactionOrder>
};


export type Github_PullRequestReviewCommentUserContentEditsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_PullRequestReviewCommentConnection = {
   __typename?: 'Github_PullRequestReviewCommentConnection',
  edges: Maybe<Array<Maybe<Github_PullRequestReviewCommentEdge>>>,
  nodes: Maybe<Array<Maybe<Github_PullRequestReviewComment>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_PullRequestReviewCommentEdge = {
   __typename?: 'Github_PullRequestReviewCommentEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_PullRequestReviewComment>,
};

export enum Github_PullRequestReviewCommentState {
  Pending = 'PENDING',
  Submitted = 'SUBMITTED'
}

export type Github_PullRequestReviewConnection = {
   __typename?: 'Github_PullRequestReviewConnection',
  edges: Maybe<Array<Maybe<Github_PullRequestReviewEdge>>>,
  nodes: Maybe<Array<Maybe<Github_PullRequestReview>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_PullRequestReviewContributionsByRepository = {
   __typename?: 'Github_PullRequestReviewContributionsByRepository',
  contributions: Github_CreatedPullRequestReviewContributionConnection,
  repository: Github_Repository,
};


export type Github_PullRequestReviewContributionsByRepositoryContributionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_ContributionOrder>
};

export type Github_PullRequestReviewEdge = {
   __typename?: 'Github_PullRequestReviewEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_PullRequestReview>,
};

export enum Github_PullRequestReviewEvent {
  Comment = 'COMMENT',
  Approve = 'APPROVE',
  RequestChanges = 'REQUEST_CHANGES',
  Dismiss = 'DISMISS'
}

export enum Github_PullRequestReviewState {
  Pending = 'PENDING',
  Commented = 'COMMENTED',
  Approved = 'APPROVED',
  ChangesRequested = 'CHANGES_REQUESTED',
  Dismissed = 'DISMISSED'
}

export type Github_PullRequestReviewThread = Github_Node & {
   __typename?: 'Github_PullRequestReviewThread',
  comments: Github_PullRequestReviewCommentConnection,
  id: Scalars['ID'],
  isResolved: Scalars['Boolean'],
  pullRequest: Github_PullRequest,
  repository: Github_Repository,
  resolvedBy: Maybe<Github_User>,
  viewerCanResolve: Scalars['Boolean'],
  viewerCanUnresolve: Scalars['Boolean'],
};


export type Github_PullRequestReviewThreadCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  skip: Maybe<Scalars['Int']>
};

export type Github_PullRequestReviewThreadConnection = {
   __typename?: 'Github_PullRequestReviewThreadConnection',
  edges: Maybe<Array<Maybe<Github_PullRequestReviewThreadEdge>>>,
  nodes: Maybe<Array<Maybe<Github_PullRequestReviewThread>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_PullRequestReviewThreadEdge = {
   __typename?: 'Github_PullRequestReviewThreadEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_PullRequestReviewThread>,
};

export type Github_PullRequestRevisionMarker = {
   __typename?: 'Github_PullRequestRevisionMarker',
  createdAt: Scalars['Github_DateTime'],
  lastSeenCommit: Github_Commit,
  pullRequest: Github_PullRequest,
};

export enum Github_PullRequestState {
  Open = 'OPEN',
  Closed = 'CLOSED',
  Merged = 'MERGED'
}

export type Github_PullRequestTimelineConnection = {
   __typename?: 'Github_PullRequestTimelineConnection',
  edges: Maybe<Array<Maybe<Github_PullRequestTimelineItemEdge>>>,
  nodes: Maybe<Array<Maybe<Github_PullRequestTimelineItem>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_PullRequestTimelineItem = Github_AssignedEvent | Github_BaseRefForcePushedEvent | Github_ClosedEvent | Github_Commit | Github_CommitCommentThread | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_DeployedEvent | Github_DeploymentEnvironmentChangedEvent | Github_HeadRefDeletedEvent | Github_HeadRefForcePushedEvent | Github_HeadRefRestoredEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MergedEvent | Github_MilestonedEvent | Github_PullRequestReview | Github_PullRequestReviewComment | Github_PullRequestReviewThread | Github_ReferencedEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_ReviewDismissedEvent | Github_ReviewRequestRemovedEvent | Github_ReviewRequestedEvent | Github_SubscribedEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

export type Github_PullRequestTimelineItemEdge = {
   __typename?: 'Github_PullRequestTimelineItemEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_PullRequestTimelineItem>,
};

export type Github_PullRequestTimelineItems = Github_AddedToProjectEvent | Github_AssignedEvent | Github_BaseRefChangedEvent | Github_BaseRefForcePushedEvent | Github_ClosedEvent | Github_CommentDeletedEvent | Github_ConnectedEvent | Github_ConvertedNoteToIssueEvent | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_DeployedEvent | Github_DeploymentEnvironmentChangedEvent | Github_DisconnectedEvent | Github_HeadRefDeletedEvent | Github_HeadRefForcePushedEvent | Github_HeadRefRestoredEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MarkedAsDuplicateEvent | Github_MentionedEvent | Github_MergedEvent | Github_MilestonedEvent | Github_MovedColumnsInProjectEvent | Github_PinnedEvent | Github_PullRequestCommit | Github_PullRequestCommitCommentThread | Github_PullRequestReview | Github_PullRequestReviewThread | Github_PullRequestRevisionMarker | Github_ReadyForReviewEvent | Github_ReferencedEvent | Github_RemovedFromProjectEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_ReviewDismissedEvent | Github_ReviewRequestRemovedEvent | Github_ReviewRequestedEvent | Github_SubscribedEvent | Github_TransferredEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnmarkedAsDuplicateEvent | Github_UnpinnedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

export type Github_PullRequestTimelineItemsConnection = {
   __typename?: 'Github_PullRequestTimelineItemsConnection',
  edges: Maybe<Array<Maybe<Github_PullRequestTimelineItemsEdge>>>,
  filteredCount: Scalars['Int'],
  nodes: Maybe<Array<Maybe<Github_PullRequestTimelineItems>>>,
  pageCount: Scalars['Int'],
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
  updatedAt: Scalars['Github_DateTime'],
};

export type Github_PullRequestTimelineItemsEdge = {
   __typename?: 'Github_PullRequestTimelineItemsEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_PullRequestTimelineItems>,
};

export enum Github_PullRequestTimelineItemsItemType {
  PullRequestCommit = 'PULL_REQUEST_COMMIT',
  PullRequestCommitCommentThread = 'PULL_REQUEST_COMMIT_COMMENT_THREAD',
  PullRequestReview = 'PULL_REQUEST_REVIEW',
  PullRequestReviewThread = 'PULL_REQUEST_REVIEW_THREAD',
  PullRequestRevisionMarker = 'PULL_REQUEST_REVISION_MARKER',
  BaseRefChangedEvent = 'BASE_REF_CHANGED_EVENT',
  BaseRefForcePushedEvent = 'BASE_REF_FORCE_PUSHED_EVENT',
  DeployedEvent = 'DEPLOYED_EVENT',
  DeploymentEnvironmentChangedEvent = 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT',
  HeadRefDeletedEvent = 'HEAD_REF_DELETED_EVENT',
  HeadRefForcePushedEvent = 'HEAD_REF_FORCE_PUSHED_EVENT',
  HeadRefRestoredEvent = 'HEAD_REF_RESTORED_EVENT',
  MergedEvent = 'MERGED_EVENT',
  ReviewDismissedEvent = 'REVIEW_DISMISSED_EVENT',
  ReviewRequestedEvent = 'REVIEW_REQUESTED_EVENT',
  ReviewRequestRemovedEvent = 'REVIEW_REQUEST_REMOVED_EVENT',
  ReadyForReviewEvent = 'READY_FOR_REVIEW_EVENT',
  IssueComment = 'ISSUE_COMMENT',
  CrossReferencedEvent = 'CROSS_REFERENCED_EVENT',
  AddedToProjectEvent = 'ADDED_TO_PROJECT_EVENT',
  AssignedEvent = 'ASSIGNED_EVENT',
  ClosedEvent = 'CLOSED_EVENT',
  CommentDeletedEvent = 'COMMENT_DELETED_EVENT',
  ConnectedEvent = 'CONNECTED_EVENT',
  ConvertedNoteToIssueEvent = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  DemilestonedEvent = 'DEMILESTONED_EVENT',
  DisconnectedEvent = 'DISCONNECTED_EVENT',
  LabeledEvent = 'LABELED_EVENT',
  LockedEvent = 'LOCKED_EVENT',
  MarkedAsDuplicateEvent = 'MARKED_AS_DUPLICATE_EVENT',
  MentionedEvent = 'MENTIONED_EVENT',
  MilestonedEvent = 'MILESTONED_EVENT',
  MovedColumnsInProjectEvent = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PinnedEvent = 'PINNED_EVENT',
  ReferencedEvent = 'REFERENCED_EVENT',
  RemovedFromProjectEvent = 'REMOVED_FROM_PROJECT_EVENT',
  RenamedTitleEvent = 'RENAMED_TITLE_EVENT',
  ReopenedEvent = 'REOPENED_EVENT',
  SubscribedEvent = 'SUBSCRIBED_EVENT',
  TransferredEvent = 'TRANSFERRED_EVENT',
  UnassignedEvent = 'UNASSIGNED_EVENT',
  UnlabeledEvent = 'UNLABELED_EVENT',
  UnlockedEvent = 'UNLOCKED_EVENT',
  UserBlockedEvent = 'USER_BLOCKED_EVENT',
  UnmarkedAsDuplicateEvent = 'UNMARKED_AS_DUPLICATE_EVENT',
  UnpinnedEvent = 'UNPINNED_EVENT',
  UnsubscribedEvent = 'UNSUBSCRIBED_EVENT'
}

export enum Github_PullRequestUpdateState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export type Github_PushAllowance = Github_Node & {
   __typename?: 'Github_PushAllowance',
  actor: Maybe<Github_PushAllowanceActor>,
  branchProtectionRule: Maybe<Github_BranchProtectionRule>,
  id: Scalars['ID'],
};

export type Github_PushAllowanceActor = Github_App | Github_Team | Github_User;

export type Github_PushAllowanceConnection = {
   __typename?: 'Github_PushAllowanceConnection',
  edges: Maybe<Array<Maybe<Github_PushAllowanceEdge>>>,
  nodes: Maybe<Array<Maybe<Github_PushAllowance>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_PushAllowanceEdge = {
   __typename?: 'Github_PushAllowanceEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_PushAllowance>,
};

export type Github_RateLimit = {
   __typename?: 'Github_RateLimit',
  cost: Scalars['Int'],
  limit: Scalars['Int'],
  nodeCount: Scalars['Int'],
  remaining: Scalars['Int'],
  resetAt: Scalars['Github_DateTime'],
};

export type Github_Reactable = {
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  reactionGroups: Maybe<Array<Github_ReactionGroup>>,
  reactions: Github_ReactionConnection,
  viewerCanReact: Scalars['Boolean'],
};


export type Github_ReactableReactionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  content: Maybe<Github_ReactionContent>,
  orderBy: Maybe<Github_ReactionOrder>
};

export type Github_ReactingUserConnection = {
   __typename?: 'Github_ReactingUserConnection',
  edges: Maybe<Array<Maybe<Github_ReactingUserEdge>>>,
  nodes: Maybe<Array<Maybe<Github_User>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_ReactingUserEdge = {
   __typename?: 'Github_ReactingUserEdge',
  cursor: Scalars['String'],
  node: Github_User,
  reactedAt: Scalars['Github_DateTime'],
};

export type Github_Reaction = Github_Node & {
   __typename?: 'Github_Reaction',
  content: Github_ReactionContent,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  reactable: Github_Reactable,
  user: Maybe<Github_User>,
};

export type Github_ReactionConnection = {
   __typename?: 'Github_ReactionConnection',
  edges: Maybe<Array<Maybe<Github_ReactionEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Reaction>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
  viewerHasReacted: Scalars['Boolean'],
};

export enum Github_ReactionContent {
  ThumbsUp = 'THUMBS_UP',
  ThumbsDown = 'THUMBS_DOWN',
  Laugh = 'LAUGH',
  Hooray = 'HOORAY',
  Confused = 'CONFUSED',
  Heart = 'HEART',
  Rocket = 'ROCKET',
  Eyes = 'EYES'
}

export type Github_ReactionEdge = {
   __typename?: 'Github_ReactionEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Reaction>,
};

export type Github_ReactionGroup = {
   __typename?: 'Github_ReactionGroup',
  content: Github_ReactionContent,
  createdAt: Maybe<Scalars['Github_DateTime']>,
  subject: Github_Reactable,
  users: Github_ReactingUserConnection,
  viewerHasReacted: Scalars['Boolean'],
};


export type Github_ReactionGroupUsersArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_ReactionOrder = {
  field: Github_ReactionOrderField,
  direction: Github_OrderDirection,
};

export enum Github_ReactionOrderField {
  CreatedAt = 'CREATED_AT'
}

export type Github_ReadyForReviewEvent = Github_Node & Github_UniformResourceLocatable & {
   __typename?: 'Github_ReadyForReviewEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  pullRequest: Github_PullRequest,
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
};

export type Github_Ref = Github_Node & {
   __typename?: 'Github_Ref',
  associatedPullRequests: Github_PullRequestConnection,
  id: Scalars['ID'],
  name: Scalars['String'],
  prefix: Scalars['String'],
  repository: Github_Repository,
  target: Github_GitObject,
};


export type Github_RefAssociatedPullRequestsArgs = {
  states: Maybe<Array<Github_PullRequestState>>,
  labels: Maybe<Array<Scalars['String']>>,
  headRefName: Maybe<Scalars['String']>,
  baseRefName: Maybe<Scalars['String']>,
  orderBy: Maybe<Github_IssueOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_RefConnection = {
   __typename?: 'Github_RefConnection',
  edges: Maybe<Array<Maybe<Github_RefEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Ref>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_RefEdge = {
   __typename?: 'Github_RefEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Ref>,
};

export type Github_ReferencedEvent = Github_Node & {
   __typename?: 'Github_ReferencedEvent',
  actor: Maybe<Github_Actor>,
  commit: Maybe<Github_Commit>,
  commitRepository: Github_Repository,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  isCrossRepository: Scalars['Boolean'],
  isDirectReference: Scalars['Boolean'],
  subject: Github_ReferencedSubject,
};

export type Github_ReferencedSubject = Github_Issue | Github_PullRequest;

export type Github_RefOrder = {
  field: Github_RefOrderField,
  direction: Github_OrderDirection,
};

export enum Github_RefOrderField {
  TagCommitDate = 'TAG_COMMIT_DATE',
  Alphabetical = 'ALPHABETICAL'
}

export type Github_RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  enterpriseId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = {
   __typename?: 'Github_RegenerateEnterpriseIdentityProviderRecoveryCodesPayload',
  clientMutationId: Maybe<Scalars['String']>,
  identityProvider: Maybe<Github_EnterpriseIdentityProvider>,
};

export type Github_RegistryPackage = Github_Node & {
   __typename?: 'Github_RegistryPackage',
  color: Scalars['String'],
  id: Scalars['ID'],
  latestVersion: Maybe<Github_RegistryPackageVersion>,
  name: Scalars['String'],
  nameWithOwner: Scalars['String'],
  packageFileByGuid: Maybe<Github_RegistryPackageFile>,
  packageFileBySha256: Maybe<Github_RegistryPackageFile>,
  packageType: Github_RegistryPackageType,
  preReleaseVersions: Maybe<Github_RegistryPackageVersionConnection>,
  registryPackageType: Maybe<Scalars['String']>,
  repository: Maybe<Github_Repository>,
  statistics: Maybe<Github_RegistryPackageStatistics>,
  tags: Github_RegistryPackageTagConnection,
  topics: Maybe<Github_TopicConnection>,
  version: Maybe<Github_RegistryPackageVersion>,
  versionByPlatform: Maybe<Github_RegistryPackageVersion>,
  versionBySha256: Maybe<Github_RegistryPackageVersion>,
  versions: Github_RegistryPackageVersionConnection,
  versionsByMetadatum: Maybe<Github_RegistryPackageVersionConnection>,
};


export type Github_RegistryPackagePackageFileByGuidArgs = {
  guid: Scalars['String']
};


export type Github_RegistryPackagePackageFileBySha256Args = {
  sha256: Scalars['String']
};


export type Github_RegistryPackagePreReleaseVersionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RegistryPackageTagsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RegistryPackageTopicsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RegistryPackageVersionArgs = {
  version: Scalars['String']
};


export type Github_RegistryPackageVersionByPlatformArgs = {
  version: Scalars['String'],
  platform: Scalars['String']
};


export type Github_RegistryPackageVersionBySha256Args = {
  sha256: Scalars['String']
};


export type Github_RegistryPackageVersionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RegistryPackageVersionsByMetadatumArgs = {
  metadatum: Github_RegistryPackageMetadatum,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_RegistryPackageConnection = {
   __typename?: 'Github_RegistryPackageConnection',
  edges: Maybe<Array<Maybe<Github_RegistryPackageEdge>>>,
  nodes: Maybe<Array<Maybe<Github_RegistryPackage>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_RegistryPackageDependency = Github_Node & {
   __typename?: 'Github_RegistryPackageDependency',
  dependencyType: Github_RegistryPackageDependencyType,
  id: Scalars['ID'],
  name: Scalars['String'],
  version: Scalars['String'],
};

export type Github_RegistryPackageDependencyConnection = {
   __typename?: 'Github_RegistryPackageDependencyConnection',
  edges: Maybe<Array<Maybe<Github_RegistryPackageDependencyEdge>>>,
  nodes: Maybe<Array<Maybe<Github_RegistryPackageDependency>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_RegistryPackageDependencyEdge = {
   __typename?: 'Github_RegistryPackageDependencyEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_RegistryPackageDependency>,
};

export enum Github_RegistryPackageDependencyType {
  Default = 'DEFAULT',
  Dev = 'DEV',
  Test = 'TEST',
  Peer = 'PEER',
  Optional = 'OPTIONAL',
  Bundled = 'BUNDLED'
}

export type Github_RegistryPackageEdge = {
   __typename?: 'Github_RegistryPackageEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_RegistryPackage>,
};

export type Github_RegistryPackageFile = Github_Node & {
   __typename?: 'Github_RegistryPackageFile',
  guid: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  md5: Maybe<Scalars['String']>,
  metadataUrl: Scalars['Github_URI'],
  name: Scalars['String'],
  packageVersion: Github_RegistryPackageVersion,
  sha1: Maybe<Scalars['String']>,
  sha256: Maybe<Scalars['String']>,
  size: Maybe<Scalars['Int']>,
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
};

export type Github_RegistryPackageFileConnection = {
   __typename?: 'Github_RegistryPackageFileConnection',
  edges: Maybe<Array<Maybe<Github_RegistryPackageFileEdge>>>,
  nodes: Maybe<Array<Maybe<Github_RegistryPackageFile>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_RegistryPackageFileEdge = {
   __typename?: 'Github_RegistryPackageFileEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_RegistryPackageFile>,
};

export type Github_RegistryPackageMetadatum = {
  name: Scalars['String'],
  value: Scalars['String'],
  update: Maybe<Scalars['Boolean']>,
};

export type Github_RegistryPackageOwner = {
  id: Scalars['ID'],
  registryPackages: Github_RegistryPackageConnection,
};


export type Github_RegistryPackageOwnerRegistryPackagesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  name: Maybe<Scalars['String']>,
  names: Maybe<Array<Maybe<Scalars['String']>>>,
  repositoryId: Maybe<Scalars['ID']>,
  packageType: Maybe<Github_RegistryPackageType>,
  registryPackageType: Maybe<Scalars['String']>,
  publicOnly?: Maybe<Scalars['Boolean']>
};

export type Github_RegistryPackageSearch = {
  id: Scalars['ID'],
  registryPackagesForQuery: Github_RegistryPackageConnection,
};


export type Github_RegistryPackageSearchRegistryPackagesForQueryArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  query: Maybe<Scalars['String']>,
  packageType: Maybe<Github_RegistryPackageType>
};

export type Github_RegistryPackageStatistics = {
   __typename?: 'Github_RegistryPackageStatistics',
  downloadsThisMonth: Scalars['Int'],
  downloadsThisWeek: Scalars['Int'],
  downloadsThisYear: Scalars['Int'],
  downloadsToday: Scalars['Int'],
  downloadsTotalCount: Scalars['Int'],
};

export type Github_RegistryPackageTag = Github_Node & {
   __typename?: 'Github_RegistryPackageTag',
  id: Scalars['ID'],
  name: Scalars['String'],
  version: Maybe<Github_RegistryPackageVersion>,
};

export type Github_RegistryPackageTagConnection = {
   __typename?: 'Github_RegistryPackageTagConnection',
  edges: Maybe<Array<Maybe<Github_RegistryPackageTagEdge>>>,
  nodes: Maybe<Array<Maybe<Github_RegistryPackageTag>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_RegistryPackageTagEdge = {
   __typename?: 'Github_RegistryPackageTagEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_RegistryPackageTag>,
};

export enum Github_RegistryPackageType {
  Npm = 'NPM',
  Rubygems = 'RUBYGEMS',
  Maven = 'MAVEN',
  Docker = 'DOCKER',
  Debian = 'DEBIAN',
  Nuget = 'NUGET',
  Python = 'PYTHON'
}

export type Github_RegistryPackageVersion = Github_Node & {
   __typename?: 'Github_RegistryPackageVersion',
  dependencies: Github_RegistryPackageDependencyConnection,
  fileByName: Maybe<Github_RegistryPackageFile>,
  files: Github_RegistryPackageFileConnection,
  id: Scalars['ID'],
  installationCommand: Maybe<Scalars['String']>,
  manifest: Maybe<Scalars['String']>,
  platform: Maybe<Scalars['String']>,
  preRelease: Scalars['Boolean'],
  readme: Maybe<Scalars['String']>,
  readmeHtml: Maybe<Scalars['Github_HTML']>,
  registryPackage: Maybe<Github_RegistryPackage>,
  release: Maybe<Github_Release>,
  sha256: Maybe<Scalars['String']>,
  size: Maybe<Scalars['Int']>,
  statistics: Maybe<Github_RegistryPackageVersionStatistics>,
  summary: Maybe<Scalars['String']>,
  updatedAt: Scalars['Github_DateTime'],
  version: Scalars['String'],
  viewerCanEdit: Scalars['Boolean'],
};


export type Github_RegistryPackageVersionDependenciesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  type: Maybe<Github_RegistryPackageDependencyType>
};


export type Github_RegistryPackageVersionFileByNameArgs = {
  filename: Scalars['String']
};


export type Github_RegistryPackageVersionFilesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_RegistryPackageVersionConnection = {
   __typename?: 'Github_RegistryPackageVersionConnection',
  edges: Maybe<Array<Maybe<Github_RegistryPackageVersionEdge>>>,
  nodes: Maybe<Array<Maybe<Github_RegistryPackageVersion>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_RegistryPackageVersionEdge = {
   __typename?: 'Github_RegistryPackageVersionEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_RegistryPackageVersion>,
};

export type Github_RegistryPackageVersionStatistics = {
   __typename?: 'Github_RegistryPackageVersionStatistics',
  downloadsThisMonth: Scalars['Int'],
  downloadsThisWeek: Scalars['Int'],
  downloadsThisYear: Scalars['Int'],
  downloadsToday: Scalars['Int'],
  downloadsTotalCount: Scalars['Int'],
};

export type Github_Release = Github_Node & Github_UniformResourceLocatable & {
   __typename?: 'Github_Release',
  author: Maybe<Github_User>,
  createdAt: Scalars['Github_DateTime'],
  description: Maybe<Scalars['String']>,
  descriptionHTML: Maybe<Scalars['Github_HTML']>,
  id: Scalars['ID'],
  isDraft: Scalars['Boolean'],
  isPrerelease: Scalars['Boolean'],
  name: Maybe<Scalars['String']>,
  publishedAt: Maybe<Scalars['Github_DateTime']>,
  releaseAssets: Github_ReleaseAssetConnection,
  resourcePath: Scalars['Github_URI'],
  shortDescriptionHTML: Maybe<Scalars['Github_HTML']>,
  tag: Maybe<Github_Ref>,
  tagName: Scalars['String'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
};


export type Github_ReleaseReleaseAssetsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  name: Maybe<Scalars['String']>
};


export type Github_ReleaseShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>
};

export type Github_ReleaseAsset = Github_Node & {
   __typename?: 'Github_ReleaseAsset',
  contentType: Scalars['String'],
  createdAt: Scalars['Github_DateTime'],
  downloadCount: Scalars['Int'],
  downloadUrl: Scalars['Github_URI'],
  id: Scalars['ID'],
  name: Scalars['String'],
  release: Maybe<Github_Release>,
  size: Scalars['Int'],
  updatedAt: Scalars['Github_DateTime'],
  uploadedBy: Github_User,
  url: Scalars['Github_URI'],
};

export type Github_ReleaseAssetConnection = {
   __typename?: 'Github_ReleaseAssetConnection',
  edges: Maybe<Array<Maybe<Github_ReleaseAssetEdge>>>,
  nodes: Maybe<Array<Maybe<Github_ReleaseAsset>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_ReleaseAssetEdge = {
   __typename?: 'Github_ReleaseAssetEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_ReleaseAsset>,
};

export type Github_ReleaseConnection = {
   __typename?: 'Github_ReleaseConnection',
  edges: Maybe<Array<Maybe<Github_ReleaseEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Release>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_ReleaseEdge = {
   __typename?: 'Github_ReleaseEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Release>,
};

export type Github_ReleaseOrder = {
  field: Github_ReleaseOrderField,
  direction: Github_OrderDirection,
};

export enum Github_ReleaseOrderField {
  CreatedAt = 'CREATED_AT',
  Name = 'NAME'
}

export type Github_RemoveAssigneesFromAssignableInput = {
  assignableId: Scalars['ID'],
  assigneeIds: Array<Scalars['ID']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_RemoveAssigneesFromAssignablePayload = {
   __typename?: 'Github_RemoveAssigneesFromAssignablePayload',
  assignable: Maybe<Github_Assignable>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_RemovedFromProjectEvent = Github_Node & {
   __typename?: 'Github_RemovedFromProjectEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type Github_RemoveEnterpriseAdminInput = {
  enterpriseId: Scalars['ID'],
  login: Scalars['String'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_RemoveEnterpriseAdminPayload = {
   __typename?: 'Github_RemoveEnterpriseAdminPayload',
  admin: Maybe<Github_User>,
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
  viewer: Maybe<Github_User>,
};

export type Github_RemoveEnterpriseOrganizationInput = {
  enterpriseId: Scalars['ID'],
  organizationId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_RemoveEnterpriseOrganizationPayload = {
   __typename?: 'Github_RemoveEnterpriseOrganizationPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  organization: Maybe<Github_Organization>,
  viewer: Maybe<Github_User>,
};

export type Github_RemoveLabelsFromLabelableInput = {
  labelableId: Scalars['ID'],
  labelIds: Array<Scalars['ID']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_RemoveLabelsFromLabelablePayload = {
   __typename?: 'Github_RemoveLabelsFromLabelablePayload',
  clientMutationId: Maybe<Scalars['String']>,
  labelable: Maybe<Github_Labelable>,
};

export type Github_RemoveOutsideCollaboratorInput = {
  userId: Scalars['ID'],
  organizationId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_RemoveOutsideCollaboratorPayload = {
   __typename?: 'Github_RemoveOutsideCollaboratorPayload',
  clientMutationId: Maybe<Scalars['String']>,
  removedUser: Maybe<Github_User>,
};

export type Github_RemoveReactionInput = {
  subjectId: Scalars['ID'],
  content: Github_ReactionContent,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_RemoveReactionPayload = {
   __typename?: 'Github_RemoveReactionPayload',
  clientMutationId: Maybe<Scalars['String']>,
  reaction: Maybe<Github_Reaction>,
  subject: Maybe<Github_Reactable>,
};

export type Github_RemoveStarInput = {
  starrableId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_RemoveStarPayload = {
   __typename?: 'Github_RemoveStarPayload',
  clientMutationId: Maybe<Scalars['String']>,
  starrable: Maybe<Github_Starrable>,
};

export type Github_RenamedTitleEvent = Github_Node & {
   __typename?: 'Github_RenamedTitleEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  currentTitle: Scalars['String'],
  id: Scalars['ID'],
  previousTitle: Scalars['String'],
  subject: Github_RenamedTitleSubject,
};

export type Github_RenamedTitleSubject = Github_Issue | Github_PullRequest;

export type Github_ReopenedEvent = Github_Node & {
   __typename?: 'Github_ReopenedEvent',
  actor: Maybe<Github_Actor>,
  closable: Github_Closable,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
};

export type Github_ReopenIssueInput = {
  issueId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_ReopenIssuePayload = {
   __typename?: 'Github_ReopenIssuePayload',
  clientMutationId: Maybe<Scalars['String']>,
  issue: Maybe<Github_Issue>,
};

export type Github_ReopenPullRequestInput = {
  pullRequestId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_ReopenPullRequestPayload = {
   __typename?: 'Github_ReopenPullRequestPayload',
  clientMutationId: Maybe<Scalars['String']>,
  pullRequest: Maybe<Github_PullRequest>,
};

export type Github_RepoAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoAccessAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
  visibility: Maybe<Github_RepoAccessAuditEntryVisibility>,
};

export enum Github_RepoAccessAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Github_RepoAddMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoAddMemberAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
  visibility: Maybe<Github_RepoAddMemberAuditEntryVisibility>,
};

export enum Github_RepoAddMemberAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Github_RepoAddTopicAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & Github_TopicAuditEntryData & {
   __typename?: 'Github_RepoAddTopicAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  topic: Maybe<Github_Topic>,
  topicName: Maybe<Scalars['String']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepoArchivedAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_RepoArchivedAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
  visibility: Maybe<Github_RepoArchivedAuditEntryVisibility>,
};

export enum Github_RepoArchivedAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Github_RepoChangeMergeSettingAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_RepoChangeMergeSettingAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  isEnabled: Maybe<Scalars['Boolean']>,
  mergeType: Maybe<Github_RepoChangeMergeSettingAuditEntryMergeType>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export enum Github_RepoChangeMergeSettingAuditEntryMergeType {
  Merge = 'MERGE',
  Rebase = 'REBASE',
  Squash = 'SQUASH'
}

export type Github_RepoConfigDisableAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoConfigDisableAnonymousGitAccessAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepoConfigDisableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoConfigDisableCollaboratorsOnlyAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepoConfigDisableContributorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoConfigDisableContributorsOnlyAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepoConfigDisableSockpuppetDisallowedAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoConfigDisableSockpuppetDisallowedAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepoConfigEnableAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoConfigEnableAnonymousGitAccessAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepoConfigEnableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoConfigEnableCollaboratorsOnlyAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepoConfigEnableContributorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoConfigEnableContributorsOnlyAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepoConfigEnableSockpuppetDisallowedAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoConfigEnableSockpuppetDisallowedAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepoConfigLockAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoConfigLockAnonymousGitAccessAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepoConfigUnlockAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoConfigUnlockAnonymousGitAccessAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepoCreateAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_RepoCreateAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  forkParentName: Maybe<Scalars['String']>,
  forkSourceName: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
  visibility: Maybe<Github_RepoCreateAuditEntryVisibility>,
};

export enum Github_RepoCreateAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Github_RepoDestroyAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_RepoDestroyAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
  visibility: Maybe<Github_RepoDestroyAuditEntryVisibility>,
};

export enum Github_RepoDestroyAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Github_RepoRemoveMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
   __typename?: 'Github_RepoRemoveMemberAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
  visibility: Maybe<Github_RepoRemoveMemberAuditEntryVisibility>,
};

export enum Github_RepoRemoveMemberAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Github_RepoRemoveTopicAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & Github_TopicAuditEntryData & {
   __typename?: 'Github_RepoRemoveTopicAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  topic: Maybe<Github_Topic>,
  topicName: Maybe<Scalars['String']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_Repository = Github_Node & Github_ProjectOwner & Github_RegistryPackageOwner & Github_RegistryPackageSearch & Github_Subscribable & Github_Starrable & Github_UniformResourceLocatable & Github_RepositoryInfo & {
   __typename?: 'Github_Repository',
  assignableUsers: Github_UserConnection,
  branchProtectionRules: Github_BranchProtectionRuleConnection,
  codeOfConduct: Maybe<Github_CodeOfConduct>,
  collaborators: Maybe<Github_RepositoryCollaboratorConnection>,
  commitComments: Github_CommitCommentConnection,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  defaultBranchRef: Maybe<Github_Ref>,
  deleteBranchOnMerge: Scalars['Boolean'],
  deployKeys: Github_DeployKeyConnection,
  deployments: Github_DeploymentConnection,
  description: Maybe<Scalars['String']>,
  descriptionHTML: Scalars['Github_HTML'],
  diskUsage: Maybe<Scalars['Int']>,
  forkCount: Scalars['Int'],
  forks: Github_RepositoryConnection,
  fundingLinks: Array<Github_FundingLink>,
  hasIssuesEnabled: Scalars['Boolean'],
  hasProjectsEnabled: Scalars['Boolean'],
  hasWikiEnabled: Scalars['Boolean'],
  homepageUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  isArchived: Scalars['Boolean'],
  isDisabled: Scalars['Boolean'],
  isFork: Scalars['Boolean'],
  isLocked: Scalars['Boolean'],
  isMirror: Scalars['Boolean'],
  isPrivate: Scalars['Boolean'],
  isTemplate: Scalars['Boolean'],
  issue: Maybe<Github_Issue>,
  issueOrPullRequest: Maybe<Github_IssueOrPullRequest>,
  issues: Github_IssueConnection,
  label: Maybe<Github_Label>,
  labels: Maybe<Github_LabelConnection>,
  languages: Maybe<Github_LanguageConnection>,
  licenseInfo: Maybe<Github_License>,
  lockReason: Maybe<Github_RepositoryLockReason>,
  mentionableUsers: Github_UserConnection,
  mergeCommitAllowed: Scalars['Boolean'],
  milestone: Maybe<Github_Milestone>,
  milestones: Maybe<Github_MilestoneConnection>,
  mirrorUrl: Maybe<Scalars['Github_URI']>,
  name: Scalars['String'],
  nameWithOwner: Scalars['String'],
  object: Maybe<Github_GitObject>,
  openGraphImageUrl: Scalars['Github_URI'],
  owner: Github_RepositoryOwner,
  parent: Maybe<Github_Repository>,
  primaryLanguage: Maybe<Github_Language>,
  project: Maybe<Github_Project>,
  projects: Github_ProjectConnection,
  projectsResourcePath: Scalars['Github_URI'],
  projectsUrl: Scalars['Github_URI'],
  pullRequest: Maybe<Github_PullRequest>,
  pullRequests: Github_PullRequestConnection,
  pushedAt: Maybe<Scalars['Github_DateTime']>,
  rebaseMergeAllowed: Scalars['Boolean'],
  ref: Maybe<Github_Ref>,
  refs: Maybe<Github_RefConnection>,
  registryPackages: Github_RegistryPackageConnection,
  registryPackagesForQuery: Github_RegistryPackageConnection,
  release: Maybe<Github_Release>,
  releases: Github_ReleaseConnection,
  repositoryTopics: Github_RepositoryTopicConnection,
  resourcePath: Scalars['Github_URI'],
  shortDescriptionHTML: Scalars['Github_HTML'],
  squashMergeAllowed: Scalars['Boolean'],
  sshUrl: Scalars['Github_GitSSHRemote'],
  stargazers: Github_StargazerConnection,
  tempCloneToken: Maybe<Scalars['String']>,
  templateRepository: Maybe<Github_Repository>,
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  usesCustomOpenGraphImage: Scalars['Boolean'],
  viewerCanAdminister: Scalars['Boolean'],
  viewerCanCreateProjects: Scalars['Boolean'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerCanUpdateTopics: Scalars['Boolean'],
  viewerHasStarred: Scalars['Boolean'],
  viewerPermission: Maybe<Github_RepositoryPermission>,
  viewerSubscription: Maybe<Github_SubscriptionState>,
  vulnerabilityAlerts: Maybe<Github_RepositoryVulnerabilityAlertConnection>,
  watchers: Github_UserConnection,
};


export type Github_RepositoryAssignableUsersArgs = {
  query: Maybe<Scalars['String']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryBranchProtectionRulesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryCollaboratorsArgs = {
  affiliation: Maybe<Github_CollaboratorAffiliation>,
  query: Maybe<Scalars['String']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryCommitCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryDeployKeysArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryDeploymentsArgs = {
  environments: Maybe<Array<Scalars['String']>>,
  orderBy?: Maybe<Github_DeploymentOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryForksArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>,
  orderBy: Maybe<Github_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  isLocked: Maybe<Scalars['Boolean']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryIssueArgs = {
  number: Scalars['Int']
};


export type Github_RepositoryIssueOrPullRequestArgs = {
  number: Scalars['Int']
};


export type Github_RepositoryIssuesArgs = {
  orderBy: Maybe<Github_IssueOrder>,
  labels: Maybe<Array<Scalars['String']>>,
  states: Maybe<Array<Github_IssueState>>,
  filterBy: Maybe<Github_IssueFilters>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryLabelArgs = {
  name: Scalars['String']
};


export type Github_RepositoryLabelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  query: Maybe<Scalars['String']>
};


export type Github_RepositoryLanguagesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Maybe<Github_LanguageOrder>
};


export type Github_RepositoryMentionableUsersArgs = {
  query: Maybe<Scalars['String']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryMilestoneArgs = {
  number: Scalars['Int']
};


export type Github_RepositoryMilestonesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  states: Maybe<Array<Github_MilestoneState>>,
  orderBy: Maybe<Github_MilestoneOrder>
};


export type Github_RepositoryObjectArgs = {
  oid: Maybe<Scalars['Github_GitObjectID']>,
  expression: Maybe<Scalars['String']>
};


export type Github_RepositoryProjectArgs = {
  number: Scalars['Int']
};


export type Github_RepositoryProjectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>,
  search: Maybe<Scalars['String']>,
  states: Maybe<Array<Github_ProjectState>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryPullRequestArgs = {
  number: Scalars['Int']
};


export type Github_RepositoryPullRequestsArgs = {
  states: Maybe<Array<Github_PullRequestState>>,
  labels: Maybe<Array<Scalars['String']>>,
  headRefName: Maybe<Scalars['String']>,
  baseRefName: Maybe<Scalars['String']>,
  orderBy: Maybe<Github_IssueOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryRefArgs = {
  qualifiedName: Scalars['String']
};


export type Github_RepositoryRefsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  refPrefix: Scalars['String'],
  direction: Maybe<Github_OrderDirection>,
  orderBy: Maybe<Github_RefOrder>
};


export type Github_RepositoryRegistryPackagesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  name: Maybe<Scalars['String']>,
  names: Maybe<Array<Maybe<Scalars['String']>>>,
  repositoryId: Maybe<Scalars['ID']>,
  packageType: Maybe<Github_RegistryPackageType>,
  registryPackageType: Maybe<Scalars['String']>,
  publicOnly?: Maybe<Scalars['Boolean']>
};


export type Github_RepositoryRegistryPackagesForQueryArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  query: Maybe<Scalars['String']>,
  packageType: Maybe<Github_RegistryPackageType>
};


export type Github_RepositoryReleaseArgs = {
  tagName: Scalars['String']
};


export type Github_RepositoryReleasesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Maybe<Github_ReleaseOrder>
};


export type Github_RepositoryRepositoryTopicsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>
};


export type Github_RepositoryStargazersArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Maybe<Github_StarOrder>
};


export type Github_RepositoryVulnerabilityAlertsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryWatchersArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export enum Github_RepositoryAffiliation {
  Owner = 'OWNER',
  Collaborator = 'COLLABORATOR',
  OrganizationMember = 'ORGANIZATION_MEMBER'
}

export type Github_RepositoryAuditEntryData = {
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepositoryCollaboratorConnection = {
   __typename?: 'Github_RepositoryCollaboratorConnection',
  edges: Maybe<Array<Maybe<Github_RepositoryCollaboratorEdge>>>,
  nodes: Maybe<Array<Maybe<Github_User>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_RepositoryCollaboratorEdge = {
   __typename?: 'Github_RepositoryCollaboratorEdge',
  cursor: Scalars['String'],
  node: Github_User,
  permission: Github_RepositoryPermission,
  permissionSources: Maybe<Array<Github_PermissionSource>>,
};

export type Github_RepositoryConnection = {
   __typename?: 'Github_RepositoryConnection',
  edges: Maybe<Array<Maybe<Github_RepositoryEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Repository>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
  totalDiskUsage: Scalars['Int'],
};

export enum Github_RepositoryContributionType {
  Commit = 'COMMIT',
  Issue = 'ISSUE',
  PullRequest = 'PULL_REQUEST',
  Repository = 'REPOSITORY',
  PullRequestReview = 'PULL_REQUEST_REVIEW'
}

export type Github_RepositoryEdge = {
   __typename?: 'Github_RepositoryEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Repository>,
};

export type Github_RepositoryInfo = {
  createdAt: Scalars['Github_DateTime'],
  description: Maybe<Scalars['String']>,
  descriptionHTML: Scalars['Github_HTML'],
  forkCount: Scalars['Int'],
  hasIssuesEnabled: Scalars['Boolean'],
  hasProjectsEnabled: Scalars['Boolean'],
  hasWikiEnabled: Scalars['Boolean'],
  homepageUrl: Maybe<Scalars['Github_URI']>,
  isArchived: Scalars['Boolean'],
  isFork: Scalars['Boolean'],
  isLocked: Scalars['Boolean'],
  isMirror: Scalars['Boolean'],
  isPrivate: Scalars['Boolean'],
  isTemplate: Scalars['Boolean'],
  licenseInfo: Maybe<Github_License>,
  lockReason: Maybe<Github_RepositoryLockReason>,
  mirrorUrl: Maybe<Scalars['Github_URI']>,
  name: Scalars['String'],
  nameWithOwner: Scalars['String'],
  openGraphImageUrl: Scalars['Github_URI'],
  owner: Github_RepositoryOwner,
  pushedAt: Maybe<Scalars['Github_DateTime']>,
  resourcePath: Scalars['Github_URI'],
  shortDescriptionHTML: Scalars['Github_HTML'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  usesCustomOpenGraphImage: Scalars['Boolean'],
};


export type Github_RepositoryInfoShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>
};

export type Github_RepositoryInvitation = Github_Node & {
   __typename?: 'Github_RepositoryInvitation',
  id: Scalars['ID'],
  invitee: Github_User,
  inviter: Github_User,
  permission: Github_RepositoryPermission,
  repository: Maybe<Github_RepositoryInfo>,
};

export type Github_RepositoryInvitationOrder = {
  field: Github_RepositoryInvitationOrderField,
  direction: Github_OrderDirection,
};

export enum Github_RepositoryInvitationOrderField {
  CreatedAt = 'CREATED_AT',
  InviteeLogin = 'INVITEE_LOGIN'
}

export enum Github_RepositoryLockReason {
  Moving = 'MOVING',
  Billing = 'BILLING',
  Rename = 'RENAME',
  Migrating = 'MIGRATING'
}

export type Github_RepositoryNode = {
  repository: Github_Repository,
};

export type Github_RepositoryOrder = {
  field: Github_RepositoryOrderField,
  direction: Github_OrderDirection,
};

export enum Github_RepositoryOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  PushedAt = 'PUSHED_AT',
  Name = 'NAME',
  Stargazers = 'STARGAZERS'
}

export type Github_RepositoryOwner = {
  avatarUrl: Scalars['Github_URI'],
  id: Scalars['ID'],
  login: Scalars['String'],
  pinnedRepositories: Github_RepositoryConnection,
  repositories: Github_RepositoryConnection,
  repository: Maybe<Github_Repository>,
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
};


export type Github_RepositoryOwnerAvatarUrlArgs = {
  size: Maybe<Scalars['Int']>
};


export type Github_RepositoryOwnerPinnedRepositoriesArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>,
  orderBy: Maybe<Github_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  isLocked: Maybe<Scalars['Boolean']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_RepositoryOwnerRepositoriesArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>,
  orderBy: Maybe<Github_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  isLocked: Maybe<Scalars['Boolean']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  isFork: Maybe<Scalars['Boolean']>
};


export type Github_RepositoryOwnerRepositoryArgs = {
  name: Scalars['String']
};

export enum Github_RepositoryPermission {
  Admin = 'ADMIN',
  Maintain = 'MAINTAIN',
  Write = 'WRITE',
  Triage = 'TRIAGE',
  Read = 'READ'
}

export enum Github_RepositoryPrivacy {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Github_RepositoryTopic = Github_Node & Github_UniformResourceLocatable & {
   __typename?: 'Github_RepositoryTopic',
  id: Scalars['ID'],
  resourcePath: Scalars['Github_URI'],
  topic: Github_Topic,
  url: Scalars['Github_URI'],
};

export type Github_RepositoryTopicConnection = {
   __typename?: 'Github_RepositoryTopicConnection',
  edges: Maybe<Array<Maybe<Github_RepositoryTopicEdge>>>,
  nodes: Maybe<Array<Maybe<Github_RepositoryTopic>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_RepositoryTopicEdge = {
   __typename?: 'Github_RepositoryTopicEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_RepositoryTopic>,
};

export enum Github_RepositoryVisibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Internal = 'INTERNAL'
}

export type Github_RepositoryVisibilityChangeDisableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_RepositoryVisibilityChangeDisableAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  enterpriseResourcePath: Maybe<Scalars['Github_URI']>,
  enterpriseSlug: Maybe<Scalars['String']>,
  enterpriseUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepositoryVisibilityChangeEnableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
   __typename?: 'Github_RepositoryVisibilityChangeEnableAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  enterpriseResourcePath: Maybe<Scalars['Github_URI']>,
  enterpriseSlug: Maybe<Scalars['String']>,
  enterpriseUrl: Maybe<Scalars['Github_URI']>,
  id: Scalars['ID'],
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_RepositoryVulnerabilityAlert = Github_Node & Github_RepositoryNode & {
   __typename?: 'Github_RepositoryVulnerabilityAlert',
  affectedRange: Scalars['String'],
  createdAt: Scalars['Github_DateTime'],
  dismissReason: Maybe<Scalars['String']>,
  dismissedAt: Maybe<Scalars['Github_DateTime']>,
  dismisser: Maybe<Github_User>,
  externalIdentifier: Maybe<Scalars['String']>,
  externalReference: Scalars['String'],
  fixedIn: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  packageName: Scalars['String'],
  repository: Github_Repository,
  securityAdvisory: Maybe<Github_SecurityAdvisory>,
  securityVulnerability: Maybe<Github_SecurityVulnerability>,
  vulnerableManifestFilename: Scalars['String'],
  vulnerableManifestPath: Scalars['String'],
  vulnerableRequirements: Maybe<Scalars['String']>,
};

export type Github_RepositoryVulnerabilityAlertConnection = {
   __typename?: 'Github_RepositoryVulnerabilityAlertConnection',
  edges: Maybe<Array<Maybe<Github_RepositoryVulnerabilityAlertEdge>>>,
  nodes: Maybe<Array<Maybe<Github_RepositoryVulnerabilityAlert>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_RepositoryVulnerabilityAlertEdge = {
   __typename?: 'Github_RepositoryVulnerabilityAlertEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_RepositoryVulnerabilityAlert>,
};

export type Github_RequestedReviewer = Github_Mannequin | Github_Team | Github_User;

export type Github_RequestReviewsInput = {
  pullRequestId: Scalars['ID'],
  userIds: Maybe<Array<Scalars['ID']>>,
  teamIds: Maybe<Array<Scalars['ID']>>,
  union: Maybe<Scalars['Boolean']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_RequestReviewsPayload = {
   __typename?: 'Github_RequestReviewsPayload',
  clientMutationId: Maybe<Scalars['String']>,
  pullRequest: Maybe<Github_PullRequest>,
  requestedReviewersEdge: Maybe<Github_UserEdge>,
};

export type Github_ResolveReviewThreadInput = {
  threadId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_ResolveReviewThreadPayload = {
   __typename?: 'Github_ResolveReviewThreadPayload',
  clientMutationId: Maybe<Scalars['String']>,
  thread: Maybe<Github_PullRequestReviewThread>,
};

export type Github_RestrictedContribution = Github_Contribution & {
   __typename?: 'Github_RestrictedContribution',
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['Github_DateTime'],
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
  user: Github_User,
};

export type Github_ReviewDismissalAllowance = Github_Node & {
   __typename?: 'Github_ReviewDismissalAllowance',
  actor: Maybe<Github_ReviewDismissalAllowanceActor>,
  branchProtectionRule: Maybe<Github_BranchProtectionRule>,
  id: Scalars['ID'],
};

export type Github_ReviewDismissalAllowanceActor = Github_Team | Github_User;

export type Github_ReviewDismissalAllowanceConnection = {
   __typename?: 'Github_ReviewDismissalAllowanceConnection',
  edges: Maybe<Array<Maybe<Github_ReviewDismissalAllowanceEdge>>>,
  nodes: Maybe<Array<Maybe<Github_ReviewDismissalAllowance>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_ReviewDismissalAllowanceEdge = {
   __typename?: 'Github_ReviewDismissalAllowanceEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_ReviewDismissalAllowance>,
};

export type Github_ReviewDismissedEvent = Github_Node & Github_UniformResourceLocatable & {
   __typename?: 'Github_ReviewDismissedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  dismissalMessage: Maybe<Scalars['String']>,
  dismissalMessageHTML: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  previousReviewState: Github_PullRequestReviewState,
  pullRequest: Github_PullRequest,
  pullRequestCommit: Maybe<Github_PullRequestCommit>,
  resourcePath: Scalars['Github_URI'],
  review: Maybe<Github_PullRequestReview>,
  url: Scalars['Github_URI'],
};

export type Github_ReviewRequest = Github_Node & {
   __typename?: 'Github_ReviewRequest',
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  pullRequest: Github_PullRequest,
  requestedReviewer: Maybe<Github_RequestedReviewer>,
};

export type Github_ReviewRequestConnection = {
   __typename?: 'Github_ReviewRequestConnection',
  edges: Maybe<Array<Maybe<Github_ReviewRequestEdge>>>,
  nodes: Maybe<Array<Maybe<Github_ReviewRequest>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_ReviewRequestedEvent = Github_Node & {
   __typename?: 'Github_ReviewRequestedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  pullRequest: Github_PullRequest,
  requestedReviewer: Maybe<Github_RequestedReviewer>,
};

export type Github_ReviewRequestEdge = {
   __typename?: 'Github_ReviewRequestEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_ReviewRequest>,
};

export type Github_ReviewRequestRemovedEvent = Github_Node & {
   __typename?: 'Github_ReviewRequestRemovedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  pullRequest: Github_PullRequest,
  requestedReviewer: Maybe<Github_RequestedReviewer>,
};

export type Github_ReviewStatusHovercardContext = Github_HovercardContext & {
   __typename?: 'Github_ReviewStatusHovercardContext',
  message: Scalars['String'],
  octicon: Scalars['String'],
};

export enum Github_SamlDigestAlgorithm {
  Sha1 = 'SHA1',
  Sha256 = 'SHA256',
  Sha384 = 'SHA384',
  Sha512 = 'SHA512'
}

export enum Github_SamlSignatureAlgorithm {
  RsaSha1 = 'RSA_SHA1',
  RsaSha256 = 'RSA_SHA256',
  RsaSha384 = 'RSA_SHA384',
  RsaSha512 = 'RSA_SHA512'
}

export type Github_SavedReply = Github_Node & {
   __typename?: 'Github_SavedReply',
  body: Scalars['String'],
  bodyHTML: Scalars['Github_HTML'],
  databaseId: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  title: Scalars['String'],
  user: Maybe<Github_Actor>,
};

export type Github_SavedReplyConnection = {
   __typename?: 'Github_SavedReplyConnection',
  edges: Maybe<Array<Maybe<Github_SavedReplyEdge>>>,
  nodes: Maybe<Array<Maybe<Github_SavedReply>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_SavedReplyEdge = {
   __typename?: 'Github_SavedReplyEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_SavedReply>,
};

export type Github_SavedReplyOrder = {
  field: Github_SavedReplyOrderField,
  direction: Github_OrderDirection,
};

export enum Github_SavedReplyOrderField {
  UpdatedAt = 'UPDATED_AT'
}

export type Github_SearchResultItem = Github_App | Github_Issue | Github_MarketplaceListing | Github_Organization | Github_PullRequest | Github_Repository | Github_User;

export type Github_SearchResultItemConnection = {
   __typename?: 'Github_SearchResultItemConnection',
  codeCount: Scalars['Int'],
  edges: Maybe<Array<Maybe<Github_SearchResultItemEdge>>>,
  issueCount: Scalars['Int'],
  nodes: Maybe<Array<Maybe<Github_SearchResultItem>>>,
  pageInfo: Github_PageInfo,
  repositoryCount: Scalars['Int'],
  userCount: Scalars['Int'],
  wikiCount: Scalars['Int'],
};

export type Github_SearchResultItemEdge = {
   __typename?: 'Github_SearchResultItemEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_SearchResultItem>,
  textMatches: Maybe<Array<Maybe<Github_TextMatch>>>,
};

export enum Github_SearchType {
  Issue = 'ISSUE',
  Repository = 'REPOSITORY',
  User = 'USER'
}

export type Github_SecurityAdvisory = Github_Node & {
   __typename?: 'Github_SecurityAdvisory',
  databaseId: Maybe<Scalars['Int']>,
  description: Scalars['String'],
  ghsaId: Scalars['String'],
  id: Scalars['ID'],
  identifiers: Array<Github_SecurityAdvisoryIdentifier>,
  origin: Scalars['String'],
  publishedAt: Scalars['Github_DateTime'],
  references: Array<Github_SecurityAdvisoryReference>,
  severity: Github_SecurityAdvisorySeverity,
  summary: Scalars['String'],
  updatedAt: Scalars['Github_DateTime'],
  vulnerabilities: Github_SecurityVulnerabilityConnection,
  withdrawnAt: Maybe<Scalars['Github_DateTime']>,
};


export type Github_SecurityAdvisoryVulnerabilitiesArgs = {
  orderBy?: Maybe<Github_SecurityVulnerabilityOrder>,
  ecosystem: Maybe<Github_SecurityAdvisoryEcosystem>,
  package: Maybe<Scalars['String']>,
  severities: Maybe<Array<Github_SecurityAdvisorySeverity>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_SecurityAdvisoryConnection = {
   __typename?: 'Github_SecurityAdvisoryConnection',
  edges: Maybe<Array<Maybe<Github_SecurityAdvisoryEdge>>>,
  nodes: Maybe<Array<Maybe<Github_SecurityAdvisory>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export enum Github_SecurityAdvisoryEcosystem {
  Rubygems = 'RUBYGEMS',
  Npm = 'NPM',
  Pip = 'PIP',
  Maven = 'MAVEN',
  Nuget = 'NUGET',
  Composer = 'COMPOSER'
}

export type Github_SecurityAdvisoryEdge = {
   __typename?: 'Github_SecurityAdvisoryEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_SecurityAdvisory>,
};

export type Github_SecurityAdvisoryIdentifier = {
   __typename?: 'Github_SecurityAdvisoryIdentifier',
  type: Scalars['String'],
  value: Scalars['String'],
};

export type Github_SecurityAdvisoryIdentifierFilter = {
  type: Github_SecurityAdvisoryIdentifierType,
  value: Scalars['String'],
};

export enum Github_SecurityAdvisoryIdentifierType {
  Cve = 'CVE',
  Ghsa = 'GHSA'
}

export type Github_SecurityAdvisoryOrder = {
  field: Github_SecurityAdvisoryOrderField,
  direction: Github_OrderDirection,
};

export enum Github_SecurityAdvisoryOrderField {
  PublishedAt = 'PUBLISHED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type Github_SecurityAdvisoryPackage = {
   __typename?: 'Github_SecurityAdvisoryPackage',
  ecosystem: Github_SecurityAdvisoryEcosystem,
  name: Scalars['String'],
};

export type Github_SecurityAdvisoryPackageVersion = {
   __typename?: 'Github_SecurityAdvisoryPackageVersion',
  identifier: Scalars['String'],
};

export type Github_SecurityAdvisoryReference = {
   __typename?: 'Github_SecurityAdvisoryReference',
  url: Scalars['Github_URI'],
};

export enum Github_SecurityAdvisorySeverity {
  Low = 'LOW',
  Moderate = 'MODERATE',
  High = 'HIGH',
  Critical = 'CRITICAL'
}

export type Github_SecurityVulnerability = {
   __typename?: 'Github_SecurityVulnerability',
  advisory: Github_SecurityAdvisory,
  firstPatchedVersion: Maybe<Github_SecurityAdvisoryPackageVersion>,
  package: Github_SecurityAdvisoryPackage,
  severity: Github_SecurityAdvisorySeverity,
  updatedAt: Scalars['Github_DateTime'],
  vulnerableVersionRange: Scalars['String'],
};

export type Github_SecurityVulnerabilityConnection = {
   __typename?: 'Github_SecurityVulnerabilityConnection',
  edges: Maybe<Array<Maybe<Github_SecurityVulnerabilityEdge>>>,
  nodes: Maybe<Array<Maybe<Github_SecurityVulnerability>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_SecurityVulnerabilityEdge = {
   __typename?: 'Github_SecurityVulnerabilityEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_SecurityVulnerability>,
};

export type Github_SecurityVulnerabilityOrder = {
  field: Github_SecurityVulnerabilityOrderField,
  direction: Github_OrderDirection,
};

export enum Github_SecurityVulnerabilityOrderField {
  UpdatedAt = 'UPDATED_AT'
}

export type Github_SmimeSignature = Github_GitSignature & {
   __typename?: 'Github_SmimeSignature',
  email: Scalars['String'],
  isValid: Scalars['Boolean'],
  payload: Scalars['String'],
  signature: Scalars['String'],
  signer: Maybe<Github_User>,
  state: Github_GitSignatureState,
  wasSignedByGitHub: Scalars['Boolean'],
};

export type Github_Sponsorable = {
  sponsorsListing: Maybe<Github_SponsorsListing>,
  sponsorshipsAsMaintainer: Github_SponsorshipConnection,
  sponsorshipsAsSponsor: Github_SponsorshipConnection,
};


export type Github_SponsorableSponsorshipsAsMaintainerArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  includePrivate?: Maybe<Scalars['Boolean']>,
  orderBy: Maybe<Github_SponsorshipOrder>
};


export type Github_SponsorableSponsorshipsAsSponsorArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Maybe<Github_SponsorshipOrder>
};

export type Github_Sponsorship = Github_Node & {
   __typename?: 'Github_Sponsorship',
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  maintainer: Github_User,
  privacyLevel: Github_SponsorshipPrivacy,
  sponsor: Maybe<Github_User>,
  sponsorable: Github_Sponsorable,
  tier: Maybe<Github_SponsorsTier>,
};

export type Github_SponsorshipConnection = {
   __typename?: 'Github_SponsorshipConnection',
  edges: Maybe<Array<Maybe<Github_SponsorshipEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Sponsorship>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_SponsorshipEdge = {
   __typename?: 'Github_SponsorshipEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Sponsorship>,
};

export type Github_SponsorshipOrder = {
  field: Github_SponsorshipOrderField,
  direction: Github_OrderDirection,
};

export enum Github_SponsorshipOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum Github_SponsorshipPrivacy {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Github_SponsorsListing = Github_Node & {
   __typename?: 'Github_SponsorsListing',
  createdAt: Scalars['Github_DateTime'],
  fullDescription: Scalars['String'],
  fullDescriptionHTML: Scalars['Github_HTML'],
  id: Scalars['ID'],
  name: Scalars['String'],
  shortDescription: Scalars['String'],
  slug: Scalars['String'],
  tiers: Maybe<Github_SponsorsTierConnection>,
};


export type Github_SponsorsListingTiersArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_SponsorsTierOrder>
};

export type Github_SponsorsTier = Github_Node & {
   __typename?: 'Github_SponsorsTier',
  adminInfo: Maybe<Github_SponsorsTierAdminInfo>,
  createdAt: Scalars['Github_DateTime'],
  description: Scalars['String'],
  descriptionHTML: Scalars['Github_HTML'],
  id: Scalars['ID'],
  monthlyPriceInCents: Scalars['Int'],
  monthlyPriceInDollars: Scalars['Int'],
  name: Scalars['String'],
  sponsorsListing: Github_SponsorsListing,
  updatedAt: Scalars['Github_DateTime'],
};

export type Github_SponsorsTierAdminInfo = {
   __typename?: 'Github_SponsorsTierAdminInfo',
  sponsorships: Github_SponsorshipConnection,
};


export type Github_SponsorsTierAdminInfoSponsorshipsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  includePrivate?: Maybe<Scalars['Boolean']>,
  orderBy: Maybe<Github_SponsorshipOrder>
};

export type Github_SponsorsTierConnection = {
   __typename?: 'Github_SponsorsTierConnection',
  edges: Maybe<Array<Maybe<Github_SponsorsTierEdge>>>,
  nodes: Maybe<Array<Maybe<Github_SponsorsTier>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_SponsorsTierEdge = {
   __typename?: 'Github_SponsorsTierEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_SponsorsTier>,
};

export type Github_SponsorsTierOrder = {
  field: Github_SponsorsTierOrderField,
  direction: Github_OrderDirection,
};

export enum Github_SponsorsTierOrderField {
  CreatedAt = 'CREATED_AT',
  MonthlyPriceInCents = 'MONTHLY_PRICE_IN_CENTS'
}

export type Github_StargazerConnection = {
   __typename?: 'Github_StargazerConnection',
  edges: Maybe<Array<Maybe<Github_StargazerEdge>>>,
  nodes: Maybe<Array<Maybe<Github_User>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_StargazerEdge = {
   __typename?: 'Github_StargazerEdge',
  cursor: Scalars['String'],
  node: Github_User,
  starredAt: Scalars['Github_DateTime'],
};

export type Github_StarOrder = {
  field: Github_StarOrderField,
  direction: Github_OrderDirection,
};

export enum Github_StarOrderField {
  StarredAt = 'STARRED_AT'
}

export type Github_Starrable = {
  id: Scalars['ID'],
  stargazers: Github_StargazerConnection,
  viewerHasStarred: Scalars['Boolean'],
};


export type Github_StarrableStargazersArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Maybe<Github_StarOrder>
};

export type Github_StarredRepositoryConnection = {
   __typename?: 'Github_StarredRepositoryConnection',
  edges: Maybe<Array<Maybe<Github_StarredRepositoryEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Repository>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_StarredRepositoryEdge = {
   __typename?: 'Github_StarredRepositoryEdge',
  cursor: Scalars['String'],
  node: Github_Repository,
  starredAt: Scalars['Github_DateTime'],
};

export type Github_Status = Github_Node & {
   __typename?: 'Github_Status',
  commit: Maybe<Github_Commit>,
  context: Maybe<Github_StatusContext>,
  contexts: Array<Github_StatusContext>,
  id: Scalars['ID'],
  state: Github_StatusState,
};


export type Github_StatusContextArgs = {
  name: Scalars['String']
};

export type Github_StatusContext = Github_Node & {
   __typename?: 'Github_StatusContext',
  avatarUrl: Maybe<Scalars['Github_URI']>,
  commit: Maybe<Github_Commit>,
  context: Scalars['String'],
  createdAt: Scalars['Github_DateTime'],
  creator: Maybe<Github_Actor>,
  description: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  state: Github_StatusState,
  targetUrl: Maybe<Scalars['Github_URI']>,
};


export type Github_StatusContextAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};

export enum Github_StatusState {
  Expected = 'EXPECTED',
  Error = 'ERROR',
  Failure = 'FAILURE',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type Github_SubmitPullRequestReviewInput = {
  pullRequestId: Maybe<Scalars['ID']>,
  pullRequestReviewId: Maybe<Scalars['ID']>,
  event: Github_PullRequestReviewEvent,
  body: Maybe<Scalars['String']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_SubmitPullRequestReviewPayload = {
   __typename?: 'Github_SubmitPullRequestReviewPayload',
  clientMutationId: Maybe<Scalars['String']>,
  pullRequestReview: Maybe<Github_PullRequestReview>,
};

export type Github_Subscribable = {
  id: Scalars['ID'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerSubscription: Maybe<Github_SubscriptionState>,
};

export type Github_SubscribedEvent = Github_Node & {
   __typename?: 'Github_SubscribedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  subscribable: Github_Subscribable,
};

export enum Github_SubscriptionState {
  Unsubscribed = 'UNSUBSCRIBED',
  Subscribed = 'SUBSCRIBED',
  Ignored = 'IGNORED'
}

export type Github_SuggestedReviewer = {
   __typename?: 'Github_SuggestedReviewer',
  isAuthor: Scalars['Boolean'],
  isCommenter: Scalars['Boolean'],
  reviewer: Github_User,
};

export type Github_Tag = Github_Node & Github_GitObject & {
   __typename?: 'Github_Tag',
  abbreviatedOid: Scalars['String'],
  commitResourcePath: Scalars['Github_URI'],
  commitUrl: Scalars['Github_URI'],
  id: Scalars['ID'],
  message: Maybe<Scalars['String']>,
  name: Scalars['String'],
  oid: Scalars['Github_GitObjectID'],
  repository: Github_Repository,
  tagger: Maybe<Github_GitActor>,
  target: Github_GitObject,
};

export type Github_Team = Github_Node & Github_Subscribable & Github_MemberStatusable & {
   __typename?: 'Github_Team',
  ancestors: Github_TeamConnection,
  avatarUrl: Maybe<Scalars['Github_URI']>,
  childTeams: Github_TeamConnection,
  combinedSlug: Scalars['String'],
  createdAt: Scalars['Github_DateTime'],
  description: Maybe<Scalars['String']>,
  discussion: Maybe<Github_TeamDiscussion>,
  discussions: Github_TeamDiscussionConnection,
  discussionsResourcePath: Scalars['Github_URI'],
  discussionsUrl: Scalars['Github_URI'],
  editTeamResourcePath: Scalars['Github_URI'],
  editTeamUrl: Scalars['Github_URI'],
  id: Scalars['ID'],
  invitations: Maybe<Github_OrganizationInvitationConnection>,
  memberStatuses: Github_UserStatusConnection,
  members: Github_TeamMemberConnection,
  membersResourcePath: Scalars['Github_URI'],
  membersUrl: Scalars['Github_URI'],
  name: Scalars['String'],
  newTeamResourcePath: Scalars['Github_URI'],
  newTeamUrl: Scalars['Github_URI'],
  organization: Github_Organization,
  parentTeam: Maybe<Github_Team>,
  privacy: Github_TeamPrivacy,
  repositories: Github_TeamRepositoryConnection,
  repositoriesResourcePath: Scalars['Github_URI'],
  repositoriesUrl: Scalars['Github_URI'],
  resourcePath: Scalars['Github_URI'],
  slug: Scalars['String'],
  teamsResourcePath: Scalars['Github_URI'],
  teamsUrl: Scalars['Github_URI'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  viewerCanAdminister: Scalars['Boolean'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerSubscription: Maybe<Github_SubscriptionState>,
};


export type Github_TeamAncestorsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_TeamAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};


export type Github_TeamChildTeamsArgs = {
  orderBy: Maybe<Github_TeamOrder>,
  userLogins: Maybe<Array<Scalars['String']>>,
  immediateOnly?: Maybe<Scalars['Boolean']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_TeamDiscussionArgs = {
  number: Scalars['Int']
};


export type Github_TeamDiscussionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  isPinned: Maybe<Scalars['Boolean']>,
  orderBy: Maybe<Github_TeamDiscussionOrder>
};


export type Github_TeamInvitationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_TeamMemberStatusesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_UserStatusOrder>
};


export type Github_TeamMembersArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  query: Maybe<Scalars['String']>,
  membership?: Maybe<Github_TeamMembershipType>,
  role: Maybe<Github_TeamMemberRole>,
  orderBy: Maybe<Github_TeamMemberOrder>
};


export type Github_TeamRepositoriesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  query: Maybe<Scalars['String']>,
  orderBy: Maybe<Github_TeamRepositoryOrder>
};

export type Github_TeamAddMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_TeamAuditEntryData & {
   __typename?: 'Github_TeamAddMemberAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  isLdapMapped: Maybe<Scalars['Boolean']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  team: Maybe<Github_Team>,
  teamName: Maybe<Scalars['String']>,
  teamResourcePath: Maybe<Scalars['Github_URI']>,
  teamUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_TeamAddRepositoryAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & Github_TeamAuditEntryData & {
   __typename?: 'Github_TeamAddRepositoryAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  isLdapMapped: Maybe<Scalars['Boolean']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  team: Maybe<Github_Team>,
  teamName: Maybe<Scalars['String']>,
  teamResourcePath: Maybe<Scalars['Github_URI']>,
  teamUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_TeamAuditEntryData = {
  team: Maybe<Github_Team>,
  teamName: Maybe<Scalars['String']>,
  teamResourcePath: Maybe<Scalars['Github_URI']>,
  teamUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_TeamChangeParentTeamAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_TeamAuditEntryData & {
   __typename?: 'Github_TeamChangeParentTeamAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  isLdapMapped: Maybe<Scalars['Boolean']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  parentTeam: Maybe<Github_Team>,
  parentTeamName: Maybe<Scalars['String']>,
  parentTeamNameWas: Maybe<Scalars['String']>,
  parentTeamResourcePath: Maybe<Scalars['Github_URI']>,
  parentTeamUrl: Maybe<Scalars['Github_URI']>,
  parentTeamWas: Maybe<Github_Team>,
  parentTeamWasResourcePath: Maybe<Scalars['Github_URI']>,
  parentTeamWasUrl: Maybe<Scalars['Github_URI']>,
  team: Maybe<Github_Team>,
  teamName: Maybe<Scalars['String']>,
  teamResourcePath: Maybe<Scalars['Github_URI']>,
  teamUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_TeamConnection = {
   __typename?: 'Github_TeamConnection',
  edges: Maybe<Array<Maybe<Github_TeamEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Team>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_TeamDiscussion = Github_Node & Github_Comment & Github_Deletable & Github_Reactable & Github_Subscribable & Github_UniformResourceLocatable & Github_Updatable & Github_UpdatableComment & {
   __typename?: 'Github_TeamDiscussion',
  author: Maybe<Github_Actor>,
  authorAssociation: Github_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['Github_HTML'],
  bodyText: Scalars['String'],
  bodyVersion: Scalars['String'],
  comments: Github_TeamDiscussionCommentConnection,
  commentsResourcePath: Scalars['Github_URI'],
  commentsUrl: Scalars['Github_URI'],
  createdAt: Scalars['Github_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId: Maybe<Scalars['Int']>,
  editor: Maybe<Github_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isPinned: Scalars['Boolean'],
  isPrivate: Scalars['Boolean'],
  lastEditedAt: Maybe<Scalars['Github_DateTime']>,
  number: Scalars['Int'],
  publishedAt: Maybe<Scalars['Github_DateTime']>,
  reactionGroups: Maybe<Array<Github_ReactionGroup>>,
  reactions: Github_ReactionConnection,
  resourcePath: Scalars['Github_URI'],
  team: Github_Team,
  title: Scalars['String'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  userContentEdits: Maybe<Github_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanPin: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<Github_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
  viewerSubscription: Maybe<Github_SubscriptionState>,
};


export type Github_TeamDiscussionCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Maybe<Github_TeamDiscussionCommentOrder>,
  fromComment: Maybe<Scalars['Int']>
};


export type Github_TeamDiscussionReactionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  content: Maybe<Github_ReactionContent>,
  orderBy: Maybe<Github_ReactionOrder>
};


export type Github_TeamDiscussionUserContentEditsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_TeamDiscussionComment = Github_Node & Github_Comment & Github_Deletable & Github_Reactable & Github_UniformResourceLocatable & Github_Updatable & Github_UpdatableComment & {
   __typename?: 'Github_TeamDiscussionComment',
  author: Maybe<Github_Actor>,
  authorAssociation: Github_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['Github_HTML'],
  bodyText: Scalars['String'],
  bodyVersion: Scalars['String'],
  createdAt: Scalars['Github_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId: Maybe<Scalars['Int']>,
  discussion: Github_TeamDiscussion,
  editor: Maybe<Github_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  lastEditedAt: Maybe<Scalars['Github_DateTime']>,
  number: Scalars['Int'],
  publishedAt: Maybe<Scalars['Github_DateTime']>,
  reactionGroups: Maybe<Array<Github_ReactionGroup>>,
  reactions: Github_ReactionConnection,
  resourcePath: Scalars['Github_URI'],
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  userContentEdits: Maybe<Github_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<Github_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type Github_TeamDiscussionCommentReactionsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  content: Maybe<Github_ReactionContent>,
  orderBy: Maybe<Github_ReactionOrder>
};


export type Github_TeamDiscussionCommentUserContentEditsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export type Github_TeamDiscussionCommentConnection = {
   __typename?: 'Github_TeamDiscussionCommentConnection',
  edges: Maybe<Array<Maybe<Github_TeamDiscussionCommentEdge>>>,
  nodes: Maybe<Array<Maybe<Github_TeamDiscussionComment>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_TeamDiscussionCommentEdge = {
   __typename?: 'Github_TeamDiscussionCommentEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_TeamDiscussionComment>,
};

export type Github_TeamDiscussionCommentOrder = {
  field: Github_TeamDiscussionCommentOrderField,
  direction: Github_OrderDirection,
};

export enum Github_TeamDiscussionCommentOrderField {
  Number = 'NUMBER'
}

export type Github_TeamDiscussionConnection = {
   __typename?: 'Github_TeamDiscussionConnection',
  edges: Maybe<Array<Maybe<Github_TeamDiscussionEdge>>>,
  nodes: Maybe<Array<Maybe<Github_TeamDiscussion>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_TeamDiscussionEdge = {
   __typename?: 'Github_TeamDiscussionEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_TeamDiscussion>,
};

export type Github_TeamDiscussionOrder = {
  field: Github_TeamDiscussionOrderField,
  direction: Github_OrderDirection,
};

export enum Github_TeamDiscussionOrderField {
  CreatedAt = 'CREATED_AT'
}

export type Github_TeamEdge = {
   __typename?: 'Github_TeamEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Team>,
};

export type Github_TeamMemberConnection = {
   __typename?: 'Github_TeamMemberConnection',
  edges: Maybe<Array<Maybe<Github_TeamMemberEdge>>>,
  nodes: Maybe<Array<Maybe<Github_User>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_TeamMemberEdge = {
   __typename?: 'Github_TeamMemberEdge',
  cursor: Scalars['String'],
  memberAccessResourcePath: Scalars['Github_URI'],
  memberAccessUrl: Scalars['Github_URI'],
  node: Github_User,
  role: Github_TeamMemberRole,
};

export type Github_TeamMemberOrder = {
  field: Github_TeamMemberOrderField,
  direction: Github_OrderDirection,
};

export enum Github_TeamMemberOrderField {
  Login = 'LOGIN',
  CreatedAt = 'CREATED_AT'
}

export enum Github_TeamMemberRole {
  Maintainer = 'MAINTAINER',
  Member = 'MEMBER'
}

export enum Github_TeamMembershipType {
  Immediate = 'IMMEDIATE',
  ChildTeam = 'CHILD_TEAM',
  All = 'ALL'
}

export type Github_TeamOrder = {
  field: Github_TeamOrderField,
  direction: Github_OrderDirection,
};

export enum Github_TeamOrderField {
  Name = 'NAME'
}

export enum Github_TeamPrivacy {
  Secret = 'SECRET',
  Visible = 'VISIBLE'
}

export type Github_TeamRemoveMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_TeamAuditEntryData & {
   __typename?: 'Github_TeamRemoveMemberAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  isLdapMapped: Maybe<Scalars['Boolean']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  team: Maybe<Github_Team>,
  teamName: Maybe<Scalars['String']>,
  teamResourcePath: Maybe<Scalars['Github_URI']>,
  teamUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_TeamRemoveRepositoryAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & Github_TeamAuditEntryData & {
   __typename?: 'Github_TeamRemoveRepositoryAuditEntry',
  action: Scalars['String'],
  actor: Maybe<Github_AuditEntryActor>,
  actorIp: Maybe<Scalars['String']>,
  actorLocation: Maybe<Github_ActorLocation>,
  actorLogin: Maybe<Scalars['String']>,
  actorResourcePath: Maybe<Scalars['Github_URI']>,
  actorUrl: Maybe<Scalars['Github_URI']>,
  createdAt: Scalars['Github_PreciseDateTime'],
  id: Scalars['ID'],
  isLdapMapped: Maybe<Scalars['Boolean']>,
  operationType: Maybe<Github_OperationType>,
  organization: Maybe<Github_Organization>,
  organizationName: Maybe<Scalars['String']>,
  organizationResourcePath: Maybe<Scalars['Github_URI']>,
  organizationUrl: Maybe<Scalars['Github_URI']>,
  repository: Maybe<Github_Repository>,
  repositoryName: Maybe<Scalars['String']>,
  repositoryResourcePath: Maybe<Scalars['Github_URI']>,
  repositoryUrl: Maybe<Scalars['Github_URI']>,
  team: Maybe<Github_Team>,
  teamName: Maybe<Scalars['String']>,
  teamResourcePath: Maybe<Scalars['Github_URI']>,
  teamUrl: Maybe<Scalars['Github_URI']>,
  user: Maybe<Github_User>,
  userLogin: Maybe<Scalars['String']>,
  userResourcePath: Maybe<Scalars['Github_URI']>,
  userUrl: Maybe<Scalars['Github_URI']>,
};

export type Github_TeamRepositoryConnection = {
   __typename?: 'Github_TeamRepositoryConnection',
  edges: Maybe<Array<Maybe<Github_TeamRepositoryEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Repository>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_TeamRepositoryEdge = {
   __typename?: 'Github_TeamRepositoryEdge',
  cursor: Scalars['String'],
  node: Github_Repository,
  permission: Github_RepositoryPermission,
};

export type Github_TeamRepositoryOrder = {
  field: Github_TeamRepositoryOrderField,
  direction: Github_OrderDirection,
};

export enum Github_TeamRepositoryOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  PushedAt = 'PUSHED_AT',
  Name = 'NAME',
  Permission = 'PERMISSION',
  Stargazers = 'STARGAZERS'
}

export enum Github_TeamRole {
  Admin = 'ADMIN',
  Member = 'MEMBER'
}

export type Github_TextMatch = {
   __typename?: 'Github_TextMatch',
  fragment: Scalars['String'],
  highlights: Array<Github_TextMatchHighlight>,
  property: Scalars['String'],
};

export type Github_TextMatchHighlight = {
   __typename?: 'Github_TextMatchHighlight',
  beginIndice: Scalars['Int'],
  endIndice: Scalars['Int'],
  text: Scalars['String'],
};

export type Github_Topic = Github_Node & Github_Starrable & {
   __typename?: 'Github_Topic',
  id: Scalars['ID'],
  name: Scalars['String'],
  relatedTopics: Array<Github_Topic>,
  stargazers: Github_StargazerConnection,
  viewerHasStarred: Scalars['Boolean'],
};


export type Github_TopicRelatedTopicsArgs = {
  first?: Maybe<Scalars['Int']>
};


export type Github_TopicStargazersArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Maybe<Github_StarOrder>
};

export type Github_TopicAuditEntryData = {
  topic: Maybe<Github_Topic>,
  topicName: Maybe<Scalars['String']>,
};

export type Github_TopicConnection = {
   __typename?: 'Github_TopicConnection',
  edges: Maybe<Array<Maybe<Github_TopicEdge>>>,
  nodes: Maybe<Array<Maybe<Github_Topic>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_TopicEdge = {
   __typename?: 'Github_TopicEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_Topic>,
};

export enum Github_TopicSuggestionDeclineReason {
  NotRelevant = 'NOT_RELEVANT',
  TooSpecific = 'TOO_SPECIFIC',
  PersonalPreference = 'PERSONAL_PREFERENCE',
  TooGeneral = 'TOO_GENERAL'
}

export type Github_TransferIssueInput = {
  issueId: Scalars['ID'],
  repositoryId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_TransferIssuePayload = {
   __typename?: 'Github_TransferIssuePayload',
  clientMutationId: Maybe<Scalars['String']>,
  issue: Maybe<Github_Issue>,
};

export type Github_TransferredEvent = Github_Node & {
   __typename?: 'Github_TransferredEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  fromRepository: Maybe<Github_Repository>,
  id: Scalars['ID'],
  issue: Github_Issue,
};

export type Github_Tree = Github_Node & Github_GitObject & {
   __typename?: 'Github_Tree',
  abbreviatedOid: Scalars['String'],
  commitResourcePath: Scalars['Github_URI'],
  commitUrl: Scalars['Github_URI'],
  entries: Maybe<Array<Github_TreeEntry>>,
  id: Scalars['ID'],
  oid: Scalars['Github_GitObjectID'],
  repository: Github_Repository,
};

export type Github_TreeEntry = {
   __typename?: 'Github_TreeEntry',
  mode: Scalars['Int'],
  name: Scalars['String'],
  object: Maybe<Github_GitObject>,
  oid: Scalars['Github_GitObjectID'],
  repository: Github_Repository,
  type: Scalars['String'],
};

export type Github_UnarchiveRepositoryInput = {
  repositoryId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UnarchiveRepositoryPayload = {
   __typename?: 'Github_UnarchiveRepositoryPayload',
  clientMutationId: Maybe<Scalars['String']>,
  repository: Maybe<Github_Repository>,
};

export type Github_UnassignedEvent = Github_Node & {
   __typename?: 'Github_UnassignedEvent',
  actor: Maybe<Github_Actor>,
  assignable: Github_Assignable,
  assignee: Maybe<Github_Assignee>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  user: Maybe<Github_User>,
};

export type Github_UnfollowUserInput = {
  userId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UnfollowUserPayload = {
   __typename?: 'Github_UnfollowUserPayload',
  clientMutationId: Maybe<Scalars['String']>,
  user: Maybe<Github_User>,
};

export type Github_UniformResourceLocatable = {
  resourcePath: Scalars['Github_URI'],
  url: Scalars['Github_URI'],
};

export type Github_UnknownSignature = Github_GitSignature & {
   __typename?: 'Github_UnknownSignature',
  email: Scalars['String'],
  isValid: Scalars['Boolean'],
  payload: Scalars['String'],
  signature: Scalars['String'],
  signer: Maybe<Github_User>,
  state: Github_GitSignatureState,
  wasSignedByGitHub: Scalars['Boolean'],
};

export type Github_UnlabeledEvent = Github_Node & {
   __typename?: 'Github_UnlabeledEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  label: Github_Label,
  labelable: Github_Labelable,
};

export type Github_UnlinkRepositoryFromProjectInput = {
  projectId: Scalars['ID'],
  repositoryId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UnlinkRepositoryFromProjectPayload = {
   __typename?: 'Github_UnlinkRepositoryFromProjectPayload',
  clientMutationId: Maybe<Scalars['String']>,
  project: Maybe<Github_Project>,
  repository: Maybe<Github_Repository>,
};

export type Github_UnlockedEvent = Github_Node & {
   __typename?: 'Github_UnlockedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  lockable: Github_Lockable,
};

export type Github_UnlockLockableInput = {
  lockableId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UnlockLockablePayload = {
   __typename?: 'Github_UnlockLockablePayload',
  actor: Maybe<Github_Actor>,
  clientMutationId: Maybe<Scalars['String']>,
  unlockedRecord: Maybe<Github_Lockable>,
};

export type Github_UnmarkedAsDuplicateEvent = Github_Node & {
   __typename?: 'Github_UnmarkedAsDuplicateEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
};

export type Github_UnmarkIssueAsDuplicateInput = {
  duplicateId: Scalars['ID'],
  canonicalId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UnmarkIssueAsDuplicatePayload = {
   __typename?: 'Github_UnmarkIssueAsDuplicatePayload',
  clientMutationId: Maybe<Scalars['String']>,
  duplicate: Maybe<Github_IssueOrPullRequest>,
};

export type Github_UnpinnedEvent = Github_Node & {
   __typename?: 'Github_UnpinnedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  issue: Github_Issue,
};

export type Github_UnresolveReviewThreadInput = {
  threadId: Scalars['ID'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UnresolveReviewThreadPayload = {
   __typename?: 'Github_UnresolveReviewThreadPayload',
  clientMutationId: Maybe<Scalars['String']>,
  thread: Maybe<Github_PullRequestReviewThread>,
};

export type Github_UnsubscribedEvent = Github_Node & {
   __typename?: 'Github_UnsubscribedEvent',
  actor: Maybe<Github_Actor>,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  subscribable: Github_Subscribable,
};

export type Github_Updatable = {
  viewerCanUpdate: Scalars['Boolean'],
};

export type Github_UpdatableComment = {
  viewerCannotUpdateReasons: Array<Github_CommentCannotUpdateReason>,
};

export type Github_UpdateBranchProtectionRuleInput = {
  branchProtectionRuleId: Scalars['ID'],
  pattern: Maybe<Scalars['String']>,
  requiresApprovingReviews: Maybe<Scalars['Boolean']>,
  requiredApprovingReviewCount: Maybe<Scalars['Int']>,
  requiresCommitSignatures: Maybe<Scalars['Boolean']>,
  isAdminEnforced: Maybe<Scalars['Boolean']>,
  requiresStatusChecks: Maybe<Scalars['Boolean']>,
  requiresStrictStatusChecks: Maybe<Scalars['Boolean']>,
  requiresCodeOwnerReviews: Maybe<Scalars['Boolean']>,
  dismissesStaleReviews: Maybe<Scalars['Boolean']>,
  restrictsReviewDismissals: Maybe<Scalars['Boolean']>,
  reviewDismissalActorIds: Maybe<Array<Scalars['ID']>>,
  restrictsPushes: Maybe<Scalars['Boolean']>,
  pushActorIds: Maybe<Array<Scalars['ID']>>,
  requiredStatusCheckContexts: Maybe<Array<Scalars['String']>>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateBranchProtectionRulePayload = {
   __typename?: 'Github_UpdateBranchProtectionRulePayload',
  branchProtectionRule: Maybe<Github_BranchProtectionRule>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseActionExecutionCapabilitySettingInput = {
  enterpriseId: Scalars['ID'],
  capability: Github_ActionExecutionCapabilitySetting,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseActionExecutionCapabilitySettingPayload = {
   __typename?: 'Github_UpdateEnterpriseActionExecutionCapabilitySettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseAdministratorRoleInput = {
  enterpriseId: Scalars['ID'],
  login: Scalars['String'],
  role: Github_EnterpriseAdministratorRole,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseAdministratorRolePayload = {
   __typename?: 'Github_UpdateEnterpriseAdministratorRolePayload',
  clientMutationId: Maybe<Scalars['String']>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseEnabledDisabledSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseDefaultRepositoryPermissionSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseDefaultRepositoryPermissionSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseEnabledDisabledSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = {
   __typename?: 'Github_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Maybe<Github_EnterpriseMembersCanCreateRepositoriesSettingValue>,
  membersCanCreateRepositoriesPolicyEnabled: Maybe<Scalars['Boolean']>,
  membersCanCreatePublicRepositories: Maybe<Scalars['Boolean']>,
  membersCanCreatePrivateRepositories: Maybe<Scalars['Boolean']>,
  membersCanCreateInternalRepositories: Maybe<Scalars['Boolean']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseEnabledDisabledSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseMembersCanDeleteIssuesSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseEnabledDisabledSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseEnabledDisabledSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseMembersCanMakePurchasesSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanMakePurchasesSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseMembersCanMakePurchasesSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseEnabledDisabledSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseEnabledDisabledSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseOrganizationProjectsSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseEnabledDisabledSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseOrganizationProjectsSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseOrganizationProjectsSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseProfileInput = {
  enterpriseId: Scalars['ID'],
  name: Maybe<Scalars['String']>,
  description: Maybe<Scalars['String']>,
  websiteUrl: Maybe<Scalars['String']>,
  location: Maybe<Scalars['String']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseProfilePayload = {
   __typename?: 'Github_UpdateEnterpriseProfilePayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
};

export type Github_UpdateEnterpriseRepositoryProjectsSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseEnabledDisabledSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseRepositoryProjectsSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseRepositoryProjectsSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseTeamDiscussionsSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseEnabledDisabledSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseTeamDiscussionsSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseTeamDiscussionsSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: Github_EnterpriseEnabledSettingValue,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = {
   __typename?: 'Github_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload',
  clientMutationId: Maybe<Scalars['String']>,
  enterprise: Maybe<Github_Enterprise>,
  message: Maybe<Scalars['String']>,
};

export type Github_UpdateIssueCommentInput = {
  id: Scalars['ID'],
  body: Scalars['String'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateIssueCommentPayload = {
   __typename?: 'Github_UpdateIssueCommentPayload',
  clientMutationId: Maybe<Scalars['String']>,
  issueComment: Maybe<Github_IssueComment>,
};

export type Github_UpdateIssueInput = {
  id: Scalars['ID'],
  title: Maybe<Scalars['String']>,
  body: Maybe<Scalars['String']>,
  assigneeIds: Maybe<Array<Scalars['ID']>>,
  milestoneId: Maybe<Scalars['ID']>,
  labelIds: Maybe<Array<Scalars['ID']>>,
  state: Maybe<Github_IssueState>,
  projectIds: Maybe<Array<Scalars['ID']>>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateIssuePayload = {
   __typename?: 'Github_UpdateIssuePayload',
  actor: Maybe<Github_Actor>,
  clientMutationId: Maybe<Scalars['String']>,
  issue: Maybe<Github_Issue>,
};

export type Github_UpdateProjectCardInput = {
  projectCardId: Scalars['ID'],
  isArchived: Maybe<Scalars['Boolean']>,
  note: Maybe<Scalars['String']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateProjectCardPayload = {
   __typename?: 'Github_UpdateProjectCardPayload',
  clientMutationId: Maybe<Scalars['String']>,
  projectCard: Maybe<Github_ProjectCard>,
};

export type Github_UpdateProjectColumnInput = {
  projectColumnId: Scalars['ID'],
  name: Scalars['String'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateProjectColumnPayload = {
   __typename?: 'Github_UpdateProjectColumnPayload',
  clientMutationId: Maybe<Scalars['String']>,
  projectColumn: Maybe<Github_ProjectColumn>,
};

export type Github_UpdateProjectInput = {
  projectId: Scalars['ID'],
  name: Maybe<Scalars['String']>,
  body: Maybe<Scalars['String']>,
  state: Maybe<Github_ProjectState>,
  public: Maybe<Scalars['Boolean']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateProjectPayload = {
   __typename?: 'Github_UpdateProjectPayload',
  clientMutationId: Maybe<Scalars['String']>,
  project: Maybe<Github_Project>,
};

export type Github_UpdatePullRequestInput = {
  pullRequestId: Scalars['ID'],
  baseRefName: Maybe<Scalars['String']>,
  title: Maybe<Scalars['String']>,
  body: Maybe<Scalars['String']>,
  state: Maybe<Github_PullRequestUpdateState>,
  maintainerCanModify: Maybe<Scalars['Boolean']>,
  assigneeIds: Maybe<Array<Scalars['ID']>>,
  milestoneId: Maybe<Scalars['ID']>,
  labelIds: Maybe<Array<Scalars['ID']>>,
  projectIds: Maybe<Array<Scalars['ID']>>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdatePullRequestPayload = {
   __typename?: 'Github_UpdatePullRequestPayload',
  actor: Maybe<Github_Actor>,
  clientMutationId: Maybe<Scalars['String']>,
  pullRequest: Maybe<Github_PullRequest>,
};

export type Github_UpdatePullRequestReviewCommentInput = {
  pullRequestReviewCommentId: Scalars['ID'],
  body: Scalars['String'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdatePullRequestReviewCommentPayload = {
   __typename?: 'Github_UpdatePullRequestReviewCommentPayload',
  clientMutationId: Maybe<Scalars['String']>,
  pullRequestReviewComment: Maybe<Github_PullRequestReviewComment>,
};

export type Github_UpdatePullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'],
  body: Scalars['String'],
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdatePullRequestReviewPayload = {
   __typename?: 'Github_UpdatePullRequestReviewPayload',
  clientMutationId: Maybe<Scalars['String']>,
  pullRequestReview: Maybe<Github_PullRequestReview>,
};

export type Github_UpdateRefInput = {
  refId: Scalars['ID'],
  oid: Scalars['Github_GitObjectID'],
  force: Maybe<Scalars['Boolean']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateRefPayload = {
   __typename?: 'Github_UpdateRefPayload',
  clientMutationId: Maybe<Scalars['String']>,
  ref: Maybe<Github_Ref>,
};

export type Github_UpdateRepositoryInput = {
  repositoryId: Scalars['ID'],
  name: Maybe<Scalars['String']>,
  description: Maybe<Scalars['String']>,
  template: Maybe<Scalars['Boolean']>,
  homepageUrl: Maybe<Scalars['Github_URI']>,
  hasWikiEnabled: Maybe<Scalars['Boolean']>,
  hasIssuesEnabled: Maybe<Scalars['Boolean']>,
  hasProjectsEnabled: Maybe<Scalars['Boolean']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateRepositoryPayload = {
   __typename?: 'Github_UpdateRepositoryPayload',
  clientMutationId: Maybe<Scalars['String']>,
  repository: Maybe<Github_Repository>,
};

export type Github_UpdateSubscriptionInput = {
  subscribableId: Scalars['ID'],
  state: Github_SubscriptionState,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateSubscriptionPayload = {
   __typename?: 'Github_UpdateSubscriptionPayload',
  clientMutationId: Maybe<Scalars['String']>,
  subscribable: Maybe<Github_Subscribable>,
};

export type Github_UpdateTeamDiscussionCommentInput = {
  id: Scalars['ID'],
  body: Scalars['String'],
  bodyVersion: Maybe<Scalars['String']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateTeamDiscussionCommentPayload = {
   __typename?: 'Github_UpdateTeamDiscussionCommentPayload',
  clientMutationId: Maybe<Scalars['String']>,
  teamDiscussionComment: Maybe<Github_TeamDiscussionComment>,
};

export type Github_UpdateTeamDiscussionInput = {
  id: Scalars['ID'],
  title: Maybe<Scalars['String']>,
  body: Maybe<Scalars['String']>,
  bodyVersion: Maybe<Scalars['String']>,
  pinned: Maybe<Scalars['Boolean']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateTeamDiscussionPayload = {
   __typename?: 'Github_UpdateTeamDiscussionPayload',
  clientMutationId: Maybe<Scalars['String']>,
  teamDiscussion: Maybe<Github_TeamDiscussion>,
};

export type Github_UpdateTopicsInput = {
  repositoryId: Scalars['ID'],
  topicNames: Array<Scalars['String']>,
  clientMutationId: Maybe<Scalars['String']>,
};

export type Github_UpdateTopicsPayload = {
   __typename?: 'Github_UpdateTopicsPayload',
  clientMutationId: Maybe<Scalars['String']>,
  invalidTopicNames: Maybe<Array<Scalars['String']>>,
  repository: Maybe<Github_Repository>,
};


export type Github_User = Github_Node & Github_Actor & Github_RegistryPackageOwner & Github_RegistryPackageSearch & Github_ProjectOwner & Github_RepositoryOwner & Github_UniformResourceLocatable & Github_ProfileOwner & Github_Sponsorable & {
   __typename?: 'Github_User',
  anyPinnableItems: Scalars['Boolean'],
  avatarUrl: Scalars['Github_URI'],
  bio: Maybe<Scalars['String']>,
  bioHTML: Scalars['Github_HTML'],
  commitComments: Github_CommitCommentConnection,
  company: Maybe<Scalars['String']>,
  companyHTML: Scalars['Github_HTML'],
  contributionsCollection: Github_ContributionsCollection,
  createdAt: Scalars['Github_DateTime'],
  databaseId: Maybe<Scalars['Int']>,
  email: Scalars['String'],
  followers: Github_FollowerConnection,
  following: Github_FollowingConnection,
  gist: Maybe<Github_Gist>,
  gistComments: Github_GistCommentConnection,
  gists: Github_GistConnection,
  hovercard: Github_Hovercard,
  id: Scalars['ID'],
  isBountyHunter: Scalars['Boolean'],
  isCampusExpert: Scalars['Boolean'],
  isDeveloperProgramMember: Scalars['Boolean'],
  isEmployee: Scalars['Boolean'],
  isHireable: Scalars['Boolean'],
  isSiteAdmin: Scalars['Boolean'],
  isViewer: Scalars['Boolean'],
  issueComments: Github_IssueCommentConnection,
  issues: Github_IssueConnection,
  itemShowcase: Github_ProfileItemShowcase,
  location: Maybe<Scalars['String']>,
  login: Scalars['String'],
  name: Maybe<Scalars['String']>,
  organization: Maybe<Github_Organization>,
  organizations: Github_OrganizationConnection,
  pinnableItems: Github_PinnableItemConnection,
  pinnedItems: Github_PinnableItemConnection,
  pinnedItemsRemaining: Scalars['Int'],
  pinnedRepositories: Github_RepositoryConnection,
  project: Maybe<Github_Project>,
  projects: Github_ProjectConnection,
  projectsResourcePath: Scalars['Github_URI'],
  projectsUrl: Scalars['Github_URI'],
  publicKeys: Github_PublicKeyConnection,
  pullRequests: Github_PullRequestConnection,
  registryPackages: Github_RegistryPackageConnection,
  registryPackagesForQuery: Github_RegistryPackageConnection,
  repositories: Github_RepositoryConnection,
  repositoriesContributedTo: Github_RepositoryConnection,
  repository: Maybe<Github_Repository>,
  resourcePath: Scalars['Github_URI'],
  savedReplies: Maybe<Github_SavedReplyConnection>,
  sponsorsListing: Maybe<Github_SponsorsListing>,
  sponsorshipsAsMaintainer: Github_SponsorshipConnection,
  sponsorshipsAsSponsor: Github_SponsorshipConnection,
  starredRepositories: Github_StarredRepositoryConnection,
  status: Maybe<Github_UserStatus>,
  topRepositories: Github_RepositoryConnection,
  updatedAt: Scalars['Github_DateTime'],
  url: Scalars['Github_URI'],
  viewerCanChangePinnedItems: Scalars['Boolean'],
  viewerCanCreateProjects: Scalars['Boolean'],
  viewerCanFollow: Scalars['Boolean'],
  viewerIsFollowing: Scalars['Boolean'],
  watching: Github_RepositoryConnection,
  websiteUrl: Maybe<Scalars['Github_URI']>,
};


export type Github_UserAnyPinnableItemsArgs = {
  type: Maybe<Github_PinnableItemType>
};


export type Github_UserAvatarUrlArgs = {
  size: Maybe<Scalars['Int']>
};


export type Github_UserCommitCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserContributionsCollectionArgs = {
  organizationID: Maybe<Scalars['ID']>,
  from: Maybe<Scalars['Github_DateTime']>,
  to: Maybe<Scalars['Github_DateTime']>
};


export type Github_UserFollowersArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserFollowingArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserGistArgs = {
  name: Scalars['String']
};


export type Github_UserGistCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserGistsArgs = {
  privacy: Maybe<Github_GistPrivacy>,
  orderBy: Maybe<Github_GistOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserHovercardArgs = {
  primarySubjectId: Maybe<Scalars['ID']>
};


export type Github_UserIssueCommentsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserIssuesArgs = {
  orderBy: Maybe<Github_IssueOrder>,
  labels: Maybe<Array<Scalars['String']>>,
  states: Maybe<Array<Github_IssueState>>,
  filterBy: Maybe<Github_IssueFilters>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserOrganizationArgs = {
  login: Scalars['String']
};


export type Github_UserOrganizationsArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserPinnableItemsArgs = {
  types: Maybe<Array<Github_PinnableItemType>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserPinnedItemsArgs = {
  types: Maybe<Array<Github_PinnableItemType>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserPinnedRepositoriesArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>,
  orderBy: Maybe<Github_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  isLocked: Maybe<Scalars['Boolean']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserProjectArgs = {
  number: Scalars['Int']
};


export type Github_UserProjectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>,
  search: Maybe<Scalars['String']>,
  states: Maybe<Array<Github_ProjectState>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserPublicKeysArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserPullRequestsArgs = {
  states: Maybe<Array<Github_PullRequestState>>,
  labels: Maybe<Array<Scalars['String']>>,
  headRefName: Maybe<Scalars['String']>,
  baseRefName: Maybe<Scalars['String']>,
  orderBy: Maybe<Github_IssueOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserRegistryPackagesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  name: Maybe<Scalars['String']>,
  names: Maybe<Array<Maybe<Scalars['String']>>>,
  repositoryId: Maybe<Scalars['ID']>,
  packageType: Maybe<Github_RegistryPackageType>,
  registryPackageType: Maybe<Scalars['String']>,
  publicOnly?: Maybe<Scalars['Boolean']>
};


export type Github_UserRegistryPackagesForQueryArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  query: Maybe<Scalars['String']>,
  packageType: Maybe<Github_RegistryPackageType>
};


export type Github_UserRepositoriesArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>,
  orderBy: Maybe<Github_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  isLocked: Maybe<Scalars['Boolean']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  isFork: Maybe<Scalars['Boolean']>
};


export type Github_UserRepositoriesContributedToArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>,
  orderBy: Maybe<Github_RepositoryOrder>,
  isLocked: Maybe<Scalars['Boolean']>,
  includeUserRepositories: Maybe<Scalars['Boolean']>,
  contributionTypes: Maybe<Array<Maybe<Github_RepositoryContributionType>>>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserRepositoryArgs = {
  name: Scalars['String']
};


export type Github_UserSavedRepliesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Github_SavedReplyOrder>
};


export type Github_UserSponsorshipsAsMaintainerArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  includePrivate?: Maybe<Scalars['Boolean']>,
  orderBy: Maybe<Github_SponsorshipOrder>
};


export type Github_UserSponsorshipsAsSponsorArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Maybe<Github_SponsorshipOrder>
};


export type Github_UserStarredRepositoriesArgs = {
  ownedByViewer: Maybe<Scalars['Boolean']>,
  orderBy: Maybe<Github_StarOrder>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};


export type Github_UserTopRepositoriesArgs = {
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>,
  orderBy: Github_RepositoryOrder,
  since: Maybe<Scalars['Github_DateTime']>
};


export type Github_UserWatchingArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>,
  orderBy: Maybe<Github_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<Github_RepositoryAffiliation>>>,
  isLocked: Maybe<Scalars['Boolean']>,
  after: Maybe<Scalars['String']>,
  before: Maybe<Scalars['String']>,
  first: Maybe<Scalars['Int']>,
  last: Maybe<Scalars['Int']>
};

export enum Github_UserBlockDuration {
  OneDay = 'ONE_DAY',
  ThreeDays = 'THREE_DAYS',
  OneWeek = 'ONE_WEEK',
  OneMonth = 'ONE_MONTH',
  Permanent = 'PERMANENT'
}

export type Github_UserBlockedEvent = Github_Node & {
   __typename?: 'Github_UserBlockedEvent',
  actor: Maybe<Github_Actor>,
  blockDuration: Github_UserBlockDuration,
  createdAt: Scalars['Github_DateTime'],
  id: Scalars['ID'],
  subject: Maybe<Github_User>,
};

export type Github_UserConnection = {
   __typename?: 'Github_UserConnection',
  edges: Maybe<Array<Maybe<Github_UserEdge>>>,
  nodes: Maybe<Array<Maybe<Github_User>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_UserContentEdit = Github_Node & {
   __typename?: 'Github_UserContentEdit',
  createdAt: Scalars['Github_DateTime'],
  deletedAt: Maybe<Scalars['Github_DateTime']>,
  deletedBy: Maybe<Github_Actor>,
  diff: Maybe<Scalars['String']>,
  editedAt: Scalars['Github_DateTime'],
  editor: Maybe<Github_Actor>,
  id: Scalars['ID'],
  updatedAt: Scalars['Github_DateTime'],
};

export type Github_UserContentEditConnection = {
   __typename?: 'Github_UserContentEditConnection',
  edges: Maybe<Array<Maybe<Github_UserContentEditEdge>>>,
  nodes: Maybe<Array<Maybe<Github_UserContentEdit>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_UserContentEditEdge = {
   __typename?: 'Github_UserContentEditEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_UserContentEdit>,
};

export type Github_UserEdge = {
   __typename?: 'Github_UserEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_User>,
};

export type Github_UserStatus = Github_Node & {
   __typename?: 'Github_UserStatus',
  createdAt: Scalars['Github_DateTime'],
  emoji: Maybe<Scalars['String']>,
  emojiHTML: Maybe<Scalars['Github_HTML']>,
  expiresAt: Maybe<Scalars['Github_DateTime']>,
  id: Scalars['ID'],
  indicatesLimitedAvailability: Scalars['Boolean'],
  message: Maybe<Scalars['String']>,
  organization: Maybe<Github_Organization>,
  updatedAt: Scalars['Github_DateTime'],
  user: Github_User,
};

export type Github_UserStatusConnection = {
   __typename?: 'Github_UserStatusConnection',
  edges: Maybe<Array<Maybe<Github_UserStatusEdge>>>,
  nodes: Maybe<Array<Maybe<Github_UserStatus>>>,
  pageInfo: Github_PageInfo,
  totalCount: Scalars['Int'],
};

export type Github_UserStatusEdge = {
   __typename?: 'Github_UserStatusEdge',
  cursor: Scalars['String'],
  node: Maybe<Github_UserStatus>,
};

export type Github_UserStatusOrder = {
  field: Github_UserStatusOrderField,
  direction: Github_OrderDirection,
};

export enum Github_UserStatusOrderField {
  UpdatedAt = 'UPDATED_AT'
}

export type Github_ViewerHovercardContext = Github_HovercardContext & {
   __typename?: 'Github_ViewerHovercardContext',
  message: Scalars['String'],
  octicon: Scalars['String'],
  viewer: Github_User,
};


export type GraphQlSource = Node & {
   __typename?: 'GraphQLSource',
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  typeName: Maybe<Scalars['String']>,
  fieldName: Maybe<Scalars['String']>,
};

export type GraphQlSourceConnection = {
   __typename?: 'GraphQLSourceConnection',
  totalCount: Scalars['Int'],
  edges: Array<GraphQlSourceEdge>,
  nodes: Array<GraphQlSource>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<GraphQlSourceGroupConnection>,
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum
};


export type GraphQlSourceConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: GraphQlSourceFieldsEnum
};

export type GraphQlSourceEdge = {
   __typename?: 'GraphQLSourceEdge',
  next: Maybe<GraphQlSource>,
  node: GraphQlSource,
  previous: Maybe<GraphQlSource>,
};

export enum GraphQlSourceFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  TypeName = 'typeName',
  FieldName = 'fieldName'
}

export type GraphQlSourceFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  typeName: Maybe<StringQueryOperatorInput>,
  fieldName: Maybe<StringQueryOperatorInput>,
};

export type GraphQlSourceGroupConnection = {
   __typename?: 'GraphQLSourceGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<GraphQlSourceEdge>,
  nodes: Array<GraphQlSource>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type GraphQlSourceSortInput = {
  fields: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
   __typename?: 'ImageSharp',
  fixed: Maybe<ImageSharpFixed>,
  resolutions: Maybe<ImageSharpResolutions>,
  fluid: Maybe<ImageSharpFluid>,
  sizes: Maybe<ImageSharpSizes>,
  original: Maybe<ImageSharpOriginal>,
  resize: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width: Maybe<Scalars['Int']>,
  height: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  jpegQuality: Maybe<Scalars['Int']>,
  pngQuality: Maybe<Scalars['Int']>,
  webpQuality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width: Maybe<Scalars['Int']>,
  height: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  jpegQuality: Maybe<Scalars['Int']>,
  pngQuality: Maybe<Scalars['Int']>,
  webpQuality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars['Int']>,
  maxHeight: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  jpegQuality: Maybe<Scalars['Int']>,
  pngQuality: Maybe<Scalars['Int']>,
  webpQuality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth: Maybe<Scalars['Int']>,
  maxHeight: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  jpegQuality: Maybe<Scalars['Int']>,
  pngQuality: Maybe<Scalars['Int']>,
  webpQuality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width: Maybe<Scalars['Int']>,
  height: Maybe<Scalars['Int']>,
  quality: Maybe<Scalars['Int']>,
  jpegQuality: Maybe<Scalars['Int']>,
  pngQuality: Maybe<Scalars['Int']>,
  webpQuality: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
   __typename?: 'ImageSharpConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
   __typename?: 'ImageSharpEdge',
  next: Maybe<ImageSharp>,
  node: ImageSharp,
  previous: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed: Maybe<ImageSharpFixedFilterInput>,
  resolutions: Maybe<ImageSharpResolutionsFilterInput>,
  fluid: Maybe<ImageSharpFluidFilterInput>,
  sizes: Maybe<ImageSharpSizesFilterInput>,
  original: Maybe<ImageSharpOriginalFilterInput>,
  resize: Maybe<ImageSharpResizeFilterInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
   __typename?: 'ImageSharpFixed',
  base64: Maybe<Scalars['String']>,
  tracedSVG: Maybe<Scalars['String']>,
  aspectRatio: Maybe<Scalars['Float']>,
  width: Maybe<Scalars['Float']>,
  height: Maybe<Scalars['Float']>,
  src: Maybe<Scalars['String']>,
  srcSet: Maybe<Scalars['String']>,
  srcWebp: Maybe<Scalars['String']>,
  srcSetWebp: Maybe<Scalars['String']>,
  originalName: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64: Maybe<StringQueryOperatorInput>,
  tracedSVG: Maybe<StringQueryOperatorInput>,
  aspectRatio: Maybe<FloatQueryOperatorInput>,
  width: Maybe<FloatQueryOperatorInput>,
  height: Maybe<FloatQueryOperatorInput>,
  src: Maybe<StringQueryOperatorInput>,
  srcSet: Maybe<StringQueryOperatorInput>,
  srcWebp: Maybe<StringQueryOperatorInput>,
  srcSetWebp: Maybe<StringQueryOperatorInput>,
  originalName: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
   __typename?: 'ImageSharpFluid',
  base64: Maybe<Scalars['String']>,
  tracedSVG: Maybe<Scalars['String']>,
  aspectRatio: Maybe<Scalars['Float']>,
  src: Maybe<Scalars['String']>,
  srcSet: Maybe<Scalars['String']>,
  srcWebp: Maybe<Scalars['String']>,
  srcSetWebp: Maybe<Scalars['String']>,
  sizes: Maybe<Scalars['String']>,
  originalImg: Maybe<Scalars['String']>,
  originalName: Maybe<Scalars['String']>,
  presentationWidth: Maybe<Scalars['Int']>,
  presentationHeight: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64: Maybe<StringQueryOperatorInput>,
  tracedSVG: Maybe<StringQueryOperatorInput>,
  aspectRatio: Maybe<FloatQueryOperatorInput>,
  src: Maybe<StringQueryOperatorInput>,
  srcSet: Maybe<StringQueryOperatorInput>,
  srcWebp: Maybe<StringQueryOperatorInput>,
  srcSetWebp: Maybe<StringQueryOperatorInput>,
  sizes: Maybe<StringQueryOperatorInput>,
  originalImg: Maybe<StringQueryOperatorInput>,
  originalName: Maybe<StringQueryOperatorInput>,
  presentationWidth: Maybe<IntQueryOperatorInput>,
  presentationHeight: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
   __typename?: 'ImageSharpGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
   __typename?: 'ImageSharpOriginal',
  width: Maybe<Scalars['Float']>,
  height: Maybe<Scalars['Float']>,
  src: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width: Maybe<FloatQueryOperatorInput>,
  height: Maybe<FloatQueryOperatorInput>,
  src: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
   __typename?: 'ImageSharpResize',
  src: Maybe<Scalars['String']>,
  tracedSVG: Maybe<Scalars['String']>,
  width: Maybe<Scalars['Int']>,
  height: Maybe<Scalars['Int']>,
  aspectRatio: Maybe<Scalars['Float']>,
  originalName: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src: Maybe<StringQueryOperatorInput>,
  tracedSVG: Maybe<StringQueryOperatorInput>,
  width: Maybe<IntQueryOperatorInput>,
  height: Maybe<IntQueryOperatorInput>,
  aspectRatio: Maybe<FloatQueryOperatorInput>,
  originalName: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
   __typename?: 'ImageSharpResolutions',
  base64: Maybe<Scalars['String']>,
  tracedSVG: Maybe<Scalars['String']>,
  aspectRatio: Maybe<Scalars['Float']>,
  width: Maybe<Scalars['Float']>,
  height: Maybe<Scalars['Float']>,
  src: Maybe<Scalars['String']>,
  srcSet: Maybe<Scalars['String']>,
  srcWebp: Maybe<Scalars['String']>,
  srcSetWebp: Maybe<Scalars['String']>,
  originalName: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64: Maybe<StringQueryOperatorInput>,
  tracedSVG: Maybe<StringQueryOperatorInput>,
  aspectRatio: Maybe<FloatQueryOperatorInput>,
  width: Maybe<FloatQueryOperatorInput>,
  height: Maybe<FloatQueryOperatorInput>,
  src: Maybe<StringQueryOperatorInput>,
  srcSet: Maybe<StringQueryOperatorInput>,
  srcWebp: Maybe<StringQueryOperatorInput>,
  srcSetWebp: Maybe<StringQueryOperatorInput>,
  originalName: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
   __typename?: 'ImageSharpSizes',
  base64: Maybe<Scalars['String']>,
  tracedSVG: Maybe<Scalars['String']>,
  aspectRatio: Maybe<Scalars['Float']>,
  src: Maybe<Scalars['String']>,
  srcSet: Maybe<Scalars['String']>,
  srcWebp: Maybe<Scalars['String']>,
  srcSetWebp: Maybe<Scalars['String']>,
  sizes: Maybe<Scalars['String']>,
  originalImg: Maybe<Scalars['String']>,
  originalName: Maybe<Scalars['String']>,
  presentationWidth: Maybe<Scalars['Int']>,
  presentationHeight: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64: Maybe<StringQueryOperatorInput>,
  tracedSVG: Maybe<StringQueryOperatorInput>,
  aspectRatio: Maybe<FloatQueryOperatorInput>,
  src: Maybe<StringQueryOperatorInput>,
  srcSet: Maybe<StringQueryOperatorInput>,
  srcWebp: Maybe<StringQueryOperatorInput>,
  srcSetWebp: Maybe<StringQueryOperatorInput>,
  sizes: Maybe<StringQueryOperatorInput>,
  originalImg: Maybe<StringQueryOperatorInput>,
  originalName: Maybe<StringQueryOperatorInput>,
  presentationWidth: Maybe<IntQueryOperatorInput>,
  presentationHeight: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
   __typename?: 'Internal',
  content: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description: Maybe<Scalars['String']>,
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType: Maybe<Scalars['Boolean']>,
  mediaType: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>,
  contentDigest: Maybe<StringQueryOperatorInput>,
  description: Maybe<StringQueryOperatorInput>,
  fieldOwners: Maybe<StringQueryOperatorInput>,
  ignoreType: Maybe<BooleanQueryOperatorInput>,
  mediaType: Maybe<StringQueryOperatorInput>,
  owner: Maybe<StringQueryOperatorInput>,
  type: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars['Int']>,
  ne: Maybe<Scalars['Int']>,
  gt: Maybe<Scalars['Int']>,
  gte: Maybe<Scalars['Int']>,
  lt: Maybe<Scalars['Int']>,
  lte: Maybe<Scalars['Int']>,
  in: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars['JSON']>,
  ne: Maybe<Scalars['JSON']>,
  in: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex: Maybe<Scalars['JSON']>,
  glob: Maybe<Scalars['JSON']>,
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
   __typename?: 'MarkdownHeading',
  value: Maybe<Scalars['String']>,
  depth: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  value: Maybe<StringQueryOperatorInput>,
  depth: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch: Maybe<MarkdownHeadingFilterInput>,
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
   __typename?: 'MarkdownRemark',
  id: Scalars['ID'],
  html: Maybe<Scalars['String']>,
  htmlAst: Maybe<Scalars['JSON']>,
  excerpt: Maybe<Scalars['String']>,
  excerptAst: Maybe<Scalars['JSON']>,
  headings: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead: Maybe<Scalars['Int']>,
  tableOfContents: Maybe<Scalars['String']>,
  wordCount: Maybe<MarkdownWordCount>,
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>,
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth: Maybe<Scalars['Int']>,
  heading: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
   __typename?: 'MarkdownRemarkConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
   __typename?: 'MarkdownRemarkEdge',
  next: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous: Maybe<MarkdownRemark>,
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  Html = 'html',
  HtmlAst = 'htmlAst',
  Excerpt = 'excerpt',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  html: Maybe<StringQueryOperatorInput>,
  htmlAst: Maybe<JsonQueryOperatorInput>,
  excerpt: Maybe<StringQueryOperatorInput>,
  excerptAst: Maybe<JsonQueryOperatorInput>,
  headings: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead: Maybe<IntQueryOperatorInput>,
  tableOfContents: Maybe<StringQueryOperatorInput>,
  wordCount: Maybe<MarkdownWordCountFilterInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkGroupConnection = {
   __typename?: 'MarkdownRemarkGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
   __typename?: 'MarkdownWordCount',
  paragraphs: Maybe<Scalars['Int']>,
  sentences: Maybe<Scalars['Int']>,
  words: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs: Maybe<IntQueryOperatorInput>,
  sentences: Maybe<IntQueryOperatorInput>,
  words: Maybe<IntQueryOperatorInput>,
};

export type Mdx = Node & {
   __typename?: 'Mdx',
  rawBody: Scalars['String'],
  fileAbsolutePath: Scalars['String'],
  frontmatter: Maybe<MdxFrontmatter>,
  body: Scalars['String'],
  excerpt: Scalars['String'],
  headings: Maybe<Array<Maybe<MdxHeadingMdx>>>,
  html: Maybe<Scalars['String']>,
  mdxAST: Maybe<Scalars['JSON']>,
  tableOfContents: Maybe<Scalars['JSON']>,
  timeToRead: Maybe<Scalars['Int']>,
  wordCount: Maybe<MdxWordCount>,
  fields: Maybe<MdxFields>,
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
};


export type MdxHeadingsArgs = {
  depth: Maybe<HeadingsMdx>
};


export type MdxTableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>
};

export type MdxConnection = {
   __typename?: 'MdxConnection',
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MdxGroupConnection>,
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum
};


export type MdxConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: MdxFieldsEnum
};

export type MdxEdge = {
   __typename?: 'MdxEdge',
  next: Maybe<Mdx>,
  node: Mdx,
  previous: Maybe<Mdx>,
};

export type MdxFields = {
   __typename?: 'MdxFields',
  slug: Maybe<Scalars['String']>,
};

export enum MdxFieldsEnum {
  RawBody = 'rawBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterCategories = 'frontmatter___categories',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterThumbnailBirthtime = 'frontmatter___thumbnail___birthtime',
  FrontmatterThumbnailBirthtimeMs = 'frontmatter___thumbnail___birthtimeMs',
  FrontmatterThumbnailSourceInstanceName = 'frontmatter___thumbnail___sourceInstanceName',
  FrontmatterThumbnailAbsolutePath = 'frontmatter___thumbnail___absolutePath',
  FrontmatterThumbnailRelativePath = 'frontmatter___thumbnail___relativePath',
  FrontmatterThumbnailExtension = 'frontmatter___thumbnail___extension',
  FrontmatterThumbnailSize = 'frontmatter___thumbnail___size',
  FrontmatterThumbnailPrettySize = 'frontmatter___thumbnail___prettySize',
  FrontmatterThumbnailModifiedTime = 'frontmatter___thumbnail___modifiedTime',
  FrontmatterThumbnailAccessTime = 'frontmatter___thumbnail___accessTime',
  FrontmatterThumbnailChangeTime = 'frontmatter___thumbnail___changeTime',
  FrontmatterThumbnailBirthTime = 'frontmatter___thumbnail___birthTime',
  FrontmatterThumbnailRoot = 'frontmatter___thumbnail___root',
  FrontmatterThumbnailDir = 'frontmatter___thumbnail___dir',
  FrontmatterThumbnailBase = 'frontmatter___thumbnail___base',
  FrontmatterThumbnailExt = 'frontmatter___thumbnail___ext',
  FrontmatterThumbnailName = 'frontmatter___thumbnail___name',
  FrontmatterThumbnailRelativeDirectory = 'frontmatter___thumbnail___relativeDirectory',
  FrontmatterThumbnailDev = 'frontmatter___thumbnail___dev',
  FrontmatterThumbnailMode = 'frontmatter___thumbnail___mode',
  FrontmatterThumbnailNlink = 'frontmatter___thumbnail___nlink',
  FrontmatterThumbnailUid = 'frontmatter___thumbnail___uid',
  FrontmatterThumbnailGid = 'frontmatter___thumbnail___gid',
  FrontmatterThumbnailRdev = 'frontmatter___thumbnail___rdev',
  FrontmatterThumbnailBlksize = 'frontmatter___thumbnail___blksize',
  FrontmatterThumbnailIno = 'frontmatter___thumbnail___ino',
  FrontmatterThumbnailBlocks = 'frontmatter___thumbnail___blocks',
  FrontmatterThumbnailAtimeMs = 'frontmatter___thumbnail___atimeMs',
  FrontmatterThumbnailMtimeMs = 'frontmatter___thumbnail___mtimeMs',
  FrontmatterThumbnailCtimeMs = 'frontmatter___thumbnail___ctimeMs',
  FrontmatterThumbnailAtime = 'frontmatter___thumbnail___atime',
  FrontmatterThumbnailMtime = 'frontmatter___thumbnail___mtime',
  FrontmatterThumbnailCtime = 'frontmatter___thumbnail___ctime',
  FrontmatterThumbnailPublicUrl = 'frontmatter___thumbnail___publicURL',
  FrontmatterThumbnailChildImageSharpId = 'frontmatter___thumbnail___childImageSharp___id',
  FrontmatterThumbnailChildImageSharpChildren = 'frontmatter___thumbnail___childImageSharp___children',
  FrontmatterThumbnailId = 'frontmatter___thumbnail___id',
  FrontmatterThumbnailParentId = 'frontmatter___thumbnail___parent___id',
  FrontmatterThumbnailParentChildren = 'frontmatter___thumbnail___parent___children',
  FrontmatterThumbnailChildren = 'frontmatter___thumbnail___children',
  FrontmatterThumbnailChildrenId = 'frontmatter___thumbnail___children___id',
  FrontmatterThumbnailChildrenChildren = 'frontmatter___thumbnail___children___children',
  FrontmatterThumbnailInternalContent = 'frontmatter___thumbnail___internal___content',
  FrontmatterThumbnailInternalContentDigest = 'frontmatter___thumbnail___internal___contentDigest',
  FrontmatterThumbnailInternalDescription = 'frontmatter___thumbnail___internal___description',
  FrontmatterThumbnailInternalFieldOwners = 'frontmatter___thumbnail___internal___fieldOwners',
  FrontmatterThumbnailInternalIgnoreType = 'frontmatter___thumbnail___internal___ignoreType',
  FrontmatterThumbnailInternalMediaType = 'frontmatter___thumbnail___internal___mediaType',
  FrontmatterThumbnailInternalOwner = 'frontmatter___thumbnail___internal___owner',
  FrontmatterThumbnailInternalType = 'frontmatter___thumbnail___internal___type',
  FrontmatterThumbnailChildMdxRawBody = 'frontmatter___thumbnail___childMdx___rawBody',
  FrontmatterThumbnailChildMdxFileAbsolutePath = 'frontmatter___thumbnail___childMdx___fileAbsolutePath',
  FrontmatterThumbnailChildMdxBody = 'frontmatter___thumbnail___childMdx___body',
  FrontmatterThumbnailChildMdxExcerpt = 'frontmatter___thumbnail___childMdx___excerpt',
  FrontmatterThumbnailChildMdxHeadings = 'frontmatter___thumbnail___childMdx___headings',
  FrontmatterThumbnailChildMdxHtml = 'frontmatter___thumbnail___childMdx___html',
  FrontmatterThumbnailChildMdxMdxAst = 'frontmatter___thumbnail___childMdx___mdxAST',
  FrontmatterThumbnailChildMdxTableOfContents = 'frontmatter___thumbnail___childMdx___tableOfContents',
  FrontmatterThumbnailChildMdxTimeToRead = 'frontmatter___thumbnail___childMdx___timeToRead',
  FrontmatterThumbnailChildMdxId = 'frontmatter___thumbnail___childMdx___id',
  FrontmatterThumbnailChildMdxChildren = 'frontmatter___thumbnail___childMdx___children',
  Body = 'body',
  Excerpt = 'excerpt',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  Html = 'html',
  MdxAst = 'mdxAST',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  FieldsSlug = 'fields___slug',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MdxFieldsFilterInput = {
  slug: Maybe<StringQueryOperatorInput>,
};

export type MdxFilterInput = {
  rawBody: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath: Maybe<StringQueryOperatorInput>,
  frontmatter: Maybe<MdxFrontmatterFilterInput>,
  body: Maybe<StringQueryOperatorInput>,
  excerpt: Maybe<StringQueryOperatorInput>,
  headings: Maybe<MdxHeadingMdxFilterListInput>,
  html: Maybe<StringQueryOperatorInput>,
  mdxAST: Maybe<JsonQueryOperatorInput>,
  tableOfContents: Maybe<JsonQueryOperatorInput>,
  timeToRead: Maybe<IntQueryOperatorInput>,
  wordCount: Maybe<MdxWordCountFilterInput>,
  fields: Maybe<MdxFieldsFilterInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
};

export type MdxFrontmatter = {
   __typename?: 'MdxFrontmatter',
  title: Scalars['String'],
  date: Maybe<Scalars['Date']>,
  categories: Maybe<Array<Maybe<Scalars['String']>>>,
  tags: ("webpack" | "python" | "javascript" | "typescript" | "react" | "gatsby")[],
  thumbnail: Maybe<File>,
};


export type MdxFrontmatterDateArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};

export type MdxFrontmatterFilterInput = {
  title: Maybe<StringQueryOperatorInput>,
  date: Maybe<DateQueryOperatorInput>,
  categories: Maybe<StringQueryOperatorInput>,
  tags: Maybe<StringQueryOperatorInput>,
  thumbnail: Maybe<FileFilterInput>,
};

export type MdxGroupConnection = {
   __typename?: 'MdxGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type MdxHeadingMdx = {
   __typename?: 'MdxHeadingMdx',
  value: Maybe<Scalars['String']>,
  depth: Maybe<Scalars['Int']>,
};

export type MdxHeadingMdxFilterInput = {
  value: Maybe<StringQueryOperatorInput>,
  depth: Maybe<IntQueryOperatorInput>,
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch: Maybe<MdxHeadingMdxFilterInput>,
};

export type MdxSortInput = {
  fields: Maybe<Array<Maybe<MdxFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MdxWordCount = {
   __typename?: 'MdxWordCount',
  paragraphs: Maybe<Scalars['Int']>,
  sentences: Maybe<Scalars['Int']>,
  words: Maybe<Scalars['Int']>,
};

export type MdxWordCountFilterInput = {
  paragraphs: Maybe<IntQueryOperatorInput>,
  sentences: Maybe<IntQueryOperatorInput>,
  words: Maybe<IntQueryOperatorInput>,
};

export type Node = {
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy: Maybe<PotraceTurnPolicy>,
  turdSize: Maybe<Scalars['Float']>,
  alphaMax: Maybe<Scalars['Float']>,
  optCurve: Maybe<Scalars['Boolean']>,
  optTolerance: Maybe<Scalars['Float']>,
  threshold: Maybe<Scalars['Int']>,
  blackOnWhite: Maybe<Scalars['Boolean']>,
  color: Maybe<Scalars['String']>,
  background: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
   __typename?: 'Query',
  markdownRemark: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  imageSharp: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  file: Maybe<File>,
  allFile: FileConnection,
  mdx: Maybe<Mdx>,
  allMdx: MdxConnection,
  directory: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  graphQlSource: Maybe<GraphQlSource>,
  allGraphQlSource: GraphQlSourceConnection,
  site: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  sitePage: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  github: Github,
};


export type QueryMarkdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>,
  html: Maybe<StringQueryOperatorInput>,
  htmlAst: Maybe<JsonQueryOperatorInput>,
  excerpt: Maybe<StringQueryOperatorInput>,
  excerptAst: Maybe<JsonQueryOperatorInput>,
  headings: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead: Maybe<IntQueryOperatorInput>,
  tableOfContents: Maybe<StringQueryOperatorInput>,
  wordCount: Maybe<MarkdownWordCountFilterInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>,
  sort: Maybe<MarkdownRemarkSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>,
  resolutions: Maybe<ImageSharpResolutionsFilterInput>,
  fluid: Maybe<ImageSharpFluidFilterInput>,
  sizes: Maybe<ImageSharpSizesFilterInput>,
  original: Maybe<ImageSharpOriginalFilterInput>,
  resize: Maybe<ImageSharpResizeFilterInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>,
  sort: Maybe<ImageSharpSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QueryFileArgs = {
  birthtime: Maybe<DateQueryOperatorInput>,
  birthtimeMs: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName: Maybe<StringQueryOperatorInput>,
  absolutePath: Maybe<StringQueryOperatorInput>,
  relativePath: Maybe<StringQueryOperatorInput>,
  extension: Maybe<StringQueryOperatorInput>,
  size: Maybe<IntQueryOperatorInput>,
  prettySize: Maybe<StringQueryOperatorInput>,
  modifiedTime: Maybe<DateQueryOperatorInput>,
  accessTime: Maybe<DateQueryOperatorInput>,
  changeTime: Maybe<DateQueryOperatorInput>,
  birthTime: Maybe<DateQueryOperatorInput>,
  root: Maybe<StringQueryOperatorInput>,
  dir: Maybe<StringQueryOperatorInput>,
  base: Maybe<StringQueryOperatorInput>,
  ext: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  relativeDirectory: Maybe<StringQueryOperatorInput>,
  dev: Maybe<IntQueryOperatorInput>,
  mode: Maybe<IntQueryOperatorInput>,
  nlink: Maybe<IntQueryOperatorInput>,
  uid: Maybe<IntQueryOperatorInput>,
  gid: Maybe<IntQueryOperatorInput>,
  rdev: Maybe<IntQueryOperatorInput>,
  blksize: Maybe<IntQueryOperatorInput>,
  ino: Maybe<FloatQueryOperatorInput>,
  blocks: Maybe<IntQueryOperatorInput>,
  atimeMs: Maybe<FloatQueryOperatorInput>,
  mtimeMs: Maybe<FloatQueryOperatorInput>,
  ctimeMs: Maybe<FloatQueryOperatorInput>,
  atime: Maybe<DateQueryOperatorInput>,
  mtime: Maybe<DateQueryOperatorInput>,
  ctime: Maybe<DateQueryOperatorInput>,
  publicURL: Maybe<StringQueryOperatorInput>,
  childImageSharp: Maybe<ImageSharpFilterInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  childMdx: Maybe<MdxFilterInput>
};


export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>,
  sort: Maybe<FileSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QueryMdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath: Maybe<StringQueryOperatorInput>,
  frontmatter: Maybe<MdxFrontmatterFilterInput>,
  body: Maybe<StringQueryOperatorInput>,
  excerpt: Maybe<StringQueryOperatorInput>,
  headings: Maybe<MdxHeadingMdxFilterListInput>,
  html: Maybe<StringQueryOperatorInput>,
  mdxAST: Maybe<JsonQueryOperatorInput>,
  tableOfContents: Maybe<JsonQueryOperatorInput>,
  timeToRead: Maybe<IntQueryOperatorInput>,
  wordCount: Maybe<MdxWordCountFilterInput>,
  fields: Maybe<MdxFieldsFilterInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>
};


export type QueryAllMdxArgs = {
  filter: Maybe<MdxFilterInput>,
  sort: Maybe<MdxSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  sourceInstanceName: Maybe<StringQueryOperatorInput>,
  absolutePath: Maybe<StringQueryOperatorInput>,
  relativePath: Maybe<StringQueryOperatorInput>,
  extension: Maybe<StringQueryOperatorInput>,
  size: Maybe<IntQueryOperatorInput>,
  prettySize: Maybe<StringQueryOperatorInput>,
  modifiedTime: Maybe<DateQueryOperatorInput>,
  accessTime: Maybe<DateQueryOperatorInput>,
  changeTime: Maybe<DateQueryOperatorInput>,
  birthTime: Maybe<DateQueryOperatorInput>,
  root: Maybe<StringQueryOperatorInput>,
  dir: Maybe<StringQueryOperatorInput>,
  base: Maybe<StringQueryOperatorInput>,
  ext: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  relativeDirectory: Maybe<StringQueryOperatorInput>,
  dev: Maybe<IntQueryOperatorInput>,
  mode: Maybe<IntQueryOperatorInput>,
  nlink: Maybe<IntQueryOperatorInput>,
  uid: Maybe<IntQueryOperatorInput>,
  gid: Maybe<IntQueryOperatorInput>,
  rdev: Maybe<IntQueryOperatorInput>,
  blksize: Maybe<IntQueryOperatorInput>,
  ino: Maybe<FloatQueryOperatorInput>,
  blocks: Maybe<IntQueryOperatorInput>,
  atimeMs: Maybe<FloatQueryOperatorInput>,
  mtimeMs: Maybe<FloatQueryOperatorInput>,
  ctimeMs: Maybe<FloatQueryOperatorInput>,
  birthtimeMs: Maybe<FloatQueryOperatorInput>,
  atime: Maybe<DateQueryOperatorInput>,
  mtime: Maybe<DateQueryOperatorInput>,
  ctime: Maybe<DateQueryOperatorInput>,
  birthtime: Maybe<DateQueryOperatorInput>
};


export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>,
  sort: Maybe<DirectorySortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QueryGraphQlSourceArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  typeName: Maybe<StringQueryOperatorInput>,
  fieldName: Maybe<StringQueryOperatorInput>
};


export type QueryAllGraphQlSourceArgs = {
  filter: Maybe<GraphQlSourceFilterInput>,
  sort: Maybe<GraphQlSourceSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>,
  port: Maybe<IntQueryOperatorInput>,
  host: Maybe<StringQueryOperatorInput>,
  polyfill: Maybe<BooleanQueryOperatorInput>,
  pathPrefix: Maybe<StringQueryOperatorInput>,
  buildTime: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>,
  sort: Maybe<SiteSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  resolve: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs: Maybe<StringQueryOperatorInput>,
  browserAPIs: Maybe<StringQueryOperatorInput>,
  ssrAPIs: Maybe<StringQueryOperatorInput>,
  pluginFilepath: Maybe<StringQueryOperatorInput>,
  packageJson: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>,
  sort: Maybe<SitePluginSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  path: Maybe<StringQueryOperatorInput>,
  internalComponentName: Maybe<StringQueryOperatorInput>,
  component: Maybe<StringQueryOperatorInput>,
  componentChunkName: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>,
  context: Maybe<SitePageContextFilterInput>,
  pluginCreator: Maybe<SitePluginFilterInput>,
  pluginCreatorId: Maybe<StringQueryOperatorInput>,
  componentPath: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>,
  sort: Maybe<SitePageSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata: Maybe<SiteSiteMetadata>,
  port: Maybe<Scalars['Int']>,
  host: Maybe<Scalars['String']>,
  polyfill: Maybe<Scalars['Boolean']>,
  pathPrefix: Maybe<Scalars['String']>,
  buildTime: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next: Maybe<Site>,
  node: Site,
  previous: Maybe<Site>,
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataTitleAlt = 'siteMetadata___titleAlt',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataBanner = 'siteMetadata___banner',
  SiteMetadataHeadline = 'siteMetadata___headline',
  SiteMetadataLanguage = 'siteMetadata___language',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataTwitter = 'siteMetadata___twitter',
  SiteMetadataGithub = 'siteMetadata___github',
  SiteMetadataLinkedin = 'siteMetadata___linkedin',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export type SiteFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>,
  port: Maybe<IntQueryOperatorInput>,
  host: Maybe<StringQueryOperatorInput>,
  polyfill: Maybe<BooleanQueryOperatorInput>,
  pathPrefix: Maybe<StringQueryOperatorInput>,
  buildTime: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path: Maybe<Scalars['String']>,
  internalComponentName: Maybe<Scalars['String']>,
  component: Maybe<Scalars['String']>,
  componentChunkName: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>,
  context: Maybe<SitePageContext>,
  pluginCreator: Maybe<SitePlugin>,
  pluginCreatorId: Maybe<Scalars['String']>,
  componentPath: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
   __typename?: 'SitePageContext',
  id: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next: Maybe<SitePage>,
  node: SitePage,
  previous: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsDisplayName = 'pluginCreator___pluginOptions___displayName',
  PluginCreatorPluginOptionsSsr = 'pluginCreator___pluginOptions___ssr',
  PluginCreatorPluginOptionsTypeName = 'pluginCreator___pluginOptions___typeName',
  PluginCreatorPluginOptionsFieldName = 'pluginCreator___pluginOptions___fieldName',
  PluginCreatorPluginOptionsUrl = 'pluginCreator___pluginOptions___url',
  PluginCreatorPluginOptionsHeadersAuthorization = 'pluginCreator___pluginOptions___headers___Authorization',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsGatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  PluginCreatorPluginOptionsGatsbyRemarkPluginsResolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  path: Maybe<StringQueryOperatorInput>,
  internalComponentName: Maybe<StringQueryOperatorInput>,
  component: Maybe<StringQueryOperatorInput>,
  componentChunkName: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>,
  context: Maybe<SitePageContextFilterInput>,
  pluginCreator: Maybe<SitePluginFilterInput>,
  pluginCreatorId: Maybe<StringQueryOperatorInput>,
  componentPath: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve: Maybe<Scalars['String']>,
  name: Maybe<Scalars['String']>,
  version: Maybe<Scalars['String']>,
  pluginOptions: Maybe<SitePluginPluginOptions>,
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath: Maybe<Scalars['String']>,
  packageJson: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next: Maybe<SitePlugin>,
  node: SitePlugin,
  previous: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsDisplayName = 'pluginOptions___displayName',
  PluginOptionsSsr = 'pluginOptions___ssr',
  PluginOptionsTypeName = 'pluginOptions___typeName',
  PluginOptionsFieldName = 'pluginOptions___fieldName',
  PluginOptionsUrl = 'pluginOptions___url',
  PluginOptionsHeadersAuthorization = 'pluginOptions___headers___Authorization',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsGatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  PluginOptionsGatsbyRemarkPluginsResolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginOptionsGatsbyRemarkPluginsOptionsClassPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___classPrefix',
  PluginOptionsGatsbyRemarkPluginsOptionsShowLineNumbers = 'pluginOptions___gatsbyRemarkPlugins___options___showLineNumbers',
  PluginOptionsGatsbyRemarkPluginsOptionsNoInlineHighlight = 'pluginOptions___gatsbyRemarkPlugins___options___noInlineHighlight',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  resolve: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs: Maybe<StringQueryOperatorInput>,
  browserAPIs: Maybe<StringQueryOperatorInput>,
  ssrAPIs: Maybe<StringQueryOperatorInput>,
  pluginFilepath: Maybe<StringQueryOperatorInput>,
  packageJson: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name: Maybe<Scalars['String']>,
  description: Maybe<Scalars['String']>,
  version: Maybe<Scalars['String']>,
  main: Maybe<Scalars['String']>,
  author: Maybe<Scalars['String']>,
  license: Maybe<Scalars['String']>,
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name: Maybe<Scalars['String']>,
  version: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name: Maybe<Scalars['String']>,
  version: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name: Maybe<StringQueryOperatorInput>,
  description: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
  main: Maybe<StringQueryOperatorInput>,
  author: Maybe<StringQueryOperatorInput>,
  license: Maybe<StringQueryOperatorInput>,
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name: Maybe<Scalars['String']>,
  version: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  displayName: Maybe<Scalars['Boolean']>,
  ssr: Maybe<Scalars['Boolean']>,
  typeName: Maybe<Scalars['String']>,
  fieldName: Maybe<Scalars['String']>,
  url: Maybe<Scalars['String']>,
  headers: Maybe<SitePluginPluginOptionsHeaders>,
  name: Maybe<Scalars['String']>,
  path: Maybe<Scalars['String']>,
  gatsbyRemarkPlugins: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>,
  short_name: Maybe<Scalars['String']>,
  start_url: Maybe<Scalars['String']>,
  background_color: Maybe<Scalars['String']>,
  theme_color: Maybe<Scalars['String']>,
  display: Maybe<Scalars['String']>,
  icon: Maybe<Scalars['String']>,
  pathCheck: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  displayName: Maybe<BooleanQueryOperatorInput>,
  ssr: Maybe<BooleanQueryOperatorInput>,
  typeName: Maybe<StringQueryOperatorInput>,
  fieldName: Maybe<StringQueryOperatorInput>,
  url: Maybe<StringQueryOperatorInput>,
  headers: Maybe<SitePluginPluginOptionsHeadersFilterInput>,
  name: Maybe<StringQueryOperatorInput>,
  path: Maybe<StringQueryOperatorInput>,
  gatsbyRemarkPlugins: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>,
  short_name: Maybe<StringQueryOperatorInput>,
  start_url: Maybe<StringQueryOperatorInput>,
  background_color: Maybe<StringQueryOperatorInput>,
  theme_color: Maybe<StringQueryOperatorInput>,
  display: Maybe<StringQueryOperatorInput>,
  icon: Maybe<StringQueryOperatorInput>,
  pathCheck: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
   __typename?: 'SitePluginPluginOptionsGatsbyRemarkPlugins',
  resolve: Maybe<Scalars['String']>,
  options: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve: Maybe<StringQueryOperatorInput>,
  options: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
   __typename?: 'SitePluginPluginOptionsGatsbyRemarkPluginsOptions',
  classPrefix: Maybe<Scalars['String']>,
  showLineNumbers: Maybe<Scalars['Boolean']>,
  noInlineHighlight: Maybe<Scalars['Boolean']>,
  prompt: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsPrompt>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  classPrefix: Maybe<StringQueryOperatorInput>,
  showLineNumbers: Maybe<BooleanQueryOperatorInput>,
  noInlineHighlight: Maybe<BooleanQueryOperatorInput>,
  prompt: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsPromptFilterInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsPrompt = {
   __typename?: 'SitePluginPluginOptionsGatsbyRemarkPluginsOptionsPrompt',
  user: Maybe<Scalars['String']>,
  host: Maybe<Scalars['String']>,
  global: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsPromptFilterInput = {
  user: Maybe<StringQueryOperatorInput>,
  host: Maybe<StringQueryOperatorInput>,
  global: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsHeaders = {
   __typename?: 'SitePluginPluginOptionsHeaders',
  Authorization: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  Authorization: Maybe<StringQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  title: Maybe<Scalars['String']>,
  titleAlt: Maybe<Scalars['String']>,
  description: Maybe<Scalars['String']>,
  banner: Maybe<Scalars['String']>,
  headline: Maybe<Scalars['String']>,
  language: Maybe<Scalars['String']>,
  author: Maybe<Scalars['String']>,
  twitter: Maybe<Scalars['String']>,
  github: Maybe<Scalars['String']>,
  linkedin: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  title: Maybe<StringQueryOperatorInput>,
  titleAlt: Maybe<StringQueryOperatorInput>,
  description: Maybe<StringQueryOperatorInput>,
  banner: Maybe<StringQueryOperatorInput>,
  headline: Maybe<StringQueryOperatorInput>,
  language: Maybe<StringQueryOperatorInput>,
  author: Maybe<StringQueryOperatorInput>,
  twitter: Maybe<StringQueryOperatorInput>,
  github: Maybe<StringQueryOperatorInput>,
  linkedin: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars['String']>,
  ne: Maybe<Scalars['String']>,
  in: Maybe<Array<Maybe<Scalars['String']>>>,
  nin: Maybe<Array<Maybe<Scalars['String']>>>,
  regex: Maybe<Scalars['String']>,
  glob: Maybe<Scalars['String']>,
};

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { placeholderImage: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      )> }
    )> }
  )> }
);

export type PageQueryQueryVariables = {};


export type PageQueryQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )> }
);

export type SeoQueryVariables = {};


export type SeoQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & Pick<Site, 'buildTime'>
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'headline' | 'language' | 'author' | 'twitter' | 'github' | 'linkedin'>
      & { defaultTitle: SiteSiteMetadata['title'], defaultDescription: SiteSiteMetadata['description'], defaultBanner: SiteSiteMetadata['banner'] }
    )> }
  )> }
);

export type GithubQueryQueryVariables = {};


export type GithubQueryQuery = (
  { __typename?: 'Query' }
  & { githubCovers: (
    { __typename?: 'ImageSharpConnection' }
    & { edges: Array<(
      { __typename?: 'ImageSharpEdge' }
      & { node: (
        { __typename?: 'ImageSharp' }
        & { fluid: Maybe<(
          { __typename?: 'ImageSharpFluid' }
          & Pick<ImageSharpFluid, 'originalName'>
          & GatsbyImageSharpFluidFragment
        )> }
      ) }
    )> }
  ), defaultCover: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      )> }
    )> }
  )> }
);

export type IndexQueryQueryVariables = {};


export type IndexQueryQuery = (
  { __typename?: 'Query' }
  & { defaultCover: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      )> }
    )> }
  )>, githubCovers: (
    { __typename?: 'ImageSharpConnection' }
    & { edges: Array<(
      { __typename?: 'ImageSharpEdge' }
      & { node: (
        { __typename?: 'ImageSharp' }
        & { fluid: Maybe<(
          { __typename?: 'ImageSharpFluid' }
          & Pick<ImageSharpFluid, 'originalName'>
          & GatsbyImageSharpFluidFragment
        )> }
      ) }
    )> }
  ), placeholderImage: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      )> }
    )> }
  )>, latest: (
    { __typename?: 'MdxConnection' }
    & { edges: Array<(
      { __typename?: 'MdxEdge' }
      & { node: (
        { __typename?: 'Mdx' }
        & Pick<Mdx, 'timeToRead' | 'excerpt'>
        & { fields: Maybe<(
          { __typename?: 'MdxFields' }
          & Pick<MdxFields, 'slug'>
        )>, frontmatter: Maybe<(
          { __typename?: 'MdxFrontmatter' }
          & Pick<MdxFrontmatter, 'title' | 'tags' | 'categories' | 'date'>
          & { thumbnail: Maybe<(
            { __typename?: 'File' }
            & { childImageSharp: Maybe<(
              { __typename?: 'ImageSharp' }
              & { fixed: Maybe<(
                { __typename?: 'ImageSharpFixed' }
                & GatsbyImageSharpFixedFragment
              )> }
            )> }
          )> }
        )> }
      ) }
    )> }
  ), github: (
    { __typename?: 'Github' }
    & { user: Maybe<(
      { __typename?: 'Github_User' }
      & { repositories: (
        { __typename?: 'Github_RepositoryConnection' }
        & { edges: Maybe<Array<Maybe<(
          { __typename?: 'Github_RepositoryEdge' }
          & { node: Maybe<(
            { __typename?: 'Github_Repository' }
            & Pick<Github_Repository, 'name' | 'url' | 'description'>
            & { stargazers: (
              { __typename?: 'Github_StargazerConnection' }
              & Pick<Github_StargazerConnection, 'totalCount'>
            ), repositoryTopics: (
              { __typename?: 'Github_RepositoryTopicConnection' }
              & { edges: Maybe<Array<Maybe<(
                { __typename?: 'Github_RepositoryTopicEdge' }
                & { node: Maybe<(
                  { __typename?: 'Github_RepositoryTopic' }
                  & { topic: (
                    { __typename?: 'Github_Topic' }
                    & Pick<Github_Topic, 'name'>
                  ) }
                )> }
              )>>> }
            ) }
          )> }
        )>>> }
      ) }
    )> }
  ) }
);

export type BlogPostQueryQueryVariables = {
  id: Maybe<Scalars['String']>
};


export type BlogPostQueryQuery = (
  { __typename?: 'Query' }
  & { mdx: Maybe<(
    { __typename?: 'Mdx' }
    & Pick<Mdx, 'body' | 'excerpt' | 'id' | 'timeToRead'>
    & { fields: Maybe<(
      { __typename?: 'MdxFields' }
      & Pick<MdxFields, 'slug'>
    )>, frontmatter: Maybe<(
      { __typename?: 'MdxFrontmatter' }
      & Pick<MdxFrontmatter, 'categories' | 'title' | 'date' | 'tags'>
      & { thumbnail: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp: Maybe<(
          { __typename?: 'ImageSharp' }
          & { fixed: Maybe<(
            { __typename?: 'ImageSharpFixed' }
            & GatsbyImageSharpFixedFragment
          )> }
        )> }
      )> }
    )> }
  )> }
);
