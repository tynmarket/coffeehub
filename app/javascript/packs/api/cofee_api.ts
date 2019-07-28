import { Coffee } from '../model/coffee';
import axios from 'axios';

const ENDPOINT_COFEES = '/api/coffees';

function endpoint(roast: string | null, query: string | null): string {
  if (roast != null) {
    return `${ENDPOINT_COFEES}/roast/${roast}${query}`;
  } else {
    return `${ENDPOINT_COFEES}${query}`;
  }
}

export async function getCoffees(
  roast: string | null,
  query: string | null
): Promise<Coffee[]> {
  try {
    const response = await axios.get<Coffee[]>(endpoint(roast, query));
    return response.data;
  } catch (error) {
    // TODO: error report
    return [];
  }
}
