window.addEventListener("load", capitaines, false);
window.addEventListener("load", navigateurs, false);
window.addEventListener("load", charpentiers, false);
window.addEventListener("load", medecins, false);
window.addEventListener("load", sabreurs, false);
window.addEventListener("load", membres, false);
window.addEventListener("load", membress, false);
window.addEventListener("load", tireurs, false);
window.addEventListener("load", womans, false);
window.addEventListener("load", womanss, false);
window.addEventListener("load", minkss, false);
window.addEventListener("load", fishmenss, false);



const cap = Array(
    "./imgcapitaine/Aladdin.png", "./imgcapitaine/Apoo.png", "./imgcapitaine/Arlong.png",
    "./imgcapitaine/Baggy.png", "./imgcapitaine/Bartolomeo.png", "./imgcapitaine/BigMom.png", "./imgcapitaine/Blackbeard.png","./imgcapitaine/Bonney.png","./imgcapitaine/Borsalino.png","./imgcapitaine/Bullet.png",
    "./imgcapitaine/Capone.png","./imgcapitaine/Cavendish.png","./imgcapitaine/Crocodile.png",
    "./imgcapitaine/Demaro.png","./imgcapitaine/Dofla.png","./imgcapitaine/Drake.png",
    "./imgcapitaine/Enel.png",
    "./imgcapitaine/Fisher.png","./imgcapitaine/Foxy.png",
    "./imgcapitaine/Garp.png",
    "./imgcapitaine/Hancock.png","./imgcapitaine/Hawkins.png","./imgcapitaine/Hina.png","./imgcapitaine/Hody.png",
    "./imgcapitaine/Isho.png",
    "./imgcapitaine/Kaido.png","./imgcapitaine/Kuro.png","./imgcapitaine/Kuzan.png",
    "./imgcapitaine/Law.png","./imgcapitaine/Lucci.png","./imgcapitaine/Luffy.png",
    "./imgcapitaine/Mihawk.png","./imgcapitaine/Moria.png",
    "./imgcapitaine/Roger.png",
    "./imgcapitaine/Sakazuki.png","./imgcapitaine/Sengoku.png","./imgcapitaine/Shanks.png","./imgcapitaine/Smoker.png","./imgcapitaine/Spandam.png",
    "./imgcapitaine/Urouge.png",
    "./imgcapitaine/Whitebeard.png",
    "./imgcapitaine/Yorki.png",
    "./imgcapitaine/Zephyr.png",
)

const nav = Array(
    "./imgnavigators/Ace.png",
    "./imgnavigators/Bepo.png",
    "./imgnavigators/Galdino.png",
    "./imgnavigators/Kobby.png",
    "./imgnavigators/Lafitte.png",
    "./imgnavigators/Marco.png","./imgnavigators/Mihawk.png","./imgnavigators/Mr9.png",
    "./imgnavigators/Nami.png","./imgnavigators/Nekomamushi.png",
    "./imgnavigators/Sabo.png",
    "./imgnavigators/Perona.png",
)

const charp = Array(
    "./imgcharpentier/Enel.png",
    "./imgcharpentier/Fisher.png","./imgcharpentier/Franky.png",
    "./imgcharpentier/Icebarg.png",
    "./imgcharpentier/Kaku.png",
    "./imgcharpentier/Lucci.png","./imgcharpentier/Lulu.png",
    "./imgcharpentier/Pauly.png",
    "./imgcharpentier/Rayleigh.png",
    "./imgcharpentier/Tilestone.png","./imgcharpentier/Tom.png",
    "./imgcharpentier/Usoppp.png", 
)

const mede = Array(
    "./imgmedecin/Aladin.png",
    "./imgmedecin/Caesar.png","./imgmedecin/Chopper.png","./imgmedecin/Crocus.png",
    "./imgmedecin/DocQ.png",
    "./imgmedecin/Foxyette.png",
    "./imgmedecin/Hiluluk.png",
    "./imgmedecin/Hogback.png",
    "./imgmedecin/Indigo.png",
    "./imgmedecin/Kaya.png","./imgmedecin/Kureha.png",
    "./imgmedecin/Law.png",
    "./imgmedecin/Mansherry.png","./imgmedecin/Miagi.png",
    "./imgmedecin/Queen.png",
    "./imgmedecin/Trisan.png",
)

