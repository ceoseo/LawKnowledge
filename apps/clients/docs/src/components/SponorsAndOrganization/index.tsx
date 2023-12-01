import React from 'react';
import Link from '@docusaurus/Link';
import SectionLayout from '../SectionLayout';

type Sponor = {
  id: number;
  url: string;
  logo?: string;
  name: string;
};

const SponorList: Sponor[] = [
  {
    id: 1,
    url: 'https://hutech.edu.vn/',
    logo: '/LawKnowledge/img/organization/hutech.png',
    name: 'Ho Chi Minh City University of Technology and Education',
  },
  {
    id: 2,
    url: 'https://vfossa.vn/',
    logo: '/LawKnowledge/img/organization/vfossa.png',
    name: 'Vietnam Free and Open Source Software Association',
  },
  {
    id: 3,
    url: 'http://olp.husc.edu.vn/',
    logo: '/LawKnowledge/img/organization/icpc.jpg',
    name: 'International Collegiate Programming Contest',
  },
  {
    id: 4,
    url: 'http://husc.hueuni.edu.vn/',
    logo: '/LawKnowledge/img/organization/husc.jpg',
    name: 'Hue University of Sciences',
  },
];

export default function SponorSection() {
  return (
    <SectionLayout
      title="Sponors and Organization"
      className={['bg-white']}
      titleClassName={['text-[#444950]']}
    >
      <div className="row justify-center gap-[5px]">
        {SponorList.map((props) => (
          <div className="col col--4" key={props.id}>
            <div className="col-demo text--center">
              <div className="items-center justify-center lex ">
                <Link href={props.url} target="_blank">
                  <img
                    loading="lazy"
                    src={props.logo}
                    alt={props.name}
                    height={100}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
