/*
* Title: Change Page Title OnClick
* Description: Change Page title on click of Button
* Author: Abdullah Al Noman
* Date: 20/06/2022
*
*/
//Declaring variable
var title = document.getElementById('variable-title');
// var home = document.getElementById('home-btn');
// var portfolio = document.getElementById('about-btn');
// var about = document.getElementById('portfolio-btn');
// var blogs = document.getElementById('blogs-btn');
// var contact = document.getElementById('contact-btn');

//Function Area Start

home = () => title.innerText = 'Home';
portfolio = () => title.innerText = 'Portfolio';
about = () => title.innerText = 'About';
blogs = () => title.innerText = 'Blogs';
contact = () => title.innerText = 'Contact';