<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
  function goToBackStep() {
	  dispatch('setpage', { page: 3 });
	}
	function goToNextStep() {
	  dispatch('setpage', { page: 5});
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
          <p class="plan-name">Arcade(Monthly)</p>
          <p class="plan-price">$9/mo</p>
        </div>
        <hr />
        <div class="addons">
          <template>
            <div class="selected-addon">
              <span class="service-name">Online serivice</span>
              <span class="servic-price">+$1/mo</span>
            </div>
          </template>
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
.selected-addon .servic-price {
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