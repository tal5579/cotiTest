import axios from "axios";
import { take, takeLeading, call, put } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import {actions, putCountriesList} from "../redux/actions/index";
import {ICountry} from "../redux/interfaces/countrieList";

function countdown(secs: number) {
    return eventChannel(emitter => {
        const iv = setInterval(() => {
                axios.get('https://restcountries.com/v3.1/all').then((response) => {
                    let data: ICountry[] = response?.data;
                    const sortedArray = data.sort((a: any, b: any) => {
                        if (a?.name?.common < b?.name?.common) {
                            return -1;
                        }
                        if (a?.name?.common > b?.name?.common) {
                            return 1;
                        }
                        return 0;
                    });
                    emitter(sortedArray);
                }).catch(err => {
                    emitter(new Error(err.message))
                    emitter(END)
                })
            }, secs);
            // The subscriber must return an unsubscribe function
            return () => {
                clearInterval(iv)
            }
        }
    )
}
export function* sendEventCountrieList() {
    try {
        // @ts-ignore
        const chan = yield call(countdown, 15000);
        try {
            while (true) {
                // @ts-ignore
                let response = yield take(chan);
                yield put(putCountriesList({countriesList: response}));
            }
        }
        catch (e) {}
    }
    catch(e) {}
}

function* rootSaga() {
    yield takeLeading(actions.SEND_EVENT_COUNTRY_LIST, sendEventCountrieList);
}

export default rootSaga;