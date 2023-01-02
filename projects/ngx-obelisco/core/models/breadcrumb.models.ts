export interface BreadcrumbRoute {
  name: string;
  id?: string;
  url?: string;
}

export interface Breadcrumb {
  actualRoute: BreadcrumbRoute;
  routes: BreadcrumbRoute[];
  defaultUrl: string;
}
