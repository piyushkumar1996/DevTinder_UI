import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import UserCard from "../components/UserCard";

const Feeds = () => {
  const [feedData, setFeedData] = useState(null);

  const getFeedData = async () => {
    const res = await axios.get(`${BASE_URL}/user/feeds`, {
      withCredentials: true,
    });
    setFeedData(res?.data?.data);
  };

  useEffect(() => {
    getFeedData();
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      {feedData?.users ? <UserCard user={feedData?.users?.[0]} /> : null}
    </div>
  );
};

export default Feeds;
