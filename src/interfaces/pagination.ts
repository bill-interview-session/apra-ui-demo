export interface PaginationResult<T> {
  data: T[];
  meta: {
    totalCount: number;
  }
}
