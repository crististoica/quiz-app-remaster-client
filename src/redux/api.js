import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return req;
});
// auth
export const signup = (formInfo) => API.post("/user/signup", formInfo);
export const signin = (formInfo) => API.post("/user/signin", formInfo);
export const checkToken = () => API.get("/user/check-token");

// quiz
export const getQuiz = (course) => API.get(`/quiz/get-quiz/${course}`);
export const getQuizes = () => API.get("/quiz/get-quizes");
export const verifyQuiz = (progress) => API.post("/quiz/verify-quiz", progress);

// community
export const getTopics = () => API.get("/community/get-topics");
export const getTopic = (slug) => API.get(`/community/get-topic/${slug}`);
export const getOnePost = (topicSlug, postSlug) =>
  API.get(`/community/get-one-post/${topicSlug}/${postSlug}`);
export const createNormalPost = (postInfos) =>
  API.post("/community/create-normal-post", postInfos);
export const createQuizPost = (postInfos) =>
  API.post("/community/create-quiz-post", postInfos);
export const createReply = (replyInfos, slug) =>
  API.post(`/community/create-reply/${slug}`, replyInfos);

// admin
export const createTopic = (topicInfos) =>
  API.post("/admin/topics/create-topic", topicInfos);

export const removeTopic = (topicId) =>
  API.delete(`/admin/topics/remove-topic/${topicId}`);

export const toggleTopicLock = (topicId, topicInfos) =>
  API.put(`/admin/topics/toggle-topic-lock/${topicId}`, topicInfos);

export const updateTopic = (topicId, topicInfos) =>
  API.put(`/admin/topics/update-topic/${topicId}`, topicInfos);

export const createQuiz = (quizInfos) =>
  API.post("/admin/quizes/create-quiz", quizInfos);
