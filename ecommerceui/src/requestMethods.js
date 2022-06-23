import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjMwMmRkYmIzZWU0Njc2YzE3MDc2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTk4NzcyNywiZXhwIjoxNjU2MjQ2OTI3fQ.7eSM2RsIzbLQTka365MpUDmYVMtVFT6mAG3qiQPqU2s";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
