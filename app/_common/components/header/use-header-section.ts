import { useEffect, useState } from "react";
import ContentService from "@common/services/content-service";
import { HeaderSectionModel } from "@common/models/home-page-model";

const useHeaderSection = () => {
    const [headerSection, setHeaderSection] = useState<HeaderSectionModel|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        ContentService.getInstance().getHeaderSection()
            .then((response) => {
                setHeaderSection(response.data.headerSection);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { headerSection, loading, error };
};

export default useHeaderSection;
