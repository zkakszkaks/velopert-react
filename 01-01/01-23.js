/**
 * 커스텀 Hook 만들어서 사용하기
 *
 * 컴포넌트를 만들다 보면은 가끔씩 반복되는 로직들이 발생한다.
 *
 * 예를 들어서 이렇게 input을 관리하는 코드는 꽤나 자주 작성할 수 있는 코드이다.
 * const onChange = (e) => {
 *  const { name, value } = e.target;
 *  setInputs({ ...inputs, [name]: value});
 * }
 *
 * 그런경우에는 custom hook을 만들어서 사용할 수 있다.
 *
 * input 상태를 관리하는 커스텀 훅을 직접 작성해 보도록 하자.
 */
