export const marathonListDataMapper = (data) => {
  if (!Boolean(data)) return [];
  let obj;
  let temp = data?.map((ele) => {
    obj = {};
    obj["id"] = ele.locationId;
    obj["Locations"] = ele.name;

    obj["Status"] = ele.activeFlag === 0 ? "Active" : "Inactive";
    return obj;
  });
  return temp;
};
