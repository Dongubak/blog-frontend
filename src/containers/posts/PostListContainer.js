import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../../components/posts/PostList";
import { listPosts } from "../../modules/posts";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { initSubject } from "../../modules/write";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { username } = useParams();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const subject = searchParams.get("subject") || "";

  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const listPostLoading = useSelector(
    (state) => state.loading["posts/LIST_POSTS"],
  );
  const removePostLoading = useSelector(
    (state) => state.loading["write/REMOVE_POST"],
  );

  const user = useSelector((state) => state.user.user);

  const onGoWritePage = useCallback(() => {
    dispatch(initSubject(subject));
    navigator("/write");
  }, [navigator, subject, dispatch]);

  useEffect(() => {
    if (!listPostLoading && !removePostLoading) {
      dispatch(listPosts({ username, page, subject }));
    }
  }, [dispatch, username, page, searchParams, subject]);

  return (
    <PostList
      listPostLoading={listPostLoading}
      error={error}
      posts={posts}
      showWriteButton={user}
      onGoWritePage={onGoWritePage}
    />
  );
};

export default PostListContainer;
