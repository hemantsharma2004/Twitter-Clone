const Post = require("../models/Post");
const User = require("../models/User");
const { success, error } = require("../utils/responseWrapper");
const cloudinary = require('cloudinary').v2;
const {mapPostOutput} = require('../utils/Utils')

const createPostController = async (req, res) => {
    try {
        // const { caption, postImg } = req.body;
        const { caption} = req.body;
        // if(!caption || !postImg) 

        if(!caption) {
            return res.send(error(400, 'Caption and postImg are required'))
        }
        // const cloudImg = await cloudinary.uploader.upload(postImg, {
        //     folder: 'postImg'
        // })

        const owner = req._id;

        const user = await User.findById(req._id);

        const post = await Post.create({
            owner,
            caption,
            // image: {
            //     publicId: cloudImg.public_id,
            //     url: cloudImg.url
            // },
        });

        user.posts.push(post._id);
        await user.save();

        console.log("user", user);
        console.log("post", post);

        return res.json(success(200, { post }));
    } catch (e) {
        return res.send(error(500, e.message));
    }
};

const likeAndUnlikePost = async (req, res) => {
    try {
        const { postId } = req.body;
        const curUserId = req._id;

        const post = await Post.findById(postId).populate('owner');
        if (!post) {
            return res.send(error(404, "Post not found"));
        }

        if (post.likes.includes(curUserId)) {
            const index = post.likes.indexOf(curUserId);
            post.likes.splice(index, 1);
        } else {
            post.likes.push(curUserId);
        }
        await post.save();
        return res.send(success(200, {post: mapPostOutput(post, req._id)}));

    } catch (e) {
        return res.send(error(500, e.message));
    }
};

const addCommentController = async (req, res) => {
    try {
      const { postId, text } = req.body;
      const userId = req._id;
  
      const post = await Post.findById(postId);
      if (!post) {
        return res.send(error(404, "Post not found"));
      }
      post.comments.push({ user: userId, text });
      post.commentCount += 1; 
      await post.save();
  
      return res.json(success(200, { post }));
    } catch (e) {
      return res.send(error(500, e.message));
    }
  };
 
  const deleteCommentController = async (req, res) => {
    try {
      const { postId } = req.body;
      const userId = req._id;
  
      const post = await Post.findById(postId);
      if (!post) {
        return res.send(error(404, "Post not found"));
      }
  
      // Find the comment owned by the user for the specific post
      const commentToDelete = post.comments.find(
        (comment) => comment.user.toString() === userId.toString()
      );
  
      if (!commentToDelete) {
        return res.send(error(404, "Comment not found"));
      }
  
      // Check if the user is the owner of the comment
      if (!commentToDelete.user.equals(userId)) {
        return res.send(error(403, "You can't delete this comment"));
      }
  
      // Remove the comment from the comments array
      post.comments.pull(commentToDelete);
      post.commentCount -= 1; // Decrement commentCount
      await post.save();
  
      return res.json(success(200, { post }));
    } catch (e) {
      return res.send(error(500, e.message));
    }
  };
  


  const repostPostController = async (req, res) => {
    try {
      const { postId, caption } = req.body;
      const userId = req._id;
  
      const postToRepost = await Post.findById(postId);
      if (!postToRepost) {
        return res.send(error(404, "Post to repost not found"));
      }
  
      // Check if the user is reposting their own post
      if (userId.toString() === postToRepost.owner.toString()) {
        return res.send(error(400, "You can't repost your own post"));
      }
  
      const repostedPost = await Post.create({
        owner: userId,
        caption,
        repost: {
          user: postToRepost.owner,
          caption: postToRepost.caption,
          createdAt: Date.now()
        }
      });

      postToRepost.repostCount += 1; // Increment repostCount
      await postToRepost.save();
  
      return res.json(success(200, { repostedPost }));
    } catch (e) {
      return res.send(error(500, e.message));
    }
  };
  
  
  
const updatePostController = async (req, res) => {
    try {
        const { postId, caption } = req.body;
        
        const curUserId = req._id;

        const post = await Post.findById(postId);
        if (!post) {
            return res.send(error(404, "Post not found"));
        }

        if (post.owner.toString() !== curUserId) {
            return res.send(error(403, "Only owners can update their posts"));
        }

        if (caption) {
            post.caption = caption;
        }

        await post.save();
        return res.send(success(200, { post }));
    } catch (e) {
        return res.send(error(500, e.message));
    }
};

const deletePost = async (req, res) => {
    try {
        const { postId } = req.body;
        const curUserId = req._id;

        const post = await Post.findById(postId);
        const curUser = await User.findById(curUserId);
        if (!post) {
            return res.send(error(404, "Post not found"));
        }

        if (post.owner.toString() !== curUserId) {
            return res.send(error(403, "Only owners can delete their posts"));
        }

        const index = curUser.posts.indexOf(postId);
        curUser.posts.splice(index, 1);
        await curUser.save();
        await post.deleteOne();

        return res.send(success(200, "post deleted successfully"));
    } catch (e) {
        return res.send(error(500, e.message));
    }
};

module.exports = {
    createPostController,
    likeAndUnlikePost,
    updatePostController,
    deletePost,
    addCommentController,
    repostPostController,
    deleteCommentController
};