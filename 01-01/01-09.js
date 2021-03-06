/**
 * [01-09] 여러개의 input 상태 관리하기
 */
/**
 * [01-10] useRef로 특정 DOM 선택하기
 *
 * 리액트를 사요하는 경우에는 돔을 직점 선택해야 하는 상황이 발생 할 수 있음.
 *
 * 1. 특정 엘리먼트의 크기나 위치를 가져 올 때
 * 2. 스크롤바 위치를 가져오거나 설정
 * 3. 포커스를 설정해 줘야 할 때
 *
 * vide.js jwplayer html5 비디오 관련 라이브러리를 사용
 * d3 chart.js 그래프 관련 라이브러리 사용 할때
 * 특정 돔에다가 라이브러리를 적용하기 때문에
 * 돔을 선택해야 하는 상황이 발생할 수 있다.
 *
 * 그럴때에는 리액트에서 ref라는 것을 사용한다.
 * 함수형 컴포넌트에서 ref를 사용할 때는 useRef라는 훅 함수를 사용한다.
 * 클래스형 컴포넌트에서는 React.createRef()라는 것을 사용한다.
 * 또는 콜백함수로도 사용할 수 있음.
 *
 * 초기화 버튼을 눌렀을때 포커스가 이름 인풋으로 가게 하고 싶을때
 *
 *
 * [*] useRef는 렌더링과 전혀 관계없는 변수를 관리할 때에도 사용
 *
 *
 *
 */
