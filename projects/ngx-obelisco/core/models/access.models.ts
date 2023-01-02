export interface Access {
  title: string;
  description?: string;
  route?: string;
  link?: string;
  isLogOut?: boolean;
  icon?: string;
}

export type AccessGroup = Omit<Access, 'description'>;
export interface AccessCategory {
  name: string;
  access: Access[];
}
