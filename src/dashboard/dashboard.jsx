import React from "react";
import Herosection from "../Herosection/Herosection";
import AboutSection from "../Herosection/Aboutsection";
import Highlights from "../Herosection/Highlights";
import Schedule from "../Herosection/Schedule";
import ContactSection from "../Herosection/ContactSection";
import ProgramsPage from "../program/Program";
import ImpactPage from "../program/ImpactPage";



const Dashboard = () => {
    return (
        <>
        <Herosection></Herosection>
        <AboutSection></AboutSection>
        <Highlights></Highlights>
        <ImpactPage></ImpactPage>
        <ProgramsPage></ProgramsPage>
        <Schedule></Schedule>
        <ContactSection></ContactSection>
        </>
    )
}
export default Dashboard