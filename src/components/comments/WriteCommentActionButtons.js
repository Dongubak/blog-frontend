import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const WriteCommentActionButtonsBlock = styled.div`
  button + button {
    margin-left: 0.5rem;
  }
`;

/* TagBox에서 사용하는 버튼과 일치하는 높이로 설정 후 서로 간의 여백 지정 */
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteCommentActionButtons = ({ onPublish, user }) => {
  return (
    <WriteCommentActionButtonsBlock>
      <StyledButton cyan onClick={onPublish} disabled={user ? false : true}>
        작성
      </StyledButton>
    </WriteCommentActionButtonsBlock>
  );
};

export default WriteCommentActionButtons;
