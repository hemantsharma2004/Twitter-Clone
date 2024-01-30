const router = require("express").Router();
const postsController = require("../controllers/postController");
const requireUser = require("../middlewares/requireUser");

router.post("/", requireUser, postsController.createPostController);
router.post("/like", requireUser, postsController.likeAndUnlikePost);
router.post("/comment", requireUser, postsController.addCommentController);
router.post("/delete-comment", requireUser, postsController.deleteCommentController);
router.post("/repost", requireUser, postsController.repostPostController);
router.put('/', requireUser, postsController.updatePostController);
router.delete('/', requireUser, postsController.deletePost);

module.exports = router;