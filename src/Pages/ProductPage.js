import React from "react";
import { Image, Badge, Spinner } from "react-bootstrap";
import axios from "axios";
import { BiBookOpen } from "react-icons/bi";
import { InnerLayout, MainLayout } from "../styles/Layout";
import Title from "../Components/Title";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ProductPage = () => {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get("https://api.codingthailand.com/api/course");
      //console.log(resp.data);
      setProduct(resp.data.data);
    } catch (error) {
      // console.log(error.response);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, plese try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  return (
    <MainLayout>
      <InnerLayout>
        <Title title={"Product"} span={"Product"} />
      </InnerLayout>
      <TableContainer component={Paper} sx={{marginRight: "5%"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Course Detail</TableCell>
              <TableCell align="right">Created Date</TableCell>
              <TableCell align="right">View</TableCell>
              <TableCell align="right">Picture</TableCell>
              <TableCell align="right">Detail</TableCell>
            </TableRow>
          </TableHead>
            {product.map((p, index) => (
              <TableRow
                key={p.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="product">
                  {p.id}
                </TableCell>
                <TableCell align="right">{p.id}</TableCell>
                <TableCell align="right">{p.title}</TableCell>
                <TableCell align="right">{p.detail}</TableCell>
                <TableCell align="right">{p.date}</TableCell>
                <TableCell align="right">
                  <Badge variant="success">{p.view}</Badge>
                </TableCell>
                {/* <td>{p.picture}</td> */}
                <TableCell align="right">
                  <Image src={p.picture} rounded width="60" />
                  <Stack spacing={2} direction="row">
                  <Button href="/detail" variant="dark">
                    Click ME <BiBookOpen />
                  </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </Table>
      </TableContainer>
    </MainLayout>
  );
};

export default ProductPage;
