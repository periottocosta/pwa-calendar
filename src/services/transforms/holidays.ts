import { PublicHoliday, PublicHolidayResponse } from "@/interfaces/holidays";

export const transformHolidays = (holidays: PublicHolidayResponse[]): PublicHoliday[] => {
    return holidays.map((holiday) => ({
        ...holiday,
    }));
}