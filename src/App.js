import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import data from './data.json';
import './App.css'; // Import the CSS file

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter((row) =>
      row.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.totalSpent.includes(searchTerm)
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'customer', headerName: 'Customer Name', width: 200 },
    { field: 'lastSeen', headerName: 'Last Seen', width: 150 },
    { field: 'orders', headerName: 'Orders', width: 100 },
    { field: 'totalSpent', headerName: 'Total Spent', width: 150 },
    { field: 'latestPurchase', headerName: 'Latest Purchase', width: 200 },
    { field: 'news', headerName: 'Subscribed to News', width: 150 },
    { field: 'segments', headerName: 'Segment', width: 150 }
  ];

  return (
    <div className="container">
      <div className="datagrid-header">Customer Data</div>
      <TextField
        className="search-box"
        label="Search"
        variant="outlined"
        style={{ marginBottom: 20, width: '50%' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="datagrid">
        <DataGrid
          rows={filteredData}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
      <div className="datagrid-footer">Data last updated: 2024</div>
    </div>
  );
}

export default App;
