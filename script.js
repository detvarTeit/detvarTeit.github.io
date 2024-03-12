GHBVideo = document.getElementById("GHBVid");
EcstasyVideo = document.getElementById("EcstasyVid")
LSDVideo = document.getElementById("LSDVid");
AlkoholVideo = document.getElementById("AlkoholVid")
KokainVideo = document.getElementById("KokainVid")
CannabisVideo = document.getElementById("CannabisVid")

navnBox = document.getElementById("navn")
infoBox = document.getElementById("info")

/*
GHBVideo.pause()
EcstasyVideo.pause()
AlchoholVideo.pause()
KokainVideo.pause()
CannabisVideo.pause()
LSDVideo.pause() 
*/


// GHB
document.getElementById("GHBIkon").onclick = function(){
    navnBox.innerHTML = "GHB"
    infoBox.innerHTML = "GHB er ett rusmiddel som skaper beroligende effekter og kan lede til dyp søvn og bevisstløshet. Stoffet bruker å ta effekt etter 20 minutter, derfor merker ikke folk at de er beruset etter de har brukt GHB."

    document.getElementById("playArea").style.display = "none"
    document.getElementById("GHBVid").style.display = "flex"
    document.getElementById("AlkoholVid").style.display = "none"
    document.getElementById("KokainVid").style.display = "none"
    document.getElementById("LSDVid").style.display = "none"
    document.getElementById("EcstasyVid").style.display = "none"
    document.getElementById("CannabisVid").style.display = "none"
    GHBVideo.currentTime = 0;

    GHBVideo.play()
    EcstasyVideo.pause()
    AlkoholVideo.pause()
    KokainVideo.pause()
    CannabisVideo.pause()
    LSDVideo.pause()
    GHBVideo.onended = function(){
        document.getElementById("playArea").style.display = "flex"
        document.getElementById("GHBVid").style.display = "none"
    }
}

//ECSTASY
document.getElementById("Ecstasy").onclick = function(){
    navnBox.innerHTML = "Ecstasy"
    infoBox.innerHTML = "Ecstasy er ett rusmiddel som skaper høy selvfølelse og rask puls. Ecstasy øker produksjon av en del signalstoffer, slik som adrenalin og dopamin. Du kan lett miste følelse og glemme hvor fort man kjører. De som bruker Ecstasy bruker ofte å miste kontroll lettere når de kjører."
    
    document.getElementById("playArea").style.display = "none"
    document.getElementById("EcstasyVid").style.display = "flex"
    document.getElementById("GHBVid").style.display = "none"
    document.getElementById("AlkoholVid").style.display = "none"
    document.getElementById("KokainVid").style.display = "none"
    document.getElementById("LSDVid").style.display = "none"
    document.getElementById("CannabisVid").style.display = "none"
    EcstasyVideo.currentTime = 0;

    GHBVideo.pause()
    EcstasyVideo.play()
    AlkoholVideo.pause()
    KokainVideo.pause()
    CannabisVideo.pause()
    LSDVideo.pause()
    EcstasyVideo.onended = function(){
        document.getElementById("playArea").style.display = "flex"
        document.getElementById("EcstasyVid").style.display = "none"
    }
}

//LSD
document.getElementById("LSD").onclick = function(){
    navnBox.innerHTML = "LSD"
    infoBox.innerHTML = "LSD er ett rusmiddel som er ofte assosiert med illusjoner og hallusinasjoner som påvirker alle de fem sansene, smak, lukt, hørsel, syn, berøring og hørsel. LSD kan skape lett avslappelse, men kan også både stresse og gjøre det enklere å hallusinere farlige greier selv om de ikke er der."
    
    document.getElementById("playArea").style.display = "none"
    document.getElementById("LSDVid").style.display = "flex"
    document.getElementById("EcstasyVid").style.display = "none"
    document.getElementById("GHBVid").style.display = "none"
    document.getElementById("AlkoholVid").style.display = "none"
    document.getElementById("KokainVid").style.display = "none"
    document.getElementById("CannabisVid").style.display = "none"
    LSDVideo.currentTime = 0;

    GHBVideo.pause()
    EcstasyVideo.pause()
    AlkoholVideo.pause()
    KokainVideo.pause()
    CannabisVideo.pause()
    LSDVideo.play()
    LSDVideo.onended = function(){
        document.getElementById("playArea").style.display = "flex"
        document.getElementById("LSDVid").style.display = "none"
    }
}

