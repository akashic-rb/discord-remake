<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 html, html * {
  font-family: Whitney, Helvetica, Arial, sans-serif;
  text-rendering: optimizeLegibility;
}
 body {
  background-color:#23272A;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

 body > h1, h2, h3, h4, h5, h6, strong {
  color:#FFFFFF;
}
 html > body {
  color:#8f9093;
}

div {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  font-size: 100%;
  vertical-align: baseline;
}

.clickable {
  cursor: pointer;
}

img {
  user-select: none;
}

.white {
  color:black;
  background-color:white;
}
 .big {
     font-size: 50px;
}
 .medium{
     font-size: 25px;
}
 .small{
     font-size: 12px;
}
 .extra-small{
  font-size: 8px;
}

 .btn-bad{
     background-color:#ff463c;
}
 .btn:hover{
     bottom : 2px;
     position: relative;
}
 .btn:focus {
     outline:none;
}
 .btn:active {
  filter: blur(1px);
  -webkit-filter: blur(1px);
}
 .btn-okay{
     background-color:#faa61a;
}
 .btn-good{
     background-color:#0fa763;
}
 .btn-dark{
     background-color:#36393e;
}
 .btn-light{
     background-color:#ffffff;
     color:#8f9093;
}
 .btn-outline{
     color: #7289DA;
     background-color: transparent;
     background-image: none;
     border-color: #7289DA !important;
     border-width: 2px !important;
     border-style: solid;
}
 .btn-bad-outline{
     color: #ff463c;
     background-color: transparent;
     background-image: none;
     border-color: #ff463c !important;
     border-width: 2px !important;
     border-style: solid;
}
 .btn-okay-outline{
     color: #faa61a;
     background-color: transparent;
     background-image: none;
     border-color: #faa61a !important;
     border-width: 2px !important;
     border-style: solid;
}
 .btn-good-outline{
     color: #0fa763;
     background-color: transparent;
     background-image: none;
     border-color: #0fa763 !important;
     border-width: 2px !important;
     border-style: solid;
}
 code{
     padding: 2px 2px;
     color: #fff;
     background-color: #292828;
     border-radius: 4px;
     -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.25);
     box-shadow: inset 0 -1px 0 rgba(0,0,0,.25);
}
 .box{
     background: #2C2F33;
     overflow: hidden;
     max-width: 100px;
     padding: 20px;
     border-radius:5px;
     border-width:5px;
     border: 1px solid #2C2F33;
}
 .box-whole{
     background: #2C2F33;
     overflow: hidden;
     padding: 20px;
     border-radius:5px;
     border-width:5px;
     border: 1px solid #2C2F33;
}
 .inp {
     background-color:#2C2F33;
     border:none;
     color:#8f9093;
     padding: 5.5px;
}
 .inp:hover{
     outline:none;
}
 .inp:focus{
     outline:none;
}
 input[type="checkbox"]{
     -webkit-appearance: none;
     background-color: #2C2F33;
     border: 1px solid #2C2F33;
     box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
     padding: 9px;
     border-radius: 3px;
     display: inline-block;
     position: relative;
     outline:none;
}
 input[type="checkbox"]:active, input[type="checkbox"]:checked:active {
     box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
}
 input[type="checkbox"]:checked {
     background-color: #2C2F33;
     border: 1px solid #2C2F33;
     box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
     color: #2C2F33;
}
 input[type="checkbox"]:checked:after {
     content: '\2714';
     font-size: 14px;
     position: absolute;
     top: 0px;
     left: 3px;
     color: #99a1a7;
}
 .btn-outline-bad{
     background-color:#ff463c00;
}
.badge {
	position: relative;
	display: inline-block;
	font-size:inherit;
	padding: 0.25em 0.4em;
	background-color:#2C2F33;
	color:#8f9093;
	background-size:10px;
	margin:0 5px 5px 0;
	vertical-align: baseline;
	border-radius: 3px;
}
.badge-default{
	color:white;
	background-color:#7289DA;
}
.badge-bad{
	color:white;
	background-color:ff463c;
}
.badge-okay{
     background-color:#faa61a;
	 color:white;
}
.badge-good{
	background-color:#0fa763;
	color:white;
}
.badge-light{
     background-color:#ffffff;
     color:#8f9093;
}
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color:#2C2F33;
}
.alert-default {
  color:white;
  background-color:#7289DA;
}
.alert-bad {
  color:white;
  background-color:#ff463c;
}
.alert-okay {
  color:white;
  background-color:#faa61a;
}
.alert-good {
  color:white;
  background-color:#0fa763;
}
.alert-light {
  color:#8f9093;
  background-color:#ffffff;
}

.display-1 {
  font-size: 6rem;
  font-weight: 250; 
  line-height: 1.2;
}

.display-2 {
  font-size: 5.5rem;
  font-weight: 250;
  line-height: 1.2;
}

.display-3 {
  font-size: 4.5rem;
  font-weight: 250;
  line-height: 1.2;
}

.display-4 {
  font-size: 3.5rem;
  font-weight: 250;
  line-height: 1.2;
}

.display-5 {
  font-size: 2.5rem;
  font-weight: 250;
  line-height: 1.2;
}

.display-6 {
  font-size: 1.5rem;
  font-weight: 250;
  line-height: 1.2;
}


.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

blockquote > p:before, blockquote > p:after{
	content: '"' !important;
}

.text-muted {
  color: #6c757d !important;
}
.avatar{
	border-radius:50%
}
.sq-avatar{
	border-radius:25%
}
.avatar-sm{
	width:40px;
	height:40px;
}
.avatar-m{
	width:80px;
	height:80px;
}
.avatar-lg{
	width:120px;
	height:120px;
}
.avatar-xl{
	width:240px;
	height:240px;
}
.base-txt-color {
  color: #8f9093 !important;
}
.base-bg-color {
  background-color:#23272A !important;
}

.btn-block {
  display: block;
  width: 100%;
}
.caps-txt {
  text-transform: capitalize;
}
.upper-txt {
  text-transform: uppercase;
}
.lower-txt {
  text-transform: lowercase;
}

@font-face {
  font-family: 'Whitney';
  src: url('./assets/fonts/Whitney-Book.otf');
}

@font-face {
  font-family: 'Whitney Bold';
  src: url('./assets/fonts/Whitney-Semibold.ttf');
}

.mg-bot-20 {
  margin-bottom: 20px;
}
</style>