const sabre = Array(
    "./imgepeistes/Amande.png",
    "./imgepeistes/Brook.png",
    "./imgepeistes/Cracker.png",
    "./imgepeistes/DazBones.png",
    "./imgepeistes/Denjiro.png",
    "./imgepeistes/Diamante.png",
    "./imgepeistes/Dorry.png",
    "./imgepeistes/Haruta.png",
    "./imgepeistes/Helmep.png",
    "./imgepeistes/Hyozo.png",
    "./imgepeistes/Johnny.png",
    "./imgepeistes/Kaku.png",
    "./imgepeistes/Kawamatsu.png",
    "./imgepeistes/Kikoolol.png",    
    "./imgepeistes/King.png",
    "./imgepeistes/Killer.png",
    "./imgepeistes/Kinemon.png",
    "./imgepeistes/Koshiro.png",
    "./imgepeistes/Kyros.png",
    "./imgepeistes/Maynard.png",
    "./imgepeistes/Momonga.png",
    "./imgepeistes/Octo.png",
    "./imgepeistes/Oden.png",
    "./imgepeistes/Ohm.png",
    "./imgepeistes/Onigumo.png",
    "./imgepeistes/Pedro.png",
    "./imgepeistes/Rayleigh.png",
    "./imgepeistes/Rebecca.png",
    "./imgepeistes/Ryuma.png",
    "./imgepeistes/Saga.png",
    "./imgepeistes/Sasaki.png",
    "./imgepeistes/Shilliew.png",
    "./imgepeistes/Sicilion.png",
    "./imgepeistes/Smoothie.png",
    "./imgepeistes/Squardo.png",
    "./imgepeistes/Stainless.png",
    "./imgepeistes/Stawberry.png",
    "./imgepeistes/Suleiman.png",
    "./imgepeistes/Tamago.png",
    "./imgepeistes/Tashigi.png",
    "./imgepeistes/Tatch.png",
    "./imgepeistes/TBone.png",
    "./imgepeistes/Vista.png",
    "./imgepeistes/Wanda.png",
    "./imgepeistes/Yosaku.png",
    "./imgepeistes/Zoro.png",
)

const mem = Array(
    "./imgcombattant/Alvida.png",
    "./imgcombattant/Baccarat.png",
    "./imgcombattant/Barto.png",
    "./imgcombattant/Bellamy.png",
    "./imgcombattant/BlueGilly.png",
    "./imgcombattant/Blueno.png",
    "./imgcombattant/Bonclay.png",
    "./imgcombattant/Broggy.png",
    "./imgcombattant/Blueno.png",
    "./imgcombattant/Bullet.png",
    "./imgcombattant/Burgess.png",
    "./imgcombattant/Calgara.png",
    "./imgcombattant/Carrot.png",
    "./imgcombattant/Chinjao.png",
    "./imgcombattant/Dalmatian.png",
    "./imgcombattant/Dice.png",
    "./imgcombattant/Elizabello.png",
    "./imgcombattant/Franky.png",
    "./imgcombattant/Fukuro.png",
    "./imgcombattant/Fullbody.png",
    "./imgcombattant/Garp.png",
    "./imgcombattant/Gedatsu.png",
    "./imgcombattant/Hajrudin.png",
    "./imgcombattant/Hannyabal.png",
    "./imgcombattant/Hyogoro.png",
    "./imgcombattant/Ichiji.png",
    "./imgcombattant/Ideo.png",
    "./imgcombattant/Ivankov.png",
    "./imgcombattant/Jabra.png",
    "./imgcombattant/JeanBart.png",
    "./imgcombattant/Judge.png",
    "./imgcombattant/Kalifa.png",
    "./imgcombattant/Kanjuro.png",
    "./imgcombattant/Katakuri.png",
    "./imgcombattant/Koala.png",
    "./imgcombattant/Kumadori.png",
    "./imgcombattant/LaoG.png",
    "./imgcombattant/Leo.png",
    "./imgcombattant/Marimo.png",
    "./imgcombattant/MissMonday.png",
    "./imgcombattant/Niji.png",
    "./imgcombattant/Oven.png",
    "./imgcombattant/Pekoms.png",
    "./imgcombattant/Pizarro.png",
    "./imgcombattant/Raizo.png",
    "./imgcombattant/Reiju.png",
    "./imgcombattant/Robin.png",
    "./imgcombattant/RobLucci.png",
    "./imgcombattant/Sabo.png",
    "./imgcombattant/Sadi.png",
    "./imgcombattant/Sai.png",
    "./imgcombattant/Sanji.png",
    "./imgcombattant/Sengoku.png",
    "./imgcombattant/SenorPink.png",
    "./imgcombattant/Sentomaru.png",
    "./imgcombattant/Shinobu.png",
    "./imgcombattant/Smoker.png",
    "./imgcombattant/Stussy.png",
    "./imgcombattant/Tesoro.png",
    "./imgcombattant/Urouge.png",
    "./imgcombattant/Wanze.png",
    "./imgcombattant/Whowho.png",
    "./imgcombattant/Yamato.png",
    "./imgcombattant/Yonji.png",
    "./imgcombattant/Zeff.png",
)

