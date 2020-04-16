/**
 * React.memo를 사용한 컴포넌트 리렌더링 방지
 *
 * 컴포넌트에서 리렌더링이 불필요할때 이전에 렌더링한 결과를
 * 재사용하는 방법에 대해서 알아보자.
 *
 * 이 함수를 사용하면 컴포넌트의 리렌더링 성능을 최적화 해 줄수 있다.
 *
 * React.memo를 사용하면 프롭스가 바뀌었을때만 리렌더링을 해준다.
 *
 * 모든 컴포넌트에 React.memo를 감싸준다. export default 하는 곳과 User컴포넌트 함수 선언하는 부분
 *
 * active 상태를 만들면 다른 user 컴포넌트도 리렌더링 되고 있음.
 * users배열이 바뀌면 onToggle, onRemove가 바뀜 (함수가 다시만들어짐)
 * UserList에 프롬스로 onToggle, onRemove가 들어가는데
 * 프롭스가 바뀌므로 UserList다시 리렌더링됨.
 * 유저 컴포넌트에서도 onRemove, onToggle 프롭스가 바뀌므로 리렌더링됨.
 *
 * onRemove나 onToggle에서 기존 user를 참조하면 안된다.
 * 그대신에 useState의 함수형 업데이트를 하면 해결 할 수 있다.
 * 함수형 업데이트를 하면은 디펜던시에 users를 안넣어도 된다.
 *
 *
 *
 */
const onCreate = useCallback(() => {
  setUsers((users) => [...users, { id: nextId.current++, ...inputs }]);
  setInputs({
    username: "",
    email: "",
  });
}, [inputs]);

// setUsers 파라메터 users에서 최신 users를 조회한다.

// React.memo를 사용할때
// 두번째 파라메터리 propsAreEqual이라는 함수를 넣어줄수 있다.
// prevProp, nextProps비교해서 true면 리렌더링 방지 false면 리렌더링 하게함.
// UserList에 onremove, onToggle은 안바뀔 것을 아니까

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.props
); // 나머지 프롭스가 고정적이라서 비교할 필요없어서 users만 가지고 리렌더링할지 않할지 판단.
// users가 같으면 리렌더링 하지 않고 다르면 리렌더링 하겠다는 의미

// 연산된 값 재 사용 -> useMemo 사용
// 특정함수 재사용 -> useCallback 사용
// 컴포넌트 렌더링한 결과물을 재사용하기 위해서는 -> React.memo 사용

// 모든 컴포넌트에 적용하는 것이아니라 최적화가 필요한 경우에만 사용
