import React from "react";
import Header from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import MainContent from "../src/components/Main"

export default function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}