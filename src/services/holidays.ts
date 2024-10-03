import { apiClient } from "@/apiClient";
import { API, STORAGE_KEYS } from "@/utils/constants";
import { transformHolidays } from "./transforms/holidays";
import { PublicHoliday } from "@/interfaces/holidays";
import { format } from "date-fns";
import { getInfo, saveInfo } from "@/utils/storage";

export const getPublicHolidays = async (
    country: string,
    subDivision: string,
    startDate: string,
    endDate: string
): Promise<PublicHoliday[]> => {
    try {
        const key = `${STORAGE_KEYS.HOLIDAYS}_${format(startDate, 'MMMM')}`
        const holidays = getInfo(key);

        if (holidays) {
            return JSON.parse(holidays);
        }

        const response = await apiClient.get(API.HOLIDAYS, {
            params: {
                countryIsoCode: country,
                languageIsoCode: "EN",
                subdivisionCode: subDivision,
                validFrom: startDate,
                validTo: endDate,
            }
        });

        const holidaysObj = transformHolidays(response.data);
        saveInfo(JSON.stringify(holidaysObj), key);

        return holidaysObj;
    } catch (error) {
        throw new Error("Error fetching holidays");
    }
};
