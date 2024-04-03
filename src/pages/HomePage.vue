<script>
import ProjectsList from '../components/projects/ProjectsList.vue';
import AppAlert from '../components/AppAlert.vue';

import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
export default {
    name: 'HomePage',
    components: { ProjectsList, AppAlert },
    data: () => ({
        projects: [],
        isLoading: false,
        isAlertOpen: false
    }),
    methods: {
        fetchProjects() {
            this.isLoading = true
            axios.get(endpoint).then(res => {
                this.projects = res.data
                this.isAlertOpen = false;
            }).catch(err => {
                console.error(err)
                this.isAlertOpen = true;
            }).then(() => {
                this.isLoading = false;
            })

        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <h1>Boolfolio</h1>
    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" @retry="fetchProjects" />
    <AppLoader v-if="isLoading" />
    <ProjectsList v-else :projects="projects" />

</template>

<style scoped></style>
