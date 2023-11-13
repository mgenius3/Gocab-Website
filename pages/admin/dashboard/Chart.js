import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { BarChart, Bar, XAxis, YAxis, Label } from "recharts";
import Title from "./Title";

export default function Chart({ no_of_users, no_of_drivers }) {
  const theme = useTheme();

  const chartData = [
    { name: "No of Users", value: no_of_users },
    { name: "No of Drivers", value: no_of_drivers },
  ];

  return (
    <React.Fragment>
      <Title>Users and Drivers</Title>
      <BarChart width={300} height={170} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill={theme.palette.primary.main} />
      </BarChart>
    </React.Fragment>
  );
}
