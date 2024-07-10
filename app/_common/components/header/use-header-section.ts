import { useEffect, useState } from "react";
import ContentService from "@common/services/content-service";
import { HeaderSectionModel } from "@common/models/types/home-page-model-type";

export const useHeaderSection = () => {
    const [data, setData] = useState<HeaderSectionModel | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        ContentService.getInstance()
            .getHeaderSection()
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
