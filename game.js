class Game{
constructor(){

}
getstate(){
var gameref=database.ref("gamestate");
gameref.on("value",function(data){
    gamestate = data.val();
} );
}
update(state){
 database.ref("/").update({
     gamestate:state }
     )

}
}
