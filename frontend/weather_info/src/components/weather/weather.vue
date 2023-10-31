<script setup>
import { inject } from 'vue';
import weatherWidget from './weatherWidget.vue'


const axios = inject('axios')
const toast = inject('toast')

const cities = {
    '2267056': 'Lisboa',
    '2267094': 'Leiria',
    '2740636': 'Coimbra',
    '2735941': 'Porto',
    '2268337': 'Faro',

}

</script>

<template>
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100 mb-4">
            <div class="col-4">
                <weatherWidget></weatherWidget>
            </div>
            <div class="col-4">
                <weatherWidget></weatherWidget>
            </div>
            <div class="col-4">
                <weatherWidget></weatherWidget>
            </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center h-100 mb-4">
            <div class="col-4">
                <weatherWidget></weatherWidget>
            </div>
            <div class="col-4">
                <weatherWidget></weatherWidget>
            </div>
        </div>
    </div>
</template>

<style></style>