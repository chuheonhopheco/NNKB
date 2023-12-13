import { Table } from 'antd';
import React from 'react'
import Loading from '../LoadingComponent/Loading'

const TableComponent = (props) => {
  const { selectionType = 'checkbox', data = [],  isLoading = false, columns = [] } = props

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  console.log('data', data)
  return (
    <Loading isLoading={isLoading}>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </Loading>
  )
}

export default TableComponent