<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { selectedCard } from './SelectedCard';
 import Arcade from "../assets/images/icon-arcade.svg"
 import Pro from "../assets/images/icon-pro.svg"
 import Advanced from "../assets/images/icon-advanced.svg"
  $: selectedCardData = $selectedCard;
  $: {
    selectedCardName = selectedCardData.name;
    selectedCardImageUrl = selectedCardData.imageUrl;
  }

  let selectedCardName: string;
  let selectedCardImageUrl: string;

  let active: boolean;
  const dispatch = createEventDispatcher();

  function goToNextStep() {
    dispatch('setpage', { page: 3 });
  }

  function goToBackStep() {
    dispatch('setpage', { page: 1 });
  }

  let switcher = { monthly: true };

  function toggle() {
    switcher.monthly = !switcher.monthly; // Toggle between true and false
  }

  const cards = [
    { name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90, imageUrl: Arcade},
    { name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120, imageUrl: Advanced },
    { name: 'Pro', monthlyPrice: 15, yearlyPrice: 150, imageUrl: Pro}
  ];

  function selectCard(card: string, monthlyPrice: number, yearlyPrice: number, imageUrl: string) {
    selectedCard.set({
      name: card,
      monthlyPrice,
      yearlyPrice,
      switcher: switcher.monthly ? 'monthly' : 'yearly',
      imageUrl,
    });
    active = true;
  }
</script>

<section class="stp step-2">
  <div class="header">
    <h1 class="title">Select your plan</h1>
    <p class="exp">You have the option of monthly or yearly billing.</p>
  </div>
  <form>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    {#each cards as { name, monthlyPrice, yearlyPrice, imageUrl }}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <figure class="plan-card {selectedCardName=== name ? 'active' : ''}" on:click={() => selectCard(name, monthlyPrice, yearlyPrice, imageUrl)}>
        <img src={imageUrl} alt={`Image for ${name}`} />
        <figurecaption class="plan-info chosen">
          <b>{name}</b>
          {#if switcher.monthly}
            <span class="plan-priced">${monthlyPrice}/mo</span>
          {/if}
          {#if !switcher.monthly}
            <span class="plan-priced">${yearlyPrice}/yr</span>
          {/if}
        </figurecaption>
      </figure>
    {/each}
  </form>

  <div class="switcher" on:click={toggle}>
    <p class="{switcher.monthly ? 'monthly sw-active' : 'monthly'}">Monthly</p>
    <label class="switch">
      <input type="checkbox" bind:checked={switcher.monthly} />
      <span class="slider round"></span>
    </label>
    <p class="{switcher.monthly ? 'yearly' : 'yearly sw-active'}">Yearly</p>
  </div>
  <div class="btns">
    <button class="prev-stp" type="button" on:click={goToBackStep}>Go Back</button>
    <button class="next-stp" type="button" on:click={goToNextStep}>Next Step</button>
  </div>
</section>

  <style>
    .step-2 {
    width: 100%;
    }
.step-2 form {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 2rem;
}
.plan-card {
  border: 2px solid var(--card-border-color);
  border-radius: 7px;
  padding-top:1.25rem;
  padding-left: 1rem;
  padding-bottom: 1.25rem;
  padding-right: 4rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  justify-content: space-between;
}
.active {
        background-color: var(--sidebar-accent-color);
        border-color: var(--sidebar-accent-color);
        color: var(--primary-color);
    }
.plan-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.plan-info b {
  color: var(--primary-color);
  font-family: Ubuntu;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.13rem;
}

.plan-info span {
  color: var(--secondary-color);
}
.monthly,
.yearly {
  color: var(--secondary-color);
  font-weight: 500;
}
.sw-active {
  color: var(--primary-color);
}
.switcher {
    margin: 2rem 0;
  }
  .switcher {
    background-color: var(--selected-card-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 0;
    margin-bottom: 2rem;
    justify-content: center;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  
@media screen and (max-width: 765px) {
.plan-card {
      width: 100%;
      height: 100px;
      flex-direction: row;
      justify-content: flex-start;
      gap: 1rem;
      padding-top:1rem;
  padding-left: 1rem;
  padding-bottom: 1.25rem;
      align-items: center;
    }
    .step-2 form {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
  </style>