<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function goToNextStep() {
	  dispatch('setpage', { page: 3});
	}
  function goToBackStep() {
	  dispatch('setpage', { page: 1 });
	}
  let switcher= {monthly: true}

  function toggle() {
    switcher.monthly = !switcher.monthly; // Toggle between true and false
  }
  </script>


<section class="stp step-2">
    <div class="header">
      <h1 class="title">Select your plan</h1>
      <p class="exp">You have the option of monthly or yearly billing.</p>
    </div>
    <form>
      <figure class="plan-card">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
        <figurecaption class="plan-info chosen">
          <b>Arcade</b>
          {#if switcher.monthly }
            <span class="plan-priced">$9/mo</span>
          {/if}
          {#if !switcher.monthly}
            <span class="plan-priced">$90/yr</span>
          {/if}
        </figurecaption>
      </figure >
      <figure  class="plan-card">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
        <figurecaption class="plan-info">
          <b>Advanced</b>
          {#if switcher.monthly }
            <span class="plan-priced">$12/mo</span>
          {/if}
          {#if !switcher.monthly}
            <span class="plan-priced">$120/yr</span>
          {/if}
        </figurecaption>
      </figure >
      <figure class="plan-card">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
        <figurecaption class="plan-info">
          <b>Pro</b>
          {#if switcher.monthly }
            <span class="plan-priced">$15/mo</span>
          {/if}
          {#if !switcher.monthly }
            <span class="plan-priced">$150/yr</span>
          {/if}
        </figurecaption>
      </figure >
    </form>

  <div class="switcher" on:click={toggle}>
    <p class="{switcher.monthly ? 'monthly sw-active' : 'monthly'}">Monthly</p>
    <label class="switch">
      <input type="checkbox" checked="{switcher.monthly}" />
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