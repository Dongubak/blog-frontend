import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import SubInfo from "../common/SubInfo";
import { Link } from "react-router-dom";

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { created_date, title, body, id, subject, username, comment_count } =
    post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/${username}/${id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={username}
        publishedDate={new Date(created_date)}
        subject={subject}
        comment_count={comment_count}
      />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({
  posts,
  listPostLoading,
  error,
  showWriteButton,
  onGoWritePage,
}) => {
  // 에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan onClick={onGoWritePage}>
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!listPostLoading && posts && (
        <div>
          {posts.posts.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
