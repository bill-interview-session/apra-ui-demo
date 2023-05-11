'use client'

import DataTable, { DataTableRequest } from '@components/DataTable'

import { useMemo } from 'react'

import styles from './page.module.css'

import mocked from './mocked.json'
import { TablePaginationConfig } from 'antd'
import ImagePreview from '@components/ImagePreview'

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
    render: (cell: any, row: any) =>  <ImagePreview thumbnailURL={cell} imageURL={row?.url} height={30} width={30} />,
  }
]

export default function Home() {
  const fetchedData = useMemo(() => mocked.data.photos, [])

  const paginationConfig = useMemo<TablePaginationConfig>(() => ({ pageSize: 10, current: 1, total: fetchedData.meta.totalCount }), [fetchedData])

  const handleRequestChange = (request: DataTableRequest) => {
    console.log('REQUEST: ', request)
  }

  return (
    <div className={styles.wrapper}>
      <DataTable
        columns={columns}
        data={fetchedData.data}
        pagination={paginationConfig}
        onRequest={handleRequestChange}
        search
      />
    </div>
  )
}
