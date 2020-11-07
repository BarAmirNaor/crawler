import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from '../data.json'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable() {
    const classes = useStyles();

    const parseData = () => {
        const res = []
        for (const [key, value] of Object.entries(data)) {
            res.push(<TableRow key={key} >
                <TableCell >{value.name}</TableCell>
                <TableCell align="right">{value.description}</TableCell>
                <TableCell align="right">{value.temprature}</TableCell>
                <TableCell align="right">{value.humidity}</TableCell>
                <TableCell align="right">{value.wind}</TableCell>
                <TableCell align="right"><img src={value.icon} alt={`${value.description} icon`}/></TableCell>
            </TableRow>)
        }
        return res;
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>City</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Temperature(°C)</TableCell>
                        <TableCell align="right">Humidity(%)</TableCell>
                        <TableCell align="right">Wind</TableCell>
                        <TableCell align="right">Icon</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {parseData()}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


