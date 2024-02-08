<aside>
    <menu>
        <li><a class="active" href="/">
            <div class="circle">1</div>
            <hgroup>
                <p>Step 1</p>
                <h3>Your info</h3>
            </hgroup>
        </a></li>
        <li><a href="/">
            <div class="circle">2</div>
            <hgroup>
                <p>Step 2</p>
                <h3>Select plan</h3>
            </hgroup>
        </a></li>
        <li><a href="/">
            <div class="circle">3</div>
            <hgroup>
                <p>Step 3</p>
                <h3>Add-ons</h3>
            </hgroup>
        </a></li>
        <li><a href="/">
            <div class="circle">4</div>
            <hgroup>
                <p>Step 4</p>
                <h3>Summary</h3>
            </hgroup>
        </a></li>
    </menu>
</aside>

<style>
    a {
        text-decoration: none;
        color: var(--sidebar-primary-color);
    }

    .circle {
        width: 2.0625rem;
        height: 2.0625rem;
        display: grid;
        place-content: center;
        border: 1px solid var(--sidebar-primary-color);
        border-radius: 50%;
        /*typography*/
        font-size: 0.875rem;
        font-weight: 700;
        line-height: normal;
    }

    .active .circle {
        background-color: var(--sidebar-accent-color);
        border-color: var(--sidebar-accent-color);
        color: var(--primary-color);
    }

    a:hover .circle {
        background-color: var(--sidebar-secondary-color);
        border-color: var(--sidebar-secondary-color);
        color: var(--sidebar-primary-color);
    }

    hgroup {
        display: none;
    }

    menu {
        display: grid;
        grid-auto-flow: column;
        place-content: center;
        gap: 1rem;
    }

    aside {
        padding-top: 2rem;
        min-height: 10.75rem;
        background-image: url("$lib/images/bg-sidebar-mobile.svg");
        background-position: center;
        background-size: cover;
    }

    @media (min-width: 768px) {
        p {
            font-size: 0.75rem;
            font-weight: 400;
            line-height: normal;
            color: var(--sidebar-secondary-color);
        }

        h3 {
            font-size: 0.875rem;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.0625rem;
            color: var(--sidebar-primary-color);
        }

        hgroup {
            display: grid;
            gap: 0.25rem;
            text-transform: uppercase;
        }

        a {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 1rem;
        }

        menu {
            grid-auto-flow: row;
            gap: 2rem;
            place-content: start;
        }

        aside {
            background-image: url("$lib/images/bg-sidebar-desktop.svg");
            border-radius: 0.625rem;
            width: 17.125rem;
            padding: 2.5rem 2rem;
        }
    }
</style>