var mongo=require('mongoose');
var Schema= mongo.Schema;
var PokemonModel=new Schema(
    {
        pokedex_number:Number,
        name:String,
        hp:Number,
        attack:Number,
        defense:Number,
        speed:Number,
        sp_atk:Number,
        sp_def:Number,
        main_type:String,
});


module.exports=mongo.model('Pokemon',PokemonModel);