import { HeaderSectionModel } from "../../models/types/home-page-model-type";

interface Props {
    data: HeaderSectionModel | null;
}

export const HeaderView: React.FC<Props> = ({ data }) => {
    return <h1>{data?.headerSection?.companyName}</h1>;
};
