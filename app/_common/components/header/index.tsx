"use client";

import React, { useState } from "react";
import { useHeaderSection } from "./use-header-section";
import { Spinner } from "@common/components/spinner";
import { HeaderView } from "./header";

export const Header: React.FC = () => {
    const { data, loading, error } = useHeaderSection();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return loading ? (
        <Spinner />
    ) : data ? (
        <HeaderView
            data={data}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
        />
    ) : (
        <button onClick={() => window.location.reload()}>Try again</button>
    );
};
