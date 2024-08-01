// Turn Page al clickear boton de next o previous
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 30 - index;
            }, 500)
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;

            }, 500)
        }
    }
})

// Contact me button al clickear
const pages = Array.from(document.querySelectorAll('.book-page.page-right'));

function contactMe() {
    console.log('---> contactMe() - Inicio');
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
}

// Botón de "back profile" al hacer clic:
function volverInicio() {
    console.log('---> volverInicio() - Inicio');
    pages.slice().reverse().forEach((page, index) => {
        setTimeout(() => {
            page.classList.remove('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 100 + 50);
    });
};

// Animación de apertura
const coverRight = document.querySelector('.cover.cover-right');

function animacionInicial() {
    console.log('---> animacionInicial() - Inicio');
    // timeouts para "abrir" carpeta y establecer zIndex en -1
    setTimeout(() => {
        coverRight.classList.add('turn');
        setTimeout(() => {
            coverRight.style.zIndex = -1;
        }, 500);
    }, 2100);

    // Este timeout es para que el forEach se ejecute luego de animacion de coverRight
    setTimeout(() => {
        volverInicio()
        setTimeout(() => {
            const wrapper = document.getElementsByClassName('wrapper')[0];
            wrapper.style.boxShadow = "3px 3px 3px rgba(0,0,0,0.7)";
            const coverLeft = document.getElementsByClassName('cover')[0];
            console.log('cover????', coverLeft);
            coverLeft.style.boxShadow = "0px 0px 0px rgba(0,0,0,0)";
            const coverRight = document.getElementsByClassName('cover')[1];
            console.log('cover????', coverRight);
            coverRight.style.boxShadow = "0px 0px 0px rgba(0,0,0,0)";
        }, 2500);
    }, 2100)
}

animacionInicial()

// Manejador de navegación desde el índice
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
    item.onclick = () => {
        const pageIndex = parseInt(item.getAttribute('data-target-page'));
        console.log('pageIndex:', pageIndex);

        if (pageIndex === 2 || pageIndex === 3) {
            console.log('pagina dos o tres locardo!');
            pages[0].classList.add('turn');
            setTimeout(() => {
                pages[0].style.zIndex = 20;
            }, 500);
        } else if (pageIndex === 4 || pageIndex === 5) {
            console.log('pagina cuatro o cinco locardo!');
            pages[0].classList.add('turn');
            pages[1].classList.add('turn');
            setTimeout(() => {
                pages[0].style.zIndex = 20;
                pages[1].style.zIndex = 22;
            }, 500);
        } else if (pageIndex === 6 || pageIndex === 7) {
            console.log('pagina seis o siete locardo!');
            pages[0].classList.add('turn');
            pages[1].classList.add('turn');
            pages[2].classList.add('turn');
            setTimeout(() => {
                pages[0].style.zIndex = 20;
                pages[1].style.zIndex = 22;
                pages[1].style.zIndex = 24;
            }, 500);
            
        } else if (pageIndex === 6 || pageIndex === 7) {
            console.log('pagina seis o siete locardo!');
            pages[0].classList.add('turn');
            pages[1].classList.add('turn');
            pages[2].classList.add('turn');
            setTimeout(() => {
                pages[0].style.zIndex = 20;
                pages[1].style.zIndex = 22;
                pages[2].style.zIndex = 24;
            }, 500);
        }

        else if (pageIndex === 8 || pageIndex === 9) {
            console.log('pagina ocho o nueve locardo!');
            pages[0].classList.add('turn');
            pages[1].classList.add('turn');
            pages[2].classList.add('turn');
            pages[3].classList.add('turn');
            setTimeout(() => {
                pages[0].style.zIndex = 20;
                pages[1].style.zIndex = 22;
                pages[2].style.zIndex = 24;
                pages[3].style.zIndex = 26;
            }, 500);
        } else if (pageIndex === 10 || pageIndex === 11) {
            
            pages[0].classList.add('turn');
            pages[1].classList.add('turn');
            pages[2].classList.add('turn');
            pages[3].classList.add('turn');
            pages[4].classList.add('turn');
            setTimeout(() => {
                pages[0].style.zIndex = 20;
                pages[1].style.zIndex = 22;
                pages[2].style.zIndex = 24;
                pages[3].style.zIndex = 26;
                pages[4].style.zIndex = 28;
            }, 500);
        }
        else if (pageIndex === 12) {
            
            pages[0].classList.add('turn');
            pages[1].classList.add('turn');
            pages[2].classList.add('turn');
            pages[3].classList.add('turn');
            pages[4].classList.add('turn');
            pages[5].classList.add('turn');
            setTimeout(() => {
                pages[0].style.zIndex = 20;
                pages[1].style.zIndex = 22;
                pages[2].style.zIndex = 24;
                pages[3].style.zIndex = 26;
                pages[4].style.zIndex = 28;
                pages[5].style.zIndex = 30;
            }, 500);
        }

    };
});

const spellbookPage2 = document.getElementById('spellbook-page-2')
const spell = [{
    name: "CreateWater",
    school: "Conjuration",
    level: "0",
    image: "../images/water-template.png",
    imageDescription: "Create up to 2 gallons of water/level.~   1 gallon weighs about 8 pounds.~    One cubic foot contains roughly 8 gallons and weighs about 60 pounds.",
    components: "V, S",
    materialComponents: "",
    castingTime: "1 action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target: "",
    effect: "",
    area: "",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    XPCost: "",
    focus: "",
    shortDescription: "Creates 2 gallons/level of pure water.",
    description: "This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large (possibly creating a downpour or filling many small receptacles). ~Note: Conjuration spells can’t create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    prepared: false,
}]

function castearHechizo() {
    mostrarImagenEmergente(spell);
}


/// Define la función para mostrar la imagen emergente y recibe el hechizo correspondiente
function mostrarImagenEmergente(CreateWater) {
    // Crea un nuevo div para la imagen casteada
    const castedSpellDiv = document.createElement("div");
    castedSpellDiv.classList.add("casted-spell");

    const imagenHechizo = document.createElement("p");
    imagenHechizo.classList.add("image-description");

    const imagenSpell = spell[0].imageDescription;
    imagenHechizo.innerHTML = imagenSpell.replace(/~/g, '<br>');

    castedSpellDiv.appendChild(imagenHechizo);

    const magoNatural = document.getElementsByClassName('mago-natural')[0]
    magoNatural.style.visibility = 'visible'

    const hideButton = document.createElement("button");
    hideButton.textContent = "X";
    hideButton.addEventListener("click", function () {
        castedSpellDiv.remove();
    });
    castedSpellDiv.appendChild(hideButton);
    spellbookPage2.appendChild(castedSpellDiv);
}

(function() {
    emailjs.init('lYB1bO5gdu-6uhnkP'); // Reemplaza 'lYB1bO5gdu-6uhnkP' con tu Public Key de EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar la recarga de la página al enviar el formulario

    // Obtener los valores del formulario
    const formData = {
        nombre: this.nombre.value,
        email: this.email.value,
        mensaje: this.mensaje.value
    };

    // Enviar el correo usando EmailJS
    emailjs.send('service_f1228lj', 'template_t13ytq7', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Mensaje enviado exitosamente!');
            document.getElementById('contact-form').reset(); // Reiniciar el formulario
        }, function(error) {
            console.error('FAILED...', error);
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        });
});
