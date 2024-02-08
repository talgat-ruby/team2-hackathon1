<script lang="ts">
    import SidebarMenuItemCircle from "$lib/components/sidebar/SidebarMenuItemCircle.svelte";
    import SidebarMenuItemText from "$lib/components/sidebar/SidebarMenuItemText.svelte";

    export let step: { num: number, title: string };
    $: num = step.num;
    $: title = step.title;
    export let active: boolean;
</script>

<li>
    <a href="/static">
        <SidebarMenuItemCircle {active} {num}/>
        <SidebarMenuItemText {num} {title}/>
    </a>
</li>

<style>
    a {
        text-decoration: none;
        color: var(--sidebar-primary-color);
        border-radius: 50px;

        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 1rem;
        }
    }

    a:focus, a:hover {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--sidebar-primary-color);
    }
</style>