import express from 'express'
import { blogData, createBlog, deleteBlog, singlepost ,editBlog,saveEditBlog,registerUser,loginUser,loginStatus,logoutStatus,logoutStatuss
 ,updateUserData,gettingUserData,gettingid } from './controllers.js'

const router = express.Router()

router.route("/").get(blogData)
router.route("/write",).post(createBlog)
router.route("/singlepost/:id").get(singlepost)
router.route('/deletepost/:id').get(deleteBlog)
router.route('/editpost/:id').get(editBlog)
router.route('/saveEditPost/:id').put(saveEditBlog)
router.route('/register').post(registerUser)
router.route('/loginUser').post(loginUser)
router.route('/loginStatus').get(loginStatus)
router.route('/logOutStatus').get(logoutStatus)
router.route('/logOutStatuss').get(logoutStatuss)
router.route('/updateUserData').post(updateUserData)
router.route('/gettingUserData').get(gettingUserData)
router.route('/gettingid').post(gettingid)




export default router;







