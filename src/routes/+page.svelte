<script>
    import Info from '$lib/components/info.svelte'
    import Plan from '$lib/components/plan.svelte'
    import Addons from '$lib/components/addons.svelte'
    import Summary from '$lib/components/summary.svelte'
    import Confirm from '$lib/components/confirm.svelte'
    let step = 1;
</script>

<div class="viewing">
    <div class="container">
        <div class="image">
            <div class="steps">
                <div class="step">
                    <span class="step-circle {step === 1 ? 'step-circle-selected' : ''}">1</span>
                    <span class="step-content">
                        <span class="step-content-title">Step 1<br></span>
                        <span class="step-content-content">Your Info</span>
                    </span>
                </div>
                <div class="step">
                    <span class="step-circle {step === 2 ? 'step-circle-selected' : ''}">2</span>
                    <span class="step-content">
                        <span class="step-content-title">Step 2<br></span>
                        <span class="step-content-content">Select Plan</span>
                    </span>
                </div>
                <div class="step">
                    <span class="step-circle {step === 3 ? 'step-circle-selected' : ''}">3</span>
                    <span class="step-content">
                        <span class="step-content-title">Step 3<br></span>
                        <span class="step-content-content">Add-Ons</span>
                    </span>
                </div>
                <div class="step">
                    <span class="step-circle {step === 4 || step === 5 ? 'step-circle-selected' : ''}">4</span>
                    <span class="step-content">
                        <span class="step-content-title">Step 4<br></span>
                        <span class="step-content-content">Summary</span>
                    </span>
                </div>
            </div>
       
    </div>
        <section class="fields">
            {#if step === 1}
                <Info on:setpage={(data) => step = data.detail.page} />
            {:else if step === 2}
                <Plan on:setpage={(data) => step = data.detail.page} />
            {:else if step === 3}
                <Addons on:setpage={(data) => step = data.detail.page} />
            {:else if step === 4}
                <Summary on:setpage={(data) => step = data.detail.page} />
            {:else if step === 5}
                <Confirm />
            {/if}
        </section>
 </div>
</div>

<style>
    .viewing {
        display: grid;
        align-items: center;
    }

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

    /* .image {
        width: 274px;
        height: 568px;
        background-image: url("/images/bg-sidebar-desktop.svg");
    } */

    .fields {
        margin-top: 3rem;
        margin-left: 1rem;
        padding-right: 6.25rem;
        padding-left: 6.25rem;
        display: flex;
    }

    .steps {
        display: grid;
        margin-left: 2rem;
    }

    .step {
        display: flex;
        margin-top: 2rem;
        align-items: center;
    }

    .step-circle {
        font-weight: 700;
        margin-right: 1rem;
        padding: 0.5rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 1px solid var(--sidebar-primary-color);
        color:var(--sidebar-primary-color);;
        display: flex;
        align-items: center;
        justify-content: center;
    }

   
    .step-content-title {
        font-weight: 400;
        font-size: 0.9rem;
        text-transform: uppercase;
        color: var(--sidebar-primary-color);
        opacity: 50%;
        letter-spacing: 0.001rem;
    }

    .step-content-content {
        font-weight: 700;
        text-transform: uppercase;
        color: var(--sidebar-primary-color);
    }

    .step-circle-selected {
        background-color: hsl(206, 94%, 87%);
        border: 0.12rem solid hsl(206, 94%, 87%);
        color: black;
    }
    .step {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  .step-content {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .step-content span {
    text-transform: uppercase;
    color: var(--card-border-color);
    font-size: 13px;
  }
 
    @media(max-width: 765px) {
        /* .image {
            background-size: cover;
            width: 100%;
            height: 172px;
            background-image: url("/images/bg-sidebar-mobile.svg");
            position: absolute;
            z-index: -1;
        } */

        .steps {
            display: flex;
            justify-content: center;
            margin-left: unset;
        }

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

        .step-content {
            position: absolute;
            visibility: hidden;
        }
    }

</style>