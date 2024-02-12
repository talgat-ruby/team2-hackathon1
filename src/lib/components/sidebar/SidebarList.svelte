<script lang="ts">
    import SidebarMenuItem from "$lib/components/sidebar/SidebarListItem.svelte";

    export let step: number;
    const steps = [
        {num: 1, title: 'Your info'},
        {num: 2, title: 'Select plan'},
        {num: 3, title: 'Add-ons'},
        {num: 4, title: 'Summary'}
    ];
</script>

<ul>
    {#each steps as s (s.num)}
        <SidebarMenuItem step={s} active={s.num === step}/>
    {/each}
</ul>

<style>
    ul {
        display: grid;
        grid-auto-flow: column;
        place-content: center;
        gap: 1rem;

        @media (min-width: 768px) {
            grid-auto-flow: row;
            gap: 2rem;
            place-content: stretch;
        }
    }
</style>