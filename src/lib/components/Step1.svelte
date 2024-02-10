<script>
    import {createForm} from 'felte'
    import StepHeader from "$lib/components/StepHeader.svelte";
    import Footer from "$lib/components/Footer.svelte";

    export let step;
    export let initialValues;
    export let onSubmit;

    const {form} = createForm({onSubmit, initialValues})
</script>

<section>
    <StepHeader {step}/>

    <form use:form>
        <div class="label">
            <label for="name">Name</label>
            <p class="error">This Field Is Required</p>
        </div>
        <input
                id="name"
                name="name"
                placeholder="e.g. Stephen King"
                required
                type="text"
        />
        <div class="label">
            <label for="email">Email Address</label>
            <p class="error">This Field Is Required</p>
        </div>
        <input
                id="email"
                name="email"
                placeholder="e.g. stephenking@lorem.com"
                required
                type="text"
        />
        <div class="label">
            <label for="phone">Phone Number</label>
            <p class="error">This Field Is Required</p>
        </div>
        <input
                id="phone"
                name="phone"
                placeholder="e.g. +1 234 567 890"
                required
                type="tel"
        />

        <button type=submit>Next page</button>

        <Footer {step}/>
    </form>
</section>