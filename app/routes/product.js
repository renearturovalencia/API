const router=require("express").Router();
router.get("/",(req,res)=>{
    res.json("{mensajes: 'Todos'}")
})
router.get("/:id",(req,res)=>{})
router.get("/:search",(req,res)=>{})
router.put("/:id",(req,res)=>{})
router.post("/",(req,res)=>{})
module.exports=router;