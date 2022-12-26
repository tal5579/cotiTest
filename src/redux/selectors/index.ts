import { useSelector } from 'react-redux';
import {IStore} from "../interfaces/IStore";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const appData = () => useSelector((state: IStore) => state.appData);