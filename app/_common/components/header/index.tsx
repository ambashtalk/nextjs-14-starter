'use client'

import React from "react";
import useHeaderSection from "./use-header-section";
import { Spinner } from "@common/components/spinner";

export const Header: React.FC = () => {
    const { headerSection, loading, error } = useHeaderSection();

    return loading ? <Spinner /> : <h1>{headerSection?.companyName}</h1>;
};
