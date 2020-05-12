<template>
    <div class="container">
        <div class="row mt-5">
            <h1>Uh-Oh!</h1>
        </div>
        <div class="row">
            <h3>It looks like you're experiencing some network issues, please click the back button and try again.</h3>
        </div>
        <div class="row">
            <router-link :to="{ name: 'home' }">Or go back to the home page</router-link>
        </div>
    </div>
</template>
