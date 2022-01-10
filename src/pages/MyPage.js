import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />; // replace={true} props를 통해 페이지를 기록에 남기지 않기 때문에, 뒤로 가기를 누르면 2페이지 전의 페이지로 이동
  }

  return <div>마이 페이지</div>;
};

export default MyPage;
