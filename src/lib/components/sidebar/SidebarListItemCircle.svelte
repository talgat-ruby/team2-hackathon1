<script lang="ts">
    export let num: number;
    export let active: boolean;
</script>

<div class={active ? "active" : ""}>{num}</div>

<style>
    div {
        width: 2.0625rem;
        height: 2.0625rem;
        display: grid;
        place-content: center;
        border: 1px solid var(--sidebar-primary-color);
        border-radius: 50%;
        /*typography*/
        font-size: 0.875rem;
        font-weight: 700;
        line-height: normal;
    }

    .active {
        background-color: var(--sidebar-accent-color);
        border-color: var(--sidebar-accent-color);
        color: var(--primary-color);
    }
</style>