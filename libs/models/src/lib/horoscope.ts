import { AdhZodiacSign } from "./zodiac-sign";

export interface AztroHoroscpeResponse {
  date_range: string;
  current_date: string;
  description: string;
  compatibility: string;
  mood: string;
  color: string;
  lucky_number: string;
  lucky_time: string;
}

export interface AdhHoroscope {
  currentDate: Date;
  description: string;
  compatibility:  AdhZodiacSign;
  mood: string;
  color: string;
  luckyNumber: number;
  luckyTime: string;
}

export function transfromAztroHoroscpeResponseToAdhHoroscope(
  responose: AztroHoroscpeResponse
): AdhHoroscope {
  return {
    currentDate: new Date(responose.current_date),
    description: responose.description,
    compatibility: responose.compatibility as AdhZodiacSign,
    mood: responose.mood,
    color: responose.color,
    luckyNumber: parseInt(responose.lucky_number),
    luckyTime: responose.lucky_time,
  };
}