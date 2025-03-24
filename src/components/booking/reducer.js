import { fetchAPI } from '../../api';

const availableTimesReducer = (availableTimes, action) => {
    const actions = {
        updateTimes: () => {
            const { payload: date } = action;
            if (!date) return availableTimes;
            return fetchAPI(new Date(date));
        },
        initializeTimes: () => {
            return fetchAPI(new Date());
        }
    }
    return actions[action.type]();
}

export default availableTimesReducer;