export function convertSectionIdToQueryParam(id: string) {
  let queryParamName = "populate";

  if (id != null) {
    const fields = id.split(".");
    for (const field of fields) {
      queryParamName += `[${field}][populate]`;
    }
  }

  return { [queryParamName]: "*" };
}

export function convertSectionIdsToQueryParam(ids: string[]) {
  let queryParams = {};
  ids.forEach((sectionId) => {
    queryParams = {
      ...queryParams,
      ...convertSectionIdToQueryParam(sectionId),
    };
  });
  return queryParams;
}
