export type Group = {
  'id': number,
  'name': string,
  'closed': boolean,
  'avatar_color'?: string,
  'members_count': number,
  'friends'?: User[]
};

export type User = {
  'first_name': string,
  'last_name': string
};
