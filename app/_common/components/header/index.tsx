'use client'

import React from "react";
import useHeaderSection from "./use-header-section";
import { Spinner } from "@common/components/spinner";
import { HeaderView } from "./header";

export const Header: React.FC = () => {
    const { data, loading, error } = useHeaderSection();

    return loading ? <Spinner /> : <HeaderView data={data}/>;
};
