import React from "react";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layout";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import { Grid } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { DiVisualstudio, DiPhotoshop } from "react-icons/di";
import { FaWordpress } from "react-icons/fa";
import { SiUnity } from "react-icons/si";

const ResumePage = () => {
  return (
    <ResumeStyle>
      <MainLayout>
        <InnerLayout>
          <Title title={"MY SKILLS"} span={"MY SKILLS"} />
        </InnerLayout>
        <div className="center">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} marginBottom={2}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2}>
                  <p>HTML</p>
                </Grid>
                <Grid item xs={9}>
                  <ProgressBar
                    className="Progress"
                    completed={90}
                    maxCompleted={100}
                    animateOnRender
                    customLabel=" "
                    baseBgColor="gray"
                    bgColor="#3a3b3c"
                  />
                </Grid>
                <Grid item xs={1}>
                  <p>90%</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} marginBottom={2}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2}>
                  <p>C++</p>
                </Grid>
                <Grid item xs={9}>
                  <ProgressBar
                    className="Progress"
                    completed={75}
                    maxCompleted={100}
                    animateOnRender
                    customLabel=" "
                    baseBgColor="gray"
                    bgColor="#3a3b3c"
                  />
                </Grid>
                <Grid item xs={1}>
                  <p>75%</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} marginBottom={2}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2}>
                  <p>CSS</p>
                </Grid>
                <Grid item xs={9}>
                  <ProgressBar
                    className="Progress"
                    completed={80}
                    maxCompleted={100}
                    animateOnRender
                    customLabel=" "
                    baseBgColor="gray"
                    bgColor="#3a3b3c"
                  />
                </Grid>
                <Grid item xs={1}>
                  <p>80%</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} marginBottom={2}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2}>
                  <p>JAVA</p>
                </Grid>
                <Grid item xs={9}>
                  <ProgressBar
                    className="Progress"
                    completed={65}
                    maxCompleted={100}
                    animateOnRender
                    customLabel=" "
                    baseBgColor="gray"
                    bgColor="#3a3b3c"
                  />
                </Grid>
                <Grid item xs={1}>
                  <p>65%</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} marginBottom={2}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2}>
                  <p>WORDPRESS</p>
                </Grid>
                <Grid item xs={9}>
                  <ProgressBar
                    className="Progress"
                    completed={70}
                    maxCompleted={100}
                    animateOnRender
                    customLabel=" "
                    baseBgColor="gray"
                    bgColor="#3a3b3c"
                  />
                </Grid>
                <Grid item xs={1}>
                  <p>70%</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} marginBottom={2}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2}>
                  <p>REACT JS</p>
                </Grid>
                <Grid item xs={9}>
                  <ProgressBar
                    className="Progress"
                    completed={70}
                    maxCompleted={100}
                    animateOnRender
                    customLabel=" "
                    baseBgColor="gray"
                    bgColor="#3a3b3c"
                  />
                </Grid>
                <Grid item xs={1}>
                  <p>70%</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <InnerLayout>
          <Title title={"SOFTWARE"} span={"SOFTWARE"} />
        </InnerLayout>
        <div className="center">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                marginLeft={"20%"}
              >
                <Grid item xs={4}>
                  <SiUnity className="icons" size={"100%"} />
                </Grid>
                <Grid item xs={8}>
                  <p className="p">2D Game created and basic 3D Game Created </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <DiVisualstudio className="icons" size={"100%"} />
                </Grid>
                <Grid item xs={8}>
                  <p className="p">Basic to use Visual Studio Code</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <DiPhotoshop className="icons" size={"100%"} />
                </Grid>
                <Grid item xs={8}>
                  <p className="p">Basic to use PhotoShop</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <FaWordpress className="icons" size={"100%"} />
                </Grid>
                <Grid item xs={8}>
                  <p className="p">Basic to use Wordpress and Design</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <InnerLayout>
          <Title title={"WORKS"} span={"EXPERIENCED"} />
        </InnerLayout>
        <div>
          <Timeline position="alternate" className="tl" onAnimationStart={0}>
            <TimelineItem>
              <TimelineOppositeContent>2021</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                ได้เข้าฝึกงานที่บริษัท SK. RealityPlus
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>2020</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                ได้รับรางวัลชนะเลิศ TNI GO GREEN FOR SUBSTITUTED INNOVATION
                โดยการจัดทำเว็บไซต์สำหรับการคัดแยกขยะเพื่อรับคะแนน
                และนำคะแนนไปแลกของรางวัล
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>2017</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                รองชนะเลิศอันดับ2 ในการแข่งขันทักษะคอมพิวเตอร์ SBC Open House
                2017 โดยเป็นการแข่งขันออกแบบสติ๊กเกอร์ไลน์ ด้วยโปรแกรมAdobe
                illustratorCS6
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>2016</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                ได้รับรางวัลรองชนะเลิศอันดับ2 ในการแข่งขันงานเปิดโลกปริญญาตรีกับ
                BSU ครั้งที่ 10 โดยเป็นการแข่งขันออกแบบโลโก้ขวดน้ำ
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </MainLayout>
    </ResumeStyle>
  );
};

const ResumeStyle = styled.div`
  height: 100vh;
  position: static;

  .Progress {
    width: 100%;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 1%;
    margig-bottom: 10%;
  }
  .center {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-bottom: 2%;
    padding-right: 10%;
    padding-left: 5%;
  }
  .p {
    margin-top: 20%;
    margin-bottom: 20%;
  }
  .tl {
    padding-left: 20%;
    padding-right: 20%;
  }
`;

export default ResumePage;
