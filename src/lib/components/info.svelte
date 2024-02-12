<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function goToNextStep() {
        dispatch('setpage', { page: 2 });
    }

    export let formData;
</script>

<section  class="stp step-1">
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
                bind:value={formData.name}
                required
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
        />
        <div class="label">
            <label for="email">Email Address</label>
            <p class="error">This Field Is Required</p>
        </div>
        <input
                bind:value={formData.email}
                required
                type="text"
                id="email"
                placeholder="e.g. stephenking@lorem.com"
        />
        <div class="label">
            <label for="phone">Phone Number</label>
            <p class="error">This Field Is Required</p>
        </div>
        <input
                bind:value={formData.phone}
                required
                type="tel"
                id="phone"
                placeholder="e.g. +1 234 567 890"
        />
    </form>
    <div class="btns">
        <button class="next-stp" type="button" on:click={goToNextStep}>Next Step</button>

    </div>
</section>
<style>
    .step-1 {
        display: flex;
        /* width: 100%; */
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