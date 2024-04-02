<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        abstract() {
            const abstract = this.project.description.slice(0, 150);
            return abstract + '...';
        },
        pubblicationDate(){
            const date = new Date(this.project.created_at);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            if(day < 10) day = '0' + day;
            if(month < 10) month = '0' + month;

            return `${day}/${month}/${year} alle ${hours}:${minutes}`;
        }
    }
};
</script>

<template>
    <div class="card my-3">
        <div class="card-header">
            {{ project.title }}
        </div>
        <div class="card-body clearfix">
            <img v-if="project.image" :src="project.image" :alt="project.title" class="img-fluid float-start">
            {{abstract }}
        </div>
        <div class="card-footer d-flex align-items-center justify-content-between">
            <address>By Luca Bellan</address>
            <small>Pubblicato il {{ pubblicationDate}}</small>
        </div>
    </div>

</template>

<style scoped></style>