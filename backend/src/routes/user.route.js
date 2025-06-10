import {Router} from 'express';
import { loginUser, logOutUser, registerUser } from '../controllers/user.controller.js';
import {veryfyJWT} from '../middleware/auth.middleware.js';
import { createNotes, deleteNotes, getNotes, updateNotes } from '../controllers/notes.controller.js';
import { searchVedios } from '../controllers/youtube.controller.js';
import { UserModel } from '../models/User.model.js';



const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(veryfyJWT, logOutUser)
router.route("/createNote").post(veryfyJWT,createNotes)
router.route("/getNote").get(veryfyJWT, getNotes)
router.route("/update/:id").put(veryfyJWT, updateNotes)
router.route("/delete/:id").delete(veryfyJWT,deleteNotes)
router.route("/youtubeSearch").get(searchVedios)

// Route: GET /api/user/profile
router.get('/profile', veryfyJWT, async (req, res) => {
    try {
      const user = await UserModel.findById(req.user.id); // Use the authenticated user's ID
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({
        UserName: user.userName,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt,
      });
      //console.log(email);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  

export default router;