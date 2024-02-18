<script lang="ts">
    import Info from '$lib/components/info.svelte'
    import Plan from '$lib/components/plan.svelte'
    import Addons from '$lib/components/addons.svelte'
    import Summary from '$lib/components/summary.svelte'
    import Confirm from '$lib/components/confirm.svelte'
    import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
    import { superForm } from 'sveltekit-superforms';
    import SuperDebug from 'sveltekit-superforms';


    let step = 1;
    export let data;

    // Client API:
    const { form, errors, constraints, enhance } = superForm(data.form, {
        dataType: 'json'
    });
   function  goToBackStep(){
     step--;
    }
    function goToNextStep(){
        step++
    }
    $: {
        if ($errors.name || $errors.phone || $errors.email||$errors.message ) {
            step = 1;
        }
        if ($errors.plan ) {
            step = 2;
        }
       
    }

  
    $: console.log({$errors});
</script>
<form method="POST" use:enhance>
<div class="viewing">
    <div class="container">
        <Sidebar {step}/>
        <div class="desktop-btn">
        <section class="fields">
            {#if step === 1}
                <Info bind:form={$form} errors={$errors} constraints={$constraints}  />
            {:else if step === 2}
                <Plan bind:form={$form} errors={$errors} />
            {:else if step === 3}
                <Addons bind:form={$form} />
            {:else if step === 4}
                <Summary errors={$errors} {enhance} on:setpage={(data) => step = data.detail.page}/>
            {:else if step === 5}
                <Confirm/>
            {/if}
        </section>
        <div class="btns">
            {#if step === 1}
            <span></span>
            <button class="next-stp" type="button" on:click={goToNextStep}>Next Step</button>
            {:else if step === 2 || step === 3}
            <button class="prev-stp" type="button" on:click={goToBackStep}>Go Back</button>
            <button class="next-stp" type="button" on:click={goToNextStep}>Next Step</button>
            {:else if  step === 4}
            <button class="prev-stp" type="button" on:click={goToBackStep}>Go Back</button>
            <button class="next-stp" type="submit" >Confirm</button>
            {/if}
        </div>
    </div>
        </div>
    </div>
 
</form>
<!--<SuperDebug data={$form} />-->

<style>
   
   .desktop-btn{
    display: flex;
    flex-direction: column;
   }
 
       .btns {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        padding-right: 6.25rem;
        padding-left: 6.25rem;
    }

    .next-stp{
        margin-left: 9rem;
    }
    .viewing {
        display: grid;
        align-items: center;
    }
    .container {
        max-width: 58.75rem;
        position: relative;
        margin-top: 3rem;
        padding: 1rem;
        border-radius: 1rem;
        background-color:var(--form-bg-color);
        display: flex;
        box-shadow: 0 15px 10px -15px var(--card-border-color)
    }

    .fields {
        margin-top: 2.5rem;
        padding-right: 6.25rem;
        padding-left: 6.25rem;
        display: flex;
        min-width: 50vw;
        min-height: 60vh;
    }
    .next-stp4{
        display: none;
    }
    @media (max-width: 767px) {
       .btns{
       position: static;
        min-width: 100vw;
        padding: 1.5rem 1rem;
        background-color:var(--form-bg-color);
        margin-left: 0rem;
        margin-top: 5rem;
       }
       .next-stp{
        margin-right: none;}

        .fields {
            min-width:80vw ;
            min-height: 50vh;
            margin: 7rem 1rem 0 1rem;
            display: flex;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: var(--form-bg-color);
            box-shadow: 0 15px 10px -15px var(--card-border-color);
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