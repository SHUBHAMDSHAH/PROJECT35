class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1");
        var input = createInput("name");
        var button = createButton("next");
        var greetings = createElement("h2");
        title.html("SURVEY TO BRING CHANGE");
        title.position(200,20);
        input.position(200,160);
        button.position(290,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
       person.updatename(name);
       person.updatecount(personcount);
       greetings.html("welcome to survey"+name);
       greetings.position(200,160);

        });
    }
}