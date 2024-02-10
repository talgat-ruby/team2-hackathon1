<script>
    import Info from '$lib/components/info.svelte'
    import Plan from '$lib/components/plan.svelte'
    import Addons from '$lib/components/addons.svelte'
    import Summary from '$lib/components/summary.svelte'
    import Confirm from '$lib/components/confirm.svelte'
    import Sidebar from "$lib/components/sidebar/Sidebar.svelte";

    let step = 1;
</script>

<div class="viewing">
    <div class="container">
        <Sidebar {step}/>

        <section class="fields">
            {#if step === 1}
                <Info on:setpage={(data) => step = data.detail.page}/>
            {:else if step === 2}
                <Plan on:setpage={(data) => step = data.detail.page}/>
            {:else if step === 3}
                <Addons on:setpage={(data) => step = data.detail.page}/>
            {:else if step === 4}
                <Summary on:setpage={(data) => step = data.detail.page}/>
            {:else if step === 5}
                <Confirm/>
            {/if}
        </section>
    </div>

</div>

<style>
    .container {
        margin-top: 3rem;
        padding: 1rem;
        border-radius: 1rem;
        background-color: hsl(0, 0%, 100%);
        display: flex;

        margin-left: auto;
        margin-right: auto;
        box-shadow: 0 15px 10px -15px hsl(229, 24%, 87%);
    }

    .fields {
        margin-top: 3rem;
        margin-left: 1rem;
        padding-right: 6.25rem;
        padding-left: 6.25rem;
        display: flex;
    }


    @media (max-width: 768px) {


        .fields {
            margin: 6.7rem 1rem 0 1rem;
            display: flex;
            align-items: flex-start;
            padding: 1.5rem;
            border-radius: 0.5rem;
            background-color: hsl(0, 0%, 100%);
            box-shadow: 0 15px 10px -15px hsl(229, 24%, 87%);
        }

        .container {
            flex-wrap: wrap;
            padding: unset;
            display: grid;
            justify-content: center;
            background-color: unset;
            max-width: unset;
            min-width: unset;
            margin: unset;
        }

    }

</style>