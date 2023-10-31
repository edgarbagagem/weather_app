<script>
import { ref } from 'vue';

const image = ref('https://openweathermap.org/img/wn/10d@2x.png')
</script>

<template>
    <div class="card" style="color: #4B515D; border-radius: 35px;">
        <div class="card-body p-4">

            <div class="d-flex">
                <h6 class="flex-grow-1">Warsaw</h6>
                <h6>15:07</h6>
            </div>

            <div class="d-flex flex-column text-center mt-5 mb-4">
                <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> 13°C </h6>
                <span class="small" style="color: #868B94">Stormy</span>
            </div>

            <div class="d-flex align-items-center">
                <div class="flex-grow-1" style="font-size: 1rem;">
                    <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 40
                            km/h
                        </span></div>
                    <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 84%
                        </span>
                    </div>
                    <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 0.2h
                        </span>
                    </div>
                </div>
                <div>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" width="100px">
                </div>
            </div>

        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: "Montserrat"; */
}

.weather-container {
    background-color: rgb(33, 37, 41);
    background-size: cover;
    background-position: center;
    transition: 0.4s;
    width: 375px;
    margin: 0 auto;
    border-radius: 25px;
    margin-top: 50px;
    box-shadow: 0px 0px 30px #00000065;
}

.weather-wrap {
    height: 600px;
    padding: 25px;
    border-radius: 25px;
    background-image: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.2));
}





.location-box .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    font-style: italic;
    text-align: center;
    margin-top: 30px;
}

.location-box .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
}

.weather-box {
    text-align: center;
}

.weather-box .temp {
    display: inline-block;
    padding: 10px 25px;
    color: #fff;
    font-size: 102px;
    font-weight: 450;
    text-shadow: 3px 2px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0px;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    font-style: italic;
}

.weather-box .weather {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>