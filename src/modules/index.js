import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import post, { postSaga } from "./post";
import posts, { postsSaga } from "./posts";
import courses, { coursesSaga } from "./courses";
import cart, { cartSaga } from "./cart";
import comments, { commentsSaga } from "./comments";
import meetings, { MeetingsSaga } from "./meetings";
import food, { FoodSaga } from "./food";
import meal, { MealSaga } from "./meal";
import news, { NewsSaga } from "./news";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
  courses,
  cart,
  comments,
  meetings,
  food,
  meal,
  news,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
    coursesSaga(),
    cartSaga(),
    commentsSaga(),
    MeetingsSaga(),
    FoodSaga(),
    MealSaga(),
    NewsSaga(),
  ]);
}

export default rootReducer;
