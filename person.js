class Person{
    constructor(){

    }
   
   
    updatename(name){
        var personindex = "person"+personcount;
        database.ref(personindex).set({name:name});
    }
}