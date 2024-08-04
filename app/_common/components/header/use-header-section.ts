import { useEffect, useState } from "react";
import ContentService from "@common/services/content-service";
import { HeaderSectionModel } from "@common/models/home-page-model";

export const useHeaderSection = () => {
    const [data, setData] = useState<HeaderSectionModel>();
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
