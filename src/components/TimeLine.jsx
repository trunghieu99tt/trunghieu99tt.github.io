import React, { Component } from "react";
import TimeLineCard1 from "./Cards/TimeLineCard1";
import Slider from "react-slick";
import TimelineCard2 from "./Cards/TimelineCard2";
import { Waypoint } from "react-waypoint";

export default class TimeLine extends Component {
    activeNavbar = (id) => {
        const navlinks = document.querySelectorAll(".menu-item__link");
        navlinks.forEach((item) => {
            const href = item.getAttribute("href");
            if (href === id) {
                item.classList.add("active-link");
            } else {
                item.classList.remove("active-link");
            }
        });
    };

    unactiveNavbar = (id) => {
        const navlinks = document.querySelectorAll(".menu-item__link");
        navlinks.forEach((item) => {
            const href = item.getAttribute("href");
            if (href === id) {
                item.classList.remove("active-link");
            }
        });
    };
    render() {
        const timelinecardData = [
            {
                image: require("../images/tigren-logo.png"),
                companyName: "Tigren Solutions",
                timeStart: "06/2020",
                timeEnd: "03/2021",
                title: "Front-end Developer",
                description:
                    "Front-end Developer since 2020, in charge of building UI/UX with ReactJS",
            },
            {
                image: require("../images/nbm.jpg"),
                companyName: "NBM Media",
                timeStart: "12/2019",
                timeEnd: "06/2020",
                title: "Front-end Developer",
                description:
                    "Front-end Developer since 2019, in charge of building UI/UX with ReactJS",
            },
            {
                companyName: "ACM ICPC PTIT",
                timeStart: "2018",
                timeEnd: "2018",
                title: "Participant",
                description:
                    "Participated in ACM/ICPC PTIT 2018 as a team member of AHP Team, ranked #7 in final round and got 3rd place prize and potential prize",
            },
            {
                companyName: "ACM ICPC",
                timeStart: "2020",
                timeEnd: "2020",
                title: "Member of PTIT ACM Team",
                description:
                    "Participated in ACM/ICPC 2019 as a team member of PTIT.D.Eagles, got the third prize in Vietnam National Programing Contest",
            },
            {
                companyName: "VOI",
                timeStart: "2020",
                timeEnd: "2020",
                title: "Member of PTIT Olympic Team",
                description: "Got the third prize",
            },
        ];

        return (
            <Waypoint
                onEnter={() => this.activeNavbar("#timeline")}
                onLeave={() => this.unactiveNavbar("#timeline")}
            >
                <section className="timeline" id="timeline">
                    <div className="container">
                        <div className="timeline__heading">
                            <div className="text-wrapper">
                                <h3 className="section-subheading">
                                    My experience
                                </h3>
                            </div>
                            <div className="text-wrapper">
                                <h2 className="section-heading">
                                    Education, Experience And Events
                                </h2>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="timeline-cards">
                                    {timelinecardData &&
                                        timelinecardData.length > 0 &&
                                        timelinecardData.map((item) => (
                                            <TimeLineCard1 {...item} />
                                        ))}
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <Slider
                                    vertical={true}
                                    verticalSwiping={true}
                                    draggable={true}
                                    slidesToScroll={1}
                                    centerMode={false}
                                    infinite={true}
                                    speed={1000}
                                    autoplay={true}
                                    // nextArrow={`<button class = "timeline-next"></button>`}
                                >
                                    {timelinecardData &&
                                        timelinecardData.length > 0 &&
                                        timelinecardData.map((item) => (
                                            <TimelineCard2 {...item} />
                                        ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </Waypoint>
        );
    }
}