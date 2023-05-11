'use client'

import { useMemo, useState } from 'react'
import { Wrapper } from './styled'
import { Table, TablePaginationConfig } from 'antd'
import DataTableSearch from './search'

type Column = {
  key: string,
  title: string,
  render?: (cell: any, row?: Record<string, any>) => any
}

export type DataTableRequest = {
  query: string;
  page: number,
  limit: number,
}

type DataTableProps = {
  columns: Column[],
  data: object[],
  pagination?: TablePaginationConfig,
  search?: boolean,
  onRequest?: (request: DataTableRequest) => void,
}

const DataTable = (props: DataTableProps) => {
  const { columns: propColumns, data: propData, pagination, search, onRequest } = props || {}

  const [data, setData] = useState(propData)

  const [requestState, setRequestState] = useState<DataTableRequest>({ query: '', page: 1, limit: 10 })

  const columns = useMemo<object[]>(
    () => propColumns.map((column: Column) => ({ ...column, text: column.title, dataIndex: column.key })),
    [propColumns]
  )

  const changeRequestState = (data: Partial<DataTableRequest>) => {
    const nextRequest = { ...requestState, ...data }
    setRequestState(nextRequest)
    onRequest && onRequest(nextRequest)

  }

  return (
    <Wrapper>
      {search && (
        <DataTableSearch
          placeholder="Search..."
          onSearch={(value) => changeRequestState({ query: value })}
        />
      )}
      <Table
        dataSource={data}
        columns={columns}
        pagination={pagination}
        onChange={(pag) => changeRequestState({ page: pag.current, limit: pag.pageSize })}
      />
    </Wrapper>
  );
}

export default DataTable
