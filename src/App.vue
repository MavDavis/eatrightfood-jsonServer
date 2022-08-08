<template>
<Navbar/>
  <router-view />
</template>
<script>
import Navbar from "./components/navbar.vue"
export default{
  components:{
    Navbar
  }
}
</script>
<style>
:root {
  --primary: #f6df19;
  --dark: #060d18;
  --light: #f1f5f9;
}
body{
  background: var(--dark);
}

 form{
    max-width:420px;
    margin:60px auto 30px;
    background: var(--light);
    text-align:left;
    padding:30px;
    border-radius:10px;
}
    form .row{
      position:relative;
        display:block;
        }
        form .row label, form .row p{
          color:var(--dark);
          display:inline-block;
          margin:15px 0 ;
          font-size:0.6em;
          text-transform:uppercase;
          letter-spacing:1px;
          font-weight:bold;
        }
form .row p{
     display:block;
  color:rgb(250, 53, 53);
}
        form .row input{
          background:transparent;
          display:block;
          padding:13px 6px;
          width:100%;
          box-sizing: border-box;
          border:none;
          border-bottom: 1px solid var(--primary);
          color:var(--dark);}

form .row input:focus{

    outline: none !important;
      border: 1px solid var(--primary) !important;
      border-radius:8px;
}
    
        form .row .absolute {
          transition:all 0.3s ease-out !important;
          position:absolute;
          top:20%;
          right:10%;
        }

        form .row .absolute input{
            transition:0.3s ease-out;
          background:transparent;
          display:inline-block;
          padding:13px 6px;
          width:100%;
          box-sizing: border-box;
          
          }
  .signup p, .signup h2, .login p, .login h2{
  text-align:center;
  color:var(--light);
}
.signup p a, .login p a{
    color:var(--primary) !important;
    
  }
    .btn{
          color:var(--light);
          display:block; 
          margin:25px auto;
          border:none;
          font-size:0.6em;
          text-transform:uppercase;
          letter-spacing:1px;
          font-weight:bold;
          padding:10px 1rem;
          background:var(--primary);
          transition:0.3s ease-out;
          border-radius: 0 8px;

          
    }
    .btn:hover{
            border-radius:8px 0;
            cursor:pointer;
          }
  
</style>


