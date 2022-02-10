let vetAlunni = [
    "1) Ban el haq",
    "2) Belem",
    "3) Bertolino ",
    "4) Boetti ",
    "6) Brondetta ",
    "7) Cazzulo ",
    "8) Conte ",
    "9) Cristaudo ",
    "10) Dragomiristeanu",
    "11) Dudek",
    "12) Feier ",
    "13) Foti ",
    "14) Gianoglio ",
    "15) Lo schiavo",
    "16) Monni ",
    "17) Pavan",
    "18) Porello ",
    "19) Rivoir ",
    "20) Stima "
];
let bWidth = $(document).width();
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
$(()=>{
    $("#btnGenera").css({
        width: (bWidth-20+"px"),
        left: (((bWidth/2)-((bWidth-20)/2))+"px")
    })
    $("#btnGenera").on("click", ()=>{
        console.log(screen.width)
        let container = $("#risultati");
        container.html("");
        let n = [];
        for(let i = 0; i<2; i++){
            let sos = true;
            while(sos&&n.length<2)
            {
                let generato = Math.floor(Math.random() * vetAlunni.length);
                if(n[0]!==undefined){
                    if(generato!==n[0]) {
                        n.push(generato)
                        sos = false;
                    }
                }
                else
                    n.push(generato);
            }
            container.html(container.html() + "<br><br>" +  vetAlunni[n[i]]);
        }
        container.html(container.html() + "<br><br>")
    })
})
$(window).on("resize", ()=>{
    let bWidth = $(document).width();
    $("#btnGenera").css({
        width: (bWidth-20+"px"),
        left: (((bWidth/2)-((bWidth-20)/2))+"px")
    })
})
