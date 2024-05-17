import { render, screen } from '@testing-library/react'; // React 컴포넌트를 테스트하기 위한 라이브러리 임포트
import App from './App'; // App 컴포넌트 임포트

test('renders learn react link', () => {
  render(<App />); // App 컴포넌트를 렌더링
  const linkElement = screen.getByText(/learn react/i); // 화면에서 'learn react' 텍스트를 가진 요소를 찾기
  expect(linkElement).toBeInTheDocument(); // 해당 요소가 문서에 존재하는지 확인
});
