<script lang="ts">
 import { createEventDispatcher } from 'svelte';
 import { selectedAddons } from './SelectedCard';
 import switcher from "./plan.svelte"
 

  const dispatch = createEventDispatcher();

    function updateSelectedAddons(addonId: number, selected: boolean) {
    selectedAddons.update((prevAddons) => {
      const addonIndex = prevAddons.findIndex((addon) => addon.id === addonId);
      if (addonIndex !== -1) {
        const updatedAddon = { ...prevAddons[addonIndex], selected };
        prevAddons.splice(addonIndex, 1, updatedAddon);
      }
      console.log('Updating addon with ID:', addonId, 'Selected:', selected);
      return prevAddons;
    });
  }


  function goToNextStep() {
    dispatch('setpage', { page: 4 });
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
      {#each $selectedAddons as { id, name, description, monthlyAddPrice,yearlyAddPrice, selected }}
      <div class="box" data-id={id}>
        <input type="checkbox" bind:checked={selected} on:change={() => updateSelectedAddons(id, selected)} />
        <div class="description">
          <label for={id.toString()}>{name}</label>
          <small>{description}</small>
        </div>
       
        <p class="price">{`+$${monthlyAddPrice}/mo`}</p>
      </div>
    {/each}
    </form>
    <div class="btns">
      <button class="prev-stp" type="button" on:click={goToBackStep}>Go Back</button>
      <button class="next-stp" type="button" on:click={goToNextStep}>Next Step</button>
     
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
.description {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-left: 12px;
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
  font-weight: 700;
  user-select: none;
}
.description small {
  color: var(--secondary-color);
  font-weight: 700;
}
.price {
  color: var(--accent-color);
}
  </style>