export const FETCHREQUEST = 'FETCHREQUEST'
export const FETCHSUCCESS = 'FETCHSUCCESS';
export const FETCHFAILURE = 'FETCHFAILURE';

export const fetchRequest = (ingredients) => {
    return async (dispatch) => {
        dispatch({ type: FETCHREQUEST });

        try {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=d8a585e7&app_key=13414a2221a69fde2cd00537ac9a240a`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            dispatch({ type: FETCHSUCCESS, payload: data.hits });
        } catch (error) {
            dispatch({ type: FETCHFAILURE, payload: error.message });
        }
    };
};
