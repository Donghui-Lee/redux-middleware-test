export default function createRequestThunk(type, request) {
    // 성공 / 실패 액션 차입 정의
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return params => async dispatch => {
        // 시작
        dispatch({type});
        try {
            const response = await request(params);
            // 성공
            dispatch({
                type: SUCCESS,
                payload: response.data
            });
        } catch(e) {
            // 실패
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            });
            throw e;
        }
    };
};