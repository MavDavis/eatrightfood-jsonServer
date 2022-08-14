<template>
  <aside>


        <a href="#" class="logo">UnisexWares</a>
        
            <ul>
        <li><router-link to="/">Home<i id="cart-basket" class="fas fa-home"></i></router-link></li>
        <li><router-link to="/">Fashions<i id="cart-basket" class="fas fa-shopping-cloth"></i></router-link></li>
        <li><router-link to="/">Cart<i id="cart-basket" class="fas fa-shopping-cart"></i></router-link></li>
            </ul>
       
       
          
          <div class="profile">
            <div >
     <span class="circle">{{nameFirstdigit}}</span>
     <span class="name">{{name}}</span>
    </div>
    
    <div class="state" >
      <li v-if="log" @click="logout">
      Logout
      </li>
      <li v-else>Login</li>
  </div>
     

 
        </div>
  
  </aside>
</template>

<script>
export default {
name:"Mobilesidebar",
props:["log", "nameFirstdigit","name"],
methods:{
  logout(){
this.$emit('loggedout')
  }
},
}
</script>

<style lang="scss" scoped>
*{
  list-style:none;
  text-decoration:none;
}
aside{
position:fixed;
top:5rem;
right:0;
width:300px;
height:calc(100vh - 5rem);
background:var(--light);
box-shadow:var(--box-shadow);
z-index:800;
display:flex;
flex-direction:column;
padding:2rem;
.logo{
    color: var(--dark);
    font-size: 1.5rem;
    text-decoration:none;
    font-weight: bolder;
    margin:0 0 2rem 0;
}
ul{
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  li{


 

 a {
  text-decoration:none;
    display: flex;
    font-size: 1.3rem;
    border-radius: 0.5rem;
    padding: 5px;
    margin: 8px;
    color: var(--dark);
    transition:ease 1.5s;
 i{
  margin-left:5px;
 }
    &:hover {
   
  letter-spacing:1px;
  border-bottom:2px solid var(--primary);

}
}
}
}
.profile{
  display:flex;
  flex-direction:column;
margin:3rem 0  0 0;


.state{
  margin:2rem 0  0 0;
   li{
      list-style:none;
      font-weight:bold;
      font-size: 1.2rem;
      cursor:pointer;
    }
}
  .circle{
      border-radius:50%;
      border:2px solid var(--dark);
      margin-right:8px;
      padding:5px;
    }
    .name{
transition:ease-out 1s;
text-transform:uppercase;
&:hover{
  letter-spacing:1px;
}
}
}
}
</style>