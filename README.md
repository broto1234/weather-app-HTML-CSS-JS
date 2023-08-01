# weather-app-HTML-CSS-JS

This is a **Weather App** with HTML, CSS, and JavaScript hosted on Vercel (https://weather-app-html-css-js-sage.vercel.app/).

The first look of the project is:

![weather app1](https://github.com/broto1234/weather-app-HTML-CSS-JS/assets/73961811/1b2262e8-8834-47c9-90cf-ca52902def6c)

If we do not write any city name or empty city name, it will look like this:

![weather app2](https://github.com/broto1234/weather-app-HTML-CSS-JS/assets/73961811/d366e9b2-540d-449c-95ca-bc065d7d1f4f)

If we write any city name (for example, Copenhagen), we can see the following results:

![weather app3](https://github.com/broto1234/weather-app-HTML-CSS-JS/assets/73961811/4ac1ddb3-2253-44d3-84c8-b06e2e522de1)

In this project, I use JavaScrpit **Fetch API()** method to get current weather data from Weather API (https://openweathermap.org/api).

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

To deploy the Repository on **Vercel**, open the [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) with GitHub account. 

Then `Add New` > `project` >  react-github-user-search  `Import`> `Deploy`.
