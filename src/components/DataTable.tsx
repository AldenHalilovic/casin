import React, { useState } from 'react';
import { Paper, Tab, Tabs, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const DataTable = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const data = [
    { id: 1, name: 'Item 1', value: 'Value 1' },
    { id: 2, name: 'Item 2', value: 'Value 2' },
    // add more data as needed
  ];

  return (
    <Paper>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        // add more tabs as needed
      </Tabs>
      {value === 0 && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {value === 1 && <div>Content for Tab 2</div>}
      // add more content for other tabs as needed
    </Paper>
  );
};

export default DataTable;