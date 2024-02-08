<script lang="ts">
    import SidebarMenuItem from "$lib/components/SidebarMenuItem.svelte";

    export let step: number;
    const steps = [
        {num: 1, title: 'Your info'},
        {num: 2, title: 'Select plan'},
        {num: 3, title: 'Add-ons'},
        {num: 4, title: 'Summary'}
    ];
</script>

<menu>
    {#each steps as s (s.num)}
        <SidebarMenuItem step={s} active={s.num === step}/>
    {/each}
</menu>

<style>
    menu {
        display: grid;
        grid-auto-flow: column;
        place-content: center;
        gap: 1rem;

        @media (min-width: 768px) {
            grid-auto-flow: row;
            gap: 2rem;
            place-content: start;
        }
    }
</style>