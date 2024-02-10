<script>
    import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Step1 from "$lib/components/Step1.svelte";
    import Step2 from "$lib/components/Step2.svelte";

    const steps = [Step1, Step2];

    // The current step of our form.
    let step = 1;
    $: i = step - 1;

    // The state of all of our steps
    let stepsState = [];

    // Our handlers
    function onSubmit(values) {
        if (step === steps.length - 1) {
            // On our final step with POST our data somewhere
            console.log('Submitted data: ', stepsState)
        } else {
            // If we're not on the last step, store our data and increase a step
            stepsState[i] = values;
            stepsState = stepsState; // Triggering update
            step += 1;
        }
    }

    function onBack(values) {
        if (step <= 0) return;
        stepsState[i] = values;
        stepsState = stepsState; // Triggering update
        step -= 1;
    }
</script>

<!-- We display the current step here -->
<Sidebar {step}/>
<svelte:component
        initialValues={stepsState[i]}
        {onBack}
        {onSubmit}
        {step}
        this={steps[i]}
/>
<Footer {step}/>