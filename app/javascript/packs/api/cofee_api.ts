import axios from "axios";
import { Coffee } from "../model/coffee";

const ENDPOINT_COFEES = "/api/coffees";

function endpoint(roast: string): string {
  if (roast != null) {
    return `${ENDPOINT_COFEES}/roast/${roast}`;
  } else {
    return ENDPOINT_COFEES;
  }
}

export async function getCoffees(roast: string = null): Promise<Coffee[]> {
  try {
    const response = await axios.get(endpoint(roast));
    return response.data as Coffee[];
  } catch (error) {
    // TODO: error report
  }
}
