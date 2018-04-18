<template>
  <nav>
    <ul id="menu">
          <li class="right" v-if="loggedIn"><a @click="logout" href="#">Logout</a></li>
      <li class="right" v-if="loggedIn">{{user.username}}'s account to see Larry David </li>
      <form v-else class="right" v-on:submit.prevent="login">

      <h1> Hello, Dearest Guest. </h1>

      <h2> Welcome to the website that holds world's greatest photo of Larry David. </h2>

      <br> 
      <br>
      <br>
      <br>
      <br>
      <br>
            <br> 
      <br>
            <br> 
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
            <br> 
      <br>
      <br>
      <br>
      <br>
      <br>
      <h2> Oh, you'd like to see the photo? </h2>
      <br>
      <br>
      <br>
            <br> 
      <br>
            <br> 
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
            <br> 
      <br>
      <br>
      <br>
      <br>
      <br>
      <h2> Right this way! Though, there is a catch. </h2>
      <br>
      <br>
            <br> 
      <br>
      <br>
      <br>
      <br>
      <br>
            <br> 
      <br>
            <br> 
      <br>
      <br>
      <br>
      <br>
      <br>
            <br> 
      <br>
      <br>
      <br>
      <br>
      <br>
            <br> 
      <br>
      <br>
      <br>
      <br>
      <br>
      <h1> I'm tired of not knowing who sees my photo of Larry David, so I require that all visitors register an account. </h1>
      <h2> This way, I can see all who have observed my photo of Larry. </h2
      <br>
      <br>
      <br>
            <br> 
      <br>
      <br>
      <br>
      <br>
            <br>
      <br>
      <br>
            <br> 
      <br>
      <br>
      <br>
      <br>
      <br>
      <h1> Proceed, and have fun! </h1>
            <br> 
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

      <h1>Already have an Account? Take a gander at Larry! </h1> <br>
	<input v-model="email" placeholder="Email Address">
	<input v-model="password"  type="password"  placeholder="Password">
	<button class="primary" type="submit"> See The Photo </button>
        <br> 
      <br>
      <br>
      </form>
    </ul>
    <div class="flexWrapper errorPlace">
      <p v-if="loginError" class="flexRight error">{{loginError}}</p>
    </div>
  </nav>
</template>

<script>
 export default {
   name: 'AppHeader',
   data () {
     return {
       email: '',
       password: '',
     }
   },
   computed: {
     user: function() {
       return this.$store.getters.user;
     },
     loggedIn: function() {
       return this.$store.getters.loggedIn;
     },
     loginError: function() {
       return this.$store.getters.loginError;
     },
   },
   methods: {
     login: function() {
       this.$store.dispatch('login',{
         email: this.email,
         password: this.password,
       }).then(user => {
   this.email = '';
   this.password = '';
       });
     },
     logout: function() {
       this.$store.dispatch('logout');
     }
   }
 }
</script>

<style scoped>
 /* Strip the ul of padding and list styling */
 nav {
     display: grid;
     margin-bottom: 20px;
 }
 ul {
     list-style-type:none;
     margin:0;
     padding:0;
 }
 /* Create a horizontal list with spacing */
 li {
     display:inline-block;
     float: center;
     margin-right: 20px;
     height: 50px;
     text-align: center;
     line-height: 50px;
     color: #666;
 }
 /*Active color*/
 li a.active {
 }
 /*Hover state for top level links*/
 li:hover a {
 }
 .right {
     text-align: center;
 }
 .errorPlace {
     height: 20px;
 }
 img {
     width: 50px;
 }
</style>