import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
} from "@material-ui/core";

const NameList = ({ allNames }) => {
  return (
    <div className="name-list">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow key="names" className="check5">
              <TableCell align="center"><div className="pi">List of Persons Involved</div></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="">
            {allNames.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center"> {item.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NameList;
