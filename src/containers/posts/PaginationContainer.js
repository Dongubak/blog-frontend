import React from "react";
import Pagination from "../../components/posts/Pagination";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

const PaginationContainer = () => {
  // const { all, posts, loading } = useSelector(({ posts, loading }) => ({
  //   all: posts,
  //   posts: posts.posts,
  //   loading: loading['posts/LIST_POSTS'],
  // }));

  const all = useSelector((state) => state.posts);
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.loading["posts/LIST_POSTS"]);

  const [searchParams] = useSearchParams();
  const { username } = useParams();

  // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여주지 않음
  if (!posts || loading) return null;

  // page가 없으면 1을 기본값으로 사용
  //   const { tag, username, page = 1 } = qs.parse(location.search, {
  //     ignoreQueryPrefix: true,
  //   });

  const page = searchParams.get("page") || 1;
  const subject = searchParams.get("subject") || "";
  const lastPage = all.posts.pagination.totalPages || 1;

  return (
    <Pagination
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
      subject={subject}
    />
  );
};

export default PaginationContainer;
