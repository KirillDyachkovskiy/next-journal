export type TUser = {
  id: number;
  name: string;
  photo: string;
};

export type TComment = {
  id: number;
  text: string;
  user: TUser;
  time: Date;
};
