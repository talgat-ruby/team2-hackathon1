<script lang="ts">
    import SidebarMenuItemCircle from "$lib/components/sidebar/SidebarListItemCircle.svelte";
    import SidebarMenuItemText from "$lib/components/sidebar/SidebarListItemText.svelte";

    export let step: { num: number, title: string };
    $: num = step.num;
    $: title = step.title;
    export let active: boolean;
</script>

<li>
    <SidebarMenuItemCircle {active} {num}/>
    <SidebarMenuItemText {num} {title}/>
</li>

<style>
    li {
        text-decoration: none;
        color: var(--sidebar-primary-color);
        border-radius: 50px;

        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 1rem;
        }
    }
</style>