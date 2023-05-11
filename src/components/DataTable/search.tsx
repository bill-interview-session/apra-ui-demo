import { Input } from "antd"
import { useState } from "react"

type DataTableSearchProps = {
  keyword?: string,
  placeholder?: string,
  onSearch: (keyword: string) => void,
}

const DataTableSearch = (props: DataTableSearchProps) => {
  const { keyword: keywordDefault, onSearch, placeholder } = props || {}

  const [keyword, setKeyword] = useState(keywordDefault ?? '')

  return (
    <Input.Search
      placeholder={placeholder ?? 'Search...'}
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      onSearch={onSearch}
      allowClear
      style={{ marginBottom: 16 }}
    />
  )
}

export default DataTableSearch