const tir = Array(
    "./imgsniper/Absalom.png",
    "./imgsniper/Ain.png",
    "./imgsniper/Baby5.png",
    "./imgsniper/Braham.png",
    "./imgsniper/Capone.png",
    "./imgsniper/Curiel.png",
    "./imgsniper/DuoBW.png",
    "./imgsniper/Gaimon.png",
    "./imgsniper/Gem.png",
    "./imgsniper/Genbo.png",
    "./imgsniper/Gladius.png",
    "./imgsniper/Gotti.png",
    "./imgsniper/Igaram.png",
    "./imgsniper/Laki.png",
    "./imgsniper/Lindbergh.png",
    "./imgsniper/Margaret.png",
    "./imgsniper/MontDor.png",
    "./imgsniper/Perospero.png",
    "./imgsniper/Queen.png",
    "./imgsniper/Smack.png",
    "./imgsniper/uHaNadt.png",
    "./imgsniper/Usopp.png",
    "./imgsniper/VanAugur.png",
    "./imgsniper/Vanderdecken.png",
    "./imgsniper/Vasco.png",
    "./imgsniper/Vito.png",
    "./imgsniper/Wyper.png",
    "./imgsniper/Yasopp.png",
)

const wom = Array(
    "./imgwaifu/Ain.png",
    "./imgwaifu/Alvida.png",
    "./imgwaifu/Amande.png",
    "./imgwaifu/Ann.png",
    "./imgwaifu/Aphelandra.png",
    "./imgwaifu/Baccarat.png",
    "./imgwaifu/Baby5.png",
    "./imgwaifu/Bello.png",
    "./imgwaifu/BeeAnne.png",
    "./imgwaifu/BlackMaria.png",
    "./imgwaifu/Bonney.png",
    "./imgwaifu/Brule.png",
    "./imgwaifu/Carina.png",
    "./imgwaifu/Caroline.png",
    "./imgwaifu/Carrot.png",
    "./imgwaifu/Chiffon.png",
    "./imgwaifu/Cindy.png",
    "./imgwaifu/Compote.png",
    "./imgwaifu/Conis.png",
    "./imgwaifu/Creme.png",
    "./imgwaifu/Devon.png",
    "./imgwaifu/Domino.png",
    "./imgwaifu/Flampe.png",
    "./imgwaifu/Galette.png",
    "./imgwaifu/Hancock.png",
    "./imgwaifu/Hina.png",
    "./imgwaifu/Hiyori.png",
    "./imgwaifu/Jora.png",
    "./imgwaifu/Kalifa.png",
    "./imgwaifu/Kaya.png",
    "./imgwaifu/Keimi.png",
    "./imgwaifu/Kiku.png",
    "./imgwaifu/Kiwi.png",
    "./imgwaifu/Koala.png",
    "./imgwaifu/Kuina.png",
    "./imgwaifu/Kuraha.png",
    "./imgwaifu/Laura.png",
    "./imgwaifu/Makino.png",
    "./imgwaifu/Margaret.png",
    "./imgwaifu/Marigold.png",
    "./imgwaifu/MILF.png",
    "./imgwaifu/Milky.png",
    "./imgwaifu/MissChristmas.png",
    "./imgwaifu/MissDD.png",
    "./imgwaifu/MissGolden.png",
    "./imgwaifu/MissValentine.png",
    "./imgwaifu/Monday.png",
    "./imgwaifu/Monet.png",
    "./imgwaifu/Mozu.png",
    "./imgwaifu/Nightin.png",
    "./imgwaifu/Nyon.png",
    "./imgwaifu/PerfectMILF.png",
    "./imgwaifu/Perona.png",
    "./imgwaifu/Poire.png",
    "./imgwaifu/Porche.png",
    "./imgwaifu/Praline.png",
    "./imgwaifu/Pudding.png",
    "./imgwaifu/Rebecca.png",
    "./imgwaifu/Robin.png",
    "./imgwaifu/Sadi.png",
    "./imgwaifu/Sandersonia.png",
    "./imgwaifu/Scarlett.png",
    "./imgwaifu/Sharlia.png",
    "./imgwaifu/Sharly.png",
    "./imgwaifu/Shirahoshi.png",
    "./imgwaifu/Sora.png",
    "./imgwaifu/StepSisYouAreStuck.png",
    "./imgwaifu/Stussy.png",
    "./imgwaifu/Sugar.png",
    "./imgwaifu/SweetPea.png",
    "./imgwaifu/Tama.png",
    "./imgwaifu/Tashigi.png",
    "./imgwaifu/Tsuru.png",
    "./imgwaifu/Tsurujo.png",
    "./imgwaifu/Ulti.png",
    "./imgwaifu/Viola.png",
    "./imgwaifu/Vivi.png",
    "./imgwaifu/Wanda.png",
    "./imgwaifu/Whitey.png",
    "./imgwaifu/Wicca.png",
    "./imgwaifu/Yamato.png",
)

