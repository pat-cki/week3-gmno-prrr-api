## week3-gmno-prrr-api

![](https://i.imgur.com/kX224US.png)


### Team - P(u)RRR
* [Pat](https://github.com/pat-cki)
* [Renata](https://github.com/renatajarmova)
* [Rosalie](https://github.com/rosalie-baxter)
* [Reggie](https://github.com/ReginaldJbeili)

---

### Requirements 
- at least two APIs using the XMLHttpRequest method
- a clearly defined user journey, documented in your readme.
- a well-considered architecture for your app
- code: break your JavaScript down into small functions with a clear input and output;

---

- tests: write tests for your pure functions. We don't expect tests on the DOM or on the response from an API.
- design: aim for a responsive, mobile-first design
- accessibility
- take appropriate measures when it comes to concealing private information

---

### Process

- We started by brainstorming about different APIs. Given our Purrrfect name, we felt that it was best to go with something cat-related. 

- As the main focus of this task was accessing APIs using JS, we decided to attack the html and css in pairs (Reggie and Rosa on HTML and Pat and Renata on CSS) to save time then mob the javascript

---

![](https://i.imgur.com/vL5tnB0.jpg)


---

![](https://i.imgur.com/e5dsmeM.jpg)

---

#### At least two APIs using the XMLHttpRequest method
- After some deliberation, we decided to access the developer cap api https://thecatapi.com/ and the giphy api https://developers.giphy.com/
- to create a fun quiz where people could put in personality traits and find out what breed of cat this matched up with. They then would recieve a fun gif. 

---

#### A clearly defined user journey, documented in your readme
* An app for people who are into cats and would like to learn what breed they match themselves. 
* User can fill in the form with some basic personality questions and get matched with the breed with those characteristics.

![](https://media.giphy.com/media/nNxT5qXR02FOM/giphy.gif)

---

#### A well-considered architecture for your app

We sketched out a rough plan of what we wanted our page to look like then discussed a rough plan for the architecture of the page aiming to keep it simple as this is a one page site. 

![](https://i.imgur.com/LosbUdU.png)

---

#### Code: break your JavaScript down into small functions with a clear input and output

We tackled one API each - Rosa and Reggie the initial cat request, then Pat and Renata on the giphy API (which had to be called with the name of the breed of cat from the first API)

---

#### Tests: write tests for your pure functions. We don't expect tests on the DOM or on the response from an API.

We tried testing the giphy function that takes the name of the cat and reveals whether or not it is the url of the chosen cat name however we identified later on that the tests we needed to do were not for pure functions and instead were for the API response

---

#### Design: aim for a responsive, mobile-first design

We started building with mobile-first design as our primary layout and scaling up towards desktop afterwards

![](https://i.imgur.com/5ZKaiud.png)

![](https://i.imgur.com/zZW3m1z.png)


---

#### Accessibility

We're getting better at doing this from day one with Semantic HTML: 

![](https://i.imgur.com/4QmUYn2.png)

---

#### take appropriate measures when it comes to concealing private information

* We did not use sensitive data
* We did purposefully avoided innerHTML and used textContent instead

---

### Stretch goals 

- styling radio buttons (paws for form input)
- defining a better condition to filter the results from the first API


--- 

### Struggles 

- We spent a LOT Of time trying to separate the different eventualities of quiz results in a neat way - whether chaining through for loops or using case statements - the result here is a simplified version of what we were originally trying to do!
- We had a few issues with accessing variables in different parts of the code which meant that we ended up putting a lot of it in one massive function... 
- Like every group we had a couple stumbling blocks with our API requests (we thought the code was broken but it turned out our WiFi was down)

---

### What we learnt!

- APIs are fun! And you can do a lot with them
- Operated some DOM elements
- Error handling is very necessary!
- Pat is a stray cat



