<template>
  <div>
    <div class="py-12 ">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="lg:text-center pb-10">
          <p class="p-4 pb-2 text-right rounded-lg">
            <select
              v-model="$colorMode.preference"
              class="border w-28 h-8 dark:bg-gray-900 dark:border-gray-700"
            >
              <option value="system">System Theme</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </p>
          <p 
            class="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Sharan Pujari
          </p>
          <nuxt-link to="/">
            <h3
              class="mt-2  text-center text-4xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
            >
              Travel Bloticles
            </h3>
          </nuxt-link>
          <nuxt-link to="/">
            <p
              class="mt-2 text-center leading-6 font-semibold tracking-tight"
            >
              Goto Tech Bloticles
            </p>
          </nuxt-link>
        </div>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style>

/*
To enable sacramento font, uncomment one of these: @import or @font-face
Then add name in class of <p> above
@import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

@font-face {
  font-family: "Sacramento";
  src: local("Sacramento"),
   url(../fonts/Sacramento/Sacramento-Regular.ttf) format("truetype");
}
*/

/*
p.name {
  font-family: 'Sacramento', sans-serif; 
  text-align: center;
}
*/


html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  
}


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}




</style>
