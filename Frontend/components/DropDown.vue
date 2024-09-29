<template>
    <div class="w-[300px] relative box-border dropdown">
        <div class="bg-[#2a2f3b] flex justify-between align-middle border-2 border-[#202f3b] cursor-pointer rounded-lg p-5 hover:bg-[#323741] select">
            <span class="selected"> </span>
            <div class="caret"></div>
        </div>
        <ul class="menu">
            <li>Yes</li>
            <li class="active">No</li>
        </ul>
    </div>
</template>

<style>

.select-clicked {
    border: 2px #26489a solid;
    box-shadow: 0 0 0.8em #26489a;
}
.caret {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #fff;
    transition: 0.3s;
}
.caret-rotate {
    transform: rotate(180deg);
}
.menu {
    list-style: none;
    padding: 0.2em 0.5em;
    background: #323741;
    border: 1px #363a43 solid;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
    color: #9fa5b5;
    position: absolute;
    top: 3em;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    opacity: 0;
    display: none;
    transition: 0.2s;
    z-index: 1;
}
.menu li {
    padding: 0.7em 0.5em;
    margin: 0.3em 0;
    border-radius: 0.5em;
    cursor: pointer;
}
.menu li:hover {
    background: #2a2a35;
}
.active {
    background: #23242a;
}
.menu-open {
    display: block;
    opacity: 1;
}
</style>

<script>
export default {
    mounted() {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            const select = dropdown.querySelector('.select');
            const caret = dropdown.querySelector('.caret');
            const menu = dropdown.querySelector('.menu');
            const options = dropdown.querySelectorAll('.menu li'); // Ensure all li are selected
            const selected = dropdown.querySelector('.selected');

            select.addEventListener('click', () => {
                select.classList.toggle('select-clicked');
                caret.classList.toggle('caret-rotate');
                menu.classList.toggle('menu-open');
            });

            options.forEach(option => {
                option.addEventListener('click', () => {
                    selected.innerText = option.innerText;
                    select.classList.remove('select-clicked');
                    caret.classList.remove('caret-rotate');
                    menu.classList.remove('menu-open');
                    options.forEach(opt => {
                        opt.classList.remove('active');
                    });
                    option.classList.add('active');
                });
            });
        });
    }
};
</script>
