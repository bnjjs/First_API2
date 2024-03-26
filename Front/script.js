
window.addEventListener('popstate', function(event) {
    window.history.forward();
});

let reponse_1 = ''
let reponse_2 = ''
// partie pour détécter la triche 
let right_click_count = 0
let ctrl_c_count = 0
let ctrl_v_count = 0
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    right_click_count++
    console.log('Clic droit détecté');

});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'c') {
        ctrl_c_count++
        console.log(ctrl_c_count)
       console.log('Ctrl+C détecté');


    }
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'v') {
        ctrl_v_count++
        console.log(ctrl_v_count)
       console.log('Ctrl+C détecté');

    }
});

                                                                                                                                    const countdownElement = document.getElementById('countdown');
let number_question = 2
let counter_question =0
function check() {
    if (countdownElement.textContent === "Temps écoulé") {
        q1.style.display = "none";
        q2.style.display = "block"; 
        

        counter_question++;
        if (counter_question === 1) {
            // Réinitialiser le décompte
            count = 10;
            
            start(); // Redémarrer le décompte
            
        } else if (counter_question === 2) {
            global_element.style.display = 'none';
            end.style.display='flex';
        }
        console.log(counter_question);
    }
}
let count = 10; 
function start() {
    

    function updateCount() {
        countdownElement.textContent = count;
        count--;

        if (count < 0) {
            clearInterval(counter);
            countdownElement.textContent = "Temps écoulé";
            check(); 
        }
    }

    updateCount(); 
    const counter = setInterval(updateCount, 1000);
}

start();


const q1 = document.getElementById("container_QCM_1");
const q2 = document.getElementById("container_QCM_2");

const global_element =document.getElementById('global_element');

    
score = 0
const btn_next =document.getElementById('next');

const end = document.getElementById('end');


async function sender_triche(){

    const searchParams = new URLSearchParams(window.location.search);

    const requestData ={
        ctrc_c: ctrl_c_count,
        ctrc_v: ctrl_v_count,
        right_click: right_click_count,
        eleve_id: searchParams.get('id')
    }

    try {

    const result = await fetch('http://localhost:3000/v4', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })

    } catch (error) {
    console.error('Erreur lors de la requête :', error);
    }

}



async function sender_reponse(){

    const searchParams = new URLSearchParams(window.location.search);

    const requestData ={
        reponse_1,
        reponse_2,
        score,
        eleve_id: searchParams.get('id')
    }

    
    try {
    const result = await fetch('http://localhost:3000/v3', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })

    const json = await result.json()

    
} catch (error) {
    console.error('Erreur lors de la requête :', error);
}

await sender_triche();
}




function Paris(){

    count =10
    score++
    q1.style.display="none"
    q2.style.display="block"
    reponse_1 ="Paris"
    

    //faire le fetch concerné qui renvois la la va
}

function Barcelone(){
    count =10
    score--
    q1.style.display="none"
    q2.style.display="block"
    reponse_1 ="Barcelone"
    
    //console.log("hello")
}

function Clermont(){
    count =10
    score--
    q1.style.display="none"
    q2.style.display="block"
    reponse_1 ="Clermont"
    //console.log("hello")
}


function Marseille(){
    count =10
    score--
    q1.style.display="none"
    q2.style.display="block"
    reponse_1 ="Marseille"
    //console.log("hello")
}

function Caire(){
    count =10
    score--
    q2.style.display="none";
    global_element.style.display='none';
    reponse_2 ="Le_caire"
    end.style.display='flex';
    sender_reponse('Caire')

    //console.log("hello")
}

function malaga(){
    
    reponse_2 ="Malaga"
    count =10
    score--
    q2.style.display="none"
    global_element.style.display='none';
    end.style.display='flex';
    sender_reponse('Malaga')
}

function madrid(){
    
    score ++
    count =10
    global_element.style.display='none';
    end.style.display='flex';
    q2.style.display="none"
    reponse_2="madrid"
    sender_reponse('Madrid')

}

function lyon(){
    
    reponse_2 ="lyon"
    count =10
    score --
    global_element.style.display='none';
    end.style.display='block';
    q2.style.display="none";
    end.style.display='flex';
    sender_reponse('Lyon')
    //console.log("hello")

}

const r = document.querySelector('#r1').value;
console.log(r);