<script>
    const steps = [
        {
            title: 'Personal info',
            info: 'Please provide your name, email address, and phone number.'
        },
        {
            title: 'Select your plan',
            info: 'You have the option of monthly or yearly billing.'
        },
        {
            title: 'Pick add-ons',
            info: 'Add-ons help enhance your gaming experience.'
        },
        {
            title: 'Finishing up',
            info: 'Double-check everything looks OK before confirming.'
        }
    ];

    export let step;
    $: i = step - 1;
</script>

<header>
    <h2>{steps[i].title}</h2>
    <p>{steps[i].info}</p>
</header>

<style>
    @media (min-width: 48rem) {
        h2 {
            font-size: 2rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            color: var(--primary-color);
        }

        p {
            margin-top: 0.69rem;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.5625rem; /* 156.25% */
            color: var(--secondary-color);
        }
    }
</style>