import axios from "axios";
import { Coffee } from "../model/coffee";

const ENDPOINT_COFEES = "/api//coffees";

export async function getCoffees(): Promise<Coffee[]> {
  try {
    const response = await axios.get(ENDPOINT_COFEES);
    return response.data as Coffee[];
  } catch (error) {
    // TODO: error report
  }
}
