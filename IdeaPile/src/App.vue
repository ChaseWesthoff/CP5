<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
 import AppHeader from './components/AppHeader';
 export default {
   name: 'App',
   components: { AppHeader }
 }
</script>

<style>
 /* https://color.adobe.com/CS04-color-theme-1994456/?showPublished=true */
 body {
     font-size: 18px;
     padding: 20px 100px 0px 100px;
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     margin: auto;
 }
 button {
     color: pink;
     min-width: 100px;
     line-height: 1em;
     border: none;
     border-radius: 5px;
     color: white;
     margin: auto;
     padding: 10px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 1.2rem;
 }
 button.primary {
     background-color: pink;
 }
 button.alternate {
     background-color: #77C4D3;
 }
 button:focus {
     outline: none;
 }
 button:hover {
     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
 }
 button:active {
     transform: translateY(4px);
 }
 input {
     height: 20px;
     padding: 10px;
    margin: auto;
 }
 .flexWrapper {
     display:flex;
 }
 .flexRight {
     margin-left: auto;
 }
 .error {
     color: #F35537;
 }
 .column {
    margin-left: 300px;
    margin-right: 300px;
 }
</style>