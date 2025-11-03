export type RootDrawerParamList = {
  Courses: undefined;
  "My Profile": undefined;
};

export type CoursesTabParamList = {
  "All Courses": undefined;
  "My Wishlist": undefined;
};

export type CourseStackParamList = {
  CourseList: undefined;
  CourseDetail: {
    courseId: string;
    title: string;
    description: string;
  };
};
