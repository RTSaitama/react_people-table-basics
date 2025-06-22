import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../../types';

type PersonLinkProps = {
  person: Person;
};

export const PersonLink: FC<PersonLinkProps> = ({ person }) => (
  <Link
    to={`/people/${person.slug}`}
    className={person.sex === 'f' ? 'has-text-danger' : ''}
  >
    {person.name}
  </Link>
);

type RelativeLinkProps = {
  name: string | null;
  people: Person[];
};

const DEFAULT = '-';

export const MotherLink: FC<RelativeLinkProps> = ({ name, people }) => {
  if (!name) {
    return DEFAULT;
  }

  const mother = people.find(p => p.name.toLowerCase() === name?.toLowerCase());

  return mother ? <PersonLink person={mother} /> : name;
};

export const FatherLink: FC<RelativeLinkProps> = ({ name, people }) => {
  if (!name) {
    return DEFAULT;
  }

  const father = people.find(p => p.name.toLowerCase() === name?.toLowerCase());

  return father ? <PersonLink person={father} /> : name;
};
