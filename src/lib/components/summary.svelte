  <script lang="ts">

  import { selectedCard, selectedAddons } from './SelectedCard';
  import { createEventDispatcher } from 'svelte';
  import type { Addon } from './SelectedCard';;

  let selectedAddonsList: Addon[];

  $: selectedAddonsList = $selectedAddons;

  const dispatch = createEventDispatcher();

  function goToBackStep() {
    dispatch('setpage', { page: 3 });
  }

  function goToNextStep() {
    dispatch('setpage', { page: 5 });
  }
  function goToChange() {
    dispatch('setpage', { page: 2 });
  }
  function calculateTotal() {
    let total = 0;

    $selectedAddons.forEach(({ monthlyAddPrice, yearlyAddPrice, selected }) => {
      if (selected) {
        total += $selectedCard.switcher === 'monthly' ? monthlyAddPrice : yearlyAddPrice;
      }
    });
    total += $selectedCard.switcher === 'monthly'? $selectedCard.monthlyPrice : $selectedCard.yearlyPrice;

    return total;
  }

  export let enhance;

  </script>

<form class="stp step-4" method="POST" use:enhance>
    <div class="header">
      <h1 class="title">Finishing up</h1>
      <p class="exp">
        Double-check everything looks OK before confirming.
      </p>
    </div>
    <div class="selection-box">
      <div class="selection-container">
        {#if $selectedCard.name}
        <p class="plan-name">{$selectedCard.name} ({$selectedCard.switcher === 'monthly' ? 'Monthly' : 'Yearly'})</p>
        <div class="selected-plan">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <p class="plan-change" on:click={goToChange}>Change</p>
          {#if $selectedCard.switcher === 'monthly'}
            <p class="plan-price">${$selectedCard.monthlyPrice}/mo</p>
          {:else}
            <p class="plan-price">${$selectedCard.yearlyPrice}/yr</p>
          {/if} 
         </div>
        {:else}
          <p>No card selected yet.</p>
        {/if}
      
       
     <hr/>
        <div class="addons">
          {#each selectedAddonsList as { name, monthlyAddPrice,yearlyAddPrice, selected }}
          {#if selected}
          <div class="selected-addon">
              <p class="adds-name">{name}</p>
              {#if $selectedCard.switcher === 'monthly' }
              <p class="adds-price">{`+$${monthlyAddPrice}/mo`}</p>
              {:else}
              <p class="adds-price">{`+$${yearlyAddPrice}/yr`}</p> 
              {/if}
          </div>
          {/if}
        {/each}
        </div>
      </div>
      <p class="total">
        Total (per {#if $selectedCard.switcher === 'monthly'}month{:else}year{/if})
        <b>+${calculateTotal()}{#if $selectedCard.switcher === 'monthly'}/mo{:else}/yr{/if}</b>
      </p>
      
    </div>
    <!-- <div class="btns">
      <button class="prev-stp" type="button" on:click={goToBackStep}>Go Back</button> -->
      <!-- <button class="next-stp" type="submit" >Next Step</button>
    </div> --> 
  </form>
  
  
  <style>

.next-stp{
  background-color: hsla(243,100%,63%,1);
}
.next-stp:focus{
  background-color: hsla(243,100%,77%,1);
}
.selection-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
.selection-container {
  background-color: var(--selected-card-color);
  padding: 1.5rem;
}
.selected-plan {
  display: flex;
  justify-content: space-between;
  padding:  0 0 0.75rem 0;
  color: var(--primary-color);
  font-weight: 400;
}
.selected-plan .plan-price{
  color: rgb(2, 41, 89);
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
}
.selected-addon,.plan-change {
  display: flex;
  justify-content: space-between;
  padding: 0 0 0.75rem 0;
  color: var(--secondary-color);
  font-weight: 400;
  font-size: 0.9rem;
}
.plan-change{
  padding: 0;
  text-decoration: underline;
}
.plan-change:active,.plan-change:hover{
  color: var(--accent-color);
}
.plan-name{
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1rem;
}
.selected-addon .adds-price{
  color: var(--primary-color);
}
.total {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--secondary-color);
}
.total b {
  color: var(--accent-color);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;
}

  </style>