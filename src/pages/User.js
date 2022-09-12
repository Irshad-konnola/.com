import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'position', headerName: 'Position', width: 130 },
  {
    field: 'place',
    headerName: 'Place',
    width: 130,
  },
];

const rows = [
  { id: 1, position: 'President', name: 'Yusuf',place:"Mylappuram"},
  { id: 2, position: 'G.secretary', name: 'Ibrahim',place:"Mylappuram" },
  { id: 3, position: 'Vice president', name: 'Mohammed',place:"Mylappuram"},
  { id: 4, position: 'Treasurer', name:'Mohammed',place:"Mylappuram"},
  { id: 5, position: 'Member', name: 'Mohammed', place:"Mylappuram" },
  { id: 6, position: 'Member', name: null,place:"Mylappuram" },
  { id: 7, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 8, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"},
  { id: 9, position: 'Member', name: 'Mohammed',place:"Mylappuram"}
];

export default function DataTable() {
  return (
    <div style={{ height: '100%', width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
