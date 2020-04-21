/**
 * useReducer Hook
 *
 * 컴포넌트의 상태를 업데이트 해야 할때는 useState를 사용해서 새로운 상태를 설정 해줌.
 *
 * useSate말고도 useReducer라는 훅을 사용해서 상태를 업데이트 할수도 있다.
 *
 * useState는 다음 상태를 직접 지정해서 업데이트 함.
 * setValue
 *
 * useReducer는 action이라는 객체를 기반으로 상태를 업데이트 함.
 *
 * dispatch({type:'INCREMENT'})
 * action객체 : 업데이트할때 참조하는 객체
 *
 * type이라는 값을 사용해서 어떤 업데이트를 할 건지 명시 할 수 있다.
 * dispatch({
 *  type: 'INCREMENT',
 *  diff: 4
 * })
 *
 * 업데이트할때 필요한 참조하고 싶은 다른 값이 있다면 diff 에 넣을 수도 있음
 *
 * 컴포넌트 상태 업데이트 로직을컴포넌트 밖으로 분리 가능
 * 다른 파일에 작성후 불러와서 사용할 수도 있다.
 *
 * reducer: 상태를 업데이트 하는 함수 의미
 *
 * function reducer(state, action) {
 *  switch (action.type) {
 *    case 'INCREMENT' :
 *       return state + 1;
 *    case 'DECREMENT' :
 *      return state - 1;
 *    default:
 *      return satate;
 *
 * 리듀서는 현재상태와 액션객체를 바파메터로 받아와서
 * 새로운 상태를 반환해 주는 형태를 갖추고 있어야 한다.
 *
 * useReducer를 사용할 때는 이렇게 쓴다.
 * const [number, dispatch] = useReducer(reducer, 0);
 *
 * number: 현재상태
 * dispatch: 액션을 발생 시키는 함수
 *
 * dispatch: 보내다 라는 의미를 가지고 있다.
 *
 * dispatch({type:'INCREMENT'}); // 여기서는 액션을 발생 시킨다라는 의미로 사용하면 쉬움.
 *
 *
 * }
 *
 *
 *
 *
 *
 *
 */
