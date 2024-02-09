<script lang="ts">
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

    function goToNextStep() {
        dispatch('setpage', {page: 2});
    }

    export let name: string, email: string, phone: string;
</script>

<section class="stp step-1">
    <div class="header">
        <h1 class="title">Personal info</h1>
        <p class="exp">
            Please provide your name, email address, and phone number.
        </p>
    </div>
    <form>
        <div class="label">
            <label for="name">Name</label>
            <p class="error">This Field Is Required</p>
        </div>
        <input
                bind:value={name}
                id="name"
                placeholder="e.g. Stephen King"
                required
                type="text"
        />
        <div class="label">
            <label for="email">Email Address</label>
            <p class="error">This Field Is Required</p>
        </div>
        <input
                bind:value={email}
                id="email"
                placeholder="e.g. stephenking@lorem.com"
                required
                type="text"
        />
        <div class="label">
            <label for="phone">Phone Number</label>
            <p class="error">This Field Is Required</p>
        </div>
        <input
                bind:value={phone}
                id="phone"
                placeholder="e.g. +1 234 567 890"
                required
                type="tel"
        />
    </form>
    <div class="btns">
        <button class="next-stp" on:click={goToNextStep} type="button">Next Step</button>

    </div>
</section>
<style>
    .step-1 {
        display: flex;
        width: 100%;
    }

    .step-1 form {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        gap: 1rem;
    }

    .label {
        color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .step-1 form input {
        padding: 1rem;
        border: 1px solid var(--secondary-color);
        border-radius: 7px;
        font-weight: 500;
        font-size: 1rem;
    }

    .step-1 form input:focus {
        outline-color: var(--accent-color);
    }

    form input::placeholder {
        font-weight: 500;
        font-size: 1rem;
        font-family: inherit;
    }

    form .error {
        display: none;
        color: var(--error-color);
        font-size: 0.9rem;
        font-weight: 700;
    }


</style>