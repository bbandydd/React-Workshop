$().ready(function(){
    todoItems = [];
    i = 0;

    $('#btnAdd').bind("click", function(){

        var obj = new todoObject(i, $('#txtTodo').val());
        todoItems.push(obj);

        i++;
        $('#txtTodo').val("");

    });

    var todoObject = function(id, text){
        this.id = id;
        this.text = text;

        this.textItem = $('<div></div>')
                .addClass('form col-md-10')
                .append($('<p></p>')
                    .text(text)
                );

        this.delItem = $('<div></div>')
                .addClass('form col-md-1')
                .append($('<button></button>')
                    .addClass('btn btn-danger pull-right todo_delete')
                    .bind('click', function(){
                        $(this.listItem).remove();
                        var index = todoItems.indexOf(this);
                        todoItems.splice(index, 1);
                    }.bind(this))
                );

        this.listItem = $('<li></li>')
            .addClass('list-group-item todolist')
            .append(this.textItem)
            .append(this.delItem);

        $('#list').append(this.listItem);
    };
});