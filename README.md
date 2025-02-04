# 🌐 [weather app]

## 📌 About the Project
This is a **Weather App** that allows users to check real-time weather conditions in any city. It was built using **HTML, CSS, and JavaScript** with OpenWeather API integration.

---

## 🎯 Features
✅ **Responsive Design** – Works on all screen sizes  
✅ **Real-time Data** – Fetches live weather updates using APIs  
✅ **Interactive UI** – Smooth animations and transitions  

---

## 🚀 Live Demo
🔗 [Project Demo](https://weather-app-html-css-js-sage.vercel.app/)  

---

## 🛠️ Built With
- **HTML** – Structure of the web page  
- **CSS** – Styling and animations  
- **JavaScript** – Functionality and interactivity  
- **API** - OpenWeather API 

---

In this project, I use JavaScript **Fetch API()** method to get current weather data from Weather API (https://openweathermap.org/api).

Fetch API allows us to make HTTP request to web servers from web browsers. 

The fetch () method instructs the web browsers to send a request to a URL, which asynchronously waits for a response. The first **then** passes the response to an anonymous function that response provides multiple methods such as response.json() for JSON data, and then passes the JSON to a second **then** that return the value of data.

```bash
fetch('https://api.openweathermap.org/data/2.5/weather?...')
  .then(response => response.json())
  .then(data => {
    //...
   })
  .catch((error) => {
    //...
  })
```
## Deploy this project on Vercel with GitHub

First open `GitHub` account and create a new Repository.

Then copy from `GitHub` below the codes, and add to `Terminal`:
```bash
git remote add arigin https://.....
git branch -M main
```
```bash
git add .
```
```bash
git commit -m initial
```
```bash
git push  -u origin main
```

To deploy the Repository on **Vercel**:
Open the [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) with GitHub account. 

Then `Add New` > `project` >  react-github-user-search  `Import`> `Deploy`.
