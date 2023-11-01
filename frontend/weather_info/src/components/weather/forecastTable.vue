<script setup>
import { inject, onMounted, ref, watch } from 'vue'

const axios = inject('axios')
const toast = inject('toast')

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
})

const forecast = ref([])

const loadForecast = (city_id) => {
    axios.get('weather/forecast/' + city_id)
        .then((response) => {
            forecast.value = response.data
        }).catch((error) => {
            toast.error("Error getting forecast")
        })
}

watch(
    () => props.id,
    (id) => { loadForecast(id) },
    { immediate: true }
)

</script>

<template>
    <div class="container py-5 h-100">
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th class="align-middle">Weather</th>
                    <th class="align-middle">Weather description</th>
                    <th class="align-middle">Temperature (°C)</th>
                    <th class="align-middle">Humidity (%)</th>
                    <th class="align-middle">Feels like (°C)</th>
                    <th class="align-middle">Wind speed (Km/h)</th>
                    <th class="align-middle">Wind direction</th>
                    <th class="align-middle">Date & Time</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="weather in forecast" :key="forecast.indexOf(weather)">
                    <td><img :src=weather.icon width="100" alt="Weather Icon"></td>
                    <td class="align-middle">{{ weather.main }}</td>
                    <td class="align-middle">{{ weather.description }}</td>
                    <td class="align-middle">{{ weather.temp }}</td>
                    <td class="align-middle">{{ weather.humidity }}</td>
                    <td class="align-middle">{{ weather.feels_like }}</td>
                    <td class="align-middle">{{ Math.round(weather.wind_speed * 3600 / 1000) }}</td>
                    <td class="align-middle">{{ weather.wind_direction }}</td>
                    <td class="align-middle">{{ weather.dateTime }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>