const PATH_COFEES = "/coffees";

function coffees(roast: string): string {
  if (roast != null) {
    return `${PATH_COFEES}/roast/${roast}`;
  } else {
    return "/";
  }
}

export const path = {
  cinnamonRoast: coffees("cinnamon"),
  cityRoast: coffees("city"),
  frenchRoast: coffees("french"),
  fullcityRoast: coffees("fullcity"),
  highRoast: coffees("high"),
  mediumRoast: coffees("medium"),
  roast: coffees(":roast"),
  roastCoffees: coffees,
};
