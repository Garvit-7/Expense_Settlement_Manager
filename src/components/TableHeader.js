import { TableHead, TableRow, TableCell } from "@material-ui/core";

const TableHeader = ({ isInput }) => {
  return (
    <TableHead>
      <TableRow className="check5">
        <TableCell align="center">Person 1</TableCell>
        <TableCell align="center">Person 2</TableCell>
        <TableCell align="center">Amount</TableCell>
        {isInput ? <TableCell align="center">Add</TableCell> : null}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
