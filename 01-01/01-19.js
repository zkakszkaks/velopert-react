/**
 * useCallback Hook
 *
 * 이전에 만들었던 함수를 새로 만들지 않고, 재사용하는 방법에 대해서 알아보자.
 *
 * useMemo랑 비슷한데 함수를 위한 훅이다.
 *
 * 컴포넌트가 매번 리렌더링될때마다 App 컴포넌드의 함수를 새로 만들고 있다.
 * onCreate, onRemove, onToggle 등.
 *
 * 함수를 다시 만드는것은 메모리도 cpu도 리소스를 많이 차지하는 작업은 아님.
 * 새로 선언한다고 해서 그 자체만으로 부하가 걸리지 않음.
 *
 * 그럼에도 불구하고 한번만든 함수는 재사용할수 있으면 재사용 하는 것이 좋다.
 * 왜냐하면 CreateUser, UserList의 프롭스가 변하지 않았다면 virtual dom에
 * 하는 리렌더링조차 않하게 할 수 가 있음.
 * 프롭스가 변하지 않았다면 다시 리렌더링하지 않고 이전에 만들어놨던 결과물을 재사용할수 있게
 * 할수 있다.(virtual dom에서 리렌더링 하지 않는다.)
 * 그런데 함수가 새로 만들어지는 구조라면 최적화를 하지 못한다.
 * 그렇게 때문에 함수도 재사용을 해줘야 한다.
 *
 *
 *
 *
 * UseCallback이 필요한 이유
 * - 컴포넌트 성능 최적화를 위해
 * - 함수를 다시 생성하는것은 많은 리소스를 차지 하지 않지만
 * - 프롭스가 변경 되지 않았을때 virtual dom에 하는 리렌더링 조차
 * - 하지 않도록 하는 성능 최적화를 하기 위해서는
 * - 함수가 매번 다시 생성되는 것을 막아야 하기 때문에 사용한다.
 * - 이전에 만들었던 함수를 재 생성하지 않고 재 사용하는 usecallback을 사용한다.
 *
 *
 *https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
 *
 *
 *
 */
