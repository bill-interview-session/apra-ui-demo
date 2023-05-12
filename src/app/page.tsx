'use client'

import DataTable, { DataTableRequest } from '@components/DataTable'

import { useState } from 'react'

import styles from './page.module.css'

import { TablePaginationConfig } from 'antd'
import ImagePreview from '@components/ImagePreview'
import { filterAllPhotos } from '@services/photos'
import { useQuery } from '@tanstack/react-query'

const columns = [
  {
    key: 'id',
    title: 'ID',
  },
  {
    key: 'title',
    title: 'Title',
  },
  {
    key: 'thumbnailUrl',
    title: 'Thumbnail',
    render: (cell: any, row: any) => <ImagePreview thumbnailURL={cell} imageURL={row?.url} height={30} width={30} />,
  }
]

export default function Home() {
  const [request, setRequest] = useState<DataTableRequest>({ query: '', page: 1, limit: 10 });

  const { isLoading, data } = useQuery({
    queryKey: ['photos', request.limit, request.page, request.query],
    queryFn: async () => await filterAllPhotos(request.query, request.limit, request.page),
    enabled: !!request,
  })

  return (
    <div className={styles.wrapper}>
      <DataTable
        columns={columns}
        data={data?.data ?? []}
        pagination={{
          pageSize: request.limit,
          current: request.page,
          total: data?.meta.totalCount,
        } as TablePaginationConfig}
        onRequest={setRequest}
        loading={isLoading}
        search
      />
    </div>
  )
}
