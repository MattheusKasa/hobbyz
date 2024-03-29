import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Post from "./Post";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchPosts();
    }, 1000)
    return () => {
        clearTimeout(timer)
    }
  }, [filter, query, pathname, currentUser]);

  return (
    <>
      <Container fluid className="py-2">
        <Row>
          <Col xs={12}>
            <PopularProfiles limit={3} />
          </Col>
        </Row>
      </Container>
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
   
        <Form 
            className={styles.SearchBar}
            onSubmit={(event) => event.preventDefault()}>
            <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text" className="mr-sm-2" placeholder="Search for Hobbyz!" />
        </Form>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
                <InfiniteScroll
                    children={
                      posts.results.map((post) => (
                      <Post key={post.id} {...post} setPosts={setPosts} />
                      ))
                    }
                      dataLength={posts.results.length}
                      loader={<Asset spinner />}
                      hasMore={!!posts.next}
                      next={() => fetchMoreData(posts, setPosts)}
                />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
        </Col>
        
      </Row>
    </>
  );
}

export default PostsPage;