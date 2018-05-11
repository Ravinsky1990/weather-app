const getUser = (id,callback)=>{
    var user={
        id:id,
        name:"Yura"
    };

    setTimeout(()=>{
    callback(user)
    },3000)

};



getUser(32,(user)=>{
    console.log(user)
})


