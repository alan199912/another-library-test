export interface NavItems {
  title: string;
  link?: string;
  route?: string;
  disabled?: boolean;
  icon?: string;
}

export interface NavVerticalItems {
  title: string;
  route?: string;
  disabled?: boolean;
  icon?: string;
  navElements?: NavVerticalItems[];
}
