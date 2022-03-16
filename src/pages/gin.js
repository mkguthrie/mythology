import * as React from "react"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/ParentSpiritPage/HeroSection/HeroSection"
import { useGinQuery } from "../hooks/useGinQuery"


const GinPage = () => {
    const { gin } = useGinQuery()

    return (
        <Layout>
            <HeroSection data={gin} />
        </Layout>
    )
}

export default GinPage