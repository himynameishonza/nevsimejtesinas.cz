import "../styles/styles.scss";
import Head from "../components/Head";
import Header from "../components/Header";
import Disease from "../components/Disease";
import Link from "next/link";
import SmartPage from "./SmartPage";

export default class extends SmartPage {
  render = () => {
    const { myUrl } = this.props;
    return (
      <div>
        <Head
          title="Kala Azar - Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"
          description="Říkají mi „černá horečka“, což v hindštině znamená ono tajemné kala azar. Ale pozor, geograficky nepatřím mezi vybíravé. Najdete mne ve více než sedmdesáti zemích, nejraději mám Indii, Bangladéš, Etiopii či Brazílii. Ročně mí služebníci – komárci – nakazí statisíce lidí leishmaniózou."
          ogTitle="Kala Azar - Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"
          ogDescription="Říkají mi „černá horečka“, což v hindštině znamená ono tajemné kala azar. Ale pozor, geograficky nepatřím mezi vybíravé. Najdete mne ve více než sedmdesáti zemích, nejraději mám Indii, Bangladéš, Etiopii či Brazílii. Ročně mí služebníci – komárci – nakazí statisíce lidí leishmaniózou."
          ogImage={myUrl + "/static/img/og/kala-azar.jpg?v=1"}
          twitterCard="summary"
          twitterSite="@msf_czech"
          twitterCreator="@msf_czech"
        />
        <Header />
        <Disease
          name="kala-azar"
          title="Kala Azar"
          description="Říkají mi „černá horečka“, což v hindštině znamená ono tajemné kala azar. Ale pozor, geograficky nepatřím mezi vybíravé. Najdete mne ve více než sedmdesáti zemích, nejraději mám Indii, Bangladéš, Etiopii či Brazílii. Ročně mí služebníci – komárci – nakazí statisíce lidí leishmaniózou. A pokud přeroste do vážného stádia, přicházím já. Poznáte mne podle vředů v místě štípnutí, později napadám imunitní systém. Miluju útroby, hlavně játra a slezinu. Když se krmím, mí hostitelé hubnou, mívají anémii. Nejčastěji mě pokoušejí vyhnat léčbou, jíž kdosi vyvinul v 30. letech 20. století. Je dlouhá, bolestivá, toxická a drahá. Některým hostitelům se nedostane ani jí. Bez léčby většina lidí umírá. No, musím se pochlubit: po malárii jsem nejsmrtelnější parazitickou chorobou, ročně zabiju tisíce lidí."
          singlePage="is-single-page"
          direction="ltr"
        />
      </div>
    );
  };
}
