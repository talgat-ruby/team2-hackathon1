<script>
    import {createForm} from 'felte'
    import StepHeader from "$lib/components/StepHeader.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import InputField from "$lib/components/InputField.svelte";

    export let step;
    export let initialValues;
    export let onSubmit;

    const {form} = createForm({onSubmit, initialValues})
</script>

<form use:form>
    <StepHeader {step}/>
    <section>
        <InputField id="name" label="Name" name="name" placeholder="e.g. Stephen King"/>
        <InputField id="email" label="Email Address" name="email" placeholder="e.g. stephenking@lorem.com"
                    type="email"/>
        <InputField id="phone" label="Phone Number" name="phone" placeholder="e.g. +1 234 567 890" type="tel"/>
    </section>
    <Footer {step}/>
</form>

<style>
    form {
        margin: 6.19rem 1rem 0;
        padding: 2rem 1.5rem;
    }

    @media (min-width: 48rem) {
        form {
            margin: 0;
            padding: 2.5rem 6.25rem 2rem;
        }

        section {
            margin-top: 2.5rem;
            display: grid;
            gap: 1.5rem;
        }
    }
</style>