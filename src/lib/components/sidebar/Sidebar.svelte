<script lang="ts">
    import SidebarMenu from "$lib/components/sidebar/SidebarMenu.svelte";

    export let step: number;
</script>

<aside>
    <SidebarMenu {step}/>
</aside>

<style>
    aside {
        grid-row: 1 / 4;
        padding-top: 2rem;
        min-height: 10.75rem;
        background-image: url("$lib/images/bg-sidebar-mobile.svg");
        background-position: center;
        background-size: cover;

        @media (min-width: 768px) {
            background-image: url("$lib/images/bg-sidebar-desktop.svg");
            border-radius: 0.625rem;
            width: 17.125rem;
            padding: 2.5rem 2rem;
        }
    }
</style>

