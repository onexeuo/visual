const requestTodo = function(method, url, payload){
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if(payload){
        xhr.setRequestHeader('Content-Type', 'application/json');
    }
    xhr.send(payload);

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            let storage = JSON.parse(this.response);
            // console.log(this.response);
            for(i in storage.data){
                let li = document.createElement('li');
                for(let j =0; j<4; j++){
                    li.innerHTML = storage.data[i][j];
                    li.appendChild(li);
                }
            }
            document.querySelector("ul").appendChild("li");
        }
    }   
}

$("#addBtn").on('click', () => {
    const newTodo = new Todo(1, $("#txt").val(), new Date(), false);
    requestTodo("POST", "http://localhost:3000/Todos", JSON.stringify(newTodo));
    printList();
});

// const getPrint = () => {
//     return JSON.parse(getItem(Todo));
// }

// const printList = () => {
//     $("ul").html('');
//     getPrint().forEach(Todo => {
//         let li = $('<li></li>');
//         li.append(`<p id="side"><span id="list">${Todo.tdno}${Todo.tdcontent}${Todo.tddate}</span>
//         <input id="deleteBtn" value="delete" type="button"></p>`);
//         $("ul").append(li);
//     });
// }




// 매장목록 출력
// const printShopList = () => {
//     $('#shopList').html('');
//     getShopList().forEach(shop => {
//         let shopLi = $('<li id="shopSecList"></li>');
//         shopLi.append(`<p>${shop.shno}</p><p>${shop.shname}</p><p>${shop.shtotst}</p>\
//       <input onclick="deleteShop(${shop.shno})" id="shopDelete" type="button" value="delete" />\
//       <input onclick="clickShop(${shop.shno})" id="goStock" type="button" value=">" style="width:20px;" />`);
//         $('#shopList').append(shopLi);
//     });
// }


// list
// requestTodo("GET", "http://localhost:3000/todos");

// requestTodo("POST", "http://localhost:3000/todo",
//     JSON.stringify({id:"1", content:'cook', completed: false})
// );