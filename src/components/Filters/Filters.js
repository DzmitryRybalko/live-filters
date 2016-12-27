import React from 'react';

import './Filters.scss';
import Donut from '../Donut';
import { FilterHeader, FilterBody } from '../FIlter';


class Filters extends React.Component {

  render() {
    return (
      <div className="filters">
        <FilterHeader id="1" name="Codepen" checked />
        <FilterHeader id="2" name="Dribbble" />
        <FilterHeader id="3" name="Dropbox" />
        <FilterHeader id="4" name="Drupal" />

        <FilterBody id="1">A</FilterBody>
        <FilterBody id="2">B</FilterBody>
        <FilterBody id="3">C</FilterBody>
        <FilterBody id="4">D</FilterBody>


        {
          /* <input id="tab1" type="radio" name="tabs" defaultChecked />
          <label htmlFor="tab1">Codepen</label>

          <input id="tab2" type="radio" name="tabs" />
          <label htmlFor="tab2">Dribbble</label>

          <input id="tab3" type="radio" name="tabs" />
          <label htmlFor="tab3">Dropbox</label>

          <input id="tab4" type="radio" name="tabs" />
          <label htmlFor="tab4">Drupal</label>

          <section id="content1">
            <p>
              Bacon ipsum dolor sit amet beef venison beef ribs kielbasa.
            Sausage pig leberkas, t-bone sirloin shoulder bresaola.
            Frankfurter rump porchetta ham. Pork belly prosciutto brisket
              meatloaf short ribs.
            </p>
            <p>
              Brisket meatball turkey short loin boudin leberkas meatloaf
              chuck andouille pork loin pastrami spare ribs pancetta rump.
              Frankfurter corned beef beef tenderloin short loin meatloaf
              swine ground round venison.
            </p>
          </section>

          <section id="content2">
            <p>
              Bacon ipsum dolor sit amet landjaeger sausage brisket,
              jerky drumstick fatback boudin ball tip turducken.
            Pork belly meatball t-bone bresaola tail filet mignon kevin
              turkey ribeye shank flank doner cow kielbasa shankle.
            Pig swine chicken hamburger, tenderloin turkey rump ball
            tip sirloin frankfurter meatloaf boudin brisket ham hock.
            Hamburger venison brisket tri-tip andouille pork belly ball
              tip short ribs biltong meatball chuck. Pork chop ribeye tail
              short ribs, beef hamburger meatball kielbasa rump corned beef
                porchetta landjaeger flank. Doner rump frankfurter meatball meatloaf,
                cow kevin pork pork loin venison fatback spare ribs salami beef ribs.
            </p>
            <p>
              Jerky jowl pork chop tongue, kielbasa shank venison. Capicola
              shank pig ribeye leberkas filet mignon brisket beef kevin
              tenderloin porchetta. Capicola fatback venison shank kielbasa,
              drumstick ribeye landjaeger beef kevin tail meatball pastrami
              prosciutto pancetta. Tail kevin spare ribs ground round ham ham
            hock brisket shoulder. Corned beef tri-tip leberkas flank sausage
            ham hock filet mignon beef ribs pancetta turkey.
            </p>
          </section>

          <section id="content3">
            <p>
              Bacon ipsum dolor sit amet beef venison beef ribs kielbasa.
              Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter
            rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
            </p>
            <p>
              Brisket meatball turkey short loin boudin leberkas meatloaf chuck
            andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned
              beef beef tenderloin short loin meatloaf swine ground round venison.
            </p>
          </section>

          <section id="content4">
            <p>
              Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback
              boudin ball tip turducken. Pork belly meatball t-bone bresaola tail filet
            kevin turkey ribeye shank flank doner cow kielbasa shankle. Pig swine chicken hamburger,
              tenderloin turkey rump ball tip sirloin frankfurter meatloaf boudin brisket ham hock.
            Hamburger venison brisket tri-tip andouille pork belly ball tip short ribs biltong
            meatball chuck. Pork chop ribeye tail short ribs, beef hamburger meatball kielbasa
            rump corned beef porchetta landjaeger flank. Doner rump frankfurter meatball meatloaf,
              cow kevin pork pork loin venison fatback spare ribs salami beef ribs.
            </p>
            <p>
              Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank pig ribeye leberkas
              filet mignon brisket beef kevin tenderloin porchetta. Capicola fatback venison shank
              kielbasa, drumstick ribeye landjaeger beef kevin tail meatball pastrami prosciutto
              pancetta. Tail kevin spare ribs ground round ham ham hock brisket shoulder.
              Corned beef tri-tip leberkas flank sausage ham hock filet mignon beef
            ribs pancetta turkey.
            </p>
          </section> */
        }

        <Donut percent={150} />
      </div>
    );
  }
}

export default Filters;
