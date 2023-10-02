import express from "npm:express@4.18.2";
const router = express.Router();
import { getPuppeteer } from '../controller/puppeteer.js';
router.get('/',(req, res)=>{
  // res.send("new world")
  getPuppeteer.getPuppeteerIndex(req,res)
});
router.get('/:id',(req,res)=>{
  getPuppeteer.getPuppeteerCode(req, res);
})

export default router;