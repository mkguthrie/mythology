import * as React from "react"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/ParentSpiritPage/HeroSection/HeroSection"
import { useVodkaQuery } from "../hooks/useVodkaQuery"


const VodkaPage = () => {
    const { vodka } = useVodkaQuery()
 
    return (
        <Layout>
            <HeroSection data={vodka} />
        </Layout>
    )
}

export default VodkaPage