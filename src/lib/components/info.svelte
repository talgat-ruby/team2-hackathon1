<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let form;
    export let errors;
    export let constraints;

    function goToNextStep() {
        dispatch('setpage', { page: 2 });
    }
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
        {#if errors.name}<span class="invalid">{errors.name}</span>{/if}
        <input
                name="name"
                aria-invalid={errors.name ? 'true' : undefined}
                bind:value={form.name}
                {...constraints.name}
                required
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
        />
        <div class="label">
            <label for="email">Email Address</label>
            <p class="error">This Field Is Required</p>
            {#if errors.email}<span class="invalid">{errors.email}</span>{/if}
        </div>
        <input
                name="email"
                aria-invalid={errors.email ? 'true' : undefined}
                bind:value={form.email}
                {...constraints.email}
                required
                type="text"
                id="email"
                placeholder="e.g. stephenking@lorem.com"
        />
        <div class="label">
            <label for="phone">Phone Number</label>
            <p class="error">This Field Is Required</p>
            {#if errors.phone}<span class="invalid">{errors.phone}</span>{/if}
        </div>
        <input
                name="phone"
                aria-invalid={errors.phone ? 'true' : undefined}
                bind:value={form.phone}
                {...constraints.phone}
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

    .invalid {
        color: var(--error-color);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
</style>