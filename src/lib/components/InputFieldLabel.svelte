<script lang="ts">
    export let label: string;
    export let error = 'This Field Is Required'
    export let id: string;
</script>

<label for={id}>
    {label}
    <span class="error">{error}</span>
</label>

<style>
    label {
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    span {
        color: var(--error-color);
        display: none;
    }
</style>