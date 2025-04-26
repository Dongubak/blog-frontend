import client from "./client";


export const listCourses = ({ professor, course_name, page }) => {
  //  console.log(professor, course_name, page);

  return client.get(
    `/api/courses?professor=${professor}&course_name=${course_name}&page=${page}`,
  );
};
