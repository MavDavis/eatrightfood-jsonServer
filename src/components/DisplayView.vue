<template>
    <section>
        <div class="gallery">
            <div v-for="data in datas" :key="data.id" class="gallery-item">
                <FlipCards :datas="datas" />
            </div>
        </div>
    </section>
</template>

<script>
import FlipCards from "./flipCards.vue";
export default {
    name: "DisplayView",
    props: ["datas", "loading"],
    components: {
        FlipCards,
    },
    methods: {
        col() {
            console.log(this.datas, this.loading);
        },
    },
};
</script>

<style lang="scss">
.gallery {
    display: flex;

    .gallery-item {
        flex: 1 0 24rem;
        margin: 12px;
        height: 240px;
        margin: 1rem;
        box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
        overflow: hidden;

        .gallery-image {
            display: block;
            width: 200px;
            height: 200px;
            object-fit: cover;
            transition: transform 400ms ease-out;

            &:hover {
                transform: scale(1.15);
            }
        }
    }
}
</style>
