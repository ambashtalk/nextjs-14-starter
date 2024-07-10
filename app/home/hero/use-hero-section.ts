import { useEffect, useState } from "react";
import ContentService from "@common/services/content-service";
import { HeroSectionModel } from "@common/models/home-page-model";

export const useHeroSection = () => {
    const [data, setData] = useState<HeroSectionModel | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        ContentService.getInstance().getHeroSection()
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
};
