<template>






  <div class="column">
    <form v-on:submit.prevent="register">
    <h1> Sign up to gain access to my photo of Larry David! </h1>
      <p> 1. Choose a user name so you can see Larry David.</p>
      <input style="margin-left: 150px" class="narrow" v-model="username" placeholder="User Name">
      <p style= "text-align: center"> 2. Create an account. (Do it for Larry) </p>
      <input style="margin-left: 150px" class="wide" v-model="name" placeholder="First and Last Name"> <br>
      <input style="margin-left: 150px" class="narrow" v-model="email" placeholder="Email Address"> <br>
      <input style="margin-left: 150px" class="narrow" type="password" v-model="password" placeholder="Password">
      <br>
      <br>
      <br>
      <button style="margin-left: 150px" class="alternate" type="submit">Show me Larry!!!</button>

      <br>
      <br>
      <br>
            <br>
      <br>
      <br>

          <p style= "margin-left: 50px"> <a href= "https://github.com/ChaseWesthoff/CP5">Here</a> is the Github for this assignment.</p>
    </form>
    <p style= "text-align: center"class="error">{{registerError}}</p>

  </div>
</template>

<script>
 export default {
   name: 'WelcomePage',
   data () {
     return {
       username: '',
       email: '',
       password: '',
       name: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
   },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
   username: this.username,
         email: this.email,
         password: this.password,
   name: this.name,
       });
     }
   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>