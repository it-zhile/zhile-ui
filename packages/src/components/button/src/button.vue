<template>
    <div
        class="l__button"
        :class="[
            `l__button--${type}`,
            {'is-plain': plain, 'is-rund': rund }
        ]"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "LButton",
    props: {
        type: {
            type: String,
            default() {
                return "default";
            }
        },
        plain: { type: Boolean },
        rund: { type: Boolean }
    }
};
</script>
