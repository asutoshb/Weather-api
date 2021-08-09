async function getRequest()
{
    try{
         let res = await fetch('https://reqres.in/api/users?page=2');

    let ans = await res.json();

    console.log(ans.data);
    }
    catch(e){
        console.log('e:', e)
    }
   
}

getRequest();

/* 
fetch("https://reqres.in/api/users?page=2")

.then(function (res){

    return res.json();

})

.then(function (res){
    console.log(res);
})

.catch(function (err){
    console.log(err);
})

*/
