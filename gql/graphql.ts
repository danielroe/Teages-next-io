/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  FileSize: { input: any; output: any; }
  Long: { input: any; output: any; }
  Object: { input: any; output: any; }
};

export type Avatar = {
  __typename?: 'Avatar';
  large?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  sized?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
};


export type AvatarSizedArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type Badge = {
  __typename?: 'Badge';
  description?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['Object']['output']>;
  title: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

export type Chart = {
  __typename?: 'Chart';
  difficulty: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  leaderboard: Array<LeaderboardRecord>;
  name?: Maybe<Scalars['String']['output']>;
  notesCount: Scalars['Int']['output'];
  numPlayers: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};


export type ChartLeaderboardArgs = {
  limit: Scalars['Int']['input'];
  start: Scalars['Int']['input'];
};

export type Collection = {
  __typename?: 'Collection';
  cover?: Maybe<Image>;
  creationDate: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  levelCount: Scalars['Int']['output'];
  levels: Array<Level>;
  metadata: ResourceMeta;
  modificationDate: Scalars['Date']['output'];
  owner?: Maybe<User>;
  slogan: Scalars['String']['output'];
  state: ResourceState;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};


export type CollectionLevelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionInput = {
  coverPath?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  levelIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  metadata?: InputMaybe<CollectionMetaInput>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<ResourceState>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionListing = {
  __typename?: 'CollectionListing';
  cover?: Maybe<Image>;
  creationDate: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  levelCount: Scalars['Int']['output'];
  metadata: ResourceMeta;
  modificationDate: Scalars['Date']['output'];
  owner?: Maybe<User>;
  slogan: Scalars['String']['output'];
  state: ResourceState;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

export type CollectionMetaInput = {
  cover?: InputMaybe<ResourceMetaInput>;
};

export type CollectionUserListing = {
  __typename?: 'CollectionUserListing';
  cover?: Maybe<Image>;
  creationDate: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  levelCount: Scalars['Int']['output'];
  metadata: ResourceMeta;
  modificationDate: Scalars['Date']['output'];
  slogan: Scalars['String']['output'];
  state: ResourceState;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  category: Scalars['String']['output'];
  content: Scalars['String']['output'];
  date: Scalars['Date']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  metadata?: Maybe<Scalars['Object']['output']>;
  owner?: Maybe<User>;
};

export type Email = {
  __typename?: 'Email';
  address: Scalars['String']['output'];
  primary?: Maybe<Scalars['Boolean']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type File = {
  __typename?: 'File';
  creationDate?: Maybe<Scalars['Date']['output']>;
  path: Scalars['String']['output'];
};

export enum GameplayMods {
  Ap = 'AP',
  ExHard = 'ExHard',
  Fc = 'FC',
  Fast = 'Fast',
  FlipAll = 'FlipAll',
  FlipX = 'FlipX',
  FlipY = 'FlipY',
  Hard = 'Hard',
  HideNotes = 'HideNotes',
  HideScanline = 'HideScanline',
  Slow = 'Slow'
}

export type Image = {
  __typename?: 'Image';
  cover?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  sized?: Maybe<Scalars['String']['output']>;
  stripe?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
};


export type ImageSizedArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type LeaderboardRecord = {
  __typename?: 'LeaderboardRecord';
  accuracy: Scalars['Float']['output'];
  date: Scalars['Date']['output'];
  details: RecordDetails;
  id: Scalars['Int']['output'];
  mods: Array<GameplayMods>;
  owner?: Maybe<User>;
  score: Scalars['Int']['output'];
};

export type Level = {
  __typename?: 'Level';
  bundle?: Maybe<LevelBundle>;
  category: Array<Scalars['String']['output']>;
  censored?: Maybe<Scalars['String']['output']>;
  charts: Array<Chart>;
  creationDate: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  metadata: LevelMeta;
  modificationDate: Scalars['Date']['output'];
  owned?: Maybe<Scalars['Boolean']['output']>;
  owner?: Maybe<User>;
  rating: Rating;
  size: Scalars['FileSize']['output'];
  state: ResourceState;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type LevelBundle = {
  __typename?: 'LevelBundle';
  backgroundImage?: Maybe<Image>;
  music?: Maybe<Scalars['String']['output']>;
  musicPreview?: Maybe<Scalars['String']['output']>;
};

export type LevelMeta = {
  __typename?: 'LevelMeta';
  artist?: Maybe<ResourceMetaProperty>;
  charter?: Maybe<ResourceMetaProperty>;
  illustrator?: Maybe<ResourceMetaProperty>;
  storyboarder?: Maybe<ResourceMetaProperty>;
  title_localized?: Maybe<Scalars['String']['output']>;
};

export enum LevelQuerySort {
  CreationDate = 'CREATION_DATE',
  Difficulty = 'DIFFICULTY',
  Downloads = 'DOWNLOADS',
  Duration = 'DURATION',
  ModificationDate = 'MODIFICATION_DATE',
  Plays = 'PLAYS',
  Rating = 'RATING'
}

export type Mutation = {
  __typename?: 'Mutation';
  addEmail?: Maybe<Scalars['Boolean']['output']>;
  addExternalAccount?: Maybe<Scalars['Boolean']['output']>;
  addToLibrary?: Maybe<Scalars['Boolean']['output']>;
  banUser?: Maybe<Scalars['Boolean']['output']>;
  changePassword?: Maybe<Scalars['Boolean']['output']>;
  changePasswordWithToken?: Maybe<Scalars['Boolean']['output']>;
  createCollection?: Maybe<CollectionUserListing>;
  createPost?: Maybe<Post>;
  deleteCollection?: Maybe<CollectionUserListing>;
  deleteEmail?: Maybe<Scalars['Boolean']['output']>;
  deleteLevel?: Maybe<Scalars['Boolean']['output']>;
  deletePost?: Maybe<Post>;
  evaluateEpic?: Maybe<Scalars['String']['output']>;
  grantUserBadge?: Maybe<Scalars['Boolean']['output']>;
  makeEmailPrimary?: Maybe<Scalars['Boolean']['output']>;
  rateLevel: Rating;
  removeExternalAccount?: Maybe<Scalars['Boolean']['output']>;
  removeFromLibrary?: Maybe<Scalars['Boolean']['output']>;
  sendResetPasswordEmail?: Maybe<Scalars['Boolean']['output']>;
  sendVerificationEmail?: Maybe<Scalars['Boolean']['output']>;
  setAvatar?: Maybe<Avatar>;
  setUserActive?: Maybe<Scalars['Boolean']['output']>;
  unpackLevelPackage?: Maybe<UserLevel>;
  updateCollection?: Maybe<CollectionUserListing>;
  updateLevel?: Maybe<Scalars['Boolean']['output']>;
  updatePost?: Maybe<Post>;
  updateProfile?: Maybe<Scalars['Boolean']['output']>;
  updateProfileHeader?: Maybe<Image>;
};


export type MutationAddEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationAddExternalAccountArgs = {
  token: Scalars['String']['input'];
};


export type MutationAddToLibraryArgs = {
  levelId: Scalars['Int']['input'];
};


export type MutationBanUserArgs = {
  id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationChangePasswordWithTokenArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateCollectionArgs = {
  input: CollectionInput;
};


export type MutationCreatePostArgs = {
  post?: InputMaybe<PostInput>;
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationDeleteLevelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEvaluateEpicArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationGrantUserBadgeArgs = {
  badge: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationMakeEmailPrimaryArgs = {
  email: Scalars['String']['input'];
};


export type MutationRateLevelArgs = {
  id: Scalars['String']['input'];
  rating?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationRemoveExternalAccountArgs = {
  provider: Scalars['String']['input'];
};


export type MutationRemoveFromLibraryArgs = {
  levelId: Scalars['Int']['input'];
};


export type MutationSendResetPasswordEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSendVerificationEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSetAvatarArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSetUserActiveArgs = {
  active: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUnpackLevelPackageArgs = {
  replace?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationUpdateCollectionArgs = {
  id: Scalars['ID']['input'];
  input: CollectionInput;
};


export type MutationUpdateLevelArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateLevelInput>;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<PostInput>;
};


export type MutationUpdateProfileArgs = {
  input: ProfileInput;
};


export type MutationUpdateProfileHeaderArgs = {
  path: Scalars['String']['input'];
};

export type My = {
  __typename?: 'My';
  collections: Array<CollectionUserListing>;
  emails: Array<Email>;
  externalAccountProviders: Array<Scalars['String']['output']>;
  levels: Array<UserStudioLevel>;
  levelsCount: Scalars['Int']['output'];
  library: Array<Level>;
  user?: Maybe<User>;
};


export type MyLevelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};


export type MyLibraryArgs = {
  granted?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Post = {
  __typename?: 'Post';
  content?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Image>;
  creationDate?: Maybe<Scalars['Date']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  locked?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Image>;
  metadata?: Maybe<PostMeta>;
  modificationDate?: Maybe<Scalars['Date']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  state: ResourceState;
  title?: Maybe<Scalars['String']['output']>;
  type: PostType;
  uid: Scalars['String']['output'];
};

export type PostDetail = {
  __typename?: 'PostDetail';
  collection?: Maybe<Collection>;
  content?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Image>;
  creationDate?: Maybe<Scalars['Date']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  epicId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  level?: Maybe<Level>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Image>;
  metadata?: Maybe<PostMeta>;
  modificationDate?: Maybe<Scalars['Date']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  state: ResourceState;
  title?: Maybe<Scalars['String']['output']>;
  type: PostType;
  uid: Scalars['String']['output'];
};

export type PostInput = {
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  coverPath?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  levelId?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  logoPath?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<PostMetaInput>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state?: InputMaybe<ResourceState>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

export type PostMeta = {
  __typename?: 'PostMeta';
  cover?: Maybe<ResourceMetaProperty>;
};

export type PostMetaInput = {
  cover?: InputMaybe<ResourceMetaInput>;
};

export enum PostType {
  Event = 'EVENT',
  Page = 'PAGE',
  Post = 'POST'
}

export type Profile = {
  __typename?: 'Profile';
  activity: ProfileActivity;
  badges: Array<Badge>;
  bestRecords: Array<UserRecord>;
  bio?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['Date']['output']>;
  exp: ProfileExp;
  grades: ProfileGrades;
  header?: Maybe<Image>;
  id: Scalars['ID']['output'];
  rating: Scalars['Float']['output'];
  recentRecords: Array<UserRecord>;
  timeseries: Array<ProfileTimeSeries>;
  user?: Maybe<User>;
};


export type ProfileBestRecordsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type ProfileRecentRecordsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type ProfileActivity = {
  __typename?: 'ProfileActivity';
  averageRankedAccuracy: Scalars['Float']['output'];
  clearedNotes: Scalars['Long']['output'];
  maxCombo: Scalars['Long']['output'];
  totalPlayTime: Scalars['Float']['output'];
  totalRankedPlays: Scalars['Long']['output'];
  totalRankedScore: Scalars['Long']['output'];
};

export type ProfileExp = {
  __typename?: 'ProfileExp';
  basicExp: Scalars['Int']['output'];
  currentLevel: Scalars['Int']['output'];
  currentLevelExp: Scalars['Int']['output'];
  levelExp: Scalars['Int']['output'];
  nextLevelExp: Scalars['Int']['output'];
  totalExp: Scalars['Int']['output'];
};

export type ProfileGrades = {
  __typename?: 'ProfileGrades';
  A: Scalars['Int']['output'];
  B: Scalars['Int']['output'];
  C: Scalars['Int']['output'];
  D: Scalars['Int']['output'];
  F: Scalars['Int']['output'];
  MAX: Scalars['Int']['output'];
  S: Scalars['Int']['output'];
  SS: Scalars['Int']['output'];
};

export type ProfileInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['Date']['input']>;
};

export type ProfileTimeSeries = {
  __typename?: 'ProfileTimeSeries';
  accuracy: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  cumulativeAccuracy: Scalars['Float']['output'];
  cumulativeRating: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  week: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  chart?: Maybe<Chart>;
  collection?: Maybe<Collection>;
  collections: Array<CollectionListing>;
  collectionsCount: Scalars['Int']['output'];
  discordOnlineCount?: Maybe<Scalars['Int']['output']>;
  getActivePosts: Array<Post>;
  getPost?: Maybe<PostDetail>;
  getPosts: Array<Post>;
  level?: Maybe<Level>;
  levels: Array<Level>;
  levelsCount: Scalars['Int']['output'];
  my?: Maybe<My>;
  profile?: Maybe<Profile>;
  recentComments: Array<Comment>;
  recentRecords: Array<Record>;
  recentTweet?: Maybe<Scalars['String']['output']>;
  searchLevels: Array<Level>;
  user?: Maybe<User>;
};


export type QueryChartArgs = {
  chartType: Scalars['String']['input'];
  levelUid: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetActivePostsArgs = {
  limit: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostArgs = {
  uid: Scalars['String']['input'];
};


export type QueryGetPostsArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLevelArgs = {
  uid: Scalars['String']['input'];
};


export type QueryLevelsArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<QueryOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<LevelQuerySort>;
};


export type QueryLevelsCountArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProfileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRecentCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRecentRecordsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  ranked?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySearchLevelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SearchLevelOrder>;
  search: Scalars['String']['input'];
  start?: InputMaybe<Scalars['Int']['input']>;
  strategy?: InputMaybe<SearchLevelSortingStrategy>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Rating = {
  __typename?: 'Rating';
  average?: Maybe<Scalars['Float']['output']>;
  distribution: Array<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  total: Scalars['Int']['output'];
};

export type Record = {
  __typename?: 'Record';
  accuracy: Scalars['Float']['output'];
  chart?: Maybe<RecordChart>;
  date: Scalars['Date']['output'];
  details: RecordDetails;
  id: Scalars['Int']['output'];
  mods: Array<GameplayMods>;
  owner?: Maybe<User>;
  rank?: Maybe<Scalars['Int']['output']>;
  ranked: Scalars['Boolean']['output'];
  score: Scalars['Int']['output'];
};

export type RecordChart = {
  __typename?: 'RecordChart';
  difficulty: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  level?: Maybe<RecordLevel>;
  name?: Maybe<Scalars['String']['output']>;
  notesCount: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type RecordDetails = {
  __typename?: 'RecordDetails';
  bad: Scalars['Int']['output'];
  good: Scalars['Int']['output'];
  great: Scalars['Int']['output'];
  maxCombo: Scalars['Int']['output'];
  miss: Scalars['Int']['output'];
  perfect: Scalars['Int']['output'];
};

export type RecordLevel = {
  __typename?: 'RecordLevel';
  bundle?: Maybe<LevelBundle>;
  category: Array<Scalars['String']['output']>;
  censored?: Maybe<Scalars['String']['output']>;
  creationDate: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  metadata: LevelMeta;
  modificationDate: Scalars['Date']['output'];
  owner?: Maybe<User>;
  size: Scalars['FileSize']['output'];
  state: ResourceState;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type ResourceMeta = {
  __typename?: 'ResourceMeta';
  cover?: Maybe<ResourceMetaProperty>;
};

export type ResourceMetaInput = {
  localized_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceMetaProperty = {
  __typename?: 'ResourceMetaProperty';
  localized_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum ResourceState {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Unlisted = 'UNLISTED'
}

export enum Role {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export enum SearchLevelOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SearchLevelSortingStrategy {
  CreationDate = 'CREATION_DATE',
  Difficulty = 'DIFFICULTY',
  Downloads = 'DOWNLOADS',
  Duration = 'DURATION',
  ModificationDate = 'MODIFICATION_DATE',
  Plays = 'PLAYS',
  Rating = 'RATING'
}

export type UpdateLevelInput = {
  category?: InputMaybe<Array<Scalars['String']['input']>>;
  censored?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<ResourceState>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type User = {
  __typename?: 'User';
  active?: Maybe<Scalars['Boolean']['output']>;
  avatar: Avatar;
  collections: Array<CollectionUserListing>;
  collectionsCount: Scalars['Int']['output'];
  emails: Array<Email>;
  id: Scalars['ID']['output'];
  lastSeen?: Maybe<Scalars['Date']['output']>;
  levels: Array<UserLevel>;
  levelsCount: Scalars['Int']['output'];
  my?: Maybe<My>;
  name?: Maybe<Scalars['String']['output']>;
  registrationDate?: Maybe<Scalars['Date']['output']>;
  role: Role;
  uid?: Maybe<Scalars['String']['output']>;
};


export type UserCollectionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type UserLevelsArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<QueryOrder>;
  sort?: InputMaybe<LevelQuerySort>;
};


export type UserLevelsCountArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
};

export type UserLevel = {
  __typename?: 'UserLevel';
  bundle?: Maybe<LevelBundle>;
  category: Array<Scalars['String']['output']>;
  censored?: Maybe<Scalars['String']['output']>;
  charts: Array<Chart>;
  creationDate: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  metadata: LevelMeta;
  modificationDate: Scalars['Date']['output'];
  size: Scalars['FileSize']['output'];
  state: ResourceState;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type UserRecord = {
  __typename?: 'UserRecord';
  accuracy: Scalars['Float']['output'];
  chart?: Maybe<RecordChart>;
  date: Scalars['Date']['output'];
  details: RecordDetails;
  id: Scalars['Int']['output'];
  mods: Array<GameplayMods>;
  ranked: Scalars['Boolean']['output'];
  rating: Scalars['Float']['output'];
  score: Scalars['Int']['output'];
};

export type UserStudioLevel = {
  __typename?: 'UserStudioLevel';
  avgRating?: Maybe<Scalars['Float']['output']>;
  bundle?: Maybe<LevelBundle>;
  category: Array<Scalars['String']['output']>;
  censored?: Maybe<Scalars['String']['output']>;
  charts: Array<Chart>;
  creationDate: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  downloadCount?: Maybe<Scalars['Float']['output']>;
  duration: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  metadata: LevelMeta;
  modificationDate: Scalars['Date']['output'];
  playCount?: Maybe<Scalars['Float']['output']>;
  ratingCount?: Maybe<Scalars['Float']['output']>;
  size: Scalars['FileSize']['output'];
  state: ResourceState;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type FetchNavCardQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchNavCardQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', id: string, rating: number, exp: { __typename?: 'ProfileExp', totalExp: number, currentLevelExp: number, nextLevelExp: number, currentLevel: number }, header?: { __typename?: 'Image', thumbnail?: string | null } | null, user?: { __typename?: 'User', id: string, avatar: { __typename?: 'Avatar', original?: string | null } } | null } | null };

export type GetPostQueryVariables = Exact<{
  uid: Scalars['String']['input'];
}>;


export type GetPostQuery = { __typename?: 'Query', page?: { __typename?: 'PostDetail', id: string, uid: string, title?: string | null, slogan?: string | null, content?: string | null, state: ResourceState, creationDate?: any | null, modificationDate?: any | null, startDate?: any | null, endDate?: any | null, cover?: { __typename?: 'Image', original?: string | null } | null } | null };

export type LinkExternalAccountMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type LinkExternalAccountMutation = { __typename?: 'Mutation', result?: boolean | null };

export type ChangePasswordWithTokenMutationVariables = Exact<{
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type ChangePasswordWithTokenMutation = { __typename?: 'Mutation', success?: boolean | null };

export type SendPasswordResetEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type SendPasswordResetEmailMutation = { __typename?: 'Mutation', sendResetPasswordEmail?: boolean | null };


export const FetchNavCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchNavCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"exp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalExp"}},{"kind":"Field","name":{"kind":"Name","value":"currentLevelExp"}},{"kind":"Field","name":{"kind":"Name","value":"nextLevelExp"}},{"kind":"Field","name":{"kind":"Name","value":"currentLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchNavCardQuery, FetchNavCardQueryVariables>;
export const GetPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"page"},"name":{"kind":"Name","value":"getPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slogan"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"}}]}}]}}]}}]} as unknown as DocumentNode<GetPostQuery, GetPostQueryVariables>;
export const LinkExternalAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LinkExternalAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"result"},"name":{"kind":"Name","value":"addExternalAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}]}}]} as unknown as DocumentNode<LinkExternalAccountMutation, LinkExternalAccountMutationVariables>;
export const ChangePasswordWithTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePasswordWithToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"success"},"name":{"kind":"Name","value":"changePasswordWithToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}]}}]} as unknown as DocumentNode<ChangePasswordWithTokenMutation, ChangePasswordWithTokenMutationVariables>;
export const SendPasswordResetEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendPasswordResetEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendResetPasswordEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<SendPasswordResetEmailMutation, SendPasswordResetEmailMutationVariables>;