export interface IPaging {
  page?: number;
  limit?: number;
}

export interface IListPaging<T extends unknown = any[]> {
  pagination: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  result: T[];
}

export interface IAxiosResponse<T extends unknown> {
  data: T;
  meta: {
    pagination: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
  };
}

export interface ObjectLiteral<T extends unknown = string> {
  [s: string]: T;
}

export interface IOption<T extends any = any> {
  name: string;
  value: T;
}

export interface ISelectOption<T extends any = any> {
  label: string;
  value: T;
}

export interface IdType {
  id: any;
}
type Join<S1, S2> = S1 extends string ? (S2 extends string ? `${S1}.${S2}` : never) : never;
export type Paths<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? Join<K, Paths<T[K]>> : K;
}[keyof T];
