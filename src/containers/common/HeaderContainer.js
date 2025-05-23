import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/common/Header";
import { logout } from "../../modules/user";
import { useLocation, useNavigate } from "react-router";

const HeaderContainer = () => {
  const user = useSelector((state) => state.user.user);

  const [tip, setTip] = useState({
    ["/course"]:
      "검색 기능을 통해 강의를 추가할 수 있고 추가된 강의를 클릭하면 삭제할 수 있습니다.",
    ["/"]: "username을 클릭하면 그 user가 작성한 글들을 볼 수 있습니다",
  });
  const location = useLocation();

  // const [tip, setTip] = useState('');
  // console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  };

  const navigators = {
    viewAll: () => navigate("/"),
    viewQna: () => navigate("?subject=qna"),
    viewAnnouncement: () => navigate("?subject=announcement"),
    viewKnowledge: () => navigate("?subject=knowledge"),
    viewCommunity: () => navigate("?subject=community"),
  };

  useEffect(() => {}, [dispatch]);

  // const viewAll =
  // const viewCommunity = () => navigate('/?subject=community');
  // const viewQna = () => navigate('/?subject=qna');
  // const viewAnnouncement = () => navigate('/subject=announcement');

  const onLogout = () => {
    dispatch(logout());
  };

  const onGoHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGoCourse = useCallback(() => {
    navigate("/course");
  }, [navigate]);

  const onGoMeeting = useCallback(() => {
    navigate("/meeting");
  }, [navigate]);

  const onGoSearchFood = useCallback(() => {
    navigate("/searchFood");
  }, [navigate]);

  const onGoNews = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  const onGoMeal = useCallback(() => {
    navigate("/meal");
  });

  return (
    <Header
      user={user}
      onLogout={onLogout}
      goLogin={goLogin}
      onGoHome={onGoHome}
      onGoCourse={onGoCourse}
      onGoMeeting={onGoMeeting}
      onGoSearchFood={onGoSearchFood}
      onGoNews={onGoNews}
      onGoMeal={onGoMeal}
      tip={tip[location.pathname]}
      location={location}
      navigators={navigators}
    />
  );
};

export default HeaderContainer;
