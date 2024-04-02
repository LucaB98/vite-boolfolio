<script>
export default {
    name: 'ProjectsList',
    props: { projects: Array }
};
</script>

<template>
    <section id="projects-list">
        <ul v-if="projects.length">
            <li v-for="project in projects" :key="project.id">
                <h4 v-text="project.title"></h4>
            </li>
        </ul>
        <h4 v-else>Non ci sono progetti</h4>
    </section>

</template>

<style scoped></style>