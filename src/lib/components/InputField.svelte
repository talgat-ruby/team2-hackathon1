<script lang="ts">
    export let label: string;
    export let error = 'This Field Is Required'
    export let id: string;
    export let name: string;
    export let placeholder: string;
    export let type = 'text';
</script>

<p>

    <input
            id={id}
            name={name}
            placeholder={placeholder}
            required
            type={type}
    />
</p>

<style>

</style>