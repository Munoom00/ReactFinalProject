import React from "react";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layout";
import { Grid } from "@mui/material";
import avatar from "../img/68544222_2388704187882462_2714987095683760128_n.jpg";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { BiBookBookmark } from "react-icons/bi";

const AboutPage = () => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <Title title={"About Me"} span={"About Me"} />
        </InnerLayout>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={5} marginBottom={2}>
            <div style={{ paddingLeft: "10%" }}>
              <img src={avatar} alt="" />
            </div>
          </Grid>
          <Grid item xs={7} marginBottom={2}>
            <div>
              <p style={{ marginBottom: "4%", marginTop: "2%" }}>
                Name : Tanva Taemthong
              </p>
              <p style={{ marginBottom: "4%" }}>Age : 22</p>
              <p style={{ marginBottom: "4%" }}>
                University : Thia-Nichi Institute of Technology
              </p>
              <p style={{ marginBottom: "4%" }}>
                Faculty : Information Technology
              </p>
              <p style={{ marginBottom: "4%" }}>
                Interesting in : Website Developer & Mobile Application
                Developer
              </p>
            </div>
          </Grid>
        </Grid>
        <InnerLayout>
          <Title title={"HISTORY"} span={"HISTORY"} />
        </InnerLayout>
        <div>
          <Timeline position="alternate" className="tl" onAnimationStart={0}>
            <TimelineItem>
              <TimelineOppositeContent marginTop={1}>
                2018
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <BiBookBookmark />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent marginTop={1}>
                Thia-Nichi Institute of Technology
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent marginTop={1}>
                2015
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <BiBookBookmark />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent marginTop={1}>
                Asia Vocational College
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent marginTop={1}>
                2012
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <BiBookBookmark />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent marginTop={1}>
                Triam udom suksa Pattanakran School
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent marginTop={1}>
                2009
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <BiBookBookmark />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent marginTop={1}>Asokevit School</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent marginTop={1}>
                2006
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <BiBookBookmark />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent marginTop={1}>Marialai School</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent marginTop={1}>
                2003
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <BiBookBookmark />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent marginTop={1}>Marialai School</TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </MainLayout>
    </>
  );
};

export default AboutPage;
