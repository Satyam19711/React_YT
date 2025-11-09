import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const Feed = ({ category, searchTerm, isSearching }) => {
  const [data, setData] = useState([]);

  const fetchPopularVideos = async () => {
    try {
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
      const response = await fetch(videoList_url);
      const result = await response.json();
      setData(result.items || []);
    } catch (error) {
      console.error("Error fetching popular videos:", error);
    }
  };

  const fetchSearchResults = async () => {
    try {
      const search_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${encodeURIComponent(
        searchTerm
      )}&type=video&key=${API_KEY}`;
      const response = await fetch(search_url);
      const result = await response.json();
      setData(result.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    if (searchTerm && isSearching) {
      fetchSearchResults(); //
    } else if (!searchTerm) {
      fetchPopularVideos();
    }
  }, [category, searchTerm, isSearching]);

  return (
    <div className="feed">
      {data.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          No videos found...
        </p>
      ) : (
        data.map((item, index) => {
          const videoId = item.id.videoId || item.id;
          return (
            <Link
              to={`/video/${item.snippet.categoryId || "0"}/${videoId}`}
              className="card"
              key={videoId || index}
            >
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
              <h2>{item.snippet.title}</h2>
              <h3>{item.snippet.channelTitle}</h3>
              {item.statistics ? (
                <p>
                  {value_converter(item.statistics.viewCount)} views •{" "}
                  {moment(item.snippet.publishedAt).fromNow()}
                </p>
              ) : (
                <p>{moment(item.snippet.publishedAt).fromNow()}</p>
              )}
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Feed;
