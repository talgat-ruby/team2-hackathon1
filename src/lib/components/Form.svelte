<script>
    import {createForm} from 'felte'

    export let initialValues;
    export let onSubmit;

    const {form} = createForm({onSubmit, initialValues})
</script>

<form use:form>
    <label for=firstName>First name</label>
    <input id=firstName name=firstName>
    <label for=lastName>Last name</label>
    <input id=lastName name=lastName><br>
    <button type=submit>Next page</button>

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
            placeholder="e.g. +1 234 567 890"
            required
            type="tel"
    />
</form>