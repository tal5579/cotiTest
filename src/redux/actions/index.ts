export enum actions {
    PUT_COUNTRIES = "PutContries",
    SEND_EVENT_COUNTRY_LIST = "SendEventCountryList",}

export const putCountriesList = (data: any) => {
    return {
        type: actions.PUT_COUNTRIES,
        payload: data
    }
}