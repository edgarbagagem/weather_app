<script setup>
import { inject, onMounted, reactive } from 'vue';
import weatherWidget from './weatherWidget.vue'


const axios = inject('axios')
const toast = inject('toast')
const cities = inject('cities')

var cities_weather = reactive({ 'Leiria': {}, 'Lisboa': {}, 'Coimbra': {}, 'Porto': {}, 'Faro': {} })

const loadWeather = (city_id) => {
    axios.get('weather/' + city_id)
        .then((response) => {
            cities_weather[cities[city_id]] = response.data
        }).catch((error) => {
            toast.error("Error getting weather for city " + cities[city_id])
        })
}

onMounted(() => {
    for (let [city_id, city_name] of Object.entries(cities)) {
        loadWeather(city_id)
        window.setInterval(loadWeather(city_id), 30 * 60 * 1000)
    }

})


</script>

<template>
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center  h-100 mb-4">
            <div class="col-4 py-2" v-for="(city, cityId) in cities" :key="cityId">
                <weatherWidget :city-name="city" :city-id="cityId" :city-weather="cities_weather[city]"></weatherWidget>
            </div>
        </div>
    </div>
</template>

<style></style>