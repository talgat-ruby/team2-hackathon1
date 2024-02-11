<script lang="ts">
    import InputFieldLabel from "$lib/components/InputFieldLabel.svelte";

    export let label: string;
    export let error: string;
    export let id: string;
    export let name: string;
    export let placeholder: string;
    export let type = 'text';
</script>

<p>
    <InputFieldLabel {error} {id} {label}/>
    <input
            id={id}
            name={name}
            placeholder={placeholder}
            required
            type={type}
    />
</p>

<style>
    p {
        display: grid;
        gap: 0.5rem;
    }

    input {
        padding: 0.94rem 1rem;
        border: 1px solid var(--input-border-color);
        border-radius: 0.5rem;

        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--primary-color)
    }
</style>