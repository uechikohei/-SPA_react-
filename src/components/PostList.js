import React from "react";
import Post from "./Post";
import Grid from "@material-ui/core/Grid";

function PostList(props) {
        const posts = props.posts.map((post) => {
            return (
                <Grid item xs={4} key={post.id}>
                    <Post
                        title={post.title}
                        content={post.content}
                    />
                </Grid>);
        });

        return (
            <Grid container spacing={4}>
                {posts}
            </Grid>
        );
}

export default PostList;