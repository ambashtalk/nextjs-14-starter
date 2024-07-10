"use client";

import React from "react";
import { useHeroSection } from "./use-hero-section";
import { Spinner } from "@common/components/spinner";
import { HeroView } from "./hero";

export const Hero: React.FC = () => {
    const { data, loading, error } = useHeroSection();

    return loading ? <Spinner /> : <HeroView data={data} />;
};
