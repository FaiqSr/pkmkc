type WebResponse<T> = {
  status: boolean;
  message: string;
  data?: T;
  pagination?: Pagination;
};

type Pagination = {
  page: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
};

export default WebResponse;
