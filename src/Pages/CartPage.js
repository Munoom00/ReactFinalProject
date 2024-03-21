import React from "react";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layout";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

const CartPage = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <CartStyle>
      <MainLayout>
        <InnerLayout>
          <Title title={"Cart"} span={"Cart"} />
        </InnerLayout>
        <div className="center">
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className="thead">
                  <TableCell style={{ color: "white" }}>ID</TableCell>
                  <TableCell style={{ color: "white" }}>ProductID</TableCell>
                  <TableCell style={{ color: "white" }}>ProductName</TableCell>
                  <TableCell style={{ color: "white" }}>ProductPrice</TableCell>
                  <TableCell style={{ color: "white" }}>Qty</TableCell>
                  <TableCell style={{ color: "white" }}>Total</TableCell>
                </TableRow>
              </TableHead>
              {cart.map((c, index) => (
                <TableRow
                  className="tbody"
                  key={c.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="tcell">{++index}</TableCell>
                  <TableCell className="tcell">{c.id}</TableCell>
                  <TableCell className="tcell">{c.name}</TableCell>
                  <TableCell className="tcell">{c.price}</TableCell>
                  <TableCell className="tcell">{c.qty}</TableCell>
                  <TableCell className="tcell">{c.price * c.qty}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
      </MainLayout>
    </CartStyle>
  );
};

const CartStyle = styled.div`
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

export default CartPage;
