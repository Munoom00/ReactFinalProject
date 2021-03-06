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
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { addToCart } from "../Redux/Reducer/Action/CartAction";
import { useSelector, useDispatch } from "react-redux";

const ProductPage = () => {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get("https://api.codingthailand.com/api/course");
      setProduct(resp.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const addCart = (p) => {
    const product = {
      id: p.id,
      name: p.title,
      price: p.view,
      qty: 1,
    };

    dispatch(addToCart(product, cart));
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
    <ProductStyle>
      <MainLayout>
        <InnerLayout>
          <Title title={"Product"} span={"Product"} />
        </InnerLayout>
        <div className="center">
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className="thead">
                  <TableCell style={{ color: "white" }}>ID</TableCell>
                  <TableCell style={{ color: "white" }}>Title</TableCell>
                  <TableCell style={{ color: "white" }}>
                    Course Detail
                  </TableCell>
                  <TableCell style={{ color: "white" }}>Created Date</TableCell>
                  <TableCell style={{ color: "white" }}>View</TableCell>
                  <TableCell style={{ color: "white" }}>Picture</TableCell>
                  <TableCell style={{ color: "white" }}>Detail</TableCell>
                </TableRow>
              </TableHead>
              {product.map((p, index) => (
                <TableRow
                  className="tbody"
                  key={p.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="product" className="tcell">
                    {p.id}
                  </TableCell>
                  <TableCell className="tcell">{p.title}</TableCell>
                  <TableCell className="tcell">{p.detail}</TableCell>
                  <TableCell className="tcell">{p.date}</TableCell>
                  <TableCell className="tcell">{p.view}</TableCell>
                  {/* <td>{p.picture}</td> */}
                  <TableCell>
                    <Image src={p.picture} rounded width="60" />
                  </TableCell>
                  <TableCell>
                    <Stack spacing={2} direction="row">
                      <Button
                        variant="contained"
                        className="ml-2"
                        onClick={() => addCart(p)}
                      >
                        Buy <BiBookOpen />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
      </MainLayout>
    </ProductStyle>
  );
};

const ProductStyle = styled.div`
  height: 100vh;
  position: static;

  .center {
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .table {
    width: 80%;
  }
  .thead{
    background-color: var(--table-header-color);
  }
  .tbody{
    background-color: var(--table-body-color);
  }
  .tcell{
    color: var(--white-color);
  }
`;

export default ProductPage;
