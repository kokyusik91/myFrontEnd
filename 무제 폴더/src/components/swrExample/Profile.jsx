import axios from 'axios';
import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

const Page = () => {
  // 요청하는 함수.
  <Profile id={123} />;
};

// 공통화 처리
function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

const Profile = ({ id }) => {
  const { user, isLoading, isError } = useUser(id);
  if (isError) return <div>failed to loadg</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <div>hello {user.name}! </div>
    </>
  );
};

// function Avar

export default Page;
