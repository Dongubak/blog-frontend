import React from "react";
import Responsive from "../components/common/Responsive";
// import EditorContainer from '../containers/write/EditorContainer';
// import TagBoxContainer from '../containers/write/TagBoxContainer';
// import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import EditorContainer from "../containers/write/EditorContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";
import { Helmet } from "react-helmet-async";

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - KTC</title>
      </Helmet>
      <EditorContainer></EditorContainer>
      {/* <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer /> */}
      <WriteActionButtonsContainer></WriteActionButtonsContainer>
    </Responsive>
  );
};

export default WritePage;
