import { PagingResult } from "@/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type PaginationState = {
  pagination: PagingResult;
  setPagination: (count: number) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
};

const usePaginationStore = create<PaginationState>()(
  devtools(
    (set) => ({
      pagination: {
        pageNumber: 1,
        pageSize: 12,
        totalPages: 1,
        totalCount: 0,
      },
      setPagination: (totalCount: number) =>
        set((state) => ({
          pagination: {
            pageNumber: 1,
            pageSize: state.pagination.pageSize,
            totalCount,
            totalPages: Math.ceil(totalCount / state.pagination.pageSize),
          },
        })),
      setPage: (page: number) =>
        set((state) => ({
          pagination: {
            ...state.pagination,
            pageNumber: page,
          },
        })),
      setPageSize: (pageSize: number) =>
        set((state) => ({
          pagination: {
            ...state.pagination,
            pageSize,
            pageNumber: 1,
            totalPages: Math.ceil(state.pagination.totalCount / pageSize),
          },
        })),
    }),
    { name: "PaginationStoreNM" }
  )
);

export default usePaginationStore;
