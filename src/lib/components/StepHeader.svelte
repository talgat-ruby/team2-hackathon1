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
    <h1>{steps[i].title}</h1>
    <p>{steps[i].info}</p>
</header>

<style>
    
</style>