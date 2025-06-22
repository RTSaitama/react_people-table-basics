import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../../types';

type PersonLinkProps = {
  person: Person;
  onClick?: (person: Person) => void;
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
  onClick: (person: Person) => void;
};

export const MotherLink: FC<RelativeLinkProps> = ({
  name,
  people,
  onClick,
}) => {
  const mother = people.find(p => p.name === name);

  return mother ? <PersonLink person={mother} onClick={onClick} /> : '-';
};

export const FatherLink: FC<RelativeLinkProps> = ({
  name,
  people,
  onClick,
}) => {
  const father = people.find(p => p.name === name);

  return father ? <PersonLink person={father} onClick={onClick} /> : '-';
};
