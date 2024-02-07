<aside>
    <menu>
        <li><a class="active" href="/">
            <div class="circle">1</div>
        </a></li>
        <li><a href="/">
            <div class="circle">2</div>
        </a></li>
        <li><a href="/">
            <div class="circle">3</div>
        </a></li>
        <li><a href="/">
            <div class="circle">4</div>
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
        aspect-ratio: 1;
        display: grid;
        place-content: center;
        border: 1px solid var(--sidebar-primary-color);
        border-radius: 50%;
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

    menu {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding-top: 2rem;
    }

    aside {
        min-height: 10.75rem;
        background-image: url("$lib/images/bg-sidebar-mobile.svg");
        background-position: center;
        background-size: cover;
    }

    @media (min-width: 768px) {
        aside {
            background-image: url("$lib/images/bg-sidebar-desktop.svg");
        }
    }
</style>