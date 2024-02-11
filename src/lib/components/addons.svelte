<script lang="ts">
 import { createEventDispatcher } from 'svelte';
 import { selectedAddons,selectedCard } from './SelectedCard';
 import type {Addon }from "./SelectedCard"
 
 let selectedAddon: Addon[];
 $:{selectedAddon = $selectedAddons}

  let hasError = false;
  const dispatch = createEventDispatcher();

    function updateSelectedAddons(addonId: number, selected: boolean) {
    selectedAddons.update((prevAddons) => {
      const addonIndex = prevAddons.findIndex((addon) => addon.id === addonId);
      if (addonIndex !== -1) {
        const updatedAddon = { ...prevAddons[addonIndex], selected };
        prevAddons.splice(addonIndex, 1, updatedAddon);
      }
      return prevAddons;
    });
  }
  function goToNextStep() {
  if (selectedAddon.some(addon => addon.selected)) {
    hasError = false;
    dispatch('setpage', { page: 4 });
  } else {
    hasError = true;
  }
}
  function handleNextButtonClick() {
    goToNextStep();
  }


  function goToBackStep() {
    dispatch('setpage', { page: 2 });
  }
  </script>
  
  <div class="stp step-3">
    <div class="header">
      <h1 class="title">Pick add-ons</h1>
      <p class="exp">Add-ons help enhance your gaming experience.</p>
    </div>
    <form>
      {#each selectedAddon as { id, name, description, monthlyAddPrice,yearlyAddPrice, selected }}
      <div class="box  {selected ? 'active-card' : ''}"  data-id={id} >
        <input type="checkbox" bind:checked={selected} on:change={() => updateSelectedAddons(id, selected)} />
        <div class="description">
          <label for={id.toString()}>{name}</label>
          <small>{description}</small>
        </div>
        {#if $selectedCard.switcher === 'monthly' }
        <p class="price">{`+$${monthlyAddPrice}/mo`}</p>
        {:else}
        <p class="price">{`+$${yearlyAddPrice}/yr`}</p> 
        {/if}
        
      </div>
    {/each}
    </form>
    {#if hasError}
    <p class="error">Please select at least 1 option</p>
  {/if}
    <div class="btns">
      <button class="prev-stp" type="button" on:click={goToBackStep}>Go Back</button>
      <button class="next-stp" type="button" on:click={handleNextButtonClick}>Next Step</button>
     
    </div>
  </div>

  
  <style>

.step-3 {
  width: 100%;
}
.step-3 form {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 1.5rem;
}
.box {
  border: 1px solid var(--card-border-color);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.box:hover{
  background-color: var(--selected-card-color);
  border-color: hsla(243,100%,63%,1);
}
.active-card {
  
  background: hsla(230,100%,99%,1);
  border-color: hsla(243,100%,63%,1);
    }
.description {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-left: 12px;
  margin-right: 5rem;
}
.price {
  margin-left: auto;
}

.step-3 form input {
  accent-color: var(--accent-color);
  transform: scale(1.3);
  user-select: none;
}
.description label {
  color: var(--primary-color);
  font-weight: 500;
  user-select: none;
}
.description small {
  color: var(--secondary-color);
  font-weight: 400;
}
.price {
  color: var(--accent-color);
}
.error {
	color: var(--error-color);
	font-size: 0.9rem;
	font-weight: 500;
  margin-top: 1rem;
  }
  </style>