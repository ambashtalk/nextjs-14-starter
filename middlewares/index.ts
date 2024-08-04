import { handleHomePageRedirect } from "./home-page-redirect";

// middlewares are executed in order put in this array
export const middlewares = [handleHomePageRedirect];
