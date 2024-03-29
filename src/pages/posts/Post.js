import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { DropdownEdit } from "../../components/DropdownEdit";
import { useTheme } from "../../contexts/ThemeContext";


const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const { theme } = useTheme();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}`);
      history.goBack();
    } catch (err) {

    }
  };



  const handleLike = async () => {
    try {
        const { data } = await axiosRes.post('/likes/', {post:id})
        setPosts((prevPosts) => ({
            ...prevPosts,

            results: prevPosts.results.map((post) => {
                return post.id === id
                    ? {...post, likes_count: post.likes_count + 1, like_id: data.id}
                    :post;
            }),
        }));
    } catch(err){

    }
  }

  const handleUnLike = async () => {
    try {
        await axiosRes.delete(`/likes/${like_id}/`);
        setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
                return post.id === id
                    ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                    : post;
            }),
        }));
    } catch (err) {

    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Card className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
  
          <div className="d-flex align-items-center">
            <span
              className={`${
                styles.postDate
              } ${theme === "light" ? styles.lightDate : styles.darkDate}`}
            >
              {updated_at}
            </span>
            {is_owner && postPage && (
              <DropdownEdit
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Card>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && (
          <Card.Title
            className={`text-center ${styles.postTitle} ${
              theme === "light" ? styles.lightTitle : styles.darkTitle
            }`}
          >
            {title}
          </Card.Title>
        )}
        {content && (
          <Card.Text
            className={`${styles.postContent} ${
              theme === "light" ? styles.lightContent : styles.darkContent
            }`}
          >
            {content}
          </Card.Text>
        )}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You're not able to like your own post</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnLike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          <span className={styles.counterNumber}>{likes_count}</span>
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          <span className={styles.counterNumber}>{comments_count}</span>
        </div>
      </Card.Body>
    </Card>
  );
  
};

export default Post;