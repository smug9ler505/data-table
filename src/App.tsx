import { useEffect, useState } from 'react'
import { generateData, type Data } from '../utils/data/dataGenerator'
import './App.css'
import DataTable, { type TableColumn, type TableProps } from 'react-data-table-component'

const Table = (DataTable as any).default || DataTable

function App() {
  const [data, setData] = useState<Data[]>([])
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const data = generateData()
      setData(data)

    }
    fetchData()
  }, [])

  const props: TableProps<Data> = {
    data,
    columns,
    pagination: true,
    paginationRowsPerPageOptions: [10, 50, 100, 200, 500],
    fixedHeader: true,
    title: 'Title',

  }

  return (
    <div>
      <Table
        {...props}
      />
    </div>
  )


}

export default App


const columns: TableColumn<Data>[] = [
  {
    name: 'First Name',
    selector: row => row.first_name,
    width: '200px'
  },
  {
    name: 'Last Name',
    selector: row => row.last_name,
    width: '200px'

  },
  {
    name: 'Address',
    selector: row => row.address,
    width: '400px'

  },
  {
    name: 'Phone',
    selector: row => row.phone,
    width: '300px'
  },
  {
    name: 'Content',
    selector: row => row.content,

  },
  {
    name: 'Status',
    selector: row => row.status ? 'on' : 'off',
    width: '100px'
  },
];