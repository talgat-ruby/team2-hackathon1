<script lang="ts">
    import SidebarMenuItemCircle from "$lib/components/SidebarMenuItemCircle.svelte";

    export let step: { num: number, title: string };
    $: num = step.num;
    export let active: boolean;
</script>

<li>
    <a href="/">
        <SidebarMenuItemCircle {active} {num}/>
        <hgroup>
            <p>Step {step.num}</p>
            <h3>{step.title}</h3>
        </hgroup>
    </a>
</li>

<style>
    a {
        text-decoration: none;
        color: var(--sidebar-primary-color);
    }

    hgroup {
        display: none;
    }

    @media (min-width: 768px) {
        a {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 1rem;
        }

        hgroup {
            display: grid;
            gap: 0.25rem;
            text-transform: uppercase;
        }

        p {
            font-size: 0.75rem;
            font-weight: 400;
            line-height: normal;
            color: var(--sidebar-secondary-color);
        }

        h3 {
            font-size: 0.875rem;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.0625rem;
            color: var(--sidebar-primary-color);
        }
    }
</style>