const minky = Array(
    "./imgmink/Bepo.png",
    "./imgmink/Black.png",
    "./imgmink/Carrot.png",
    "./imgmink/Inuarashi.png",
    "./imgmink/Kindberg.png",
    "./imgmink/Milky.png",
    "./imgmink/Miyagi.png",
    "./imgmink/Nekomamushi.png",
    "./imgmink/Pedro.png",
    "./imgmink/Pekoms.png",
    "./imgmink/Rody.png",
    "./imgmink/Sicilion.png",
    "./imgmink/Trisan.png",
    "./imgmink/Wanda.png"
)

const fishy = Array(
    "./imgfishmen/Aladin.png",
    "./imgfishmen/Appug.png",
    "./imgfishmen/Arlong.png",
    "./imgfishmen/BigPan.png",
    "./imgfishmen/Capote.png",
    "./imgfishmen/Daruma.png",
    "./imgfishmen/Dellinger.png",
    "./imgfishmen/Dosun.png",
    "./imgfishmen/FisherTiger.png",
    "./imgfishmen/Fukaboshi.png",
    "./imgfishmen/Gyaro.png",
    "./imgfishmen/Hack.png",
    "./imgfishmen/Hammond.png",
    "./imgfishmen/Hody.png",
    "./imgfishmen/Hyozo.png",
    "./imgfishmen/Ikaros.png",
    "./imgfishmen/Jack.png",
    "./imgfishmen/Jinbei.png",
    "./imgfishmen/Kawamatsu.png",
    "./imgfishmen/Keimi.png",
    "./imgfishmen/Kurobi.png",
    "./imgfishmen/Macro.png",
    "./imgfishmen/Mamboshi.png",
    "./imgfishmen/Namur.png",
    "./imgfishmen/Neptune.png",
    "./imgfishmen/Octo.png",
    "./imgfishmen/Praline.png",
    "./imgfishmen/Ryuboshi.png",
    "./imgfishmen/Sebastien.png",
    "./imgfishmen/Shirahoshi.png",
    "./imgfishmen/Shyarly.png",
    "./imgfishmen/Tansui.png",
    "./imgfishmen/Tom.png",
    "./imgfishmen/Vanderdecken.png",
    "./imgfishmen/Wadatsumi.png",
    "./imgfishmen/Zeo.png",
)

function capitaines() {
    const randomCap = Math.floor(Math.random() * cap.length);
    document.getElementById("capitaine").src = cap[randomCap];
}

function navigateurs() {
    const randomNav = Math.floor(Math.random() * nav.length);
    document.getElementById("navigateur").src = nav[randomNav];
}

function charpentiers() {
    const randomCharp = Math.floor(Math.random() * charp.length);
    document.getElementById("charpentier").src = charp[randomCharp];
}

function medecins() {
    const randomMede = Math.floor(Math.random() * mede.length);
    document.getElementById("medecin").src = mede[randomMede];
}

function sabreurs() {
    const randomSabre = Math.floor(Math.random() * sabre.length);
    document.getElementById("sabreur").src = sabre[randomSabre];
}

function membres() {
    const randomMembres = Math.floor(Math.random() * mem.length);
    document.getElementById("membreun").src = mem[randomMembres];
}

function membress() {
    const randomMembres = Math.floor(Math.random() * mem.length);
    document.getElementById("membredeux").src = mem[randomMembres];
}

function tireurs() {
    const randomTir = Math.floor(Math.random() * tir.length);
    document.getElementById("tireur").src = tir[randomTir];
}

function womans() {
    const randomWom = Math.floor(Math.random() * wom.length);
    document.getElementById("womanun").src = wom[randomWom];
}

function womanss() {
    const randomWom = Math.floor(Math.random() * wom.length);
    document.getElementById("womandeux").src = wom[randomWom];
}

function minkss() {
    const randomMink = Math.floor(Math.random() * minky.length);
    document.getElementById("mink").src = minky[randomMink];
}

function fishmenss() {
    const randomFish = Math.floor(Math.random() * fishy.length);
    document.getElementById("fishmen").src = fishy[randomFish];
}