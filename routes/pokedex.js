var express=require('express');
var router=express.Router();
var Pokemon=require('../model/PokemonModel');


router.get('/',(req,res)=>
    {

       res.send('Pokemon page');
    });
//get all pokemon
router.get('/pokemon/',(req,res)=>
{
    Pokemon.find({},(err,results)=>
    {
        if (err)res.send(err);
        else res.send(results);
    });
});
//get a pokemon
router.get('/pokemon/:id',(req,res)=>   //gets info from body
{
    Pokemon.find({id:req.params.pokedex_number},(err,results)=>
    {
        if (err)res.send(err);
        else res.send(results);
    });
});

//create a pokemon
router.post('/pokemon',(req,res)=>   //create gets info from body
{     console.log(req.body.name);
    Pokemon.create(req.body
        ,(err,results)=> {
            if (err)
                res.send(err);
            else
                res.send(results);
        });
});

//update a pokemon
router.put('/pokemon/:id',(req,res)=>     //update
{
    Pokemon.update({id:req.params.pokedex_number},
        //grabs results from body
        {name:req.body.name,hp:req.body.hp,attack:req.body.attack,
        defense:req.body.defense,speed:req.body.speed,sp_atk:req.body.sp_atk,
        sp_def:req.body.sp_def,main_type:req.body.main_type,},(err,results)=>
        {
            if (err) res.send(err);
            else res.send(results);
        });

});

//delete a pokemon
router.delete('/Pokemon/:id',(req,res)=>
{
  Pokemon.deleteOne({id:req.params.pokedex_number},(err,results)=>
  {
      if(err) res.send(err);
      else res.send("Pokemon deleted")
  })
});

module.exports=router;