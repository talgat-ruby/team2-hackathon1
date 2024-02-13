<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { selectedCard } from './SelectedCard';
 import Arcade from "../assets/images/icon-arcade.svg"
 import Pro from "../assets/images/icon-pro.svg"
 import Advanced from "../assets/images/icon-advanced.svg"

  $:{selectedCardName = $selectedCard.name;}

  let selectedCardName: string;

  let active: boolean;

 let switcher:{ monthly: boolean } = { monthly: true };

  function toggle() {
    switcher.monthly = !switcher.monthly; 
    updateSwitcher(switcher.monthly ? 'monthly' : 'yearly');// Toggle between true and false
  }
  
  const cards = [
    { name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90, imageUrl: Arcade},
    { name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120, imageUrl: Advanced },
    { name: 'Pro', monthlyPrice: 15, yearlyPrice: 150, imageUrl: Pro}
  ];
function updateSwitcher(newswitcher:string){
  selectedCard.update((prev) => ({
    ...prev,
    switcher: newswitcher,
  
  }));
}
  function selectCard(card: string, monthlyPrice: number, yearlyPrice: number,imageUrl: string) {
  selectedCard.update((prev) => ({
    ...prev,
    name: card,
    monthlyPrice: monthlyPrice,
    yearlyPrice: yearlyPrice,
    imageUrl,
  }));
  active = true;
}

  export let form;
  export let errors;
  $: form.plan= $selectedCard.name.toLowerCase();
  $: form.period = switcher.monthly ? 'monthly' : 'yearly';
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
      <figure class="plan-card {selectedCardName=== name ? 'active-card' : ''}" on:click={() => selectCard(name, monthlyPrice, yearlyPrice, imageUrl)}>
        <img src={imageUrl} alt={`Image for ${name}`} />
        <figurecaption class="plan-info chosen">
          <b>{name}</b>
          {#if switcher.monthly}
            <span class="plan-priced">${monthlyPrice}/mo</span>
          {/if}
          {#if !switcher.monthly}
            <span class="plan-priced">${yearlyPrice}/yr</span>
            <p class="price-free">2 months free</p>
          {/if}
        </figurecaption>
      </figure>
    {/each}
  </form>
{#if errors.plan}
<span class="error">{errors.plan}</span>
{/if}
  <div class="switcher">
    <p class={switcher.monthly ? 'active' : 'not_active'}>Monthly</p>
    <label class="switch">
      <input type="checkbox" on:click={toggle}>
      <span class="slider round"></span>
    </label>
    <p class={!switcher.monthly ? 'active' : 'not_active'}>Yearly</p>
  </div>
  </section>


  <style>
    .active {
      color: rgb(2, 41, 89);
      font-family: Ubuntu, sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
    }

    .not_active {
      color: rgb(150, 153, 170);
      font-family: Ubuntu,sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
     
    }
    /* .step-2 {
    width: 100%;
    } */
.step-2 form {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 2rem;
 
}
.plan-card {
  border: 1px solid var(--card-border-color);
  border-radius: 7px;
  padding-top:1.25rem;
  padding-left: 1rem;
  padding-bottom: 1.25rem;
  padding-right: 2.8rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  justify-content: space-between;
}
.plan-card:hover{
  background-color: var(--selected-card-color);
  border-color: hsla(243,100%,63%,1);
}
.active-card {
  background-color: hsla(230,100%,99%,1);
  border-color: hsla(243,100%,63%,1);
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
.error {
	color: var(--error-color);
	font-size: 0.9rem;
	font-weight: 700;
  margin-top: 1rem;
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
  .price-free{
    color: rgb(2, 41, 89);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }
  
@media screen and (max-width: 767px) {
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