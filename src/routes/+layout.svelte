<script>
    // We import our page components (similar to the one above).
    import Form from "$lib/components/Form.svelte";
    import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
    import Footer from "$lib/components/Footer.svelte";

    // The current step of our form.
    let step = 0;

    // The state of all of our steps
    let stepsState = [];

    // Our handlers
    function onSubmit(values) {
        if (step === stepsState.length - 1) {
            // On our final step with POST our data somewhere
            console.log('Submitted data: ', stepsState)
        } else {
            // If we're not on the last step, store our data and increase a step
            stepsState[step] = values;
            stepsState = stepsState; // Triggering update
            step += 1;
        }
    }

    function onBack(values) {
        if (step === 0) return;
        stepsState[step] = values;
        stepsState = stepsState; // Triggering update
        step -= 1;
    }
</script>

<!-- We display the current step here -->
<Sidebar {step}/>
<Form
        initialValues={stepsState[step]}
        {onBack}
        {onSubmit}
/>
<Footer/>