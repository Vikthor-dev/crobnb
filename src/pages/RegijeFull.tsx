import "../css/RegijeFull.css";
import Footer from "../components/Footer";
import ArrowIcon from "../assets/arrow.svg";

function RegijeFull() {
  return (
    <>
      <div className="regije-cro">
        <p className="regijeFull-title">Regije u Hrvatskoj</p>
        <div className="regije-list">
          <div className="leftcro">
            <img
              className="regijeFull-img"
              src="https://shorturl.at/jalYO"
              alt="Istočna Hrvatska"
            />

            <div className="content">
              <p className="content-title">Istočna Hrvatska</p>
              <p className="content-text">
                Istočna Hrvatska regija je bogata prirodnim ljepotama,
                povijesnim spomenicima i kulturnim naslijeđem. Regija je poznata
                po proizvodnji vina, te uz vinograde uz rijeku Dunav, Istočna
                Hrvatska je poznata i po uzgoju voća, povrća, žitarica i
                stočarstvu. Poznata je i po svojim tradicionalnim
                manifestacijama, poput Vinkovačkih jeseni i Brodskog kola, koji
                okupljaju brojne posjetitelje iz Hrvatske i inozemstva.
              </p>
              <div className="content-link">
                <p>Vidi detalje</p>
                <img
                  className="content-arrow-icon-link"
                  src={ArrowIcon}
                  style={{ width: 24, height: 24 }}
                  alt="Arrow Icon"
                />
              </div>
            </div>
          </div>

          <div className="rightcro">
            <div className="content">
              <p className="content-title">Središnja Hrvatska</p>
              <p className="content-text">
                Središnja Hrvatska obiluje prirodnim ljepotama, regija je
                poznata po svojim termalnim izvorima i izvrsnoj ponudi
                zdravstvenog i wellness turizma. Ku lturno nasljeđe Središnje
                Hrvatske obuhvaća mnoge znamenitosti, od povijesnih dvoraca i
                crkava, do muzeja i galerija. Regija je također poznata po
                tradicionalnim običajima, poput fašnika u Samoboru i Krapini, te
                brojnim drugim manifestacijama.
              </p>
              <div className="content-link">
                <p>Vidi detalje</p>
                <img
                  className="content-arrow-icon-link"
                  src={ArrowIcon}
                  style={{ width: 24, height: 24 }}
                  alt="Arrow Icon"
                />
              </div>
            </div>
            <img
              className="regijeFull-img"
              src="https://s3-alpha-sig.figma.com/img/ae0b/1321/acceaa962e15b3f0da1b56ed2cfc228a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Be~RamIELUVeIKD7LUWH04JEFQcimt0Qm51ol-Na~Pn~4CZoQcUxNgrg7d-KSNa-O3ium4OJ4Rnotsvq3rxiwaP4Sbntz0tiQ9tmdwQZ~yBmufOK6kvpjjJW2rCL7WsQQbHxSDaqjRVJINRxL5gn7c4GmoCWroCEtEfuB3VtvzkrBxjrfRb43Qe7ZwjKVCEJ5PYeDQ5ce7c5~rzX4o5C4Czw6uc3rh~vJ0WZisHPljyIImxMv2JGYcL1FNlNiIcdXQ5QX2jQcH4Nz6g6PH7cw1KJB7FXZ2Rm~y3wowcLi--oQBKefp83dXiRkfNSyfD3RK0-EuV59VYzsicz3JfAlg__"
              alt="Središnja Hrvatska"
            />
          </div>

          <div className="rightcro-mobile">
            <img
              className="regijeFull-img"
              src="https://s3-alpha-sig.figma.com/img/ae0b/1321/acceaa962e15b3f0da1b56ed2cfc228a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Be~RamIELUVeIKD7LUWH04JEFQcimt0Qm51ol-Na~Pn~4CZoQcUxNgrg7d-KSNa-O3ium4OJ4Rnotsvq3rxiwaP4Sbntz0tiQ9tmdwQZ~yBmufOK6kvpjjJW2rCL7WsQQbHxSDaqjRVJINRxL5gn7c4GmoCWroCEtEfuB3VtvzkrBxjrfRb43Qe7ZwjKVCEJ5PYeDQ5ce7c5~rzX4o5C4Czw6uc3rh~vJ0WZisHPljyIImxMv2JGYcL1FNlNiIcdXQ5QX2jQcH4Nz6g6PH7cw1KJB7FXZ2Rm~y3wowcLi--oQBKefp83dXiRkfNSyfD3RK0-EuV59VYzsicz3JfAlg__"
              alt="Središnja Hrvatska"
            />
            <div className="content">
              <p className="content-title">Središnja Hrvatska</p>
              <p className="content-text">
                Središnja Hrvatska obiluje prirodnim ljepotama, regija je
                poznata po svojim termalnim izvorima i izvrsnoj ponudi
                zdravstvenog i wellness turizma. Ku lturno nasljeđe Središnje
                Hrvatske obuhvaća mnoge znamenitosti, od povijesnih dvoraca i
                crkava, do muzeja i galerija. Regija je također poznata po
                tradicionalnim običajima, poput fašnika u Samoboru i Krapini, te
                brojnim drugim manifestacijama.
              </p>
              <div className="content-link">
                <p>Vidi detalje</p>
                <img
                  className="content-arrow-icon-link"
                  src={ArrowIcon}
                  style={{ width: 24, height: 24 }}
                  alt="Arrow Icon"
                />
              </div>
            </div>
          </div>

          <div className="leftcro">
            <img
              className="regijeFull-img"
              src="https://s3-alpha-sig.figma.com/img/b691/0b95/da1d881a34279a8856381ce178ff9bee?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wn-3yZZ47Uw48Ah8wC8NM9JjXNpLM42W3~khaBaksxYvBi87LYBo-WlB-Hbaia9uZjp2E-2sunbLYhFN4Upt-KVdcDmVpwWyihdw2N2szDBzyn00rnlNkWM5J~zZL5ECO-7n6GAm~G8jscVmcH6iuvBcegYPIHrWcTvv31O6vkKB9UClT3oK39PIZyHu0yzP3AmHK~yji-1iT78ac5OruF02D2-R7Z1xx1eMrUiKwczeaiCTfBIygyh5q~iHeaJF9Mod43QznfYnMZ8TrOXjIUPWV0xH00jc6o0uWHKhef~FEHPPIQWqOeG1jMzKvbvmK~WApmxP~edlsX~JDgSF1A__"
              alt="Gorska Hrvatska"
            />

            <div className="content">
              <p className="content-title">Gorska Hrvatska</p>
              <p className="content-text">
                Gorska Hrvatska je dom brojnih planina, poput Nacionalnog parka
                Risnjak i Nacionalnog parka Sjeverni Velebit, koji su idealni za
                planinarenje, biciklizam i skijanje. Regija također obiluje
                šumama, rijekama i jezerima, poput Plitvičkih jezera, koja su
                pod zaštitom UNESCO-a. Kulturno nasljeđe Gorske Hrvatske
                uključuje mnoge znamenitosti, od povijesnih dvoraca i crkava do
                muzeja i galerija.
              </p>
              <div className="content-link">
                <p>Vidi detalje</p>
                <img
                  className="content-arrow-icon-link"
                  src={ArrowIcon}
                  style={{ width: 24, height: 24 }}
                  alt="Arrow Icon"
                />
              </div>
            </div>
          </div>

          <div className="rightcro">
            <div className="content">
              <p className="content-title">Istra i Kvarner</p>
              <p className="content-text">
                Istra i Kvarner su dvije regije na sjevernom Jadranu u
                Hrvatskoj, koje su poznate po svojim prirodnim ljepotama,
                povijesnom i kulturnom nasljeđu, te gastronomskoj ponudi. Regija
                je poznata po svojim plažama,čistom moru. Regija nudi mnoge
                mogućnosti za odmor, od kupanja i sunčanja na plažama do
                aktivnosti na otvorenom poput planinarenja i biciklizma.
              </p>
              <div className="content-link">
                <p>Vidi detalje</p>
                <img
                  className="content-arrow-icon-link"
                  src={ArrowIcon}
                  style={{ width: 24, height: 24 }}
                  alt="Arrow Icon"
                />
              </div>
            </div>
            <img
              className="regijeFull-img"
              src="https://s3-alpha-sig.figma.com/img/6de4/3552/0f5ab7538835b90820c129dc156060b2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SIBM6ZmTYm8wN9gc2956~ddg7Fb0A0IK5q0yEhSHgaWuFRGalfkIeZgQGiQNUNu0cOeQWZkTAoviyJRikUNlUndly8J2sZKYP3Sny4qX8on691v3~sr-nUmSSllYtS8TJHMnnFf73yyYQ65aLZNwfJnTpjl266iGqpqhFdMKvINwIBC40FrqpqCDOGGg12VX6egWKvi48q1PrqYjjSBdjyeEebW4iuXkgpuG8ulrK21Ug0VlvTnHHV4QvuzGlXlgT0gwjRktwzn1zUXs7uwEZFrWP11xA~znRBBmZS320kWlAtuSNrVF9PJgfGkxXMpphZAvrFbpD23f~zcXNuJ3vQ__"
              alt="Istra i Kvarner"
            />
          </div>

          <div className="rightcro-mobile">
            <img
              className="regijeFull-img"
              src="https://s3-alpha-sig.figma.com/img/6de4/3552/0f5ab7538835b90820c129dc156060b2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SIBM6ZmTYm8wN9gc2956~ddg7Fb0A0IK5q0yEhSHgaWuFRGalfkIeZgQGiQNUNu0cOeQWZkTAoviyJRikUNlUndly8J2sZKYP3Sny4qX8on691v3~sr-nUmSSllYtS8TJHMnnFf73yyYQ65aLZNwfJnTpjl266iGqpqhFdMKvINwIBC40FrqpqCDOGGg12VX6egWKvi48q1PrqYjjSBdjyeEebW4iuXkgpuG8ulrK21Ug0VlvTnHHV4QvuzGlXlgT0gwjRktwzn1zUXs7uwEZFrWP11xA~znRBBmZS320kWlAtuSNrVF9PJgfGkxXMpphZAvrFbpD23f~zcXNuJ3vQ__"
              alt="Istra i Kvarner"
            />
            <div className="content">
              <p className="content-title">Istra i Kvarner</p>
              <p className="content-text">
                Istra i Kvarner su dvije regije na sjevernom Jadranu u
                Hrvatskoj, koje su poznate po svojim prirodnim ljepotama,
                povijesnom i kulturnom nasljeđu, te gastronomskoj ponudi. Regija
                je poznata po svojim plažama,čistom moru. Regija nudi mnoge
                mogućnosti za odmor, od kupanja i sunčanja na plažama do
                aktivnosti na otvorenom poput planinarenja i biciklizma.
              </p>
              <div className="content-link">
                <p>Vidi detalje</p>
                <img
                  className="content-arrow-icon-link"
                  src={ArrowIcon}
                  style={{ width: 24, height: 24 }}
                  alt="Arrow Icon"
                />
              </div>
            </div>
          </div>

          <div className="leftcro">
            <img
              className="regijeFull-img"
              src="https://s3-alpha-sig.figma.com/img/6bc2/02c7/7613a3c1130eab453eb63886c4beb80b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gSAjG3ReJAHPftsDKoS4CsDxS4efkO-yHbOpigC9VIzDTmYdU2xR2TYy6f7tyvA-QwO5g87s~jY-IaOkjpQSLeeIcoBq2t9ShZY77PqlFLPFZbRLPYFerafH5VL5JSHOQGPvlMqtMGpavX~WORI3LeLtjYloVvg5VnwDLijwSOuMgFSYtrtHi79pqWh3BJyfH2cdG9KlxNGHgY5DffXkogtxyPJE8g-9yIC~PVx2wGkPCBsqQIAxLBxe4TTR7s15d9yOkQfJx1IjAIsAckdJZVqvXZjHq~96pjh33pCRjYV69bga~rHBjRo2o5olnDCYqIbk7s2RwMr6BW84ADLPmw__"
              alt="Sjeverna Dalmacija"
            />

            <div className="content">
              <p className="content-title">Sjeverna Dalmacija</p>
              <p className="content-text">
                Sjeverna Dalmacija je poznata po prekrasnim plažama i kristalno
                čistom moru, kao i brojnim turističkim atrakcijama, poput
                povijesnih gradova Zadra, Šibenika i Trogira, koji su pod
                zaštitom UNESCO-a. Uz to, tu su i brojne povijesne crkve,
                katedrale, tvrđave i druge građevine koje svjedoče o bogatoj
                povijesti regije.
              </p>
              <div className="content-link">
                <p>Vidi detalje</p>
                <img
                  className="content-arrow-icon-link"
                  src={ArrowIcon}
                  style={{ width: 24, height: 24 }}
                  alt="Arrow Icon"
                />
              </div>
            </div>
          </div>

          <div className="rightcro">
            <div className="content">
              <p className="content-title">Središnja Dalmacija</p>
              <p className="content-text">
                Središnja Dalmacija je regija u Hrvatskoj koja se proteže od
                Splita do Makarske i uključuje neke od najpoznatijih turističkih
                destinacija na Jadranu. Ova regija privlači posjetitelje iz
                cijelog svijeta zbog svoje prirodne ljepote, bogate kulturne
                baštine i raznih aktivnosti koje nudi. Poznata po svojoj bogatoj
                kulturnoj baštini te zaštićenim prirodnim parkovima poput
                Biokova.
              </p>
              <div className="content-link">
                <p>Vidi detalje</p>
                <img
                  className="content-arrow-icon-link"
                  src={ArrowIcon}
                  style={{ width: 24, height: 24 }}
                  alt="Arrow Icon"
                />
              </div>
            </div>
            <img
              className="regijeFull-img"
              src="https://s3-alpha-sig.figma.com/img/944c/19f7/29fdd0a7b2eb500267161427daa277a3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P~4ujR1Yq9gqAGnCYiRkWq76Jzed0p4BYX~VpP5a5CG3rAUxv6uCoYmKnksWos1bhPPf-KaHqn6WP8-hbMLTP8Z1WF0~but0U1-IpFuwU3WfkWDy4Q8GyCWEgn-RErYOkHCEnml5sSrsKRrB3fJqwIMybxQA-yn0izS0Y2Yu1JBPApDIFoTnZ-UAB6~mAzGqsfMcwSKuFgaUjQi52vj3NPM94luKawWdxntUi8IJLo8AyWrjAIElwKE3y6E6v5X9wBsEYmfmILFQkHsAtN5vOZ668XSkr06O59FNPmqXOE1HSzU1wrGOe30Vg6qwBvOtZ~nHpIt4x-SKk1OqT4UvZw__"
            />
          </div>

          <div className="rightcro-mobile">
            <img
              className="regijeFull-img"
              src="https://s3-alpha-sig.figma.com/img/944c/19f7/29fdd0a7b2eb500267161427daa277a3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P~4ujR1Yq9gqAGnCYiRkWq76Jzed0p4BYX~VpP5a5CG3rAUxv6uCoYmKnksWos1bhPPf-KaHqn6WP8-hbMLTP8Z1WF0~but0U1-IpFuwU3WfkWDy4Q8GyCWEgn-RErYOkHCEnml5sSrsKRrB3fJqwIMybxQA-yn0izS0Y2Yu1JBPApDIFoTnZ-UAB6~mAzGqsfMcwSKuFgaUjQi52vj3NPM94luKawWdxntUi8IJLo8AyWrjAIElwKE3y6E6v5X9wBsEYmfmILFQkHsAtN5vOZ668XSkr06O59FNPmqXOE1HSzU1wrGOe30Vg6qwBvOtZ~nHpIt4x-SKk1OqT4UvZw__"
              alt="Središnja Dalmacija"
            />
            <div className="content">
              <p className="content-title">Središnja Dalmacija</p>
              <p className="content-text">
                Središnja Dalmacija je regija u Hrvatskoj koja se proteže od
                Splita do Makarske i uključuje neke od najpoznatijih turističkih
                destinacija na Jadranu. Ova regija privlači posjetitelje iz
                cijelog svijeta zbog svoje prirodne ljepote, bogate kulturne
                baštine i raznih aktivnosti koje nudi. Poznata po svojoj bogatoj
                kulturnoj baštini te zaštićenim prirodnim parkovima poput
                Biokova.
              </p>
              <div className="content-link">
                <p>Vidi detalje</p>
                <img
                  className="content-arrow-icon-link"
                  src={ArrowIcon}
                  style={{ width: 24, height: 24 }}
                  alt="Arrow Icon"
                />
              </div>
            </div>
          </div>

          <div className="leftcro">
            <img
              className="regijeFull-img"
              src="https://s3-alpha-sig.figma.com/img/5ef3/0f01/64000b85161263fcc69433ea6472509d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gzHoXlzprHSYFtnDkbGYqt8MOijh1R4OTvcE3wL3B-mNdvvDQpQHZJLI2Rv7cisKFh-JlcsCJV8QtFoOVcuvkGgYxoUntiWNRPTkq50NNLDtk1QvxOCi0fUHuExwWS8r5q-2zg6D2Iey5SRg-wY8TFSA4XBsrSEwpxK0yuA7tLDnqQWgvkiomBUE7hj~8je9Y4hBbTSsBmmOOJuT3t~Rw3S1RLx2xnCGPyJW6yx30Dz6Af59cGwNvFMj~HutjHl0bgquD-wHTlVpIDgwJeHIDzTqu8JBScysHenk2xs5tZU98yc~xZRd6Vp7BL-f2CC0m4ejKt2t7jj0yrPYUwdcFg__"
              alt="Južna Dalmacija"
            />

            <div className="content">
              <p className="content-title">Južna Dalmacija</p>
              <p className="content-text">
                Južna Dalmacija također nudi prekrasne plaže, skrivene uvale,
                kristalno čisto more i brojne aktivnosti na otvorenom, poput
                jedrenja, ronjenja i planinarenja. Uz to, regija je poznata po
                svojoj bogatoj gastronomskoj ponudi, koja uključuje razne
                specijalitete poput ribe i plodova mora, domaćih sireva,
                maslinovog ulja i vrhunskih vina.
              </p>
              <div className="content-link">
                <p>Vidi detalje</p>
                <img
                  className="content-arrow-icon-link"
                  src={ArrowIcon}
                  style={{ width: 24, height: 24 }}
                  alt="Arrow Icon"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RegijeFull;
