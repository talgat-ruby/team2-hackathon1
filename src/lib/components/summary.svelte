  <script lang="ts">

  import { selectedCard, selectedAddons } from './SelectedCard';
  import { createEventDispatcher, onMount } from 'svelte';
  import type { Addon } from './SelectedCard';
  
  let selectedAddonsList: Addon[];

  $: selectedAddonsList = $selectedAddons;

  const dispatch = createEventDispatcher();

  function goToBackStep() {
    dispatch('setpage', { page: 3 });
  }

  function goToNextStep() {
    dispatch('setpage', { page: 5 });
  }

  </script>

<div class="stp step-4">
    <div class="header">
      <h1 class="title">Finishing up</h1>
      <p class="exp">
        Double-check everything looks OK before confirming.
      </p>
    </div>
    <div class="selection-box">
      <div class="selection-container">
        <div class="selected-plan">
          {#if $selectedCard.name}
          <p class="plan-name">{$selectedCard.name} ({$selectedCard.switcher === 'monthly' ? 'Monthly' : 'Yearly'})</p>
          {#if $selectedCard.switcher === 'monthly'}
            <p class="plan-price">${$selectedCard.monthlyPrice}/mo</p>
          {:else}
            <p class="plan-price">${$selectedCard.yearlyPrice}/yr</p>
          {/if}
        {:else}
          <p>No card selected yet.</p>
        {/if}
  
        </div>
     <hr/>
        <div class="addons">
          {#each selectedAddonsList as { name, monthlyAddPrice, selected }}
          {#if selected}
          <div class="selected-addon">
              <p class="adds-name">{name}</p>
              <p class="adds-price"> {`+$${monthlyAddPrice}/mo`}</p>
          </div>
          {/if}
        {/each}
        </div>
      </div>
      <p class="total">Total (per month) <b>+$12/mo</b></p>
    </div>
    <div class="btns">
      <button class="prev-stp" type="button" on:click={goToBackStep}>Go Back</button>
      <button class="next-stp" type="button" on:click={goToNextStep}>Next Step</button>
    </div>
  </div>
  
  
  <style>
  
  .step-4 {
  width: 100%;
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
.selected {
  border: 2px solid var(--accent-color);
  background-color: var(--selected-card-color);
}
.selected-plan {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  color: var(--primary-color);
  font-weight: 700;
}
.selected-addon {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  color: var(--secondary-color);
  font-weight: 500;
  font-size: 0.9rem;
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
  font-size: 1.2rem;
}
  </style>