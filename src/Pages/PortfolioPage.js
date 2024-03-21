import React from "react";
import { Grid } from "@mui/material";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layout";
import gogreen1 from "../img/IMG_5361.PNG";
import gogreen2 from "../img/IMG_5362.PNG";
import gogreen3 from "../img/IMG_5363.PNG";
import gogreen4 from "../img/IMG_5364.PNG";
import gogreen5 from "../img/IMG_5365.PNG";

const PortfolioPage = () => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <Title title={"PORTFOLIO"} span={"PORTFOLIO"} />
        </InnerLayout>
        <div className="center">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={8}>
              <p className="p">TNI GO GREEN FOR SUBSTITUTED INNOVATION</p>
            </Grid>
            <Grid container item xs={6} >
              <img src={gogreen1} style={{ height: "50vh", marginLeft: '25%', marginTop: '5%' }} />
            </Grid>
            <Grid container item xs={6}>
              <img src={gogreen2} style={{ height: "50vh", marginLeft: '25%', marginTop: '5%' }} />
            </Grid>
            <Grid container item xs={6}>
              <img src={gogreen3} style={{ height: "50vh", marginLeft: '25%', marginTop: '5%' }} />
            </Grid>
            <Grid container item xs={6}>
              <img src={gogreen4} style={{ height: "50vh", marginLeft: '25%', marginTop: '5%' }} />
            </Grid>
            <Grid container item xs={6}>
              <img src={gogreen5} style={{ height: "50vh", marginLeft: '25%', marginTop: '5%' }} />
            </Grid>
          </Grid>
        </div>
      </MainLayout>
    </>
  );
};

export default PortfolioPage;
