const c_boton = document.querySelector(".c-boton")
const n_input = document.querySelector('#name');
const main = document.querySelector('.c-contenido')

c_boton.addEventListener("click", (e)=>{
    
    if(n_input.value === ''){
        alert("Por favor ingrese su nombre para continuar")
    }
    else if(n_input.value.toLowerCase() === "andrea"){
        main.innerHTML = sections.carta
        mainMenu()
    }
    else{
        alert("Nombre incorrecto, intente de nuevo")
    }
})

const sections = {
    carta : `
        <div class="carta-inicio">
            <img class="cinnamo" src="./icons/ cinnamo.png" alt="" srcset="">
            <h1>!Feliz San Valentin, mi preciosa!</h1>
            <p>Sé que te mereces mucho mas que una página con una carta dentro de ella, lamentablemente en este dia tan especial, esto es lo único que puedo ofrecerte, es algo que hice con mucho amor y cariño, espero te guste.</p>
            <p>Te amo 🫀</p>
            <p>Selecciona que te gustaría ver!!</p>

            <div class="botones-container">
                <button class="boton-card general-letter">
                    <img class="low-card" src="./icons/jack-backgroundpixel.png" alt="" srcset="">
                    <div><p>Mi preciosa</p></div>
                </button>

                <button class="boton-card lovers-letter">
                    <img class="low-card" src="./icons/tarot-lovers-800.png" alt="" srcset="">
                    <div><p>Nosotros</p></div>
                </button>
            </div>
            

        

        </div>
    `,
    miPreciosa:  `
        <div class="mi-preciosa">
            <div class="fondo"></div>
            <div class="titulo-div"> 
                <h1 class="titulo-carta">!Mi preciosa!</h1>
            </div>

            <img class="jack-bg" src="./icons/jack-backgroundpixel.png" alt="" srcset="">
           
            <p>
                A veces me pregunto en qué momento me enamore tanto de ti y que fue lo que me hizo caer perdidamente enamorado de ti, y bueno llego a la conclusión de que eres tan increíble que todo de ti me enamoro.

            </p>
            <p>Empecemos por lo que se ve para llegar a aquello que no se ve y que hace que cada día me enamore mas de ti.</p>
            <p>Mi preciosa, es realmente hermosa tanto que si fuera artista ella seria mi musa, mi inspiración, la mujer que retrataría y pintaría de una y mil formas, con tal que captar un atisbo de lo hermosa que se ve, lamentablemente ni aunque fuera el mejor pintor o artista podría captar todo lo que ella es, no podría captar como su carita hermosa derrite corazones, como mi corazón se vuelve un desastre cada vez que veo una foto de ella y me hace querer llenarla de besos, pues es la única forma en la que podría demostrar todo aquello que ella me hace sentir, como sus ojos inspiran confianza y te tientan a querer verlos todos los días cueste lo que cueste, que si le quitas los ojos de encima, te perderás del atardecer más hermoso, te perderás de la estrella más hermosa que se haya visto nunca, y por si no fuera poco tiene unos labios de los cuales quieres ser prisionero toda la vida, que si cada beso fuera letal, disfrutarías de cada segundo cerca de esos labios solo pensando en que nunca se acabe el tiempo.</p>
            <p>Para mi suerte mi preciosa no es solamente la mujer mas hermosa de este mundo, sino que es una persona maravillosa también, es una mujer fuerte y bondadosa, aunque mi preciosa, tenga la cara más hermosa y el cuerpo más delicioso del mundo, cualquier persona se enamoraría de ella si hablara con ella a diario, se daría cuenta de lo comprensiva, de lo linda que es, de lo bien que te trata cuando te aprecia, de cómo pone todo su atención en ti, de como te cuida y te alegra el día, de como te cuenta una historia, de como te pide que la ahorques, que la quemes con velas, que la amarres y la azotes, y como te pide que le leas un cuento, de puede hablar por horas, y tu siempre vas a querer escucharla más, porque nunca es suficiente cuando se trata de ella, nunca van a ser suficientes las charlas, las miradas, los besos, pues aquel que la conozca de verdad entenderá aquellas ganas insaciables de ella, pues es tan hermosa, es tan preciosa, es tan única y divertida, que hay que aprovecharla siempre que se pueda, y deseo que ella sea mía y solo mía por esta vida.</p>
            <p>Te amo y parece que cada día te amo más y me enamoro más de la hermosa persona que eres</p>

            <div class="fotos">
                <div class=" polaroid_white fotom_1">
                    <div class="polaroid_black">
                        <img src="./imgs/img-preciosa/mipreciosa.jpeg" alt="">
                    </div>
                    
                </div>
                <div class="polaroid_white fotom_2">
                    <div class="polaroid_black">
                        <img src="./imgs/img-preciosa/mipreciosa_2.jpeg" alt="">
                    </div>
                </div>
                <div class="polaroid_white fotom_3">
                    <div class="polaroid_black">
                        <img src="./imgs/img-preciosa/mipreciosa_3.jpeg" alt="">
                    </div>
                </div>
                <div class="polaroid_white fotom_4">
                    <div class="polaroid_black">
                        <img src="./imgs/img-preciosa/mipreciosa_4.jpeg" alt="">
                    </div>
                </div>
            </div>
            <button class="cinammo-card">
                <img src="./icons/ cinnamo.png" alt="" srcset="">
                <div><p>Volver al inicio</p></div>
            </button>

        </div>
    `,
    nosotros: `
        <div class="nosotros">
            <div class="titulo-div-2">
                <h1 class="titulo-carta">Un te amo más</h1>
            </div>
            <img class="lovers" src="./icons/tarot-lovers-800.png" alt="" srcset="">
            <p>Estoy agradecido, si con la vida porque te conoci de una manera extraña, pero también estoy agradecido contigo eres una compañera de vida maravillosa y cada vez que te lo digo, lo digo de verdad, no veo una vida sin ti, no me imagino esta vida sin ti, sin que seas mi esposa o sin que seas pareja, es tu culpa por meterme esas ideas locas en la cabeza de que me despertare junto a ti todas las mañanas, de que cogeremos de la forma más romántica y de la forma más violenta, de que te podré amar y respetar de la forma más linda, pero tambien te amaré de la forma más posesiva y más egoísta, te encerrare, te ocultaré para que siempre seas mia</p>
            <p>Es tu culpa por ser tan linda, por mostrarme el placer que se siente al someterte y hacerte completamente mía, tenerte de rodillas frente a mi, es tu culpa por mostrarme lo bien que se siente llamarte mi vida, por hacerme sentir especial cuando recibo un mensaje tuyo, es tu culpa por hacerme desearte cada minuto del día, por hacerme querer desayunar cada mañana contigo, por hacerme desear despertarme cada mañana contigo, que esta vida tenga sentido, porque la quiero vivir contigo.</p>
            <p>Si le preguntaras a mi yo de hace 3 años, si quería casarse y tener hijos, la respuesta sería que no, así su pareja quisiera hacerlo, si le preguntaras a mi yo de hace 1 año si quería casarse o tener hijos probablemente te diría que tiene miedo que las cosas salgan mal, que le aterra la idea de no ser suficiente para su pareja, de ser un mal padre o un mal esposo, que le aterra que todo pueda salir mal, que le aterra que las cosas no sean constantes. Si le preguntas a mi yo de ahora te diría que si, siempre y cuando esa persona sea tu.</p>
            <p>Con esto quiero decir lo importante que eres para mi, que contigo no me importa si las cosas salen mal, solo quiero vivir todo contigo, quiero pedirte que seas mi esposa, quiero que construyamos una casa juntos, quiero tener un hijo contigo, llevarte de la mano al altar, que viajemos por el mundo y veamos la luna que siempre me recuerda a ti, mientras te abrazo y me permito disfrutar de ti, no importa si las cosas salen mal, haré todo lo posible para siempre estar a tu lado, para siempre apoyarte, para nunca dejarte ir.</p>

            <p>Se que aun me falta mucho por aprender, pero espero seguir disfrutando mucho de ti y aprendiendo tanto para poder convertirme en el esposo que te mereces</p>
            <p>Y permíteme recrear estas fotos contigo, y tomarnos mil y unas fotos más.</p>
            <p>Feliz primer San Valentin de muchos!!</p>

            <div class="fotos-us">
                <div class=" polaroid_white fotous_1">
                    <div class="polaroid_black">
                        <img src="./imgs/img-us/us-1.jpeg" alt="">
                    </div>
                    
                </div>
                <div class="polaroid_white fotous_2">
                    <div class="polaroid_black">
                        <img src="./imgs/img-us/us-2.png" alt="">
                    </div>
                </div>
            </div>
            <button class="cinammo-card">
                <img src="./icons/ cinnamo.png" alt="" srcset="">
                <div><p>Volver al inicio</p></div>
            </button>



        

        </div>
    `
}

function mainMenu (){
    const general = document.querySelector('.general-letter')
    const lovers = document.querySelector('.lovers-letter')

    general.addEventListener('click',()=>{
        my()
    })

    lovers.addEventListener('click', ()=>{
        us()
    })
}

function my(){
    main.innerHTML = sections.miPreciosa
    activateCinamo()
}

function us(){
    main.innerHTML = sections.nosotros
    activateCinamo()
}

function activateCinamo(){
    const cinammo = document.querySelector('.cinammo-card')

    cinammo.addEventListener('click',()=>{
        main.innerHTML = sections.carta
        mainMenu()
    })
}

