/* eslint-disable @nx/enforce-module-boundaries */
import { AdhHoroscopeDay, AdhZodiacSign, AztroHoroscpeResponse } from "@rn-monorepo-nx/models";


async function getHoroscope(
  zodiacSign: AdhZodiacSign,
  day: AdhHoroscopeDay
): Promise<AztroHoroscpeResponse> {
  const response: Response = await fetch(
    `https://aztro.sameerkumar.website/?sign=${zodiacSign.toLowerCase()}&day=${day}`,
    {
      method: 'POST',
    }
  );
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export const aztroService = { getHoroscope };