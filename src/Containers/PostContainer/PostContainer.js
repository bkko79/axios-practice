import React, {Component} from 'react';
import { PostWrapper, Navigate, Post, Warning } from '../../Components';
import * as service from '../../Services/Post';

class PostContainer extends Component {

  constructor(props) {
    super();
    this.state = {
      postId: 1,
      fetching: false,
      post: {
        title: null,
        body: null,
      },
      comments: [],
      warningVisibility: false,
    }
  }
  componentDidMount() {
    this.fetchPostInfo(1);
  }

  fetchPostInfo = async (postId) => {
    this.setState({
      fetching: true
    })

    try {
      const info = await Promise.all([
        await service.getPost(postId),
        await service.getComments(postId),
      ])
      const {title,body} = info[0].data;
      const comments = info[1].data;

      this.setState({
        postId,
        post: {
          title,
          body
        },
        comments,
        fetching: false,
      })
    } catch(e){
      this.setState({
        fetching: false,
      })
      this.showWarning();
      console.log('error occured', e);
    }
  }

  handleNavigateClick = (type) => {
    const postId = this.state.postId;
    if (type === 'NEXT') {
      this.fetchPostInfo(postId+1);
    } else {
      this.fetchPostInfo(postId-1);
    }
  }

  showWarning = () => {
    this.setState({
      warningVisibility: true
    });
    setTimeout(
      () => {
        this.setState({
          warningVisibility: false
        })
      }, 1500
    )
  }

  render() {
    const {handleNavigateClick} = this;
    const {postId, fetching, post, comments, warningVisibility} = this.state;
    return (
      <PostWrapper>
        <Navigate
          postId={postId}
          disabled={fetching}
          onClick={handleNavigateClick}
        />
        <Post 
          postId={postId}
          title={post.title}
          body={post.body}
          comments={comments}
        />
        <Warning message="That does not exists." visible={warningVisibility} />
      </PostWrapper>
    );
  }
}

export default PostContainer;