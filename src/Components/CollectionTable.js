import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CollectionTable = ({data}) =>
{
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650}} aria-label="Your Collection">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Set</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map (row => 
                        <TableRow
                            key={row.apiData.cardnum}
                            sx={{ '&:last-child td, &:last-child th': {border:0}}}
                        >
                            <TableCell component="th" scope='row'>
                                {row.apiData.name}
                            </TableCell>
                            <TableCell align='right'>{row.apiData.cardnum}</TableCell>
                            <TableCell align='right'>{row.card.quantity}</TableCell>
                        </TableRow>
                    
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CollectionTable 