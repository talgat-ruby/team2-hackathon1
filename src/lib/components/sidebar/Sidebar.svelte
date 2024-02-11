<script lang="ts">
    import SidebarMenu from "$lib/components/sidebar/SidebarList.svelte";

    export let step: number;
</script>

<aside>
    <SidebarMenu {step}/>
</aside>

<style>
    aside {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        padding-top: 2rem;
        min-height: 10.75rem;
        background-image: url("$lib/images/bg-sidebar-mobile.svg");
        background-position: center;
        background-size: cover;

        @media (min-width: 48rem) {
            position: static;
            z-index: 0;
            background-image: url("$lib/images/bg-sidebar-desktop.svg");
            border-radius: 0.625rem;
            width: 17.125rem;
            padding: 2.5rem 2rem;
        }
    }
</style>

