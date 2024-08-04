import { HeroSectionModel } from "@common/models/types/home-page-model";

interface Props {
    data: HeroSectionModel | null;
}

export const HeroView: React.FC<Props> = ({ data }) => {
    return <h1>{data?.heroSection?.heroTitle?.header}</h1>;
};
