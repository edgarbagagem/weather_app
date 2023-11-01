<script setup>
import { ref } from 'vue'


const props = defineProps({
    cityName: {
        type: String,
        default: ''
    },
    cityWeather: {
        type: Object,
        default: {}
    },
    cityId: {
        type: String,
        default: 0
    }
})

</script>

<template>
    <div class="card" style="color: #4B515D; border-radius: 35px;">
        <div class="card-body p-4">

            <div class="d-flex">
                <h6 class="flex-grow-1">{{ cityName }}</h6>
                <h6>{{ cityWeather.time }}</h6>
            </div>

            <div class="d-flex flex-column text-center mt-5 mb-4">
                <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> {{ cityWeather.temp }}°C</h6>
                <span class="small" style="color: #868B94">{{ cityWeather.main }}</span>
            </div>

            <div class="d-flex align-items-center">
                <div class="flex-grow-1" style="font-size: 1rem;">
                    <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> Feels like {{
                        cityWeather.feels_like }} °C
                        </span>
                    </div>
                    <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">{{
                        Math.round(cityWeather.wind_speed * 3600 / 1000) }} km/h {{ cityWeather.wind_direction }}
                        </span></div>
                    <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1">
                            {{ cityWeather.humidity }}% Humidity
                        </span>
                    </div>

                </div>

                <div>
                    <img :src=cityWeather.icon width="100" alt="Weather Icon">
                </div>
            </div>
            <div>
                <router-link :to="'/forecast/' + cityId">
                    <button type="button" class="btn btn-outline-primary btn-sm">Forecast</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style></style>