//ALKOHOL
document.getElementById("alkohol").onclick = function(){
    navnBox.innerHTML = "Alkohol"
    infoBox.innerHTML = "Alkohol er ett av de vanligste rusmidlene som vi har i Norge. Når du drikker alkohol så bruker det oftest å dempe sansene dine, reaksjonstid og det er vanlig å begynne å slurve med ord. Treg reaksjonstid og dempet sanser er ofte hvorfor de som er beruset med alkohol har bilulykker."
    
    document.getElementById("playArea").style.display = "none"
    document.getElementById("LSDVid").style.display = "none"
    document.getElementById("EcstasyVid").style.display = "none"
    document.getElementById("GHBVid").style.display = "none"
    document.getElementById("AlkoholVid").style.display = "flex"
    document.getElementById("KokainVid").style.display = "none"
    document.getElementById("CannabisVid").style.display = "none"
    AlkoholVideo.currentTime = 0;

    GHBVideo.pause()
    EcstasyVideo.pause()
    AlkoholVideo.play()
    KokainVideo.pause()
    CannabisVideo.pause()
    LSDVideo.pause()
    AlkoholVideo.onended = function(){
        document.getElementById("playArea").style.display = "flex"
        document.getElementById("AlkoholVid").style.display = "none"
    }
}

//KOKAIN
document.getElementById("cocain").onclick = function(){
    navnBox.innerHTML = "Kokain"
    infoBox.innerHTML = "Kokain er ett rusmiddel som bruker å skape virkninger som paranoia, kvalme, angst og hallusinasjoner. Paranoia og hallusinasjoner er ofte en dødelig kombinasjon ute i trafikken. Kokain er også ett av de vanligste stoffene som blir brukt her i Norge."
    
    document.getElementById("playArea").style.display = "none"
    document.getElementById("LSDVid").style.display = "none"
    document.getElementById("EcstasyVid").style.display = "none"
    document.getElementById("GHBVid").style.display = "none"
    document.getElementById("AlkoholVid").style.display = "none"
    document.getElementById("KokainVid").style.display = "flex"
    document.getElementById("CannabisVid").style.display = "none"
    KokainVideo.currentTime = 0;

    GHBVideo.pause()
    EcstasyVideo.pause()
    AlkoholVideo.pause()
    KokainVideo.play()
    CannabisVideo.pause()
    LSDVideo.pause()
    KokainVideo.onended = function(){
        document.getElementById("playArea").style.display = "flex"
        document.getElementById("KokainVid").style.display = "none"
    }
}

//CANNABIS
document.getElementById("Cannabis").onclick = function(){
    navnBox.innerHTML = "Cannabis"
    infoBox.innerHTML = "Cannabis er ett fellesnavn for rusmidler slik som marihuana og hasj. Cannabis skaper ofte følelse av økt letthet og dempet reaksjonsevne, konsentrasjon. Konsentrasjon er nok en av de største bivirkningene av cannabis og er ofte hvorfor de fleste havner i bilulykker når de er beruset av cannabis."
    
    document.getElementById("playArea").style.display = "none"
    document.getElementById("LSDVid").style.display = "none"
    document.getElementById("EcstasyVid").style.display = "none"
    document.getElementById("GHBVid").style.display = "none"
    document.getElementById("AlkoholVid").style.display = "none"
    document.getElementById("KokainVid").style.display = "none"
    document.getElementById("CannabisVid").style.display = "flex"
    CannabisVideo.currentTime = 0;

    GHBVideo.pause()
    EcstasyVideo.pause()
    AlkoholVideo.pause()
    KokainVideo.pause()
    CannabisVideo.play()
    LSDVideo.pause()
    CannabisVideo.onended = function(){
        document.getElementById("playArea").style.display = "flex"
        document.getElementById("CannabisVid").style.display = "none"
    }
}