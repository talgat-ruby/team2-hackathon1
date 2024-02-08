<script lang="ts">
    export let num: number;
    export let title: string;
</script>

<hgroup>
    <p>Step {num}</p>
    <h3>{title}</h3>
</hgroup>

<style>
    hgroup {
        display: none;
    }

    @media (min-width: 768px) {
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