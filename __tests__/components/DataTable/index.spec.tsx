import { render } from '@testing-library/react';

import { TablePaginationConfig } from 'antd';

import DataTable from '@components/DataTable'

const columns = [
  {
    key: 'id',
    title: 'ID',
  },
  {
    key: 'title',
    title: 'Title',
  },
];

const data = [
  {
    id: 1,
    title: 'A',
  },
  {
    id: 2,
    title: 'B',
  }
];

describe('DataTable component', () => {
  it('should render snapshot', () => {
    const handleRequest = (_: any) => {}

    const { container } = render(
      <DataTable
        columns={columns}
        data={data ?? []}
        pagination={{
          pageSize: 10,
          current: 1,
          total: data?.length,
        } as TablePaginationConfig}
        onRequest={handleRequest}
        loading={false}
        search
      />
    );
    expect(container).toMatchSnapshot();
  });
});

