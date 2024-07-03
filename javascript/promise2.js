/* 
Promise 실습
1. 비동기호출 : https://jsonplaceholder.typicode.com/albums/11
2. id 11인 앨범의 userId를 Promise로 구한다.
3. 비동기호출 : https://jsonplaceholder.typicode.com/users/2
4. userId 2인 사용자의 username과 email을 Promise로 구한다.
5. 결과 출력 : Antonette Shanna@melissa.tv
*/



const get = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                resolve(JSON.parse(xhr.response));
                document.querySelector("#result1").innerHTML = JSON.stringify(xhr.response)
            } else {
                reject(` ${xhr.status} ${xhr.statusText}`);
                document.querySelector("#result1").innerHTML = ` ${xhr.status} ${xhr.statusText}`;
            }
        }
    });
}

// Promise 체이닝 방법(성공하면 then, 실패하면 catch)
// get('https://jsonplaceholder.typicode.com/albums/11')
// .then(({userId}) => get(`https://jsonplaceholder.typicode.com/users/${userId}`))
// .then(({username, email}) => {
//     document.querySelector("#result1").innerHTML = username + " " +email;
// })
// .catch(error => console.log(error));

// async/await 방법
(async () => {
    const album = await get(`https://jsonplaceholder.typicode.com/albums/11`);  // 동기
    const user = await get(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
    document.querySelector("#result1").innerHTML = user.username + " "+user.email;
})();





