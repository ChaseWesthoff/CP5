<template>
  <div class="feed">
    <div>
<br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <h1> You're gonna have to scroll down if you wanna see Larry, buckaroo. </h1>
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
        <br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br>
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br><br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br>




    <h1> BEHOLD  </h1>
    <h2> LARRY DAVID </h2>
          <p <img src="/static/images/Larry_David.jpg" class="center"/> </p>
    <br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br>
    <p> Welp, you did it. You made an account and you saw Larry David. What are you still here for? </p>
        <br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br>
<p <img src="/static/images/Larry_David_2.jpg" class="center"/> </p>
  <br> 
    <br> 
<p> Alright, ok. You found my secret stash. Trust me though, that's the LAST picture of Larry David you'll get for making an account.  </p>
        <br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br>
<p <img src="/static/images/Larry_David_3.jpg" class="center"/> </p>
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
    <h1> Stop. You won't find anything else here. </h1>
      <br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br>
    <br> 
    <br>
<h1> Seriously, STOP. </h1>
        <br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br>
        <br> 
    <br> 
<p <img src="/static/images/Larry_David_4.jpg" class="center"/> </p>
<p> Alright. Fine. You found my second favorite photo of Larry David. You think you're smart, huh? You think you're funny?</p>
        <br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br>
        <br> 
    <br> 
<p <img src="/static/images/Larry_David_5.jpg" class="center"/> </p>

  <br> 
  <p> ugh. How can I even be mad when I can see Larry's beautiful smile. Get outta here, you little rascal! </p>
    <br> 
    <br>
        <br> 
    <br> 
    <br>
<p> I won't give you any more photos of Larry David, but <a href= "https://github.com/ChaseWesthoff/CP5">here</a> is the Github for this assignment.</p>
        <br> 
    <br> 
    <br>
        <br> 
    <br> 
    <br>
        <br> 
    <br> 

    </div>
    
  </div>
</template>

<script>
 import moment from 'moment';
 export default {
   name: 'UserFeed',
   data () {
     return {
       text: '',
     }
   },
   created: function() {
     this.$store.dispatch('getFeed');
   },
   filters: {
     since: function(datetime) {
       moment.locale('en', {
   relativeTime: {
     future: 'in %s',
     past: '%s',
     s:  'seconds',
     ss: '%ss',
     m:  '1m',
     mm: '%dm',
     h:  'h',
     hh: '%dh',
     d:  'd',
     dd: '%dd',
     M:  ' month',
     MM: '%dM',
     y:  'a year',
     yy: '%dY'
   }
       });
       return moment(datetime).fromNow();
     },
   },
   computed: {
     feed: function() {
       return this.$store.getters.feed;
     },
   },
   methods: {
     tweet: function() {
       this.$store.dispatch('addTweet',{
         tweet: this.text,
       }).then(tweet => {
   this.text = "";
       });
     },
   }
 }
</script>
