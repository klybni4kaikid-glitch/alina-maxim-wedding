// ===============================
// Wedding Invitation
// Алина ❤️ Максим
// ===============================

// Дата свадьбы
const weddingDate = new Date("2026-09-10T11:00:00").getTime();

// ---------- Таймер ----------

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance < 0){

        const timer = document.getElementById("countdown");

        if(timer){

            timer.innerHTML = "Сегодня наш свадебный день ❤️";

        }

        return;

    }

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    const timer = document.getElementById("countdown");

    if(timer){

        timer.innerHTML =
        `
        <div class="timer-box">
            <span>${days}</span>
            <small>дней</small>
        </div>

        <div class="timer-box">
            <span>${hours}</span>
            <small>часов</small>
        </div>

        <div class="timer-box">
            <span>${minutes}</span>
            <small>минут</small>
        </div>

        <div class="timer-box">
            <span>${seconds}</span>
            <small>секунд</small>
        </div>
        `;

    }

}

setInterval(updateCountdown,1000);

updateCountdown();


// ---------- Плавное появление ----------

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".section,.card").forEach(item=>{

    observer.observe(item);

});

// ---------- Галерея ----------

document.querySelectorAll(".gallery img").forEach(image=>{

    image.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.className="image-overlay";

        overlay.innerHTML=`
            <img src="${image.src}">
        `;

        overlay.onclick=()=>overlay.remove();

        document.body.appendChild(overlay);

    });

});

// ---------- Пасхалка ----------

let clicks=0;

document.querySelectorAll(".cats img").forEach(cat=>{

    cat.addEventListener("click",()=>{

        clicks++;

        if(clicks==5){

            alert("🐈 Вегас и Лекса передают вам мур-мур и уже ждут гостей ❤️");

            clicks=0;

        }

    });

});

// ---------- Форма ----------

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        fullname: form.fullname.value,

        attendance: form.attendance.value,

        food: form.food.value,

        comment: form.comment.value

    };

    const response = await fetch("api/rsvp.php",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(data)

    });

    if(response.ok){

        alert("Спасибо ❤️ Мы получили Ваш ответ!");

        form.reset();

    }else{

        alert("Ошибка отправки.");

    }

});

}
