import React, { useState } from "react";
import {
  Paper,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const DataTable = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const data = [
    {
      id: 1,
      datarequest: "2024-01-01",
      deposit: "500$",
      method: "Credit Card",
      status: "Pending",
      approved: "November 2, 2024",
      cancelled: " ",
      fee: "500$",
      payment: "Request",
    },
    {
      id: 2,
      datarequest: "2024-01-02",
      deposit: "500$",
      method: "Credit Card",
      status: "Pending",
      approved: "November 2, 2024",
      cancelled: " ",
      fee: "20",
      payment: "Request",
    },
    {
      id: 3,
      datarequest: "2024-01-03",
      deposit: "500$",
      method: "Credit Card",
      status: "Pending",
      approved: "November 2, 2024",
      cancelled: " ",
      fee: "10",
      payment: "Request",
    },
    {
      id: 4,
      datarequest: "2024-01-04",
      deposit: "1000$",
      method: "Credit Card",
      status: "Pending",
      approved: "November 2, 2024",
      cancelled: " ",
      fee: "40",
      payment: "Request",
    },
    {
      id: 5,
      datarequest: "2024-01-05",
      deposit: "500$",
      method: "Credit Card",
      status: "Pending",
      approved: "November 2, 2024",
      cancelled: " November 5, 2024",
      fee: "10",
      payment: "Request",
    },
    {
      id: 6,
      datarequest: "2024-01-06",
      deposit: "500$",
      method: "Credit Card",
      status: "Pending",
      approved: "November 2, 2024",
      cancelled: "January 2, 2024 ",
      fee: "42",
      payment: "Request",
    },
    {
      id: 7,
      datarequest: "2024-01-07",
      deposit: "500$",
      method: "Credit Card",
      status: "Pending",
      approved: "November 2, 2024",
      cancelled: " ",
      fee: "12",
      payment: "Request",
    },
    {
      id: 8,
      datarequest: "2024-01-08",
      deposit: "500$",
      method: "Credit Card",
      status: "Pending",
      approved: "November 2, 2024",
      cancelled: " ",
      fee: "71",
      payment: "Request",
    },
    {
      id: 9,
      datarequest: "2024-01-09",
      deposit: "500$",
      method: "Credit Card",
      status: "Pending",
      approved: "November 2, 2024",
      cancelled: " ",
      fee: "500$",
      payment: "Request",
    },
    {
      id: 10,
      datarequest: "2024-01-10",
      deposit: "500$",
      method: "Credit Card",
      status: "Pending",
      approved: "November 2, 2024",
      cancelled: " ",
      fee: "500$",
      payment: "Request",
    },
  ];

  return (
    <Paper style={{ backgroundColor: "#1f3645" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: "#172731" }}
      >
        <Tab label="Casino Bets" style={{ color: "white" }} />
        <Tab label="Sports Bets" style={{ color: "white" }} />
      </Tabs>
      {value === 0 && (
        <TableContainer>
          <Table style={{ border: "none" }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "white" }}>Id</TableCell>
                <TableCell style={{ color: "white" }}>Data Request</TableCell>
                <TableCell style={{ color: "white" }}>Deposit Amount</TableCell>
                <TableCell style={{ color: "white" }}>Method</TableCell>
                <TableCell style={{ color: "white" }}>Status</TableCell>
                <TableCell style={{ color: "white" }}>Approved At</TableCell>
                <TableCell style={{ color: "white" }}>Cancelled At</TableCell>
                <TableCell style={{ color: "white" }}>Fee</TableCell>
                <TableCell style={{ color: "white" }}>Payment Ext Id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell style={{ color: "white" }}>{item.id}</TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.datarequest}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.deposit}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.method}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.status}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.approved}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.cancelled}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>{item.fee}</TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.payment}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {value === 1 && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "white" }}>Id</TableCell>
                <TableCell style={{ color: "white" }}>Dat</TableCell>
                <TableCell style={{ color: "white" }}>Depunt</TableCell>
                <TableCell style={{ color: "white" }}>Meod</TableCell>
                <TableCell style={{ color: "white" }}>Sttus</TableCell>
                <TableCell style={{ color: "white" }}>Approd At</TableCell>
                <TableCell style={{ color: "white" }}>Called At</TableCell>
                <TableCell style={{ color: "white" }}>Fee</TableCell>
                <TableCell style={{ color: "white" }}>yment Ext Id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell style={{ color: "white" }}>{item.id}</TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.datarequest}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.deposit}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.method}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.status}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.approved}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.cancelled}
                  </TableCell>
                  <TableCell style={{ color: "white" }}>{item.fee}</TableCell>
                  <TableCell style={{ color: "white" }}>
                    {item.payment}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default DataTable;
