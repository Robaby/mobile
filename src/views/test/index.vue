<template>
    <div>
        <p></p>
        <div></div>
        <h1></h1>
        <button @click="test">test</button>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        test(){
            // this.axios.get('/?playurl="七大罪"')
            //     .then((res)=>{})
            //     .catch((err)=>{})
            this.axios.post("/Activity/MallActivityInfo", {
                SOURCE: "22",
                CREDENTIALS: "123456",
                TERMINAL: "0",
                INDEX: "20170713170325",
                METHOD: "MallActivityInfo",
                LoginUser:'asd123456',
                UserAccount:'asd123456',
                Status:'1',
                StatusDay:'1'
                })
                .then(
                response => {
                    
                    
                    
                    
                },
                response => {
                    console.log("请求失败");
                    console.log(response);
                }
                );
        }
    }
}
</script>

<style lang="less" scoped>
p{
    width: 750px;
    height: 100px;
    background: goldenrod;
}
div{
    width: 375px;
    height: 100px;
    background: green;
}
h1{
    width:200px ;
    height: 100px;
    background: yellowgreen;
}
button{
    width: 200px;
    height: 50px;
    border: 1px solid transparent;
    background: rgb(241,92,8);
    font-size: 18px;
    line-height: 50px;
    outline: none;
    margin: 20px;
}
</style>
