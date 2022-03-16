import * as React from "react"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/ParentSpiritPage/HeroSection/HeroSection"
import { useWhiskeyQuery } from "../hooks/useWhiskeyQuery"


const WhiskeyPage = () => {
    const { whiskey } = useWhiskeyQuery()
  
    return (
        <Layout>
            <HeroSection data={whiskey} />
        </Layout>
    )
}

export default WhiskeyPage