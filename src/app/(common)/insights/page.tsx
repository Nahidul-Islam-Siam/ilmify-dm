import React from 'react';
import InsightsHero from '../components/pages/insight/InsightHero';
import FeaturedInsightCard from '../components/pages/insight/FeaturedInsight';
import LatestInsight from '../components/pages/insight/LatestInsight';

const Insights = () => {
    return (
        <>
            <InsightsHero />
            <FeaturedInsightCard/>
            <LatestInsight />
        </>
    );
};

export default Insights;
