import "../styles/styles.scss";
import Head from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Disease from "../components/Disease";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Particles from "react-particles-js";
import { FullPage, Slide } from "react-full-page";

export default class FullPageExample extends React.Component {
  render() {
    return (
      <FullPage duration="1000" controls>
        <Head />
        <Preloader />
        <Header />
        <Slide>
          <Particles
            className="particles"
            params={{
              particles: {
                number: {
                  value: 200,
                  density: {
                    enable: true,
                    value_area: 631.3181133058181
                  }
                },
                color: {
                  value: "#000000"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  }
                },
                opacity: {
                  value: 0.07891476416322726,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 4.872463273808071,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 1.603412060865523,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              }
            }}
          />
          <Hero />
        </Slide>
        <Slide>
          <Intro />
        </Slide>
        <Slide>
          <Disease
            name="kala-azar"
            type="left"
            title="Kala Azar"
            description="Říkají mi „černá horečka“, což v hindštině znamená ono tajemné kala azar. Ale pozor, geograficky nepatřím mezi vybíravé. Najdete mne ve více než sedmdesáti zemích, nejraději mám Indii, Bangladéš, Etiopii či Brazílii. Ročně mí služebníci – muchničky – nakazí statisíce lidí leishmaniózou. A pokud přeroste do vážného stádia, přicházím já. Poznáte mne podle vředů v místě štípnutí, později napadám imunitní systém. Miluju útroby, hlavně játra a slezinu. Když se krmím, mí hostitelé hubnou, mívají anémii. Nejčastěji mě pokoušejí vyhnat léčbou, jíž kdosi vyvinul v 30. letech 20. století. Je dlouhá, bolestivá, toxická a drahá. Některým hostitelům se nedostane ani jí. Bez léčby většina lidí umírá. No, musím se pochlubit: po malárii jsem nejsmrtelnější parazitickou chorobou, ročně zabiju tisíce lidí."
            onpage="true"
          />
        </Slide>
        <Slide>
          <Disease
            name="chogasova-choroba"
            type="right"
            title="Chogasova choroba"
            description="Můj čas přichází hlavně v noci, kdy z blátěných stěn a slaměných střech domů vylézají krev sající „líbající brouci“. Jejich polibek je často mou jízdenkou do lidských těl. Ačkoliv se mi do nich daří pronikat třeba i při transfuzi nebo kojení. Mé oběti o mně nemusí vědět ani celá léta, odhalit mne nejde jen tak. Nejdříve se vyznačuji mírností, projevuji se jako jiné nemoci, třeba horečkami, únavou, bolestmi, zvracením. Pokud se rozhodnu zabydlet natrvalo, usídlím se v nervovém systému, trávicím traktu a navždy poškozuji srdce… Porazit mě může jen málo léků a ještě je na mě musíte vytáhnout brzy. Hnízdím v nejméně šesti milionech lidí, ročně zabiju na osm tisíc z nich. Útočím takřka výlučně v Latinské Americe, ačkoliv mí hostitelé mne mohou převézt kamkoliv. Není to báječné?"
            onpage="true"
          />
        </Slide>
        <Slide>
          <Disease
            name="hadi-ustknuti"
            type="left"
            title="Hadí uštknutí"
            description="Až donedávna jsem bylo tak opomíjené, že jsem nebylo ani na seznamu opomíjených nemocí Světové zdravotnické organizace (WHO). Mí vyslanci – hadi – přitom uštknou pět milionů lidí ročně. Podlehne mi přes sto tisíc z nich, dalších čtyři sta tisíc zanechám zmrzačených (někdy jim musí amputovat třeba nohu). Jsem skoro všude, nejvíce si libuji na odlehlém venkově, kde není dost lékařů, a nemají tam peníze na drahá séra. Třeba v Africe potřebují sérum účinné na vícero druhů jedů. Jedno měli, účinkovalo proti mým deseti obdobám! Ale farmaceutická firma ho přestala vyrábět (hádejte – nebylo to lukrativní). Teď se tam trápí se séry, jež zabírají proti menšímu počtu mých obdob. Mé oběti obvykle neví, který můj hadí delegát je navštívil, a tak si musí zdravotníci pořádně lámat hlavu, jak na mě. Loni jsem však lehce znervóznělo, WHO mě zařadilo na ten svůj seznam. Ale uvidíme…"
            onpage="true"
          />
        </Slide>
        <Slide>
          <Disease
            name="tuberkuloza"
            type="right"
            title="Tuberkulóza"
            description="Oficiálně možná nepatřím do spolku opomíjených nemocí, ale místo zde mi upřít nelze. Svět na mě skoro zapomněl, už ho neděsím jako dřív. Myslí si o mně, že jsem chorobou minulosti. Víc by se však mýlit nemohli. Jsem nejsmrtelnější infekcí na světě. V počtu obětí předčím HIV/AIDS. Ročně rozevřu náruč deseti milionům lidí, skoro dva miliony pošlu na onen svět. Daří se mi v Indii, Číně, v Nigérii či v postsovětských zemích. Většinou jdu po plících, ale nepohrdnu ani kostmi a nervovým systémem. Zvlášť hrozivá jsem ve svých rezistentních formách. Těm se říká „ebola s křídly“, jsme totiž obě zhruba stejně smrtelné, ale mně stačí k šíření vzduch. Když už takto zesílím, zničit mě trvá dlouho a mí hostitelé trpí. Před pár lety na mou rezistenci vyrukovali se dvěma novými léky, ze kterých mám docela nahnáno. Ale jsou drahé a dostalo je zatím minimum lidí. Tak doufám, že na ně bude dál padat prach v regálech apatyk."
            onpage="true"
          />
        </Slide>
        <Slide>
          <Disease
            name="spava-nemoc"
            type="left"
            title="Spavá nemoc"
            description="Můj rajón je zejména v subsaharské Africe, hlavně D. R. Kongo je mé oblíbené. Do lidí pronikám díky mouchám tse-tse. Zprvu se mne lze poměrně snadno zbavit, ale odhalit mne není jednoduché. Jsem nenápadná a projevuji se podobně jako třeba malárie – horečkou, bolestí hlavy, slabostí, či bolením kloubů. Aby měli lékaři jistotu, musí mým hostitelům provést bolestivou lumbální punkci a vyšetřit mozkomíšní mok. Později jsem to už celá já, napadám centrální nervový systém a mé oběti nemohou v noci spát, spánek je přemáhá ve dne. Ale to už se zase hůře léčím. A pokud mne nechají být, zabíjím. Musím však přiznat: slábnu. Lidé si na mne dávají větší pozor, vniknu do několika tisíc z nich ročně. Ba co víc, před lety na mne vymysleli účinnější léčbu. Naštěstí je stále komplikovaná. Jen, aby se jim nepovedlo přijít ještě na to, jak mne lépe odhalit. To by snad byl můj konec."
            onpage="true"
          />
        </Slide>

        <Slide>
          <About />
        </Slide>

        <Slide>
          <FAQ />
        </Slide>
      </FullPage>
    );
  }
}
